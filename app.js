// Service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
}

// A2HS
let deferredPrompt;
const installBtn = document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.classList.remove('hidden');
});
installBtn?.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.classList.add('hidden');
});

// State
const state = {
  data: null,
  track: localStorage.getItem('track') || 'git',
  done: JSON.parse(localStorage.getItem('done') || '{}'),
  quiz: JSON.parse(localStorage.getItem('quiz') || '{}'),
  streak: JSON.parse(localStorage.getItem('streak') || '{"count":0,"last":""}'),
  missed: JSON.parse(localStorage.getItem('missedQuestions') || '[]') // [{track, day, item}]
};

const $track = document.getElementById('track');
const $list  = document.getElementById('dayList');
const $bar   = document.getElementById('progressBar');
const $txt   = document.getElementById('progressText');
const $streak= document.getElementById('streakCount');

// Quiz modal
const $quizModal = document.getElementById('quizModal');
const $quizTitle = document.getElementById('quizTitle');
const $quizBody  = document.getElementById('quizBody');
const $submitQuiz= document.getElementById('submitQuiz');
const $closeQuiz = document.getElementById('closeQuiz');

let currentQuiz = null; // {track, day, taskIdx, item}

// Timed Quiz Support
let quizTimer = null;
let quizRemaining = 0;
function startQuizTimer(seconds){
  clearInterval(quizTimer);
  quizRemaining = seconds;
  const $chip = document.getElementById('timerChip');
  const $txtT  = document.getElementById('timerText');
  const updateFace = () => {
    if (!$chip || !$txtT) return;
    $chip.classList.remove('low','critical');
    if (quizRemaining <= 15) $chip.classList.add('critical');
    else if (quizRemaining <= 30) $chip.classList.add('low');
    $txtT.textContent = `${quizRemaining}s remaining`;
  };
  updateFace();
  quizTimer = setInterval(() => {
    quizRemaining -= 1;
    updateFace();
    if (quizRemaining <= 0){
      clearInterval(quizTimer);
      const item = currentQuiz.item;
      let picked = collectChoice(item);
      if ((Array.isArray(picked) && picked.length===0) || picked === null) {
        picked = isMulti(item) ? [] : -1;
      }
      submitQuizChoice_v7(picked, /*fromTimer*/ true);
    }
  }, 1000);
}
function stopQuizTimer(){ clearInterval(quizTimer); quizTimer = null; }

// Load curriculum with optional local override
function loadCurriculum() {
  const override = localStorage.getItem('dataOverride');
  if (override) {
    try { return Promise.resolve(JSON.parse(override)); }
    catch(e){ console.warn('Invalid local override, using network.', e); }
  }
  return fetch('./data.json').then(r => r.json());
}

$track.addEventListener('change', () => {
  state.track = $track.value;
  localStorage.setItem('track', state.track);
  render();
});

document.getElementById('resetTrack').addEventListener('click', () => {
  if (confirm('Reset progress for this track?')) {
    const done = JSON.parse(localStorage.getItem('done') || '{}');
    done[state.track] = {};
    localStorage.setItem('done', JSON.stringify(done));
    const quiz = JSON.parse(localStorage.getItem('quiz') || '{}');
    quiz[state.track] = {};
    localStorage.setItem('quiz', JSON.stringify(quiz));
    render();
  }
});

// Review Mode
document.getElementById('reviewMode').addEventListener('click', () => {
  const missed = JSON.parse(localStorage.getItem('missedQuestions') || '[]');
  if (!missed.length) { alert('No missed questions yet!'); return; }
  $list.innerHTML = '<h2>Review Missed Questions</h2>' + missed.map((m,i)=>{
    const item = m.item;
    const opts = item.options.map((o,idx)=>{
      let mark = '';
      if (item.answerIndex !== undefined && idx === item.answerIndex) mark = ' ✅';
      if (item.answerIndices && item.answerIndices.includes(idx)) mark = ' ✅';
      return `<li>${o}${mark}</li>`;
    }).join('');
    return `<div class='review-item'><strong>${m.track.toUpperCase()} Day ${m.day}</strong><p>${item.question}</p><ul>${opts}</ul><small>${item.explanation||''}</small></div>`;
  }).join('');
});

function render() {
  const days = state.data.tracks[state.track];
  $list.innerHTML = '';
  const done = JSON.parse(localStorage.getItem('done') || '{}')[state.track] || {};
  const quiz = JSON.parse(localStorage.getItem('quiz') || '{}')[state.track] || {};
  let totalTasks = 0, completed = 0;

  days.forEach((day) => {
    const div = document.createElement('div');
    div.className = 'day';
    const dayDone = new Set(done[day.day] || []);
    const tasks = day.tasks || [];
    totalTasks += tasks.length;

    const goals = (day.goals || []).map(g => `<li>${g}</li>`).join('');
    const tasksHtml = tasks.map((t, i) => {
      const isQuiz = t.type === 'quiz' || t.type === 'quizpool';
      const isChallenge = t.type === 'challenge';
      const classes = ['check'];
      if (isQuiz) classes.push('quiz');
      if (isChallenge) classes.push('challenge');
      const checked = dayDone.has(i) || (isQuiz && quiz[day.day]?.passed);
      if (checked) completed++;
      return `
      <div class="task">
        <div class="${classes.join(' ')} ${checked ? 'done' : ''}" data-day="${day.day}" data-idx="${i}" data-type="${t.type}">
          ${checked ? '✓' : ''}
        </div>
        <div>
          <div class="meta">${t.type.toUpperCase()}${isChallenge ? ' • PR-style' : ''}</div>
          <div>${t.text || (isQuiz ? 'Open quiz' : '')}</div>
          ${isQuiz && quiz[day.day]?.passed ? `<div class="meta">Quiz passed ✅ (pool item: ${quiz[day.day]?.itemId || 'n/a'})</div>` : ''}
          ${isChallenge && !checked ? `<div class="meta">Mark complete after you finish.</div>` : ''}
        </div>
      </div>`;
    }).join('');

    div.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center">
        <h3>Day ${day.day}: ${day.title}</h3>
        <span class="badge">${state.track.toUpperCase()}</span>
      </div>
      <div class="meta">${(tasks.length ? (dayDone.size + (quiz[day.day]?.passed ? 1 : 0)) : 0)}/${tasks.length} tasks complete · Quiz pool: ${(() => { const qp = (day.tasks||[]).find(t=>t.type==='quizpool'); return qp ? qp.items.length : ((day.tasks||[]).some(t=>t.type==='quiz') ? 1 : 0); })()} item(s)</div>
      <strong>Goals</strong>
      <ul class="goals">${goals}</ul>
      <strong>Tasks</strong>
      <div class="tasks">${tasksHtml || '<div class="meta">No tasks</div>'}</div>
    `;

    $list.appendChild(div);
  });

  // Click handlers for checks & quizzes
  $list.querySelectorAll('.check').forEach(el => {
    el.addEventListener('click', () => {
      const day = parseInt(el.getAttribute('data-day'),10);
      const idx = parseInt(el.getAttribute('data-idx'), 10);
      const type = el.getAttribute('data-type');

      if (type === 'quiz' || type === 'quizpool') {
        openQuiz(day, idx);
        return;
      }

      const saved = JSON.parse(localStorage.getItem('done') || '{}');
      saved[state.track] = saved[state.track] || {};
      const set = new Set(saved[state.track][day] || []);
      if (set.has(idx)) set.delete(idx); else set.add(idx);
      saved[state.track][day] = Array.from(set);
      localStorage.setItem('done', JSON.stringify(saved));
      bumpStreakIfToday();
      render();
    });
  });

  // progress
  const percent = totalTasks ? Math.round((completed/totalTasks)*100) : 0;
  $bar.style.width = percent + '%';
  $txt.textContent = percent + '% complete';

  // streak
  $streak.textContent = (JSON.parse(localStorage.getItem('streak')||'{}').count)||0;
}

// Helpers for quizzes
function pickQuizItem(task){
  if (task.type === 'quizpool' && Array.isArray(task.items) && task.items.length){
    const idx = Math.floor(Math.random() * task.items.length);
    return task.items[idx];
  }
  return task;
}
function isMulti(item){ return item.mode === 'multi' || Array.isArray(item.answerIndices); }
function collectChoice(item){
  if (isMulti(item)){
    const boxes = Array.from($quizBody.querySelectorAll('input[name="quizopt"]'));
    return boxes.filter(b=>b.checked).map(b=>parseInt(b.value,10)).sort((a,b)=>a-b);
  } else {
    const radios = $quizBody.querySelectorAll('input[name="quizopt"]');
    let choice = null; radios.forEach(r=>{ if(r.checked) choice = parseInt(r.value,10); });
    return choice;
  }
}
function correctChoice(item, choice){
  if (isMulti(item)){
    const ans = (item.answerIndices||[]).slice().sort((a,b)=>a-b);
    return JSON.stringify(ans) === JSON.stringify(choice||[]);
  } else {
    return choice === item.answerIndex;
  }
}
function paintAnswers(item, choice){
  const nodes = $quizBody.querySelectorAll('.quiz-option');
  if (isMulti(item)){
    const ans = new Set(item.answerIndices||[]);
    nodes.forEach((el,i)=>{
      if (ans.has(i)) el.classList.add('correct');
      if (Array.isArray(choice) && choice.includes(i) && !ans.has(i)) el.classList.add('wrong');
    });
  } else {
    nodes.forEach((el,i)=>{
      if (i === item.answerIndex) el.classList.add('correct');
      if (i === choice && i !== item.answerIndex) el.classList.add('wrong');
    });
  }
}

function openQuiz(day, taskIdx) {
  const dayObj = state.data.tracks[state.track].find(d => d.day === day);
  const task = dayObj.tasks[taskIdx];
  const item = pickQuizItem(task);
  currentQuiz = {track: state.track, day, taskIdx, item};
  $quizTitle.textContent = `Day ${day} Quiz`;
  $quizBody.innerHTML = `
    <div class="timer-chip" id="timerChip"><span class="dot"></span><span id="timerText"></span></div>
    <p>${item.question}</p>
    ${item.options.map((opt, i) => `
      <label class="quiz-option"><input type="${isMulti(item) ? 'checkbox' : 'radio'}" name="quizopt" value="${i}"> <span>${opt}</span></label>
    `).join('')}
    <div class="meta">Choose ${isMulti(item) ? 'all that apply' : 'one'}. Time limit: ${item.timeLimitSeconds || 90}s</div>
  `;
  $quizModal.classList.remove('hidden');
  startQuizTimer(item.timeLimitSeconds || 90);
}

$closeQuiz.addEventListener('click', () => { stopQuizTimer(); $quizModal.classList.add('hidden'); currentQuiz = null; });

function saveMissed(item){
  const miss = JSON.parse(localStorage.getItem('missedQuestions') || '[]');
  miss.push({track: currentQuiz.track, day: currentQuiz.day, item});
  localStorage.setItem('missedQuestions', JSON.stringify(miss));
}

function submitQuizChoice_v7(choice, fromTimer=false){
  const item = currentQuiz.item;
  paintAnswers(item, choice);
  const passed = correctChoice(item, choice);
  const quiz = JSON.parse(localStorage.getItem('quiz') || '{}');
  quiz[currentQuiz.track] = quiz[currentQuiz.track] || {};
  quiz[currentQuiz.track][currentQuiz.day] = {passed, choice, itemId: item.id||null, timeExpired: fromTimer && !passed};
  localStorage.setItem('quiz', JSON.stringify(quiz));
  stopQuizTimer();
  if (passed) {
    alert('Correct!' + (item.explanation ? ('\n'+item.explanation) : ''));
    bumpStreakIfToday();
    setTimeout(()=>{ $quizModal.classList.add('hidden'); render(); }, 650);
  } else {
    saveMissed(item);
    alert((fromTimer ? 'Time up!\n' : '') + 'Not quite.' + (item.explanation ? ('\n'+item.explanation) : ''));
  }
}

$submitQuiz.addEventListener('click', () => {
  if (!currentQuiz) return;
  const item = currentQuiz.item;
  let choice = collectChoice(item);
  if (isMulti(item)) {
    if (!Array.isArray(choice) || choice.length === 0) { alert('Select one or more answers'); return; }
  } else {
    if (choice === null) { alert('Select an answer'); return; }
  }
  submitQuizChoice_v7(choice);
});

// Streaks
function todayYMD() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth()+1).padStart(2,'0');
  const d = String(now.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}
function isYesterday(last) {
  if (!last) return false;
  const [y,m,d] = last.split('-').map(n=>parseInt(n,10));
  const dt = new Date(y, m-1, d);
  const yest = new Date(); yest.setDate(yest.getDate()-1);
  return dt.getFullYear()===yest.getFullYear() && dt.getMonth()===yest.getMonth() && dt.getDate()===yest.getDate();
}
function bumpStreakIfToday() {
  const s = JSON.parse(localStorage.getItem('streak') || '{"count":0,"last":""}');
  const t = todayYMD();
  if (s.last === t) return;
  if (isYesterday(s.last)) s.count = (s.count||0) + 1;
  else s.count = Math.max(1, s.count||0);
  s.last = t;
  localStorage.setItem('streak', JSON.stringify(s));
  document.getElementById('streakCount').textContent = s.count;
}

// Init
loadCurriculum().then(d => { state.data = d; $track.value = state.track; render(); });
(function initStreak(){ const s = JSON.parse(localStorage.getItem('streak') || '{"count":0,"last":""}'); $streak.textContent = s.count || 0; })();

// ===== Editor wiring =====
const $editorModal = document.getElementById('editorModal');
const $editorArea  = document.getElementById('editorArea');
const $editBtn     = document.getElementById('editCurriculum');
const $saveJson    = document.getElementById('saveJson');
const $closeEditor = document.getElementById('closeEditor');
const $downloadJson= document.getElementById('downloadJson');
const $prettyPrint = document.getElementById('prettyPrint');
const $importFile  = document.getElementById('importFile');
const $resetServer = document.getElementById('resetServer');

$editBtn.addEventListener('click', async () => {
  const current = localStorage.getItem('dataOverride');
  if (current) $editorArea.value = current;
  else $editorArea.value = await fetch('./data.json').then(r=>r.text());
  $editorModal.classList.remove('hidden');
});
$closeEditor.addEventListener('click', () => $editorModal.classList.add('hidden'));
$prettyPrint.addEventListener('click', () => {
  try { $editorArea.value = JSON.stringify(JSON.parse($editorArea.value), null, 2); }
  catch(e){ alert('JSON error: ' + e.message); }
});
$saveJson.addEventListener('click', () => {
  try {
    const parsed = JSON.parse($editorArea.value);
    localStorage.setItem('dataOverride', JSON.stringify(parsed));
    alert('Saved on this device. Reloading…');
    window.location.reload();
  } catch(e) {
    alert('JSON error: ' + e.message);
  }
});
$downloadJson.addEventListener('click', () => {
  let text = $editorArea.value;
  try { JSON.parse(text); } catch(e){ alert('Fix JSON before download: '+e.message); return; }
  const blob = new Blob([text], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'data.json'; a.click(); URL.revokeObjectURL(url);
});
$importFile.addEventListener('change', async (ev) => {
  const file = ev.target.files?.[0]; if (!file) return;
  const text = await file.text();
  try { JSON.parse(text); $editorArea.value = text; } catch(e){ alert('Import JSON is invalid: ' + e.message); }
});
$resetServer.addEventListener('click', () => {
  if (confirm('Clear local curriculum override and reload from server?')) {
    localStorage.removeItem('dataOverride');
    alert('Local override cleared. Reloading…');
    window.location.reload();
  }
});

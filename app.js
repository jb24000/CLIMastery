
// Content data shaped to match the Python layout: two items per day.
const TRACKS = {
  git: [
    { title: "Day 1: Git Setup & First Commit",
      items: [
        { label: "Install & configure Git", badge: "🔧 Setup", time: "Morning (30min)",
          details: "Install Git, set your name/email, init a repo and make your first commit." },
        { label: "Commit workflow practice", badge: "🗃️ Commits", time: "Evening (30min)",
          details: "Stage changes, write messages, and inspect history with git log." }
      ]
    },
    { title: "Day 2: Branching & Merging",
      items: [
        { label: "Create and switch branches", badge: "🌿 Branches", time: "Morning (30min)",
          details: "Use git branch / switch and merge into main with clear messages." },
        { label: "Resolve a merge conflict", badge: "🧩 Conflicts", time: "Evening (30min)",
          details: "Intentionally create a conflict and resolve it cleanly." }
      ]
    }
  ],
  bash: [
    { title: "Day 1: Navigation & Files",
      items: [
        { label: "Master ls, cd, pwd", badge: "📁 Navigation", time: "Morning (30min)",
          details: "Create a practice folder and explore flags like -la." },
        { label: "Redirection & pipes", badge: "🔗 Pipes", time: "Evening (30min)",
          details: "Practice >, >>, 2>, and | with common tools." }
      ]
    },
    { title: "Day 2: Shell Customization",
      items: [
        { label: "Customize your prompt", badge: "🎨 PS1", time: "Morning (30min)",
          details: "Show user@host:path and a git branch segment." },
        { label: "Aliases & functions", badge: "⚡ Speed", time: "Evening (30min)",
          details: "Add 3 aliases and 1 function to ~/.bashrc and source it." }
      ]
    }
  ],
  linux: [
    { title: "Day 1: Packages & Permissions",
      items: [
        { label: "Install a CLI tool", badge: "📦 Packages", time: "Morning (30min)",
          details: "Use apt, yum, or dnf to install a new tool like htop." },
        { label: "chmod/chown practice", badge: "🔐 Perms", time: "Evening (30min)",
          details: "Create a file and experiment with rwx bits safely." }
      ]
    },
    { title: "Day 2: Processes & Services",
      items: [
        { label: "Inspect processes", badge: "🧠 ps/top", time: "Morning (30min)",
          details: "Use ps aux, top/htop, and kill safely." },
        { label: "systemd basics", badge: "🛠️ systemctl", time: "Evening (30min)",
          details: "Enable/disable and check status of a simple service." }
      ]
    }
  ]
};

// Expand each track to 30 days by repeating patterns (you can replace later)
for (const k of Object.keys(TRACKS)) {
  const base = TRACKS[k];
  while (TRACKS[k].length < 30) {
    const n = TRACKS[k].length + 1;
    TRACKS[k].push({
      title: `Day ${n}: Practice & Review`,
      items: [
        { label: "Skill drill", badge: "🧪 Practice", time: "Morning (30min)", details: "Repeat core commands and write notes." },
        { label: "Mini project", badge: "📓 Project", time: "Evening (30min)", details: "Apply today's topic to a tiny project." }
      ]
    });
  }
}

let track = localStorage.getItem("cli.track") || "git";
let day = Number(localStorage.getItem("cli.day") || 1);
let checks = JSON.parse(localStorage.getItem("cli.checks") || "{}"); // key `${track}-${day}-${i}` -> bool
let streak = Number(localStorage.getItem("cli.streak") || 0);
let lastDayCompleted = Number(localStorage.getItem("cli.lastDone") || 0);

const elTrack = document.getElementById("trackSelect");
const ringFill = document.getElementById("ringFill");
const ringText = document.getElementById("ringText");
const streakEl = document.getElementById("streak");
const completedEl = document.getElementById("completed");
const dayTitle = document.getElementById("dayTitle");
const taskList = document.getElementById("taskList");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const enableNotifs = document.getElementById("enableNotifs");
const resetBtn = document.getElementById("resetBtn");
const installBtn = document.getElementById("installBtn");
const offlineBtn = document.getElementById("offlineBtn");
const statusDot = document.getElementById("statusDot");
const statusText = document.getElementById("statusText");

elTrack.value = track;

function renderProgress(){
  const total = 30 * 2; // two items per day
  const done = Object.values(checks).filter(Boolean).length;
  const pct = Math.round((done/total)*100);
  ringFill.style.background = `conic-gradient(var(--accent) ${pct*3.6}deg, rgba(255,255,255,.15) 0deg)`;
  ringText.textContent = pct + "%";
  completedEl.textContent = Math.floor(done/2);
}

function renderDay(){
  const d = TRACKS[track][day-1];
  dayTitle.textContent = d.title;
  taskList.innerHTML = d.items.map((it, i) => {
    const key = `${track}-${day}-${i}`;
    const checked = !!checks[key];
    return `
      <li class="task">
        <div class="dot ${checked ? "checked":""}" data-idx="${i}">${checked ? "✓":""}</div>
        <div class="content">
          <h4>${it.label}</h4>
          <div class="meta">
            <span class="badge">${it.badge}</span>
            <span class="time">${it.time}</span>
          </div>
          <p class="desc">${it.details}</p>
        </div>
      </li>
    `;
  }).join("");
  // wire up dots
  document.querySelectorAll(".task .dot").forEach(dot => {
    dot.addEventListener("click", () => {
      const i = Number(dot.dataset.idx);
      const key = `${track}-${day}-${i}`;
      checks[key] = !checks[key];
      localStorage.setItem("cli.checks", JSON.stringify(checks));
      // streak logic (simple optimistic)
      if (checks[key]) {
        const today = day;
        if (lastDayCompleted === today-1) streak += 1;
        if (lastDayCompleted < today) lastDayCompleted = today;
        localStorage.setItem("cli.streak", String(streak));
        localStorage.setItem("cli.lastDone", String(lastDayCompleted));
      }
      renderDay();
      renderProgress();
      streakEl.textContent = String(streak);
    });
  });
}

prevBtn.addEventListener("click", ()=> { day = Math.max(1, day-1); localStorage.setItem("cli.day", String(day)); renderDay(); });
nextBtn.addEventListener("click", ()=> { day = Math.min(30, day+1); localStorage.setItem("cli.day", String(day)); renderDay(); });
elTrack.addEventListener("change", ()=> { track = elTrack.value; localStorage.setItem("cli.track", track); renderDay(); renderProgress(); });

resetBtn.addEventListener("click", ()=>{
  checks = {}; streak = 0; lastDayCompleted = 0;
  localStorage.removeItem("cli.checks");
  localStorage.setItem("cli.streak","0");
  localStorage.setItem("cli.lastDone","0");
  renderDay(); renderProgress(); streakEl.textContent = "0"; completedEl.textContent = "0";
});

// Notifications (best effort demo)
enableNotifs.addEventListener("click", async ()=>{
  try{
    const perm = await Notification.requestPermission();
    if(perm === "granted"){
      new Notification("CLI 30‑Day Mastery", { body: "Daily reminder enabled!" });
      enableNotifs.textContent = "Alerts Enabled";
    }
  }catch(e){ console.warn(e); }
});

// PWA install + offline
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e)=>{ e.preventDefault(); deferredPrompt = e; installBtn.style.display='inline-block'; });
installBtn.addEventListener('click', async ()=>{
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.disabled = true;
  installBtn.textContent = 'Installed';
});

offlineBtn.addEventListener('click', async ()=>{
  try{
    const reg = await navigator.serviceWorker.register('./service-worker.js');
    if(reg){
      statusDot.classList.remove('offline'); statusDot.classList.add('online');
      statusText.textContent = 'Offline enabled';
    }
  }catch(e){ console.error(e); }
});

// init
renderDay();
renderProgress();
streakEl.textContent = String(streak);


const TRACKS = {
  "git": [
    {
      "title": "Day 1: Install & Configure",
      "items": [
        {
          "label": "Install Git + set identity",
          "badge": "\ud83d\udd27 Setup",
          "time": "Morning (30m)",
          "details": "Install Git; set user.name/email; default branch; basic comfort.",
          "links": [
            {
              "label": "Pro Git (book)",
              "href": "https://git-scm.com/book/en/v2"
            },
            {
              "label": "Git Docs",
              "href": "https://git-scm.com/docs"
            }
          ],
          "learn": "Concepts: Install Git; set user.name/email; default branch; basic comfort.",
          "do": "Hands\u2011on: Install Git; set user.name/email; default branch; basic comfort.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Create first repo & commit",
          "badge": "\ud83d\uddc3\ufe0f First Commit",
          "time": "Evening (30m)",
          "details": "git init; add README; first commit; message discipline.",
          "links": [
            {
              "label": "Git Docs",
              "href": "https://git-scm.com/docs"
            }
          ],
          "learn": "Concepts: git init; add README; first commit; message discipline.",
          "do": "Hands\u2011on: git init; add README; first commit; message discipline.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Install Git + set identity and Create first repo & commit; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 2: Ignoring & Logging",
      "items": [
        {
          "label": "Create .gitignore",
          "badge": "\ud83e\uddf9 Ignore",
          "time": "Morning (30m)",
          "details": "Language-specific patterns; verify with status.",
          "links": [
            {
              "label": "Git Docs",
              "href": "https://git-scm.com/docs"
            }
          ],
          "learn": "Concepts: Language-specific patterns; verify with status.",
          "do": "Hands\u2011on: Language-specific patterns; verify with status.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Inspect history",
          "badge": "\ud83d\udd70\ufe0f Log",
          "time": "Evening (30m)",
          "details": "git log --oneline --graph --decorate; show; diff.",
          "links": [
            {
              "label": "Git Docs",
              "href": "https://git-scm.com/docs"
            }
          ],
          "learn": "Concepts: git log --oneline --graph --decorate; show; diff.",
          "do": "Hands\u2011on: git log --oneline --graph --decorate; show; diff.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Create .gitignore and Inspect history; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 3: Branching Basics",
      "items": [
        {
          "label": "Create/switch branches",
          "badge": "\ud83c\udf3f Branches",
          "time": "Morning (30m)",
          "details": "git switch -c feature; commit twice.",
          "links": [
            {
              "label": "Pro Git (book)",
              "href": "https://git-scm.com/book/en/v2"
            }
          ],
          "learn": "Concepts: git switch -c feature; commit twice.",
          "do": "Hands\u2011on: git switch -c feature; commit twice.",
          "aws": "Keeps IaC/app repos deployable across multiple AWS environments through clean branching and sync."
        },
        {
          "label": "Merge vs fast-forward",
          "badge": "\ud83d\udd00 Merge",
          "time": "Evening (30m)",
          "details": "Practice merge with --no-ff to preserve history.",
          "links": [
            {
              "label": "Pro Git (book)",
              "href": "https://git-scm.com/book/en/v2"
            }
          ],
          "learn": "Concepts: Practice merge with --no-ff to preserve history.",
          "do": "Hands\u2011on: Practice merge with --no-ff to preserve history.",
          "aws": "Keeps IaC/app repos deployable across multiple AWS environments through clean branching and sync."
        }
      ],
      "resume": "Delivered: Create/switch branches and Merge vs fast-forward; validated via hands\u2011on tasks. Applied in AWS: Keeps IaC/app repos deployable across multiple AWS environments through clean branching and sync."
    },
    {
      "title": "Day 4: Conflicts & Recovery",
      "items": [
        {
          "label": "Create/resolve a conflict",
          "badge": "\ud83e\udde9 Conflict",
          "time": "Morning (30m)",
          "details": "Edit same line; merge; resolve; commit.",
          "links": [
            {
              "label": "Pro Git (book)",
              "href": "https://git-scm.com/book/en/v2"
            }
          ],
          "learn": "Concepts: Edit same line; merge; resolve; commit.",
          "do": "Hands\u2011on: Edit same line; merge; resolve; commit.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Reflog & reset types",
          "badge": "\ud83c\udd98 Recovery",
          "time": "Evening (30m)",
          "details": "Use reflog; soft/mixed/hard reset safely.",
          "links": [
            {
              "label": "Pro Git (book)",
              "href": "https://git-scm.com/book/en/v2"
            }
          ],
          "learn": "Concepts: Use reflog; soft/mixed/hard reset safely.",
          "do": "Hands\u2011on: Use reflog; soft/mixed/hard reset safely.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Create/resolve a conflict and Reflog & reset types; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 5: Remotes & PR Flow",
      "items": [
        {
          "label": "Add remote & push",
          "badge": "\ud83c\udf10 Remote",
          "time": "Morning (30m)",
          "details": "Create repo on host; add remote; push.",
          "links": [
            {
              "label": "GitHub Docs",
              "href": "https://docs.github.com/en"
            }
          ],
          "learn": "Concepts: Create repo on host; add remote; push.",
          "do": "Hands\u2011on: Create repo on host; add remote; push.",
          "aws": "Keeps IaC/app repos deployable across multiple AWS environments through clean branching and sync."
        },
        {
          "label": "PR & code review",
          "badge": "\ud83d\udd01 PR",
          "time": "Evening (30m)",
          "details": "Open PR; review checklist; merge policy.",
          "links": [
            {
              "label": "GitHub Docs",
              "href": "https://docs.github.com/en"
            }
          ],
          "learn": "Concepts: Open PR; review checklist; merge policy.",
          "do": "Hands\u2011on: Open PR; review checklist; merge policy.",
          "aws": "Integrates CI/CD (CodeCommit/CodeBuild/CodePipeline or GitHub Actions via OIDC) to gate releases into AWS accounts."
        }
      ],
      "resume": "Delivered: Add remote & push and PR & code review; validated via hands\u2011on tasks. Applied in AWS: Keeps IaC/app repos deployable across multiple AWS environments through clean branching and sync."
    },
    {
      "title": "Day 6: Rebase & History",
      "items": [
        {
          "label": "Interactive rebase",
          "badge": "\ud83e\uddf1 Rebase",
          "time": "Morning (30m)",
          "details": "Squash/fixup to clean history.",
          "links": [
            {
              "label": "Pro Git (book)",
              "href": "https://git-scm.com/book/en/v2"
            }
          ],
          "learn": "Concepts: Squash/fixup to clean history.",
          "do": "Hands\u2011on: Squash/fixup to clean history.",
          "aws": "Keeps IaC/app repos deployable across multiple AWS environments through clean branching and sync."
        },
        {
          "label": "Cherry-pick & revert",
          "badge": "\u21aa\ufe0f Pick/Revert",
          "time": "Evening (30m)",
          "details": "Port fixes and undo safely.",
          "links": [
            {
              "label": "Git Docs",
              "href": "https://git-scm.com/docs"
            }
          ],
          "learn": "Concepts: Port fixes and undo safely.",
          "do": "Hands\u2011on: Port fixes and undo safely.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Interactive rebase and Cherry-pick & revert; validated via hands\u2011on tasks. Applied in AWS: Keeps IaC/app repos deployable across multiple AWS environments through clean branching and sync."
    },
    {
      "title": "Day 7: Tags & Releases",
      "items": [
        {
          "label": "Annotated tags",
          "badge": "\ud83c\udff7\ufe0f Tags",
          "time": "Morning (30m)",
          "details": "Create v0.1.0 tag; push tags.",
          "links": [
            {
              "label": "Pro Git (book)",
              "href": "https://git-scm.com/book/en/v2"
            }
          ],
          "learn": "Concepts: Create v0.1.0 tag; push tags.",
          "do": "Hands\u2011on: Create v0.1.0 tag; push tags.",
          "aws": "Version tags align with Lambda aliases, ECR image tags, and S3 object versions to enable instant rollbacks."
        },
        {
          "label": "Release notes",
          "badge": "\ud83d\udcf0 Changelog",
          "time": "Evening (30m)",
          "details": "Draft CHANGELOG and Release asset.",
          "links": [
            {
              "label": "GitHub Docs",
              "href": "https://docs.github.com/en"
            }
          ],
          "learn": "Concepts: Draft CHANGELOG and Release asset.",
          "do": "Hands\u2011on: Draft CHANGELOG and Release asset.",
          "aws": "Version tags align with Lambda aliases, ECR image tags, and S3 object versions to enable instant rollbacks."
        }
      ],
      "resume": "Delivered: Annotated tags and Release notes; validated via hands\u2011on tasks. Applied in AWS: Version tags align with Lambda aliases, ECR image tags, and S3 object versions to enable instant rollbacks."
    },
    {
      "title": "Day 8: Hooks & Secrets",
      "items": [
        {
          "label": "Client hooks",
          "badge": "\ud83e\ude9d Hooks",
          "time": "Morning (30m)",
          "details": "pre-commit lint; commit-msg format.",
          "links": [
            {
              "label": "Pro Git (book)",
              "href": "https://git-scm.com/book/en/v2"
            }
          ],
          "learn": "Concepts: pre-commit lint; commit-msg format.",
          "do": "Hands\u2011on: pre-commit lint; commit-msg format.",
          "aws": "Prevents leaked credentials and enforces fmt/validate before pipelines assume AWS roles."
        },
        {
          "label": "Secret scanning",
          "badge": "\ud83d\udd12 Secrets",
          "time": "Evening (30m)",
          "details": "Prevent keys in commits.",
          "links": [
            {
              "label": "GitHub Docs",
              "href": "https://docs.github.com/en"
            }
          ],
          "learn": "Concepts: Prevent keys in commits.",
          "do": "Hands\u2011on: Prevent keys in commits.",
          "aws": "Prevents leaked credentials and enforces fmt/validate before pipelines assume AWS roles."
        }
      ],
      "resume": "Delivered: Client hooks and Secret scanning; validated via hands\u2011on tasks. Applied in AWS: Prevents leaked credentials and enforces fmt/validate before pipelines assume AWS roles."
    },
    {
      "title": "Day 9: Large & Mono",
      "items": [
        {
          "label": "Worktrees & sparse-checkout",
          "badge": "\ud83c\udf32 Worktrees",
          "time": "Morning (30m)",
          "details": "Parallel trees; narrow working set.",
          "links": [
            {
              "label": "Git Docs",
              "href": "https://git-scm.com/docs"
            }
          ],
          "learn": "Concepts: Parallel trees; narrow working set.",
          "do": "Hands\u2011on: Parallel trees; narrow working set.",
          "aws": "Optimizes repo/CI performance for CodeBuild runners and artifact flows (ECR/S3)."
        },
        {
          "label": "LFS basics",
          "badge": "\ud83d\uddbc\ufe0f LFS",
          "time": "Evening (30m)",
          "details": "Track large assets.",
          "links": [
            {
              "label": "GitHub Docs",
              "href": "https://docs.github.com/en"
            }
          ],
          "learn": "Concepts: Track large assets.",
          "do": "Hands\u2011on: Track large assets.",
          "aws": "Optimizes repo/CI performance for CodeBuild runners and artifact flows (ECR/S3)."
        }
      ],
      "resume": "Delivered: Worktrees & sparse-checkout and LFS basics; validated via hands\u2011on tasks. Applied in AWS: Optimizes repo/CI performance for CodeBuild runners and artifact flows (ECR/S3)."
    },
    {
      "title": "Day 10: CI Entry",
      "items": [
        {
          "label": "GitHub Actions CI",
          "badge": "\u2699\ufe0f CI",
          "time": "Morning (45m)",
          "details": "Basic build/test on PR.",
          "links": [
            {
              "label": "GitHub Docs",
              "href": "https://docs.github.com/en"
            }
          ],
          "learn": "Concepts: Basic build/test on PR.",
          "do": "Hands\u2011on: Basic build/test on PR.",
          "aws": "Integrates CI/CD (CodeCommit/CodeBuild/CodePipeline or GitHub Actions via OIDC) to gate releases into AWS accounts."
        },
        {
          "label": "Protected branches",
          "badge": "\ud83d\udee1\ufe0f Protections",
          "time": "Evening (15m)",
          "details": "Require reviews & checks.",
          "links": [
            {
              "label": "GitHub Docs",
              "href": "https://docs.github.com/en"
            }
          ],
          "learn": "Concepts: Require reviews & checks.",
          "do": "Hands\u2011on: Require reviews & checks.",
          "aws": "Integrates CI/CD (CodeCommit/CodeBuild/CodePipeline or GitHub Actions via OIDC) to gate releases into AWS accounts."
        }
      ],
      "resume": "Delivered: GitHub Actions CI and Protected branches; validated via hands\u2011on tasks. Applied in AWS: Integrates CI/CD (CodeCommit/CodeBuild/CodePipeline or GitHub Actions via OIDC) to gate releases into AWS accounts."
    },
    {
      "title": "Day 11: Perf & Maintenance",
      "items": [
        {
          "label": "Shallow/partial clone",
          "badge": "\ud83d\udce6 Scale",
          "time": "Morning (30m)",
          "details": "Faster clones on large repos.",
          "links": [
            {
              "label": "Git Docs",
              "href": "https://git-scm.com/docs"
            }
          ],
          "learn": "Concepts: Faster clones on large repos.",
          "do": "Hands\u2011on: Faster clones on large repos.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "GC & maintenance",
          "badge": "\ud83e\uddfd Maintain",
          "time": "Evening (30m)",
          "details": "git gc; repack; maintenance.",
          "links": [
            {
              "label": "Git Docs",
              "href": "https://git-scm.com/docs"
            }
          ],
          "learn": "Concepts: git gc; repack; maintenance.",
          "do": "Hands\u2011on: git gc; repack; maintenance.",
          "aws": "Optimizes repo/CI performance for CodeBuild runners and artifact flows (ECR/S3)."
        }
      ],
      "resume": "Delivered: Shallow/partial clone and GC & maintenance; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 12: Capstone",
      "items": [
        {
          "label": "Release v1.0.0",
          "badge": "\ud83d\ude80 Capstone",
          "time": "Morning (60m)",
          "details": "Tag, changelog, release assets.",
          "links": [
            {
              "label": "GitHub Docs",
              "href": "https://docs.github.com/en"
            }
          ],
          "learn": "Concepts: Tag, changelog, release assets.",
          "do": "Hands\u2011on: Tag, changelog, release assets.",
          "aws": "Version tags align with Lambda aliases, ECR image tags, and S3 object versions to enable instant rollbacks."
        },
        {
          "label": "Resume bullets",
          "badge": "\u2705 Resume",
          "time": "Evening (30m)",
          "details": "Document outcomes & metrics.",
          "links": [
            {
              "label": "Pro Git (book)",
              "href": "https://git-scm.com/book/en/v2"
            }
          ],
          "learn": "Concepts: Document outcomes & metrics.",
          "do": "Hands\u2011on: Document outcomes & metrics.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Release v1.0.0 and Resume bullets; validated via hands\u2011on tasks. Applied in AWS: Version tags align with Lambda aliases, ECR image tags, and S3 object versions to enable instant rollbacks."
    }
  ],
  "bash": [
    {
      "title": "Day 1: Shell Basics",
      "items": [
        {
          "label": "Navigation & listing",
          "badge": "\ud83d\udcc1 Basics",
          "time": "Morning (30m)",
          "details": "pwd, ls -la, cd; create workspace.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            },
            {
              "label": "GNU Coreutils",
              "href": "https://www.gnu.org/software/coreutils/manual/coreutils.html"
            }
          ],
          "learn": "Concepts: pwd, ls -la, cd; create workspace.",
          "do": "Hands\u2011on: pwd, ls -la, cd; create workspace.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Globbing & quoting",
          "badge": "\ud83d\udd24 Patterns",
          "time": "Evening (30m)",
          "details": "Wildcards; single vs double quotes; escaping.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: Wildcards; single vs double quotes; escaping.",
          "do": "Hands\u2011on: Wildcards; single vs double quotes; escaping.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Navigation & listing and Globbing & quoting; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 2: Streams & Redirection",
      "items": [
        {
          "label": "stdin/stdout/stderr",
          "badge": "\ud83d\udd00 Streams",
          "time": "Morning (30m)",
          "details": ">, >>, 2>, &>, here-docs; pipeline fitness.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: >, >>, 2>, &>, here-docs; pipeline fitness.",
          "do": "Hands\u2011on: >, >>, 2>, &>, here-docs; pipeline fitness.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "tee & process substitution",
          "badge": "\ud83e\udea3 Advanced",
          "time": "Evening (30m)",
          "details": "tee, <(), >(); capture & split streams.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: tee, <(), >(); capture & split streams.",
          "do": "Hands\u2011on: tee, <(), >(); capture & split streams.",
          "aws": "Integrates CI/CD (CodeCommit/CodeBuild/CodePipeline or GitHub Actions via OIDC) to gate releases into AWS accounts."
        }
      ],
      "resume": "Delivered: stdin/stdout/stderr and tee & process substitution; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 3: Variables & Exit Codes",
      "items": [
        {
          "label": "Variables & env",
          "badge": "\ud83d\udd27 Variables",
          "time": "Morning (30m)",
          "details": "Scoping, export, parameter expansion.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: Scoping, export, parameter expansion.",
          "do": "Hands\u2011on: Scoping, export, parameter expansion.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Exit codes & && ||",
          "badge": "\u2705 Control",
          "time": "Evening (30m)",
          "details": "set -e; check $?, short-circuiting.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: set -e; check $?, short-circuiting.",
          "do": "Hands\u2011on: set -e; check $?, short-circuiting.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Variables & env and Exit codes & && ||; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 4: Tests & Conditionals",
      "items": [
        {
          "label": "[ ] and [[ ]]",
          "badge": "\ud83e\uddea Tests",
          "time": "Morning (30m)",
          "details": "String, file, and numeric tests.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: String, file, and numeric tests.",
          "do": "Hands\u2011on: String, file, and numeric tests.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "if/elif/else & case",
          "badge": "\ud83d\udd01 Flow",
          "time": "Evening (30m)",
          "details": "Branching logic patterns.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: Branching logic patterns.",
          "do": "Hands\u2011on: Branching logic patterns.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: [ ] and [[ ]] and if/elif/else & case; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 5: Loops & Arrays",
      "items": [
        {
          "label": "for/while/until",
          "badge": "\ud83d\udd02 Loops",
          "time": "Morning (30m)",
          "details": "Iterate files & commands.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: Iterate files & commands.",
          "do": "Hands\u2011on: Iterate files & commands.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Arrays & maps",
          "badge": "\ud83e\uddf0 Data",
          "time": "Evening (30m)",
          "details": "Indexed & associative arrays.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: Indexed & associative arrays.",
          "do": "Hands\u2011on: Indexed & associative arrays.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: for/while/until and Arrays & maps; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 6: Functions & getopts",
      "items": [
        {
          "label": "Functions & return",
          "badge": "\ud83d\udd27 Funcs",
          "time": "Morning (30m)",
          "details": "Reusable units; local vars.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: Reusable units; local vars.",
          "do": "Hands\u2011on: Reusable units; local vars.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "getopts & usage",
          "badge": "\ud83c\udf9b\ufe0f CLI",
          "time": "Evening (30m)",
          "details": "Parse flags; show help.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: Parse flags; show help.",
          "do": "Hands\u2011on: Parse flags; show help.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Functions & return and getopts & usage; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 7: Robust Scripts",
      "items": [
        {
          "label": "Safety patterns",
          "badge": "\ud83d\udee1\ufe0f Safety",
          "time": "Morning (30m)",
          "details": "set -euo pipefail; IFS; quotes.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: set -euo pipefail; IFS; quotes.",
          "do": "Hands\u2011on: set -euo pipefail; IFS; quotes.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "trap & cleanup",
          "badge": "\ud83e\uddf9 Traps",
          "time": "Evening (30m)",
          "details": "trap EXIT/ERR to cleanup temp files.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: trap EXIT/ERR to cleanup temp files.",
          "do": "Hands\u2011on: trap EXIT/ERR to cleanup temp files.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Safety patterns and trap & cleanup; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 8: Text Mastery I",
      "items": [
        {
          "label": "grep/cut/sort/uniq",
          "badge": "\ud83d\udcc4 Filters",
          "time": "Morning (30m)",
          "details": "Compose common pipelines.",
          "links": [
            {
              "label": "GNU Coreutils",
              "href": "https://www.gnu.org/software/coreutils/manual/coreutils.html"
            }
          ],
          "learn": "Concepts: Compose common pipelines.",
          "do": "Hands\u2011on: Compose common pipelines.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "awk basics",
          "badge": "\ud83e\udd86 awk",
          "time": "Evening (30m)",
          "details": "Field processing & reports.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: Field processing & reports.",
          "do": "Hands\u2011on: Field processing & reports.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: grep/cut/sort/uniq and awk basics; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 9: Text Mastery II",
      "items": [
        {
          "label": "sed editing",
          "badge": "\u2702\ufe0f sed",
          "time": "Morning (30m)",
          "details": "Search/replace; line ranges; in-place edits.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: Search/replace; line ranges; in-place edits.",
          "do": "Hands\u2011on: Search/replace; line ranges; in-place edits.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "join/paste/comm",
          "badge": "\u2795 Combine",
          "time": "Evening (30m)",
          "details": "Merge data from files.",
          "links": [
            {
              "label": "GNU Coreutils",
              "href": "https://www.gnu.org/software/coreutils/manual/coreutils.html"
            }
          ],
          "learn": "Concepts: Merge data from files.",
          "do": "Hands\u2011on: Merge data from files.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: sed editing and join/paste/comm; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 10: Find & xargs",
      "items": [
        {
          "label": "find -type/-name",
          "badge": "\ud83d\udd0e Find",
          "time": "Morning (30m)",
          "details": "Locate files; prune & depth.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: Locate files; prune & depth.",
          "do": "Hands\u2011on: Locate files; prune & depth.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "xargs parallel",
          "badge": "\u26a1 xargs",
          "time": "Evening (30m)",
          "details": "Build fast command batches.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: Build fast command batches.",
          "do": "Hands\u2011on: Build fast command batches.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: find -type/-name and xargs parallel; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 11: Archives & Compression",
      "items": [
        {
          "label": "tar/gzip/xz",
          "badge": "\ud83d\udddc\ufe0f Archive",
          "time": "Morning (30m)",
          "details": "Create & extract archives safely.",
          "links": [
            {
              "label": "GNU Coreutils",
              "href": "https://www.gnu.org/software/coreutils/manual/coreutils.html"
            }
          ],
          "learn": "Concepts: Create & extract archives safely.",
          "do": "Hands\u2011on: Create & extract archives safely.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Checksums",
          "badge": "\ud83d\udd10 Verify",
          "time": "Evening (30m)",
          "details": "sha256sum/sha512sum for integrity.",
          "links": [
            {
              "label": "GNU Coreutils",
              "href": "https://www.gnu.org/software/coreutils/manual/coreutils.html"
            }
          ],
          "learn": "Concepts: sha256sum/sha512sum for integrity.",
          "do": "Hands\u2011on: sha256sum/sha512sum for integrity.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: tar/gzip/xz and Checksums; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 12: Scheduling",
      "items": [
        {
          "label": "cron basics",
          "badge": "\u23f0 cron",
          "time": "Morning (30m)",
          "details": "Edit crontab; timing patterns.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: Edit crontab; timing patterns.",
          "do": "Hands\u2011on: Edit crontab; timing patterns.",
          "aws": "On\u2011instance scheduling mirrors EventBridge rules\u2014use the right tool per workload."
        },
        {
          "label": "systemd timers",
          "badge": "\u23f1\ufe0f timers",
          "time": "Evening (30m)",
          "details": "timer/service pairs for reliability.",
          "links": [
            {
              "label": "systemd Reference",
              "href": "https://www.freedesktop.org/software/systemd/man/latest/"
            }
          ],
          "learn": "Concepts: timer/service pairs for reliability.",
          "do": "Hands\u2011on: timer/service pairs for reliability.",
          "aws": "On\u2011instance scheduling mirrors EventBridge rules\u2014use the right tool per workload."
        }
      ],
      "resume": "Delivered: cron basics and systemd timers; validated via hands\u2011on tasks. Applied in AWS: On\u2011instance scheduling mirrors EventBridge rules\u2014use the right tool per workload."
    },
    {
      "title": "Day 13: SSH & Remote Ops",
      "items": [
        {
          "label": "ssh keys & config",
          "badge": "\ud83d\udd11 SSH",
          "time": "Morning (30m)",
          "details": "~/.ssh/config; keygen; known_hosts.",
          "links": [
            {
              "label": "OpenSSH Manual",
              "href": "https://www.openssh.com/manual.html"
            }
          ],
          "learn": "Concepts: ~/.ssh/config; keygen; known_hosts.",
          "do": "Hands\u2011on: ~/.ssh/config; keygen; known_hosts.",
          "aws": "Secure EC2 operations; prefer SSM Session Manager where possible."
        },
        {
          "label": "scp/rsync",
          "badge": "\ud83d\ude9a Transfer",
          "time": "Evening (30m)",
          "details": "Secure copy; efficient sync.",
          "links": [
            {
              "label": "rsync manpage",
              "href": "https://download.samba.org/pub/rsync/rsync.html"
            }
          ],
          "learn": "Concepts: Secure copy; efficient sync.",
          "do": "Hands\u2011on: Secure copy; efficient sync.",
          "aws": "Secure EC2 operations; prefer SSM Session Manager where possible."
        }
      ],
      "resume": "Delivered: ssh keys & config and scp/rsync; validated via hands\u2011on tasks. Applied in AWS: Secure EC2 operations; prefer SSM Session Manager where possible."
    },
    {
      "title": "Day 14: JSON & APIs",
      "items": [
        {
          "label": "jq basics",
          "badge": "\ud83e\uddf1 jq",
          "time": "Morning (30m)",
          "details": "Parse JSON; filter & map.",
          "links": [
            {
              "label": "jq Manual",
              "href": "https://stedolan.github.io/jq/manual/"
            }
          ],
          "learn": "Concepts: Parse JSON; filter & map.",
          "do": "Hands\u2011on: Parse JSON; filter & map.",
          "aws": "Automate AWS APIs/CLI and parse JSON (STS, S3, CloudWatch) in CI and runbooks."
        },
        {
          "label": "curl tricks",
          "badge": "\ud83c\udf10 curl",
          "time": "Evening (30m)",
          "details": "Auth headers; POST/PUT; retry.",
          "links": [
            {
              "label": "GNU Coreutils",
              "href": "https://www.gnu.org/software/coreutils/manual/coreutils.html"
            }
          ],
          "learn": "Concepts: Auth headers; POST/PUT; retry.",
          "do": "Hands\u2011on: Auth headers; POST/PUT; retry.",
          "aws": "Automate AWS APIs/CLI and parse JSON (STS, S3, CloudWatch) in CI and runbooks."
        }
      ],
      "resume": "Delivered: jq basics and curl tricks; validated via hands\u2011on tasks. Applied in AWS: Automate AWS APIs/CLI and parse JSON (STS, S3, CloudWatch) in CI and runbooks."
    },
    {
      "title": "Day 15: Testing & Linting",
      "items": [
        {
          "label": "bats-core tests",
          "badge": "\u2705 Tests",
          "time": "Morning (45m)",
          "details": "Install bats; write 3 tests.",
          "links": [
            {
              "label": "bats-core",
              "href": "https://github.com/bats-core/bats-core"
            }
          ],
          "learn": "Concepts: Install bats; write 3 tests.",
          "do": "Hands\u2011on: Install bats; write 3 tests.",
          "aws": "Quality gates before `terraform apply` or deploys; fewer failed AWS changes."
        },
        {
          "label": "ShellCheck",
          "badge": "\ud83d\udee1\ufe0f Lint",
          "time": "Evening (30m)",
          "details": "Install shellcheck; fix warnings.",
          "links": [
            {
              "label": "ShellCheck",
              "href": "https://www.shellcheck.net/"
            }
          ],
          "learn": "Concepts: Install shellcheck; fix warnings.",
          "do": "Hands\u2011on: Install shellcheck; fix warnings.",
          "aws": "Quality gates before `terraform apply` or deploys; fewer failed AWS changes."
        }
      ],
      "resume": "Delivered: bats-core tests and ShellCheck; validated via hands\u2011on tasks. Applied in AWS: Quality gates before `terraform apply` or deploys; fewer failed AWS changes."
    },
    {
      "title": "Day 16: Packaging CLI",
      "items": [
        {
          "label": "CLI layout",
          "badge": "\ud83d\udce6 Package",
          "time": "Morning (30m)",
          "details": "bin/, lib/, docs/, --help and version.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: bin/, lib/, docs/, --help and version.",
          "do": "Hands\u2011on: bin/, lib/, docs/, --help and version.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Install script",
          "badge": "\u2b07\ufe0f Installer",
          "time": "Evening (30m)",
          "details": "Safe curl | bash with checksum verification.",
          "links": [
            {
              "label": "GNU Bash Manual",
              "href": "https://www.gnu.org/software/bash/manual/bash.html"
            }
          ],
          "learn": "Concepts: Safe curl | bash with checksum verification.",
          "do": "Hands\u2011on: Safe curl | bash with checksum verification.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: CLI layout and Install script; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 17: Backup Tool Project",
      "items": [
        {
          "label": "Backup v1",
          "badge": "\ud83d\udcd3 Project",
          "time": "Morning (45m)",
          "details": "Backup with rsync dry-run.",
          "links": [
            {
              "label": "rsync manpage",
              "href": "https://download.samba.org/pub/rsync/rsync.html"
            }
          ],
          "learn": "Concepts: Backup with rsync dry-run.",
          "do": "Hands\u2011on: Backup with rsync dry-run.",
          "aws": "Durable backups to S3/Glacier with practiced restores for DR readiness."
        },
        {
          "label": "Schedule via timer",
          "badge": "\u23f0 Automate",
          "time": "Evening (30m)",
          "details": "Run via systemd timer.",
          "links": [
            {
              "label": "systemd Reference",
              "href": "https://www.freedesktop.org/software/systemd/man/latest/"
            }
          ],
          "learn": "Concepts: Run via systemd timer.",
          "do": "Hands\u2011on: Run via systemd timer.",
          "aws": "On\u2011instance scheduling mirrors EventBridge rules\u2014use the right tool per workload."
        }
      ],
      "resume": "Delivered: Backup v1 and Schedule via timer; validated via hands\u2011on tasks. Applied in AWS: Durable backups to S3/Glacier with practiced restores for DR readiness."
    },
    {
      "title": "Day 18: Resume & Release",
      "items": [
        {
          "label": "Project README",
          "badge": "\ud83d\udcc4 Resume",
          "time": "Morning (45m)",
          "details": "Document flags and tests.",
          "links": [
            {
              "label": "GitHub Docs",
              "href": "https://docs.github.com/en"
            }
          ],
          "learn": "Concepts: Document flags and tests.",
          "do": "Hands\u2011on: Document flags and tests.",
          "aws": "Integrates CI/CD (CodeCommit/CodeBuild/CodePipeline or GitHub Actions via OIDC) to gate releases into AWS accounts."
        },
        {
          "label": "Publish v1.0",
          "badge": "\ud83d\udea2 Release",
          "time": "Evening (30m)",
          "details": "Tag and share the tool.",
          "links": [
            {
              "label": "GitHub Docs",
              "href": "https://docs.github.com/en"
            }
          ],
          "learn": "Concepts: Tag and share the tool.",
          "do": "Hands\u2011on: Tag and share the tool.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Project README and Publish v1.0; validated via hands\u2011on tasks. Applied in AWS: Integrates CI/CD (CodeCommit/CodeBuild/CodePipeline or GitHub Actions via OIDC) to gate releases into AWS accounts."
    }
  ],
  "linux": [
    {
      "title": "Day 1: OS & Filesystem",
      "items": [
        {
          "label": "Identify distro & kernel",
          "badge": "\u2139\ufe0f System",
          "time": "Morning (30m)",
          "details": "uname -r; /etc/os-release; dirs overview.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            },
            {
              "label": "Ubuntu Docs",
              "href": "https://help.ubuntu.com/"
            }
          ],
          "learn": "Concepts: uname -r; /etc/os-release; dirs overview.",
          "do": "Hands\u2011on: uname -r; /etc/os-release; dirs overview.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Filesystem layout",
          "badge": "\ud83d\uddc2\ufe0f FHS",
          "time": "Evening (30m)",
          "details": "/bin, /usr, /var, /etc; purpose of each.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: /bin, /usr, /var, /etc; purpose of each.",
          "do": "Hands\u2011on: /bin, /usr, /var, /etc; purpose of each.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Identify distro & kernel and Filesystem layout; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 2: Users & Groups",
      "items": [
        {
          "label": "adduser/usermod",
          "badge": "\ud83d\udc65 Accounts",
          "time": "Morning (30m)",
          "details": "Create users, groups; passwords.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: Create users, groups; passwords.",
          "do": "Hands\u2011on: Create users, groups; passwords.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "umask & permissions",
          "badge": "\ud83d\udd10 Perms",
          "time": "Evening (30m)",
          "details": "rwx, chmod, chown, sticky bit, setuid.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: rwx, chmod, chown, sticky bit, setuid.",
          "do": "Hands\u2011on: rwx, chmod, chown, sticky bit, setuid.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: adduser/usermod and umask & permissions; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 3: sudo & Security",
      "items": [
        {
          "label": "sudoers",
          "badge": "\ud83d\udee1\ufe0f sudo",
          "time": "Morning (30m)",
          "details": "visudo; least privilege.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: visudo; least privilege.",
          "do": "Hands\u2011on: visudo; least privilege.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "auth logs",
          "badge": "\ud83d\udcdc Logs",
          "time": "Evening (30m)",
          "details": "journalctl -u ssh; login failures.",
          "links": [
            {
              "label": "systemd Reference",
              "href": "https://www.freedesktop.org/software/systemd/man/latest/"
            }
          ],
          "learn": "Concepts: journalctl -u ssh; login failures.",
          "do": "Hands\u2011on: journalctl -u ssh; login failures.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: sudoers and auth logs; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 4: Packages",
      "items": [
        {
          "label": "apt/yum/dnf",
          "badge": "\ud83d\udce6 Packages",
          "time": "Morning (30m)",
          "details": "Install, update, remove; hold/pin.",
          "links": [
            {
              "label": "Ubuntu Docs",
              "href": "https://help.ubuntu.com/"
            }
          ],
          "learn": "Concepts: Install, update, remove; hold/pin.",
          "do": "Hands\u2011on: Install, update, remove; hold/pin.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "services on install",
          "badge": "\ud83d\udd27 Services",
          "time": "Evening (30m)",
          "details": "Check new systemd units.",
          "links": [
            {
              "label": "systemd Reference",
              "href": "https://www.freedesktop.org/software/systemd/man/latest/"
            }
          ],
          "learn": "Concepts: Check new systemd units.",
          "do": "Hands\u2011on: Check new systemd units.",
          "aws": "Operate EC2 services and ship logs/metrics to CloudWatch."
        }
      ],
      "resume": "Delivered: apt/yum/dnf and services on install; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 5: Services & Logs",
      "items": [
        {
          "label": "systemctl",
          "badge": "\ud83d\udee0\ufe0f systemd",
          "time": "Morning (30m)",
          "details": "status, enable, disable, journalctl.",
          "links": [
            {
              "label": "systemd Reference",
              "href": "https://www.freedesktop.org/software/systemd/man/latest/"
            }
          ],
          "learn": "Concepts: status, enable, disable, journalctl.",
          "do": "Hands\u2011on: status, enable, disable, journalctl.",
          "aws": "Operate EC2 services and ship logs/metrics to CloudWatch."
        },
        {
          "label": "persistent journald",
          "badge": "\ud83e\uddfe Journal",
          "time": "Evening (30m)",
          "details": "Storage=persistent; rotation.",
          "links": [
            {
              "label": "systemd Reference",
              "href": "https://www.freedesktop.org/software/systemd/man/latest/"
            }
          ],
          "learn": "Concepts: Storage=persistent; rotation.",
          "do": "Hands\u2011on: Storage=persistent; rotation.",
          "aws": "Operate EC2 services and ship logs/metrics to CloudWatch."
        }
      ],
      "resume": "Delivered: systemctl and persistent journald; validated via hands\u2011on tasks. Applied in AWS: Operate EC2 services and ship logs/metrics to CloudWatch."
    },
    {
      "title": "Day 6: Networking I",
      "items": [
        {
          "label": "ip addr/route",
          "badge": "\ud83c\udf10 Net",
          "time": "Morning (30m)",
          "details": "ip a, ip r; ping, traceroute, dig.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: ip a, ip r; ping, traceroute, dig.",
          "do": "Hands\u2011on: ip a, ip r; ping, traceroute, dig.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "DNS & hosts",
          "badge": "\ud83d\udcc7 DNS",
          "time": "Evening (30m)",
          "details": "/etc/hosts, resolv.conf, systemd-resolved.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: /etc/hosts, resolv.conf, systemd-resolved.",
          "do": "Hands\u2011on: /etc/hosts, resolv.conf, systemd-resolved.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: ip addr/route and DNS & hosts; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 7: Networking II",
      "items": [
        {
          "label": "firewall",
          "badge": "\ud83e\uddf1 Firewall",
          "time": "Morning (30m)",
          "details": "ufw or firewalld basics.",
          "links": [
            {
              "label": "UFW guide",
              "href": "https://help.ubuntu.com/community/UFW"
            },
            {
              "label": "firewalld docs",
              "href": "https://firewalld.org/documentation/"
            }
          ],
          "learn": "Concepts: ufw or firewalld basics.",
          "do": "Hands\u2011on: ufw or firewalld basics.",
          "aws": "Defense\u2011in\u2011depth with host firewalls alongside SGs/NACLs."
        },
        {
          "label": "SSH hardening",
          "badge": "\ud83d\udd10 SSH",
          "time": "Evening (30m)",
          "details": "Key auth, disable root login.",
          "links": [
            {
              "label": "OpenSSH Manual",
              "href": "https://www.openssh.com/manual.html"
            }
          ],
          "learn": "Concepts: Key auth, disable root login.",
          "do": "Hands\u2011on: Key auth, disable root login.",
          "aws": "Secure EC2 operations; prefer SSM Session Manager where possible."
        }
      ],
      "resume": "Delivered: firewall and SSH hardening; validated via hands\u2011on tasks. Applied in AWS: Defense\u2011in\u2011depth with host firewalls alongside SGs/NACLs."
    },
    {
      "title": "Day 8: Storage I",
      "items": [
        {
          "label": "lsblk/parted",
          "badge": "\ud83d\udcbd Disks",
          "time": "Morning (30m)",
          "details": "Inspect disks; partitions.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: Inspect disks; partitions.",
          "do": "Hands\u2011on: Inspect disks; partitions.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "mkfs/mount/fstab",
          "badge": "\ud83d\uddc2\ufe0f FS",
          "time": "Evening (30m)",
          "details": "Create ext4; mount; fstab.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: Create ext4; mount; fstab.",
          "do": "Hands\u2011on: Create ext4; mount; fstab.",
          "aws": "Hands\u2011on skills for EBS volume lifecycle."
        }
      ],
      "resume": "Delivered: lsblk/parted and mkfs/mount/fstab; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 9: Storage II (LVM)",
      "items": [
        {
          "label": "pv/vg/lv create",
          "badge": "\ud83d\udce6 LVM",
          "time": "Morning (30m)",
          "details": "Create PV/VG/LV; format & mount.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: Create PV/VG/LV; format & mount.",
          "do": "Hands\u2011on: Create PV/VG/LV; format & mount.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "resize & snapshots",
          "badge": "\ud83e\uddef LVM",
          "time": "Evening (30m)",
          "details": "Extend/reduce; snapshot basics.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: Extend/reduce; snapshot basics.",
          "do": "Hands\u2011on: Extend/reduce; snapshot basics.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: pv/vg/lv create and resize & snapshots; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 10: Processes & Performance",
      "items": [
        {
          "label": "top/htop/nice",
          "badge": "\ud83e\udde0 CPU",
          "time": "Morning (30m)",
          "details": "Monitor CPU; renice.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: Monitor CPU; renice.",
          "do": "Hands\u2011on: Monitor CPU; renice.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "vmstat/iostat/free",
          "badge": "\ud83d\udcca Mem/IO",
          "time": "Evening (30m)",
          "details": "Baseline perf; identify bottlenecks.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: Baseline perf; identify bottlenecks.",
          "do": "Hands\u2011on: Baseline perf; identify bottlenecks.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: top/htop/nice and vmstat/iostat/free; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 11: Backups",
      "items": [
        {
          "label": "rsync strategy",
          "badge": "\ud83e\udde9 Backup",
          "time": "Morning (45m)",
          "details": "Incremental backup; excludes.",
          "links": [
            {
              "label": "rsync manpage",
              "href": "https://download.samba.org/pub/rsync/rsync.html"
            }
          ],
          "learn": "Concepts: Incremental backup; excludes.",
          "do": "Hands\u2011on: Incremental backup; excludes.",
          "aws": "Secure EC2 operations; prefer SSM Session Manager where possible."
        },
        {
          "label": "restic to S3",
          "badge": "\u2601\ufe0f Backup",
          "time": "Evening (45m)",
          "details": "Init repo; backup; restore test.",
          "links": [
            {
              "label": "restic docs",
              "href": "https://restic.readthedocs.io/en/stable/"
            }
          ],
          "learn": "Concepts: Init repo; backup; restore test.",
          "do": "Hands\u2011on: Init repo; backup; restore test.",
          "aws": "Durable backups to S3/Glacier with practiced restores for DR readiness."
        }
      ],
      "resume": "Delivered: rsync strategy and restic to S3; validated via hands\u2011on tasks. Applied in AWS: Secure EC2 operations; prefer SSM Session Manager where possible."
    },
    {
      "title": "Day 12: Scheduling Advanced",
      "items": [
        {
          "label": "cron.d service jobs",
          "badge": "\u23f0 cron",
          "time": "Morning (30m)",
          "details": "service-specific crons; env.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: service-specific crons; env.",
          "do": "Hands\u2011on: service-specific crons; env.",
          "aws": "On\u2011instance scheduling mirrors EventBridge rules\u2014use the right tool per workload."
        },
        {
          "label": "timers on boot",
          "badge": "\u23f1\ufe0f timers",
          "time": "Evening (30m)",
          "details": "OnBootSec/OnUnitActiveSec.",
          "links": [
            {
              "label": "systemd Reference",
              "href": "https://www.freedesktop.org/software/systemd/man/latest/"
            }
          ],
          "learn": "Concepts: OnBootSec/OnUnitActiveSec.",
          "do": "Hands\u2011on: OnBootSec/OnUnitActiveSec.",
          "aws": "On\u2011instance scheduling mirrors EventBridge rules\u2014use the right tool per workload."
        }
      ],
      "resume": "Delivered: cron.d service jobs and timers on boot; validated via hands\u2011on tasks. Applied in AWS: On\u2011instance scheduling mirrors EventBridge rules\u2014use the right tool per workload."
    },
    {
      "title": "Day 13: Web Server I",
      "items": [
        {
          "label": "Install NGINX",
          "badge": "\ud83c\udf10 NGINX",
          "time": "Morning (30m)",
          "details": "Serve static site; validate config.",
          "links": [
            {
              "label": "NGINX Docs",
              "href": "https://nginx.org/en/docs/"
            }
          ],
          "learn": "Concepts: Serve static site; validate config.",
          "do": "Hands\u2011on: Serve static site; validate config.",
          "aws": "Maps to ALB/CloudFront/ACM or self\u2011managed TLS on EC2."
        },
        {
          "label": "Reverse proxy",
          "badge": "\ud83d\udd01 Proxy",
          "time": "Evening (30m)",
          "details": "Proxy backend on 127.0.0.1:5000.",
          "links": [
            {
              "label": "NGINX Docs",
              "href": "https://nginx.org/en/docs/"
            }
          ],
          "learn": "Concepts: Proxy backend on 127.0.0.1:5000.",
          "do": "Hands\u2011on: Proxy backend on 127.0.0.1:5000.",
          "aws": "Integrates CI/CD (CodeCommit/CodeBuild/CodePipeline or GitHub Actions via OIDC) to gate releases into AWS accounts."
        }
      ],
      "resume": "Delivered: Install NGINX and Reverse proxy; validated via hands\u2011on tasks. Applied in AWS: Maps to ALB/CloudFront/ACM or self\u2011managed TLS on EC2."
    },
    {
      "title": "Day 14: HTTPS",
      "items": [
        {
          "label": "Certbot",
          "badge": "\ud83d\udd10 TLS",
          "time": "Morning (45m)",
          "details": "LetsEncrypt cert; auto-renew.",
          "links": [
            {
              "label": "Certbot Docs",
              "href": "https://certbot.eff.org/instructions"
            }
          ],
          "learn": "Concepts: LetsEncrypt cert; auto-renew.",
          "do": "Hands\u2011on: LetsEncrypt cert; auto-renew.",
          "aws": "Maps to ALB/CloudFront/ACM or self\u2011managed TLS on EC2."
        },
        {
          "label": "Security headers",
          "badge": "\ud83d\udee1\ufe0f Hardening",
          "time": "Evening (30m)",
          "details": "HSTS; header checks.",
          "links": [
            {
              "label": "SSL Labs",
              "href": "https://www.ssllabs.com/ssltest/"
            }
          ],
          "learn": "Concepts: HSTS; header checks.",
          "do": "Hands\u2011on: HSTS; header checks.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Certbot and Security headers; validated via hands\u2011on tasks. Applied in AWS: Maps to ALB/CloudFront/ACM or self\u2011managed TLS on EC2."
    },
    {
      "title": "Day 15: Database I",
      "items": [
        {
          "label": "Install PostgreSQL",
          "badge": "\ud83d\udc18 Postgres",
          "time": "Morning (45m)",
          "details": "Init cluster; user/db; psql.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Init cluster; user/db; psql.",
          "do": "Hands\u2011on: Init cluster; user/db; psql.",
          "aws": "Applies directly to RDS/Aurora administration."
        },
        {
          "label": "Backup/restore",
          "badge": "\ud83d\udcbe pg_dump",
          "time": "Evening (30m)",
          "details": "pg_dump/pg_restore.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: pg_dump/pg_restore.",
          "do": "Hands\u2011on: pg_dump/pg_restore.",
          "aws": "Durable backups to S3/Glacier with practiced restores for DR readiness."
        }
      ],
      "resume": "Delivered: Install PostgreSQL and Backup/restore; validated via hands\u2011on tasks. Applied in AWS: Applies directly to RDS/Aurora administration."
    },
    {
      "title": "Day 16: Containers I",
      "items": [
        {
          "label": "Docker install",
          "badge": "\ud83d\udc33 Docker",
          "time": "Morning (45m)",
          "details": "Images/containers/volumes.",
          "links": [
            {
              "label": "Docker Docs",
              "href": "https://docs.docker.com/"
            }
          ],
          "learn": "Concepts: Images/containers/volumes.",
          "do": "Hands\u2011on: Images/containers/volumes.",
          "aws": "Translates to ECS/Fargate or EKS deployments."
        },
        {
          "label": "Compose basics",
          "badge": "\ud83e\udde9 Compose",
          "time": "Evening (45m)",
          "details": "Define app + db; restart.",
          "links": [
            {
              "label": "Docker Docs",
              "href": "https://docs.docker.com/"
            }
          ],
          "learn": "Concepts: Define app + db; restart.",
          "do": "Hands\u2011on: Define app + db; restart.",
          "aws": "Translates to ECS/Fargate or EKS deployments."
        }
      ],
      "resume": "Delivered: Docker install and Compose basics; validated via hands\u2011on tasks. Applied in AWS: Translates to ECS/Fargate or EKS deployments."
    },
    {
      "title": "Day 17: Systemd Services",
      "items": [
        {
          "label": "Create unit file",
          "badge": "\ud83d\udd27 service",
          "time": "Morning (45m)",
          "details": "Systemd unit for app.",
          "links": [
            {
              "label": "systemd Reference",
              "href": "https://www.freedesktop.org/software/systemd/man/latest/"
            }
          ],
          "learn": "Concepts: Systemd unit for app.",
          "do": "Hands\u2011on: Systemd unit for app.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Logging & restart",
          "badge": "\u267b\ufe0f manage",
          "time": "Evening (30m)",
          "details": "Restart=on-failure; logs.",
          "links": [
            {
              "label": "systemd Reference",
              "href": "https://www.freedesktop.org/software/systemd/man/latest/"
            }
          ],
          "learn": "Concepts: Restart=on-failure; logs.",
          "do": "Hands\u2011on: Restart=on-failure; logs.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Create unit file and Logging & restart; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 18: Security Hardening",
      "items": [
        {
          "label": "fail2ban",
          "badge": "\ud83d\udee1\ufe0f Ban",
          "time": "Morning (30m)",
          "details": "Protect SSH/nginx; jail.local.",
          "links": [
            {
              "label": "fail2ban",
              "href": "https://github.com/fail2ban/fail2ban"
            }
          ],
          "learn": "Concepts: Protect SSH/nginx; jail.local.",
          "do": "Hands\u2011on: Protect SSH/nginx; jail.local.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Audit basics",
          "badge": "\ud83d\udd0d Audit",
          "time": "Evening (30m)",
          "details": "Open ports; unattended-upgrades.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: Open ports; unattended-upgrades.",
          "do": "Hands\u2011on: Open ports; unattended-upgrades.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: fail2ban and Audit basics; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 19: Monitoring",
      "items": [
        {
          "label": "journald metrics",
          "badge": "\ud83e\uddfe Logs",
          "time": "Morning (30m)",
          "details": "Filter by unit; error rates.",
          "links": [
            {
              "label": "systemd Reference",
              "href": "https://www.freedesktop.org/software/systemd/man/latest/"
            }
          ],
          "learn": "Concepts: Filter by unit; error rates.",
          "do": "Hands\u2011on: Filter by unit; error rates.",
          "aws": "Operate EC2 services and ship logs/metrics to CloudWatch."
        },
        {
          "label": "Node Exporter (opt)",
          "badge": "\ud83d\udcc8 Metrics",
          "time": "Evening (45m)",
          "details": "Install exporter.",
          "links": [
            {
              "label": "Prometheus Node Exporter",
              "href": "https://prometheus.io/docs/guides/node-exporter/"
            }
          ],
          "learn": "Concepts: Install exporter.",
          "do": "Hands\u2011on: Install exporter.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: journald metrics and Node Exporter (opt); validated via hands\u2011on tasks. Applied in AWS: Operate EC2 services and ship logs/metrics to CloudWatch."
    },
    {
      "title": "Day 20: Cloud VM",
      "items": [
        {
          "label": "Provision VM",
          "badge": "\u2601\ufe0f EC2/VM",
          "time": "Morning (45m)",
          "details": "Spin up Ubuntu; ufw.",
          "links": [
            {
              "label": "Ubuntu Docs",
              "href": "https://help.ubuntu.com/"
            }
          ],
          "learn": "Concepts: Spin up Ubuntu; ufw.",
          "do": "Hands\u2011on: Spin up Ubuntu; ufw.",
          "aws": "Integrates CI/CD (CodeCommit/CodeBuild/CodePipeline or GitHub Actions via OIDC) to gate releases into AWS accounts."
        },
        {
          "label": "Deploy behind NGINX",
          "badge": "\ud83d\ude80 Deploy",
          "time": "Evening (45m)",
          "details": "TLS; systemd; reverse proxy.",
          "links": [
            {
              "label": "NGINX Docs",
              "href": "https://nginx.org/en/docs/"
            }
          ],
          "learn": "Concepts: TLS; systemd; reverse proxy.",
          "do": "Hands\u2011on: TLS; systemd; reverse proxy.",
          "aws": "Maps to ALB/CloudFront/ACM or self\u2011managed TLS on EC2."
        }
      ],
      "resume": "Delivered: Provision VM and Deploy behind NGINX; validated via hands\u2011on tasks. Applied in AWS: Integrates CI/CD (CodeCommit/CodeBuild/CodePipeline or GitHub Actions via OIDC) to gate releases into AWS accounts."
    },
    {
      "title": "Day 21: Backups on Server",
      "items": [
        {
          "label": "Automate backups",
          "badge": "\ud83d\udcbe rsync/restic",
          "time": "Morning (45m)",
          "details": "Scheduled to S3; test restore.",
          "links": [
            {
              "label": "restic docs",
              "href": "https://restic.readthedocs.io/en/stable/"
            },
            {
              "label": "rsync manpage",
              "href": "https://download.samba.org/pub/rsync/rsync.html"
            }
          ],
          "learn": "Concepts: Scheduled to S3; test restore.",
          "do": "Hands\u2011on: Scheduled to S3; test restore.",
          "aws": "Durable backups to S3/Glacier with practiced restores for DR readiness."
        },
        {
          "label": "Timer & alert",
          "badge": "\u23f0 Notify",
          "time": "Evening (30m)",
          "details": "Timer unit + alert.",
          "links": [
            {
              "label": "systemd Reference",
              "href": "https://www.freedesktop.org/software/systemd/man/latest/"
            }
          ],
          "learn": "Concepts: Timer unit + alert.",
          "do": "Hands\u2011on: Timer unit + alert.",
          "aws": "On\u2011instance scheduling mirrors EventBridge rules\u2014use the right tool per workload."
        }
      ],
      "resume": "Delivered: Automate backups and Timer & alert; validated via hands\u2011on tasks. Applied in AWS: Durable backups to S3/Glacier with practiced restores for DR readiness."
    },
    {
      "title": "Day 22: Troubleshooting",
      "items": [
        {
          "label": "Network issues",
          "badge": "\ud83e\uddef Net",
          "time": "Morning (45m)",
          "details": "ping, ss, tcpdump basics.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: ping, ss, tcpdump basics.",
          "do": "Hands\u2011on: ping, ss, tcpdump basics.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Disk & inode",
          "badge": "\ud83d\udce6 Disk",
          "time": "Evening (30m)",
          "details": "df/du; inode usage.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: df/du; inode usage.",
          "do": "Hands\u2011on: df/du; inode usage.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Network issues and Disk & inode; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 23: SELinux/AppArmor",
      "items": [
        {
          "label": "Enforce vs complain",
          "badge": "\ud83d\udd12 MAC",
          "time": "Morning (45m)",
          "details": "Profiles & contexts.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: Profiles & contexts.",
          "do": "Hands\u2011on: Profiles & contexts.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Audit denials",
          "badge": "\ud83e\uddfe AVC",
          "time": "Evening (30m)",
          "details": "Inspect logs; allow safe policies.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: Inspect logs; allow safe policies.",
          "do": "Hands\u2011on: Inspect logs; allow safe policies.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Enforce vs complain and Audit denials; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 24: Log Management",
      "items": [
        {
          "label": "logrotate rules",
          "badge": "\ud83d\udd01 rotate",
          "time": "Morning (30m)",
          "details": "Rotate nginx/app logs.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: Rotate nginx/app logs.",
          "do": "Hands\u2011on: Rotate nginx/app logs.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Centralize (opt)",
          "badge": "\ud83c\udf10 syslog",
          "time": "Evening (45m)",
          "details": "Forward to remote syslog.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: Forward to remote syslog.",
          "do": "Hands\u2011on: Forward to remote syslog.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: logrotate rules and Centralize (opt); validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 25: DR Basics",
      "items": [
        {
          "label": "Simulate failure",
          "badge": "\ud83e\uddea DR",
          "time": "Morning (45m)",
          "details": "Restore from backup; practice.",
          "links": [
            {
              "label": "restic docs",
              "href": "https://restic.readthedocs.io/en/stable/"
            }
          ],
          "learn": "Concepts: Restore from backup; practice.",
          "do": "Hands\u2011on: Restore from backup; practice.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Runbooks",
          "badge": "\ud83d\udcd8 Docs",
          "time": "Evening (30m)",
          "details": "Document recovery steps.",
          "links": [
            {
              "label": "Ubuntu Docs",
              "href": "https://help.ubuntu.com/"
            }
          ],
          "learn": "Concepts: Document recovery steps.",
          "do": "Hands\u2011on: Document recovery steps.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Simulate failure and Runbooks; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 26: Hardening Review",
      "items": [
        {
          "label": "SSH & firewall",
          "badge": "\ud83d\udee1\ufe0f Review",
          "time": "Morning (30m)",
          "details": "Disable password auth; rules.",
          "links": [
            {
              "label": "OpenSSH Manual",
              "href": "https://www.openssh.com/manual.html"
            },
            {
              "label": "UFW guide",
              "href": "https://help.ubuntu.com/community/UFW"
            }
          ],
          "learn": "Concepts: Disable password auth; rules.",
          "do": "Hands\u2011on: Disable password auth; rules.",
          "aws": "Secure EC2 operations; prefer SSM Session Manager where possible."
        },
        {
          "label": "Secrets & env",
          "badge": "\ud83d\udd11 Secrets",
          "time": "Evening (30m)",
          "details": "Protect .env; perms.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: Protect .env; perms.",
          "do": "Hands\u2011on: Protect .env; perms.",
          "aws": "Prevents leaked credentials and enforces fmt/validate before pipelines assume AWS roles."
        }
      ],
      "resume": "Delivered: SSH & firewall and Secrets & env; validated via hands\u2011on tasks. Applied in AWS: Secure EC2 operations; prefer SSM Session Manager where possible."
    },
    {
      "title": "Day 27: Planning",
      "items": [
        {
          "label": "Design doc",
          "badge": "\ud83d\udcdd Plan",
          "time": "Morning (45m)",
          "details": "Architecture for service.",
          "links": [
            {
              "label": "Ubuntu Docs",
              "href": "https://help.ubuntu.com/"
            }
          ],
          "learn": "Concepts: Architecture for service.",
          "do": "Hands\u2011on: Architecture for service.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Tasks & roles",
          "badge": "\ud83e\udde9 Scope",
          "time": "Evening (30m)",
          "details": "Breakdown & SLOs.",
          "links": [
            {
              "label": "Ubuntu Docs",
              "href": "https://help.ubuntu.com/"
            }
          ],
          "learn": "Concepts: Breakdown & SLOs.",
          "do": "Hands\u2011on: Breakdown & SLOs.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Design doc and Tasks & roles; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    },
    {
      "title": "Day 28: Build",
      "items": [
        {
          "label": "Deploy service",
          "badge": "\ud83d\ude80 Build",
          "time": "Morning (60m)",
          "details": "NGINX + systemd + DB.",
          "links": [
            {
              "label": "NGINX Docs",
              "href": "https://nginx.org/en/docs/"
            },
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            },
            {
              "label": "Docker Docs",
              "href": "https://docs.docker.com/"
            }
          ],
          "learn": "Concepts: NGINX + systemd + DB.",
          "do": "Hands\u2011on: NGINX + systemd + DB.",
          "aws": "Operate EC2 services and ship logs/metrics to CloudWatch."
        },
        {
          "label": "TLS + backup + timer",
          "badge": "\ud83d\udd10 Ops",
          "time": "Evening (45m)",
          "details": "Certbot; restic; timers.",
          "links": [
            {
              "label": "Certbot Docs",
              "href": "https://certbot.eff.org/instructions"
            },
            {
              "label": "restic docs",
              "href": "https://restic.readthedocs.io/en/stable/"
            },
            {
              "label": "systemd Reference",
              "href": "https://www.freedesktop.org/software/systemd/man/latest/"
            }
          ],
          "learn": "Concepts: Certbot; restic; timers.",
          "do": "Hands\u2011on: Certbot; restic; timers.",
          "aws": "On\u2011instance scheduling mirrors EventBridge rules\u2014use the right tool per workload."
        }
      ],
      "resume": "Delivered: Deploy service and TLS + backup + timer; validated via hands\u2011on tasks. Applied in AWS: Operate EC2 services and ship logs/metrics to CloudWatch."
    },
    {
      "title": "Day 29: Test",
      "items": [
        {
          "label": "Load & failure tests",
          "badge": "\ud83e\uddea Test",
          "time": "Morning (45m)",
          "details": "wrk/ab; restart validation.",
          "links": [
            {
              "label": "man7 Linux man-pages",
              "href": "https://man7.org/linux/man-pages/"
            }
          ],
          "learn": "Concepts: wrk/ab; restart validation.",
          "do": "Hands\u2011on: wrk/ab; restart validation.",
          "aws": "Quality gates before `terraform apply` or deploys; fewer failed AWS changes."
        },
        {
          "label": "Observability check",
          "badge": "\ud83d\udcc8 Logs/Metrics",
          "time": "Evening (30m)",
          "details": "journald; exporter; alerts.",
          "links": [
            {
              "label": "systemd Reference",
              "href": "https://www.freedesktop.org/software/systemd/man/latest/"
            }
          ],
          "learn": "Concepts: journald; exporter; alerts.",
          "do": "Hands\u2011on: journald; exporter; alerts.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Load & failure tests and Observability check; validated via hands\u2011on tasks. Applied in AWS: Quality gates before `terraform apply` or deploys; fewer failed AWS changes."
    },
    {
      "title": "Day 30: Handoff",
      "items": [
        {
          "label": "Runbook & README",
          "badge": "\ud83d\udcd8 Handoff",
          "time": "Morning (45m)",
          "details": "Ops procedures.",
          "links": [
            {
              "label": "Ubuntu Docs",
              "href": "https://help.ubuntu.com/"
            }
          ],
          "learn": "Concepts: Ops procedures.",
          "do": "Hands\u2011on: Ops procedures.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        },
        {
          "label": "Resume bullets",
          "badge": "\u2705 Resume",
          "time": "Evening (30m)",
          "details": "Quantify impact.",
          "links": [
            {
              "label": "Ubuntu Docs",
              "href": "https://help.ubuntu.com/"
            }
          ],
          "learn": "Concepts: Quantify impact.",
          "do": "Hands\u2011on: Quantify impact.",
          "aws": "General CLI mastery used across AWS build/operate workflows."
        }
      ],
      "resume": "Delivered: Runbook & README and Resume bullets; validated via hands\u2011on tasks. Applied in AWS: General CLI mastery used across AWS build/operate workflows."
    }
  ]
};
const ORDER = ["git","bash","linux"];
const LENGTHS = {"git": TRACKS.git.length, "bash": TRACKS.bash.length, "linux": TRACKS.linux.length};
const TOTAL_DAYS = LENGTHS.git + LENGTHS.bash + LENGTHS.linux;

let mode = localStorage.getItem("cli.mode") || "guided";
let track = localStorage.getItem("cli.track") || "git";
let day = 1;
let checks = JSON.parse(localStorage.getItem("cli.checks") || "{}");
let streak = Number(localStorage.getItem("cli.streak") || 0);
let lastCompletedDay = Number(localStorage.getItem("cli.lastDay") || 0);

const elMode = document.getElementById("modeSelect");
const elTrack = document.getElementById("trackSelect");
const ringText = document.getElementById("ringText");
const streakEl = document.getElementById("streak");
const completedEl = document.getElementById("completed");
const completedLabel = document.getElementById("completedLabel");
const dayTitle = document.getElementById("dayTitle");
const taskList = document.getElementById("taskList");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const enableAlerts = document.getElementById("enableAlerts");
const resetBtn = document.getElementById("resetBtn");
const installBtn = document.getElementById("installBtn");
const offlineBtn = document.getElementById("offlineBtn");
const swDot = document.getElementById("swDot");
const swText = document.getElementById("swText");
const resumeBullet = document.getElementById("resumeBullet");
const copyBullet = document.getElementById("copyBullet");

function getStoredDay() {
  if (mode === "guided") return Number(localStorage.getItem("cli.day.guided") || 1);
  return Number(localStorage.getItem(`cli.day.${track}`) || 1);
}
function setStoredDay(val) {
  if (mode === "guided") localStorage.setItem("cli.day.guided", String(val));
  else localStorage.setItem(`cli.day.${track}`, String(val));
}
function mapGuidedIndex(idx) {
  let n = idx;
  for (const t of ORDER) {
    if (n <= LENGTHS[t]) return { track: t, day: n };
    n -= LENGTHS[t];
  }
  return { track: "linux", day: LENGTHS.linux };
}
function computeCompletedDays(scope) {
  if (scope === "guided") {
    let total = 0;
    for (const t of ORDER) {
      for (let d = 1; d <= LENGTHS[t]; d++) {
        const a = !!checks[`${t}-${d}-0`];
        const b = !!checks[`${t}-${d}-1`];
        if (a && b) total++;
      }
    }
    return total;
  } else {
    let total = 0;
    for (let d = 1; d <= LENGTHS[track]; d++) {
      const a = !!checks[`${track}-${d}-0`];
      const b = !!checks[`${track}-${d}-1`];
      if (a && b) total++;
    }
    return total;
  }
}
function renderProgress() {
  const completed = computeCompletedDays(mode);
  const denom = (mode === "guided") ? TOTAL_DAYS : LENGTHS[track];
  const pct = Math.round((completed/denom)*100);
  document.querySelector(".ring").style.background = `conic-gradient(var(--accent) ${pct*3.6}deg, var(--ringtrack) 0deg)`;
  ringText.textContent = pct + "%";
  completedEl.textContent = completed + " / " + denom;
  completedLabel.textContent = (mode === "guided") ? "Days Completed (All)" : "Days Completed (Track)";
  streakEl.textContent = String(streak);
}
function currentDayData(){
  if (mode === "guided") { const map = mapGuidedIndex(day); return { map, data: TRACKS[map.track][map.day-1] }; }
  return { map: { track, day }, data: TRACKS[track][day-1] };
}
function renderDay(){
  const len = (mode === "guided") ? TOTAL_DAYS : LENGTHS[track];
  day = Math.max(1, Math.min(len, day));
  setStoredDay(day);
  elTrack.disabled = (mode === "guided");
  elTrack.style.opacity = (mode === "guided") ? "0.6" : "1";

  const { map, data } = currentDayData();
  const titlePrefix = (mode === "guided") ? `Day ${day} of ${TOTAL_DAYS} — ${map.track.toUpperCase()}` : `Day ${day}`;
  dayTitle.textContent = `${titlePrefix}: ${data.title.replace(/^Day \d+:\s*/, '')}`;

  taskList.innerHTML = data.items.map((it,i)=>{
    const key = `${map.track}-${map.day}-${i}`;
    const on = !!checks[key];
    const links = (it.links||[]).map(l => `<a href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join(' • ');
    return `<li class="task">
      <div class="check ${on?'on':''}" data-i="${i}">${on ? '✓' : ''}</div>
      <div class="content">
        <h4>${it.label}</h4>
        <div class="meta"><span class="badge">${it.badge}</span><span class="time">${it.time}</span></div>
        <p class="desc">${it.details}</p>
        <div class="outcomes">
          <p><b>What you learned:</b> ${it.learn}</p>
          <p><b>What you did:</b> ${it.do}</p>
          <p><b>AWS tie‑in:</b> ${it.aws}</p>
        </div>
        <div class="links">${links}</div>
      </div>
    </li>`;
  }).join("");

  resumeBullet.textContent = data.resume || "";

  document.querySelectorAll(".check").forEach(el => {
    el.addEventListener("click", ()=> {
      const i = Number(el.dataset.i);
      const key = `${map.track}-${map.day}-${i}`;
      checks[key] = !checks[key];
      localStorage.setItem("cli.checks", JSON.stringify(checks));
      const both = (!!checks[`${map.track}-${map.day}-0`] && !!checks[`${map.track}-${map.day}-1`]);
      if (both) {
        if (lastCompletedDay === (day-1)) streak += 1;
        if (lastCompletedDay < day) lastCompletedDay = day;
        localStorage.setItem("cli.streak", String(streak));
        localStorage.setItem("cli.lastDay", String(lastCompletedDay));
      }
      renderDay(); renderProgress();
    });
  });

  copyBullet.onclick = async () => {
    try { await navigator.clipboard.writeText(resumeBullet.textContent); copyBullet.textContent = "Copied!"; setTimeout(()=> copyBullet.textContent = "Copy bullet", 1200); }
    catch(e){ console.warn(e); }
  };
}

const init = () => { elMode.value = mode; elTrack.value = track; day = getStoredDay(); renderDay(); renderProgress(); };
prevBtn.addEventListener("click", ()=>{ const len = (mode === "guided") ? TOTAL_DAYS : LENGTHS[track]; day = Math.max(1, day-1); renderDay(); });
nextBtn.addEventListener("click", ()=>{ const len = (mode === "guided") ? TOTAL_DAYS : LENGTHS[track]; day = Math.min(len, day+1); renderDay(); });
elTrack.addEventListener("change", ()=>{ track = elTrack.value; localStorage.setItem("cli.track", track); if (mode==='free') day = getStoredDay(); renderDay(); renderProgress(); });
elMode.addEventListener("change", ()=>{ mode = elMode.value; localStorage.setItem("cli.mode", mode); day = getStoredDay(); renderDay(); renderProgress(); });
resetBtn.addEventListener("click", ()=>{
  checks = {}; streak = 0; lastCompletedDay = 0;
  localStorage.setItem("cli.checks", JSON.stringify(checks));
  localStorage.setItem("cli.streak", "0");
  localStorage.setItem("cli.lastDay", "0");
  if (mode === "guided") localStorage.setItem("cli.day.guided", "1");
  else localStorage.setItem(`cli.day.${track}`, "1");
  renderDay(); renderProgress();
});
enableAlerts.addEventListener("click", async ()=>{
  try{ const perm = await Notification.requestPermission();
    if (perm === "granted"){ new Notification("CLI Mastery", { body: "Daily reminders enabled." }); enableAlerts.textContent = "Alerts Enabled"; }
  } catch(e){ console.warn(e); }
});
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e)=>{ e.preventDefault(); deferredPrompt = e; document.getElementById("installBtn").style.display='inline-block'; });
document.getElementById("installBtn").addEventListener('click', async ()=>{ if (!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; });
document.getElementById("offlineBtn").addEventListener('click', async ()=>{
  try{ const reg = await navigator.serviceWorker.register('./service-worker.js');
    if (reg){ document.getElementById("swDot").classList.remove('offline'); document.getElementById("swDot").classList.add('online'); document.getElementById("swText").textContent = 'Offline enabled'; }
  } catch(e){ console.error(e); }
});
init();

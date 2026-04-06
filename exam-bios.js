(function () {
  "use strict";

  const MC_QUESTIONS = [
    { n: 1, q: "What does BIOS stand for?", opts: ["Basic Internal Operating System", "Basic Input/Output System", "Binary Input/Output System", "Basic Integrated Operating Software"] },
    { n: 2, q: "Which of the following BEST describes the role of the BIOS?", opts: ["It stores user files permanently", "It manages internet connectivity", "It acts as the interface between software and hardware", "It controls the GPU's display output"] },
    { n: 3, q: "The BIOS is the combination of which of the following?", opts: ["Motherboard BIOS only", "OS and hardware drivers", "Motherboard BIOS, add-on card BIOS, and device drivers", "CPU and RAM firmware"] },
    { n: 4, q: "In the layered computer system, which layer is at the HIGHEST level?", opts: ["Hardware", "Operating System", "BIOS Interface", "Application"] },
    { n: 5, q: "What does API stand for?", opts: ["Application Program Interface", "Automated Processing Input", "Advanced Program Interpreter", "Application Processing Integration"] },
    { n: 6, q: "Through what interface does the Application communicate with the Operating System?", opts: ["BIOS Interface", "GUI", "API", "Driver"] },
    { n: 7, q: "The operating system communicates with the hardware through which interface?", opts: ["API", "BIOS Interface", "GUI", "Bootstrap Loader"] },
    { n: 8, q: "What is the purpose of the BIOS layer in terms of hardware differences?", opts: ["It speeds up the hardware", "It masks hardware differences by presenting a common interface to the OS", "It replaces the OS", "It upgrades the hardware automatically"] },
    { n: 9, q: "What type of chip package is RECTANGULAR in shape?", opts: ["PLCC", "BIOS", "DIP", "ROM"] },
    { n: 10, q: "What type of chip package is SQUARE in shape?", opts: ["DIP", "PLCC", "POST", "RAM"] },
    { n: 11, q: "How is the capacity of BIOS chips measured?", opts: ["Gigabytes (GB)", "Kilobytes (KB)", "Megabits (Mb)", "Terabytes (TB)"] },
    { n: 12, q: "Most modern BIOS chips are how large?", opts: ["1Mb (128KB)", "4Mb (512KB)", "2Mb (256KB)", "8Mb (1MB)"] },
    { n: 13, q: "What does the size of the BIOS chip determine?", opts: ["Processing speed", "Number of features available", "Boot time", "System performance"] },
    { n: 14, q: "Which component of the BIOS performs a quick check on critical components at startup?", opts: ["Bootstrap Loader", "System Configuration Utility", "BIOS Interface", "POST (Power-On Self Test)"] },
    { n: 15, q: "What does the Bootstrap Loader scan for during the boot process?", opts: ["Available RAM", "A valid master boot sector on all available drives", "The BIOS version", "Connected network drives"] },
    { n: 16, q: "Even modern operating systems like Windows still use BIOS core drivers in which mode?", opts: ["Normal mode", "Gaming mode", "Safe/troubleshooting mode", "Sleep mode"] },
    { n: 17, q: "Why are motherboards sold with configurable BIOS settings?", opts: ["To allow manufacturers to charge more", "Because it is impossible to pre-optimize for every hardware combination", "To prevent users from changing hardware", "To ensure compatibility with only one brand"] },
    { n: 18, q: 'The term "flash" or "flashing" refers to what action?', opts: ["Restarting the computer", "Deleting BIOS settings", "Updating the BIOS", "Installing a new OS"] },
    { n: 19, q: "Before updating the BIOS, what should you determine first?", opts: ["The size of the BIOS chip", "Your current BIOS version/ID", "The manufacturer of your GPU", "The amount of available RAM"] },
    { n: 20, q: "Where should you BEST obtain a BIOS update?", opts: ["Any hardware download site", "Unofficial mirrors", "The motherboard manufacturer's official website", "Torrent websites"] },
    { n: 21, q: "What can happen if you flash a BIOS update meant for a different motherboard?", opts: ["The system runs faster", "Nothing happens", "The motherboard will likely fail", "The OS gets reinstalled"] },
    { n: 22, q: "When flashing the BIOS using AwardFlash, what type of environment is required?", opts: ["Windows environment", "Linux terminal", "Real mode DOS", "Safe Mode in Windows"] },
    { n: 23, q: "What file extension does a BIOS image file typically have?", opts: [".exe or .bat", ".bin or .rom", ".iso or .img", ".sys or .dll"] },
    { n: 24, q: "What happens to CMOS data after the BIOS is flashed using the recommended AwardFlash command?", opts: ["It is backed up automatically", "It is transferred to the new BIOS", "It is cleared/erased", "It remains unchanged"] },
    { n: 25, q: "What key is most commonly used to access the AwardBIOS setup utility?", opts: ["F2", "Esc", "Del", "F10"] },
    { n: 26, q: "In the BIOS setup utility, which keys are used to CHANGE the value of a BIOS option?", opts: ["Ctrl + Alt keys", "+ or − keys (or Page Up / Page Down)", "Tab and Shift keys", "F1 and F2 keys"] },
    { n: 27, q: "If a BIOS ID is numbered, which number represents the NEWEST version?", opts: ["00", "01", "02", "They are all the same"] },
    { n: 28, q: "If BIOS IDs use letters, which ID is the NEWEST?", opts: ["AA", "AB", "AC", "They are all the same"] },
    { n: 29, q: "What should you do if your current BIOS ID is already the latest version?", opts: ["Flash the BIOS anyway for safety", "Download the oldest version instead", "No need to update; just check back occasionally", "Reinstall the operating system"] },
    { n: 30, q: "According to the document, what is the CRUX (main purpose) of the book?", opts: ["Teaching users how to install an OS", "Explaining hardware assembly", "Optimizing the BIOS for proper operation and maximum performance", "Showing how to replace BIOS chips"] },
  ];

  const MC_ANSWERS = ["B", "C", "C", "D", "A", "C", "B", "B", "C", "B", "C", "C", "B", "D", "B", "C", "B", "C", "B", "C", "C", "C", "B", "C", "C", "B", "C", "C", "C", "C"];

  const ID_QUESTIONS = [
    "The full meaning of the acronym BIOS.",
    "The interface between the Application and the Operating System.",
    "The rectangular BIOS chip package type.",
    "The square BIOS chip package type.",
    "The diagnostic test run automatically when you power on the computer.",
    "The BIOS component that scans for a valid master boot sector and loads the OS.",
    "The unit used to measure BIOS chip capacity.",
    "The term used to describe the act of updating the BIOS.",
    "The most common DOS-based flash utility used for motherboards with AwardBIOS.",
    "The key most commonly pressed to enter the AwardBIOS setup utility.",
    "The chip that stores BIOS configuration settings and is cleared during a BIOS flash.",
    "The file extensions used for BIOS image files (give both).",
    "The full meaning of OEM.",
    "The full meaning of GUI.",
    "The area on a drive that contains code to initiate the loading of the operating system.",
    "The type of mode in which modern operating systems like Windows still rely on BIOS core drivers.",
    "The key you can press during bootup to freeze the screen and read the BIOS ID.",
    "The section of a manufacturer's website where BIOS updates are typically found.",
    "The size (in Mb and KB) of most modern BIOS chips.",
    "The full meaning of DIP as used in describing BIOS chip packaging.",
  ];

  const ID_KEYS = [
    ["basic input output system"],
    ["api", "application program interface", "application programming interface"],
    ["dip", "dual in line package"],
    ["plcc", "plastic leaded chip carrier"],
    ["post", "power on self test"],
    ["bootstrap loader"],
    ["megabits", "mb", "megabit"],
    ["flashing", "flash"],
    ["awardflash", "award flash"],
    ["del", "delete key", "delete"],
    ["cmos"],
    [],
    ["oem", "original equipment manufacturer"],
    ["gui", "graphical user interface"],
    ["master boot sector", "boot sector"],
    ["safe mode", "troubleshooting mode", "safe troubleshooting mode"],
    ["pause key", "pause"],
    ["downloads section", "support section", "downloads", "support", "download"],
    ["2mb 256kb", "2 mb 256 kb", "2mb 256 kb", "256kb 2mb", "2 megabit 256 kilobyte"],
    ["dual in line package", "dip"],
  ];

  const ID_OFFICIAL = [
    "Basic Input/Output System",
    "API (Application Program Interface)",
    "DIP (Dual In-line Package)",
    "PLCC (Plastic Leaded Chip Carrier)",
    "POST (Power-On Self Test)",
    "Bootstrap Loader",
    "Megabits (Mb)",
    "Flashing / Flash",
    "AwardFlash",
    "Del (Delete) key",
    "CMOS",
    ".bin and .rom",
    "Original Equipment Manufacturer",
    "Graphical User Interface",
    "Master Boot Sector",
    "Safe Mode / Troubleshooting Mode",
    "Pause key",
    "Downloads or Support section",
    "2Mb (256KB)",
    "Dual In-line Package",
  ];

  const LETTERS = ["A", "B", "C", "D"];

  function normalize(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[’']/g, "'")
      .replace(/\//g, " ")
      .replace(/-/g, " ")
      .replace(/[()[\]]/g, "")
      .replace(/\s+/g, " ")
      .replace(/[.,;:]/g, "")
      .trim();
  }

  function matchBinRomExtensions(raw) {
    let s = String(raw || "").toLowerCase().replace(/\./g, " ");
    s = s.replace(/\s+/g, " ").trim();
    return /\bbin\b/.test(s) && /\brom\b/.test(s);
  }

  function idMatches(input, acceptedList) {
    const n = normalize(input);
    if (!n) return false;
    return acceptedList.some(function (acc) {
      const a = normalize(acc);
      if (n === a) return true;
      if (a.length >= 2 && a.length <= 3) {
        return n === a;
      }
      if (a.length >= 4 && (n.includes(a) || a.includes(n))) return true;
      return false;
    });
  }

  function idItemIsCorrect(idx, raw) {
    if (idx === 11) {
      return matchBinRomExtensions(raw);
    }
    return idMatches(raw, ID_KEYS[idx]);
  }

  function applyMcItemGlow(qnum) {
    const idx = MC_QUESTIONS.findIndex(function (q) {
      return q.n === qnum;
    });
    if (idx < 0) return;
    const block = document.querySelector('.mc-item[data-q="' + qnum + '"]');
    if (!block) return;
    block.classList.remove("answer-correct", "answer-incorrect");
    const selected = document.querySelector('input[name="mc_' + qnum + '"]:checked');
    if (!selected) return;
    const ok = selected.value === MC_ANSWERS[idx];
    block.classList.add(ok ? "answer-correct" : "answer-incorrect");
  }

  function applyIdItemGlow(idNum) {
    const idx = idNum - 1;
    if (idx < 0 || idx >= ID_QUESTIONS.length) return;
    const block = document.querySelector('.id-item[data-id="' + idNum + '"]');
    const input = document.getElementById("id_" + idNum);
    if (!block || !input) return;
    block.classList.remove("answer-correct", "answer-incorrect");
    if (!String(input.value).trim()) return;
    const ok = idItemIsCorrect(idx, input.value);
    block.classList.add(ok ? "answer-correct" : "answer-incorrect");
  }

  function renderMC() {
    const container = document.getElementById("mc-container");
    const frag = document.createDocumentFragment();
    MC_QUESTIONS.forEach(function (item) {
      const wrap = document.createElement("div");
      wrap.className = "mc-item";
      wrap.setAttribute("data-q", String(item.n));
      const stem = document.createElement("p");
      stem.className = "mc-stem";
      stem.textContent = item.n + ". " + item.q;
      const opts = document.createElement("div");
      opts.className = "mc-options";
      item.opts.forEach(function (text, oi) {
        const lab = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "mc_" + item.n;
        radio.value = LETTERS[oi];
        const span = document.createElement("span");
        span.textContent = LETTERS[oi] + ") " + text;
        radio.addEventListener("change", function () {
          applyMcItemGlow(item.n);
        });
        lab.appendChild(radio);
        lab.appendChild(span);
        opts.appendChild(lab);
      });
      wrap.appendChild(stem);
      wrap.appendChild(opts);
      frag.appendChild(wrap);
    });
    container.appendChild(frag);
  }

  function renderID() {
    const container = document.getElementById("id-container");
    const frag = document.createDocumentFragment();
    ID_QUESTIONS.forEach(function (text, i) {
      const num = i + 1;
      const wrap = document.createElement("div");
      wrap.className = "id-item";
      wrap.setAttribute("data-id", String(num));
      const lab = document.createElement("label");
      lab.setAttribute("for", "id_" + num);
      lab.textContent = num + ". " + text;
      const input = document.createElement("input");
      input.type = "text";
      input.name = "id_" + num;
      input.id = "id_" + num;
      input.setAttribute("autocomplete", "off");
      input.addEventListener("input", function () {
        applyIdItemGlow(num);
      });
      wrap.appendChild(lab);
      wrap.appendChild(input);
      frag.appendChild(wrap);
    });
    container.appendChild(frag);
  }

  function renderAnswerKey() {
    const el = document.getElementById("answer-key-content");
    const mcTitle = document.createElement("p");
    mcTitle.innerHTML = "<strong>Part I — Multiple Choice</strong>";
    const mcGrid = document.createElement("div");
    mcGrid.className = "key-grid";
    MC_ANSWERS.forEach(function (ans, i) {
      const d = document.createElement("div");
      const li = LETTERS.indexOf(ans);
      const label = li >= 0 ? MC_QUESTIONS[i].opts[li] : "";
      d.textContent = i + 1 + ". " + ans + " — " + label;
      mcGrid.appendChild(d);
    });
    const idTitle = document.createElement("p");
    idTitle.innerHTML = "<strong>Part II — Identification</strong>";
    idTitle.style.marginTop = "1rem";
    const idGrid = document.createElement("div");
    idGrid.className = "key-grid";
    ID_OFFICIAL.forEach(function (ans, i) {
      const d = document.createElement("div");
      d.textContent = i + 1 + ". " + ans;
      idGrid.appendChild(d);
    });
    el.innerHTML = "";
    el.appendChild(mcTitle);
    el.appendChild(mcGrid);
    el.appendChild(idTitle);
    el.appendChild(idGrid);
  }

  function clearAnswerGlows() {
    document.querySelectorAll(".mc-item.answer-correct, .mc-item.answer-incorrect").forEach(function (el) {
      el.classList.remove("answer-correct", "answer-incorrect");
    });
    document.querySelectorAll(".id-item.answer-correct, .id-item.answer-incorrect").forEach(function (el) {
      el.classList.remove("answer-correct", "answer-incorrect");
    });
  }

  function grade() {
    clearAnswerGlows();

    let mcCorrect = 0;
    const mcRows = [];
    MC_QUESTIONS.forEach(function (item, i) {
      const name = "mc_" + item.n;
      const selected = document.querySelector('input[name="' + name + '"]:checked');
      const user = selected ? selected.value : "—";
      const correct = MC_ANSWERS[i];
      const ok = user === correct;
      if (ok) mcCorrect++;
      mcRows.push({ num: item.n, user: user, correct: correct, ok: ok });
    });

    let idCorrect = 0;
    const idRows = [];
    for (let i = 0; i < ID_QUESTIONS.length; i++) {
      const input = document.getElementById("id_" + (i + 1));
      const raw = input ? input.value : "";
      const ok = idItemIsCorrect(i, raw);
      if (ok) idCorrect++;
      idRows.push({ num: i + 1, user: raw.trim() || "—", ok: ok, official: ID_OFFICIAL[i] });
    }

    const totalMC = MC_QUESTIONS.length;
    const totalID = ID_QUESTIONS.length;
    const total = totalMC + totalID;
    const score = mcCorrect + idCorrect;

    const summary = document.getElementById("results-summary");
    summary.textContent =
      "Score: " +
      score +
      " / " +
      total +
      " (Part I: " +
      mcCorrect +
      "/" +
      totalMC +
      "; Part II: " +
      idCorrect +
      "/" +
      totalID +
      ").";

    const detail = document.getElementById("results-detail");
    let html = "<h3>Part I detail</h3><table><thead><tr><th>#</th><th>Your answer</th><th>Key</th></tr></thead><tbody>";
    mcRows.forEach(function (r) {
      const cls = r.ok ? "correct" : "incorrect";
      html += "<tr class='" + cls + "'><td>" + r.num + "</td><td>" + r.user + "</td><td>" + r.correct + "</td></tr>";
    });
    html += "</tbody></table>";

    html += "<h3>Part II detail</h3><table><thead><tr><th>#</th><th>Your answer</th><th>Status</th></tr></thead><tbody>";
    idRows.forEach(function (r) {
      const cls = r.ok ? "correct" : "incorrect";
      html +=
        "<tr class='" +
        cls +
        "'><td>" +
        r.num +
        "</td><td>" +
        escapeHtml(r.user) +
        "</td><td>" +
        (r.ok ? "Correct" : "Incorrect — key: " + escapeHtml(r.official)) +
        "</td></tr>";
    });
    html += "</tbody></table>";
    detail.innerHTML = html;

    mcRows.forEach(function (r) {
      const block = document.querySelector('.mc-item[data-q="' + r.num + '"]');
      if (block) {
        block.classList.add(r.ok ? "answer-correct" : "answer-incorrect");
      }
    });
    idRows.forEach(function (r) {
      const block = document.querySelector('.id-item[data-id="' + r.num + '"]');
      if (block) {
        block.classList.add(r.ok ? "answer-correct" : "answer-incorrect");
      }
    });

    document.getElementById("results-panel").classList.remove("hidden");
    document.getElementById("results-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function escapeHtml(t) {
    const div = document.createElement("div");
    div.textContent = t;
    return div.innerHTML;
  }

  function init() {
    renderMC();
    renderID();
    renderAnswerKey();

    const today = new Date().toISOString().slice(0, 10);
    const dateInput = document.getElementById("exam_date");
    if (dateInput) dateInput.value = today;

    document.getElementById("exam-form").addEventListener("submit", function (e) {
      e.preventDefault();
      grade();
    });

    document.getElementById("btn-reset").addEventListener("click", function () {
      if (!confirm("Clear all answers? This cannot be undone.")) return;
      clearAnswerGlows();
      document.getElementById("exam-form").reset();
      document.getElementById("results-panel").classList.add("hidden");
      if (dateInput) dateInput.value = today;
    });

    document.getElementById("btn-print").addEventListener("click", function () {
      window.print();
    });

    document.getElementById("btn-toggle-key").addEventListener("click", function () {
      const key = document.getElementById("answer-key-content");
      const hidden = key.classList.toggle("hidden");
      this.textContent = hidden ? "Show Answer Key" : "Hide Answer Key";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

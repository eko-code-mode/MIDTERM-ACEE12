(function () {
  "use strict";

  const MC_QUESTIONS = [
    { n: 1, q: "What is the main electronic component of the first generation of computers?", opts: ["Transistor", "Integrated Circuit", "Vacuum tube", "Microprocessor"] },
    { n: 2, q: "Which generation of computers introduced the transistor as its core technology?", opts: ["First generation", "Second generation", "Third generation", "Fourth generation"] },
    { n: 3, q: "Approximately how many vacuum tube computers were produced between 1942 and 1963?", opts: ["About 10", "About 50", "About 100", "About 1,000"] },
    { n: 4, q: "What does VLSI stand for?", opts: ["Very Large Silicon Interface", "Very Large-Scale Integration", "Virtual Logic System Integration", "Variable Level Silicon Integration"] },
    { n: 5, q: "Which of the following correctly describes RAM?", opts: ["Permanently stores data; non-volatile", "Temporarily stores data; non-volatile", "Temporarily stores data; volatile", "Permanently stores data; volatile"] },
    { n: 6, q: "Third generation computers were commonly referred to as what?", opts: ["Supercomputers", "Personal computers", "Mainframes", "Minicomputers"] },
    { n: 7, q: "Which generation introduced networking — connecting two or more computer systems together?", opts: ["Second generation", "Third generation", "Fourth generation", "Fifth generation"] },
    { n: 8, q: "What is ULSI, and which generation is it associated with?", opts: ["Thousands of transistors on one chip; fourth generation", "Millions of transistors on one chip; fifth generation", "Hundreds of transistors on one chip; third generation", "Millions of transistors on one chip; fourth generation"] },
    { n: 9, q: "Which of the following is an example of a first generation computer?", opts: ["IBM 360", "Apple Macintosh", "PDP-11", "ENIAC"] },
    { n: 10, q: "What input/output devices were used in first generation computers?", opts: ["Keyboard and monitor", "Touchscreen and speech input", "Punched cards and paper tape", "Magnetic tape and printer"] },
    { n: 11, q: "Which programming languages were introduced during the second generation?", opts: ["Machine language and Assembly", "FORTRAN, ALGOL, and COBOL", "Natural language and BASIC", "Python and Java"] },
    { n: 12, q: "What type of memory was used in second generation computers?", opts: ["Magnetic drum", "Semiconductor memory", "Magnetic core", "Flash storage"] },
    { n: 13, q: "Which of the following best describes ROM?", opts: ["Volatile memory that loses data when power is off", "Non-volatile memory that retains data when power is off", "Temporary storage for active programs", "Memory that can be rewritten freely"] },
    { n: 14, q: "Transistors were invented at which institution?", opts: ["MIT", "IBM Research", "Stanford University", "Bell Labs"] },
    { n: 15, q: "Which generation of computers is based on artificial intelligence and parallel processing?", opts: ["Third generation", "Fourth generation", "Fifth generation", "Second generation"] },
    { n: 16, q: "What does parallel processing mean?", opts: ["Using one powerful microprocessor to handle all tasks", "Using two or more microprocessors to run tasks simultaneously", "Processing data one instruction at a time", "Storing data in parallel memory banks"] },
    { n: 17, q: "Which of the following is correctly matched to the fourth generation?", opts: ["ENIAC — vacuum tube", "IBM PC — VLSI microprocessor", "IBM 1401 — transistor", "UNIVAC 1108 — integrated circuit"] },
    { n: 18, q: "What language capability distinguishes fifth generation computers from all earlier generations?", opts: ["Assembly language", "High-level programming language", "Machine language", "Natural language (human language)"] },
    { n: 19, q: "Which generation saw the emergence of personal computers for individual home and office use?", opts: ["Second generation", "Third generation", "Fourth generation", "Fifth generation"] },
    { n: 20, q: "What is the correct order of main components across the five generations?", opts: ["Transistor → Vacuum tube → IC → VLSI → ULSI", "Vacuum tube → Transistor → IC → VLSI → ULSI", "IC → Transistor → Vacuum tube → ULSI → VLSI", "Vacuum tube → IC → Transistor → VLSI → ULSI"] },
  ];

  const MC_ANSWERS = ["C", "B", "C", "B", "C", "D", "C", "B", "D", "C", "B", "C", "B", "D", "C", "B", "B", "D", "C", "B"];

  const MC_KEY_LABELS = [
    "Vacuum tube",
    "Second generation",
    "About 100",
    "Very Large-Scale Integration",
    "Temporarily stores data; volatile",
    "Minicomputers",
    "Fourth generation",
    "Millions of transistors; fifth generation",
    "ENIAC",
    "Punched cards and paper tape",
    "FORTRAN, ALGOL, and COBOL",
    "Magnetic core",
    "Non-volatile; retains data when power is off",
    "Bell Labs",
    "Fifth generation",
    "Two or more microprocessors run tasks simultaneously",
    "IBM PC — VLSI microprocessor",
    "Natural language (human language)",
    "Fourth generation",
    "Vacuum tube → Transistor → IC → VLSI → ULSI",
  ];

  const ID_QUESTIONS = [
    "The main electronic component of first generation computers that controls the flow of electrons in a vacuum and was used as a switch or amplifier.",
    "The type of memory that is volatile — meaning its contents are completely lost when the computer is turned off.",
    "The technology used in fourth generation computers that places thousands of transistors on a single microchip.",
    "The technology used in fifth generation computers that places millions of transistors on a single microchip.",
    "The institution where transistors were invented, making second generation computers possible.",
    "The name given to third generation computers because they were significantly smaller and cheaper than earlier computers.",
    "The lowest-level programming language, consisting entirely of binary code (0s and 1s), used in first generation computers.",
    "The type of memory that is non-volatile — meaning its contents are retained even when the computer is powered off.",
    "The method used in fifth generation computers where two or more microprocessors run tasks at the same time to increase speed.",
    "The first generation computer considered one of the earliest general-purpose electronic computers, built by Eckert and Mauchly.",
    "The term for a group of two or more computer systems linked together, which became prominent in the fourth generation.",
    "The high-level programming language introduced in 1956 during the second generation, primarily used for scientific and mathematical computing.",
    "The main electronic component of third generation computers — a chip containing multiple transistors embedded on a silicon semiconductor.",
    "A single chip that contains the entire central processing unit, introduced in the fourth generation and made possible by VLSI.",
    "The type of storage used in first generation computers as their primary memory.",
    "The programming language introduced in the second generation that uses symbolic codes or mnemonics instead of pure binary.",
    "The generation of computers that includes modern everyday devices such as desktops, laptops, tablets, and smartphones.",
    "The input device used by both first and second generation computers, where data was encoded by punching holes into cards.",
    "The material used as a base for making integrated circuits and transistors, commonly referred to in the context of \"silicon chips.\"",
    "The generation of computers that first introduced operating systems and high-level language support, using integrated circuits as the main component.",
  ];

  const ID_KEYS = [
    ["vacuum tube", "vacuum tubes"],
    ["ram", "random access memory"],
    ["vlsi", "very large scale integration"],
    ["ulsi", "ultra large scale integration"],
    ["bell labs"],
    ["minicomputers", "minicomputer"],
    ["machine language"],
    ["rom", "read only memory"],
    ["parallel processing"],
    ["eniac"],
    ["network", "networking"],
    ["fortran"],
    ["integrated circuit", "ic"],
    ["microprocessor"],
    ["magnetic drum"],
    ["assembly language"],
    ["fifth generation", "5th generation"],
    ["punched card", "punch card", "punched cards", "punch cards"],
    ["silicon", "semiconductor"],
    ["third generation", "3rd generation"],
  ];

  const ID_OFFICIAL = [
    "Vacuum tube",
    "RAM (Random-Access Memory)",
    "VLSI (Very Large-Scale Integration)",
    "ULSI (Ultra Large-Scale Integration)",
    "Bell Labs",
    "Minicomputers",
    "Machine language",
    "ROM (Read-Only Memory)",
    "Parallel processing",
    "ENIAC",
    "Network",
    "FORTRAN",
    "Integrated Circuit (IC)",
    "Microprocessor",
    "Magnetic drum",
    "Assembly language",
    "Fifth generation",
    "Punched card",
    "Silicon (semiconductor)",
    "Third generation",
  ];

  const LETTERS = ["A", "B", "C", "D"];

  function normalize(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[’']/g, "'")
      .replace(/-/g, " ")
      .replace(/[()[\]]/g, "")
      .replace(/\s+/g, " ")
      .replace(/[.,;:]/g, "")
      .trim();
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
    if (idx < 0 || idx >= ID_KEYS.length) return;
    const block = document.querySelector('.id-item[data-id="' + idNum + '"]');
    const input = document.getElementById("id_" + idNum);
    if (!block || !input) return;
    block.classList.remove("answer-correct", "answer-incorrect");
    if (!String(input.value).trim()) return;
    const ok = idMatches(input.value, ID_KEYS[idx]);
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
      d.textContent = i + 1 + ". " + ans + " — " + MC_KEY_LABELS[i];
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
      const ok = idMatches(raw, ID_KEYS[i]);
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

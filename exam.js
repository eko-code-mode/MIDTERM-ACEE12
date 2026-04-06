(function () {
  "use strict";

  const MC_QUESTIONS = [
    { n: 1, q: "What is a microprocessor?", opts: ["A type of memory chip", "The controlling unit of a microcomputer fabricated on a small chip", "An output device of a computer", "A type of storage device"] },
    { n: 2, q: "Which of the following is NOT a component of a microprocessor?", opts: ["ALU", "Register Array", "Hard Drive", "Control Unit"] },
    { n: 3, q: "What does ALU stand for?", opts: ["Automatic Loading Unit", "Array Logic Unit", "Arithmetic Logic Unit", "Advanced Logical Unit"] },
    { n: 4, q: "Which component of the microprocessor controls the flow of data and instructions within the computer?", opts: ["ALU", "Register Array", "Accumulator", "Control Unit"] },
    { n: 5, q: "In the block diagram of a basic microcomputer, which component has a BIDIRECTIONAL connection with the microprocessor?", opts: ["Input Device", "Output Device", "Memory", "Register"] },
    { n: 6, q: "What is the correct sequence of microprocessor operation?", opts: ["Decode → Fetch → Execute", "Execute → Decode → Fetch", "Fetch → Execute → Decode", "Fetch → Decode → Execute"] },
    { n: 7, q: "After all instructions are executed, the microprocessor sends the result to the output port in what format?", opts: ["ASCII", "Decimal", "Binary", "Hexadecimal"] },
    { n: 8, q: "What stops the Fetch-Decode-Execute cycle of a microprocessor?", opts: ["A RESET instruction", "A STOP instruction", "A HALT command from the user", "When the register is full"] },
    { n: 9, q: "Clock speed of a microprocessor is measured in:", opts: ["Bytes and Kilobytes", "Volts and Amperes", "MHz or GHz", "Bits per second"] },
    { n: 10, q: "An 8-bit microprocessor can process how many bits at a time?", opts: ["4 bits", "16 bits", "8 bits", "64 bits"] },
    { n: 11, q: "What is the range of word length in microprocessors?", opts: ["1 bit to 32 bits", "4 bits to 64 bits", "8 bits to 128 bits", "2 bits to 16 bits"] },
    { n: 12, q: "Which technology is responsible for the low power consumption of microprocessors?", opts: ["VLSI Technology", "TTL Technology", "Metal Oxide Semiconductor (MOS) Technology", "CMOS Technology"] },
    { n: 13, q: "Which feature of a microprocessor allows the same chip to be used in many different applications?", opts: ["Reliability", "Low Power Consumption", "Versatility", "Cost-effectiveness"] },
    { n: 14, q: "A microprocessor can be classified into how many categories?", opts: ["2", "4", "5", "3"] },
    { n: 15, q: "What does RISC stand for?", opts: ["Rapid Instruction Set Computer", "Reduced Instruction Set Computer", "Random Instruction Set Computer", "Reduced Integrated Set Computer"] },
    { n: 16, q: "How many clock cycles does each instruction in a RISC processor require?", opts: ["3", "2", "Multiple", "1"] },
    { n: 17, q: "Which of the following is a disadvantage of RISC processors?", opts: ["Slow execution time", "High power consumption", "Requires more RAM due to more lines of code", "Complex instructions"] },
    { n: 18, q: "Which of the following is an example of a RISC processor?", opts: ["Intel 80486", "IBM 370/168", "VAX 11/780", "Power PC 601"] },
    { n: 19, q: "RISC architecture uses what type of control unit?", opts: ["Microprogrammed Control Unit", "Hardwired Control Unit", "Sequential Control Unit", "Digital Control Unit"] },
    { n: 20, q: "What does CISC stand for?", opts: ["Complex Instruction Set Computer", "Centralized Instruction Set Computer", "Compiled Instruction Set Computer", "Complex Integrated System Computer"] },
    { n: 21, q: "Which of the following is a characteristic of CISC processors?", opts: ["Fixed length instruction formats", "One cycle execution time", "Variable length instruction formats", "Uses only LOAD and STORE to access memory"] },
    { n: 22, q: "Which of the following is an example of a CISC processor?", opts: ["Power PC 620", "MIPS R10000", "Intel 80486", "DEC Alpha 21164"] },
    { n: 23, q: "CISC architecture uses what type of control memory?", opts: ["Instruction Cache", "Data Cache", "Micro Program Control Memory", "Register Memory"] },
    { n: 24, q: "Which Intel math coprocessor is used with the Intel 8086?", opts: ["80287", "80387", "80486", "8087"] },
    { n: 25, q: "Which special processor is designed to control I/O devices with minimum CPU involvement and has its own local memory?", opts: ["Coprocessor", "Transputer", "DSP", "I/O Processor"] },
    { n: 26, q: "The Transputer was first designed in 1980 by which company?", opts: ["Intel", "IBM", "Inmos", "Texas Instruments"] },
    { n: 27, q: "What technology does the Transputer target?", opts: ["MOS Technology", "VLSI Technology", "TTL Technology", "RISC Technology"] },
    { n: 28, q: "What does DSP stand for?", opts: ["Digital Storage Processor", "Data Signal Processor", "Digital Signal Processor", "Direct Signal Processor"] },
    { n: 29, q: "Which circuit in a DSP performs the conversion of analog signals to digital form?", opts: ["ALU", "Compute Engine", "Program Memory", "ADC (Analog-to-Digital Converter)"] },
    { n: 30, q: "Which of the following is an application of a DSP processor?", opts: ["Managing keyboard input", "Controlling memory access", "Audio and video compression", "Fetching instructions from memory"] },
  ];

  const MC_ANSWERS = ["B", "C", "C", "D", "C", "D", "C", "B", "C", "C", "B", "C", "C", "D", "B", "D", "C", "D", "B", "A", "C", "C", "C", "D", "D", "C", "B", "C", "D", "C"];

  const ID_QUESTIONS = [
    "It is the complete set of instructions that the microprocessor can understand and execute.",
    "This component of the microprocessor performs arithmetic and logical operations on data received from memory or an input device.",
    "This refers to the number of bits processed in a single instruction.",
    "It is the small, fast storage locations inside the microprocessor identified by letters B, C, D, E, H, L, and the Accumulator.",
    "This is the first step in the microprocessor's operation cycle where instructions are retrieved from memory.",
    "It is the unit of measurement for clock speed equivalent to one billion cycles per second.",
    "This feature of a microprocessor refers to its ability to be used in many different applications by simply changing the software program.",
    "This type of processor is designed to reduce execution time by using a simplified instruction set where each instruction takes only one clock cycle.",
    "This type of processor is designed to minimize the number of instructions per program by embedding complex operations directly into hardware.",
    "These are the only two instructions in RISC architecture that are used to access memory locations.",
    "This component of CISC architecture stores microcode — the small sub-programs that define how complex instructions are carried out.",
    "This Intel math coprocessor is paired with the Intel 80386 processor.",
    "This special processor is designed to handle a specific function many times faster than an ordinary microprocessor.",
    "This special processor has its own local memory and special links that allow it to connect with other processors of the same type for inter-processor communication.",
    "This is the company that first designed the Transputer in 1980.",
    "This component of a DSP stores the programs that the DSP will use to process data.",
    "This component of a DSP performs all the mathematical processing by accessing the program from Program Memory and data from Data Memory.",
    "This is the Texas Instruments DSP series that is used for applications such as audio/video compression and graphics acceleration.",
    "This is the circuit inside a DSP that converts analog voltage signals into digital form by sampling at regular time intervals.",
    "This is the full name of the technology — abbreviated as VLSI — that the Transputer was designed to utilize.",
  ];

  const ID_KEYS = [
    ["instruction set"],
    ["alu", "arithmetic logic unit"],
    ["bandwidth"],
    ["register array", "registers", "register"],
    ["fetch"],
    ["ghz", "gigahertz"],
    ["versatility"],
    ["risc", "reduced instruction set computer"],
    ["cisc", "complex instruction set computer"],
    ["load and store", "load store", "load/store"],
    ["micro program control memory", "microprogram control memory", "micro program", "microprogram"],
    ["80387"],
    ["coprocessor"],
    ["transputer"],
    ["inmos"],
    ["program memory"],
    ["compute engine"],
    ["tms 320", "tms320", "tms 320 series", "tms320 series"],
    ["adc", "analog to digital converter", "analog-to-digital converter"],
    ["very large scale integration", "vlsi"],
  ];

  const ID_OFFICIAL = [
    "Instruction Set",
    "ALU (Arithmetic Logic Unit)",
    "Bandwidth",
    "Register Array",
    "Fetch",
    "GHz (Gigahertz)",
    "Versatility",
    "RISC (Reduced Instruction Set Computer)",
    "CISC (Complex Instruction Set Computer)",
    "LOAD and STORE",
    "Micro Program Control Memory",
    "80387",
    "Coprocessor",
    "Transputer",
    "Inmos",
    "Program Memory",
    "Compute Engine",
    "TMS 320 Series",
    "ADC (Analog-to-Digital Converter)",
    "Very Large Scale Integration",
  ];

  const ENUM_STEMS = [
    "Enumerate the 3 main components of a Microprocessor.",
    "Enumerate the 3 steps of how a microprocessor works in correct order.",
    "Enumerate the 3 classifications/types of Microprocessors.",
    "Enumerate the 5 features of a Microprocessor.",
    "Enumerate the 5 key terms used in a Microprocessor.",
    "Enumerate the 4 types of Special Processors.",
    "Enumerate the 3 Intel Math Coprocessors and their corresponding main processor (one pair per line, e.g. 8087 with 8086).",
    "Enumerate the 4 internal components of a DSP processor.",
    "Enumerate the 4 applications of a DSP processor.",
    "Enumerate the 4 components found in the block diagram of a basic microcomputer.",
  ];

  const ENUM_SPECS = [
    { type: "set", keys: [["alu", "arithmetic logic unit"], ["register array", "registers"], ["control unit"]] },
    { type: "ordered", keys: [["fetch"], ["decode"], ["execute"]] },
    {
      type: "set",
      keys: [["risc", "risc processors"], ["cisc", "cisc processors"], ["special processor", "special processors"]],
    },
    {
      type: "set",
      keys: [
        ["cost effective", "costeffective"],
        ["size"],
        ["low power", "low power consumption"],
        ["versatility"],
        ["reliability"],
      ],
    },
    {
      type: "set",
      keys: [["instruction set"], ["bandwidth"], ["clock speed"], ["word length"], ["data types"]],
    },
    {
      type: "set",
      keys: [
        ["coprocessor"],
        ["input output processor", "i/o processor", "io processor"],
        ["transputer"],
        ["dsp", "digital signal processor"],
      ],
    },
    { type: "pairs", pairs: [["8087", "8086"], ["80287", "80286"], ["80387", "80386"]] },
    {
      type: "set",
      keys: [["program memory"], ["data memory"], ["compute engine"], ["input output", "input/output", "i/o"]],
    },
    {
      type: "set",
      keys: [
        ["sound and music synthesis", "sound and music"],
        ["audio and video compression", "audio", "video compression"],
        ["video signal processing"],
        ["2d and 3d graphics", "2d and 3d", "graphics acceleration"],
      ],
    },
    {
      type: "set",
      keys: [["input device"], ["microprocessor", "micro processor"], ["output device"], ["memory"]],
    },
  ];

  const ENUM_OFFICIAL = [
    "ALU; Register Array; Control Unit",
    "Fetch → Decode → Execute",
    "RISC; CISC; Special Processors",
    "Cost-effective; Size; Low Power Consumption; Versatility; Reliability",
    "Instruction Set; Bandwidth; Clock Speed; Word Length; Data Types",
    "Coprocessor; I/O Processor; Transputer; DSP",
    "8087—8086; 80287—80286; 80387—80386",
    "Program Memory; Data Memory; Compute Engine; Input/Output",
    "Sound/Music synthesis; Audio/Video compression; Video signal processing; 2D/3D graphics acceleration",
    "Input Device; Microprocessor; Output Device; Memory",
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
      if (a.length >= 4 && (n.includes(a) || a.includes(n))) return true;
      return false;
    });
  }

  function parseEnumLines(raw) {
    return String(raw || "")
      .split(/\r?\n/)
      .map(function (line) {
        return normalize(line.replace(/^\s*\d+[\.\)]\s*/, "").replace(/^[-*•]\s*/, ""));
      })
      .filter(Boolean);
  }

  function enumLineMatch(userLineNorm, keyAlts) {
    if (!userLineNorm) return false;
    return keyAlts.some(function (key) {
      const nk = normalize(key);
      if (!nk) return false;
      if (userLineNorm === nk) return true;
      if (nk.length >= 4 && (userLineNorm.includes(nk) || nk.includes(userLineNorm))) return true;
      if (nk.length <= 3 && userLineNorm === nk) return true;
      return false;
    });
  }

  function enumSetCorrect(userLines, keysPerLine) {
    if (userLines.length < keysPerLine.length) return false;
    const used = {};
    for (let e = 0; e < keysPerLine.length; e++) {
      let found = false;
      for (let u = 0; u < userLines.length; u++) {
        if (used[u]) continue;
        if (enumLineMatch(userLines[u], keysPerLine[e])) {
          used[u] = true;
          found = true;
          break;
        }
      }
      if (!found) return false;
    }
    return true;
  }

  function enumOrderedCorrect(userLines, keysPerLine) {
    if (userLines.length < keysPerLine.length) return false;
    for (let i = 0; i < keysPerLine.length; i++) {
      if (!enumLineMatch(userLines[i], keysPerLine[i])) return false;
    }
    return true;
  }

  function enumPairsCorrect(userLines, pairs) {
    if (userLines.length < pairs.length) return false;
    const compact = userLines.map(function (l) {
      return String(l || "").replace(/\s/g, "");
    });
    const used = {};
    for (let p = 0; p < pairs.length; p++) {
      const d1 = pairs[p][0];
      const d2 = pairs[p][1];
      let found = false;
      for (let u = 0; u < compact.length; u++) {
        if (used[u]) continue;
        const c = compact[u];
        if (c.indexOf(d1) !== -1 && c.indexOf(d2) !== -1) {
          used[u] = true;
          found = true;
          break;
        }
      }
      if (!found) return false;
    }
    return true;
  }

  function enumItemCorrect(idx, raw) {
    const userLines = parseEnumLines(raw);
    if (userLines.length === 0) return false;
    const spec = ENUM_SPECS[idx];
    if (spec.type === "ordered") {
      return enumOrderedCorrect(userLines, spec.keys);
    }
    if (spec.type === "pairs") {
      return enumPairsCorrect(userLines, spec.pairs);
    }
    return enumSetCorrect(userLines, spec.keys);
  }

  function applyEnumGlow(num) {
    const idx = num - 1;
    if (idx < 0 || idx >= ENUM_STEMS.length) return;
    const block = document.querySelector('.enum-item[data-enum="' + num + '"]');
    const ta = document.getElementById("enum_" + num);
    if (!block || !ta) return;
    block.classList.remove("answer-correct", "answer-incorrect");
    if (!String(ta.value).trim()) return;
    const ok = enumItemCorrect(idx, ta.value);
    block.classList.add(ok ? "answer-correct" : "answer-incorrect");
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
    MC_QUESTIONS.forEach(function (item, idx) {
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

  function renderEnum() {
    const container = document.getElementById("enum-container");
    if (!container) return;
    const frag = document.createDocumentFragment();
    ENUM_STEMS.forEach(function (stem, i) {
      const num = i + 1;
      const wrap = document.createElement("div");
      wrap.className = "enum-item";
      wrap.setAttribute("data-enum", String(num));
      const lab = document.createElement("label");
      lab.setAttribute("for", "enum_" + num);
      lab.textContent = num + ". " + stem;
      const ta = document.createElement("textarea");
      ta.id = "enum_" + num;
      ta.name = "enum_" + num;
      ta.setAttribute("rows", "5");
      ta.setAttribute("autocomplete", "off");
      ta.addEventListener("input", function () {
        applyEnumGlow(num);
      });
      wrap.appendChild(lab);
      wrap.appendChild(ta);
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
      d.textContent = i + 1 + ". " + ans;
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
    const enTitle = document.createElement("p");
    enTitle.innerHTML = "<strong>Part III — Enumeration</strong>";
    enTitle.style.marginTop = "1rem";
    const enBlock = document.createElement("div");
    enBlock.className = "enum-key-block";
    ENUM_OFFICIAL.forEach(function (text, i) {
      const row = document.createElement("div");
      row.style.marginTop = "0.65rem";
      row.style.lineHeight = "1.45";
      const s = document.createElement("strong");
      s.textContent = i + 1 + ". ";
      row.appendChild(s);
      row.appendChild(document.createTextNode(text));
      enBlock.appendChild(row);
    });
    el.appendChild(enTitle);
    el.appendChild(enBlock);
  }

  function clearAnswerGlows() {
    document.querySelectorAll(".mc-item.answer-correct, .mc-item.answer-incorrect").forEach(function (el) {
      el.classList.remove("answer-correct", "answer-incorrect");
    });
    document.querySelectorAll(".id-item.answer-correct, .id-item.answer-incorrect").forEach(function (el) {
      el.classList.remove("answer-correct", "answer-incorrect");
    });
    document.querySelectorAll(".enum-item.answer-correct, .enum-item.answer-incorrect").forEach(function (el) {
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

    let enumCorrect = 0;
    const enumRows = [];
    for (let i = 0; i < ENUM_STEMS.length; i++) {
      const ta = document.getElementById("enum_" + (i + 1));
      const raw = ta ? ta.value : "";
      const ok = enumItemCorrect(i, raw);
      if (ok) enumCorrect++;
      enumRows.push({ num: i + 1, user: raw.trim() || "—", ok: ok, official: ENUM_OFFICIAL[i] });
    }

    const totalMC = MC_QUESTIONS.length;
    const totalID = ID_QUESTIONS.length;
    const totalEnum = ENUM_STEMS.length;
    const total = totalMC + totalID + totalEnum;
    const score = mcCorrect + idCorrect + enumCorrect;

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
      "; Part III: " +
      enumCorrect +
      "/" +
      totalEnum +
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
      html += "<tr class='" + cls + "'><td>" + r.num + "</td><td>" + escapeHtml(r.user) + "</td><td>" + (r.ok ? "Correct" : "Incorrect — key: " + escapeHtml(r.official)) + "</td></tr>";
    });
    html += "</tbody></table>";

    html += "<h3>Part III detail</h3><table><thead><tr><th>#</th><th>Your answer</th><th>Key (summary)</th></tr></thead><tbody>";
    enumRows.forEach(function (r) {
      const cls = r.ok ? "correct" : "incorrect";
      html +=
        "<tr class='" +
        cls +
        "'><td>" +
        r.num +
        "</td><td>" +
        escapeHtml(r.user.length > 120 ? r.user.slice(0, 120) + "…" : r.user) +
        "</td><td>" +
        escapeHtml(r.official) +
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
    enumRows.forEach(function (r) {
      const block = document.querySelector('.enum-item[data-enum="' + r.num + '"]');
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
    renderEnum();
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

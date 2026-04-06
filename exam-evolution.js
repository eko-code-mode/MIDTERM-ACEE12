(function () {
  "use strict";

  const MC_QUESTIONS = [
    { n: 1, q: "What was the first device to use a microprocessor in 1971?", opts: ["Washing Machine", "Commodore PET", "Business Calculator", "Nintendo NES"] },
    { n: 2, q: "Which household appliance first had a microchip by 1977?", opts: ["Television", "Toaster", "Refrigerator", "Washing Machine"] },
    { n: 3, q: "Which feature of a microprocessor is made possible due to Metal Oxide Semiconductor (MOS) technology?", opts: ["High Speed", "Low Power Consumption", "Small Size", "Low Cost"] },
    { n: 4, q: "What technology makes microprocessors low in cost?", opts: ["Large-Scale Integration", "Metal Oxide Semiconductor", "Integrated Circuit Technology", "Vacuum Tube Technology"] },
    { n: 5, q: "Which type of microprocessor is best described as a combination of RISC and CISC?", opts: ["Superscalar", "SIMD", "Transputer", "EPIC"] },
    { n: 6, q: "RISC processors follow a technique called pipelining. What does pipelining do?", opts: ["Increases the number of ALUs", "Overlaps instruction fetching and execution", "Reduces the number of registers", "Executes floating-point operations faster"] },
    { n: 7, q: "Which type of microprocessor is commonly used for encoding and decoding video files and converting analog to digital signals?", opts: ["SIMD Processor", "Symbolic Processor", "Digital Signal Multiprocessor", "Graphics Processor"] },
    { n: 8, q: "What does SIMD stand for?", opts: ["Serial Instruction Multiple Data", "Single Instruction Multiple Data", "Single Integrated Multiple Devices", "System Instruction Modular Data"] },
    { n: 9, q: "Which of the following is NOT an advantage of microprocessors?", opts: ["High-speed processing", "Compact size", "Leads to overheating", "Flexible in nature"] },
    { n: 10, q: "Which microprocessor type is specifically designed for artificial intelligence, expert systems, and pattern recognition?", opts: ["Bit-Slice Processor", "Transputer", "Symbolic Processor", "ASIC"] },
    { n: 11, q: "The Nintendo NES gaming console adopted the microprocessor in which year?", opts: ["1977", "1981", "1983", "1986"] },
    { n: 12, q: "Which of the following is an example of a CISC microprocessor?", opts: ["AMD K6", "Intel IA-64", "Intel Pentium", "INMOS T414"] },
    { n: 13, q: "What is the main characteristic of Superscalar Microprocessors?", opts: ["Uses only one ALU for all operations", "Executes one instruction per clock cycle", "Performs multiple tasks simultaneously", "Designed only for signal processing"] },
    { n: 14, q: "Which sector uses microprocessors for railway and airline reservation systems?", opts: ["Telecom Sector", "Hospitality Sector", "Office Automation", "Science Industry"] },
    { n: 15, q: "What type of microprocessor uses 4-bit ALUs, generators, and micro program sequencers with customizable word lengths?", opts: ["Transputer", "SIMD Processor", "Bit-Slice Processor", "Superscalar Processor"] },
    { n: 16, q: "The Osborne 1 Laptop released in 1981 weighed how much?", opts: ["5.5 kg", "7.2 kg", "10.7 kg", "13.4 kg"] },
    { n: 17, q: "Which of the following correctly describes a disadvantage of microprocessors?", opts: ["They are smaller than microcontrollers", "They support all floating-point operations", "Performance can be limited by data size", "They require vacuum tubes to operate"] },
    { n: 18, q: "RADAR, home theaters, and SONAR use which type of microprocessor?", opts: ["Graphics Processor", "Digital Signal Multiprocessor", "Transputer", "ASIC"] },
    { n: 19, q: "Which type of microprocessor is famous for managing internal components like Chip RAM and serial links?", opts: ["Bit-Slice Processor", "EPIC", "Transputer", "Symbolic Processor"] },
    { n: 20, q: "Which of the following is an example of a RISC microprocessor?", opts: ["Intel 486", "AMD K6", "Intel Itanium", "INMOS T800"] },
  ];

  const MC_ANSWERS = ["C", "D", "B", "C", "D", "B", "C", "B", "C", "C", "D", "C", "C", "B", "C", "C", "C", "B", "C", "B"];

  const ID_QUESTIONS = [
    "It is the first device ever to use a microprocessor, introduced in 1971.",
    "This feature of a microprocessor refers to its ability to be used across many different types of applications.",
    "This type of microprocessor takes only one CPU cycle to execute most instructions and uses a shorter, simpler instruction set.",
    "The technique used by RISC processors where the fetching of the next instruction overlaps with the execution of the current one.",
    "This type of processor is designed specifically for high-definition games and movies, with examples including Intel 82786 and Intel i860.",
    "The technology responsible for making microprocessors small in size through the packing of thousands of circuits into a single chip.",
    "This type of microprocessor applies one instruction to multiple sets of data simultaneously, using more than one ALU.",
    "AMD-2900 and the 29300 series are examples of this type of microprocessor that allows customizable word lengths.",
    "This sector uses microprocessors for digital telephone systems, telephone exchanges, and modems.",
    "This type of processor is a hybrid of RISC and CISC and uses parallel instructions without a fixed width. Examples include Intel IA-64 and Itanium.",
    "The year when the personal computer era began, leading to widespread use of microprocessors.",
    "This type of microprocessor is used for automotive emissions control and as a personal digital assistant, built with off-the-shelf components.",
    "The microprocessor feature that allows it to execute millions of instructions every second due to advanced technology.",
    "INMOS T414 and INMOS T800 are examples of this type of microprocessor.",
    "This disadvantage of microprocessors occurs due to continuous and prolonged use.",
    "This type of processor does not require floating-point operations and is mainly used for expert systems and machine intelligence.",
    "The music player released in 2001 by Apple that used a microprocessor.",
    "This application of microprocessors involves word processing, spreadsheet operations, and data storage in a work environment.",
    "Microprocessors generate less heat compared to this older technology that they replaced.",
    "This type of microprocessor supports performing multiple commands simultaneously and is commonly found in ALUs and multipliers.",
  ];

  const ID_KEYS = [
    ["business calculator", "calculator"],
    ["versatile", "versatility"],
    ["risc", "reduced instruction set microprocessor", "reduced instruction set computer"],
    ["pipelining", "pipeline"],
    ["graphics processor"],
    ["large scale integration", "lsi", "large scale integration technology"],
    ["simd processor", "simd", "single instruction multiple data"],
    ["bit slice processor", "bit slice", "bitslice"],
    ["telecom sector", "telecom", "telecommunications sector"],
    ["epic", "explicitly parallel instruction computing"],
    ["1991"],
    ["asic", "application specific integrated circuit"],
    ["high speed", "highspeed"],
    ["transputer"],
    ["overheating", "over heating"],
    ["symbolic processor"],
    ["ipod"],
    ["office automation"],
    ["vacuum tube", "vacuum tubes", "vacuum tube devices"],
    ["superscalar microprocessor", "superscalar"],
  ];

  const ID_OFFICIAL = [
    "Business Calculator",
    "Versatile",
    "RISC (Reduced Instruction Set Microprocessor)",
    "Pipelining",
    "Graphics Processor",
    "Large-Scale Integration (LSI)",
    "SIMD Processor",
    "Bit-Slice Processor",
    "Telecom Sector",
    "EPIC (Explicitly Parallel Instruction Computing)",
    "1991",
    "ASIC (Application Specific Integrated Circuit)",
    "High Speed",
    "Transputer",
    "Overheating",
    "Symbolic Processor",
    "iPod",
    "Office Automation",
    "Vacuum Tube Devices",
    "Superscalar Microprocessor",
  ];

  const ENUM_STEMS = [
    "Enumerate all 11 types of Microprocessors discussed in the module.",
    "Enumerate all 8 features of a Microprocessor.",
    "Enumerate the 5 advantages of Microprocessors.",
    "Enumerate the 4 disadvantages of Microprocessors.",
    "Enumerate 3 examples of CISC Microprocessors.",
    "Enumerate 3 devices or systems that use Digital Signal Multiprocessors (DSP).",
    "Enumerate the 3 earliest devices (1971–1977) that first used microprocessors.",
    "Enumerate 3 home appliances where microprocessors act as controllers.",
    "Enumerate 3 things the Telecom Sector uses microprocessors for.",
    "Enumerate 3 things the Science Industry uses microprocessors to measure.",
  ];

  const ENUM_KEYS = [
    [
      ["cisc", "complex instruction set"],
      ["risc", "reduced instruction set"],
      ["epic", "explicitly parallel instruction"],
      ["superscalar"],
      ["asic", "application specific integrated"],
      ["dsp", "digital signal"],
      ["simd"],
      ["symbolic"],
      ["bit slice", "bitslice", "bit slice processor"],
      ["transputer"],
      ["graphics", "graphics processor"],
    ],
    [
      ["low cost", "low in cost", "cost effective"],
      ["less heat", "generates less heat", "heat"],
      ["high speed"],
      ["low power", "consumes low power", "power"],
      ["portable"],
      ["small size", "small in size", "size"],
      ["versatile", "versatility"],
      ["reliable", "reliability"],
    ],
    [
      ["high speed processing", "high speed"],
      ["intelligence", "brings intelligence"],
      ["flexible", "flexibility"],
      ["compact size", "compact"],
      ["easy to maintain", "maintain"],
    ],
    [
      ["overheating", "over heating", "continuous use"],
      ["data size", "performance", "decides the performance"],
      ["microcontroller", "larger than micro"],
      ["floating point", "floatingpoint", "doesnt support floating", "no floating", "no fpu", "fpu"],
    ],
    [
      ["386", "80386", "intel 386"],
      ["486", "80486", "intel 486"],
      ["pentium"],
    ],
    [["radar"], ["home theater", "home theatre", "theater"], ["sonar"]],
    [
      ["business calculator", "calculator"],
      ["commodore pet", "pet"],
      ["washing machine", "washing"],
    ],
    [["toaster", "toasters"], ["television", "tv"], ["stereo", "stereo systems"]],
    [
      ["digital telephone", "telephone system"],
      ["telephone exchange", "exchange"],
      ["modem"],
    ],
    [["speed"], ["temperature"], ["moisture"]],
  ];

  const ENUM_OFFICIAL = [
    "11 types: CISC, RISC, EPIC, Superscalar, ASIC, DSP, SIMD, Symbolic, Bit-Slice, Transputer, Graphics — see key",
    "8 features: cost, heat, speed, power, portable, size, versatile, reliable — see key",
    "5 advantages — see key",
    "4 disadvantages — see key",
    "Intel 386, 486, Pentium — see key",
    "RADAR, Home Theaters, SONAR",
    "Business Calculator (1971), Commodore PET (1971), Washing Machine (1977)",
    "Toasters, Televisions, Stereo Systems",
    "Digital Telephone, Telephone Exchange, Modem",
    "Speed, Temperature, Moisture",
  ];

  const ENUM_KEY_DETAIL = [
    {
      title: "1. Eleven types of microprocessors",
      lines: [
        "Complex Instruction Set Microprocessors (CISC)",
        "Reduced Instruction Set Microprocessors (RISC)",
        "Explicitly Parallel Instruction Computing (EPIC)",
        "Superscalar Microprocessors",
        "Application Specific Integrated Circuit (ASIC)",
        "Digital Signal Multiprocessors (DSP)",
        "SIMD Processors",
        "Symbolic Processors",
        "Bit-Slice Processors",
        "Transputers",
        "Graphics Processors",
      ],
    },
    {
      title: "2. Eight features",
      lines: ["Low in Cost", "Generates Less Heat", "High Speed", "Consumes Low Power", "Portable", "Small in Size", "Versatile", "Reliable"],
    },
    {
      title: "3. Five advantages",
      lines: [
        "High-speed processing",
        "Brings intelligence to the system",
        "Flexible in nature",
        "Compact size",
        "Easy to maintain",
      ],
    },
    {
      title: "4. Four disadvantages",
      lines: [
        "Leads to overheating due to continuous use",
        "The data size decides the performance",
        "Larger than microcontrollers",
        "Does not support floating-point operations",
      ],
    },
    { title: "5. Three CISC examples", lines: ["Intel 386", "Intel 486", "Pentium"] },
    { title: "6. Three DSP applications", lines: ["RADAR", "Home Theaters", "SONAR"] },
    {
      title: "7. Three earliest devices",
      lines: ["Business Calculator (1971)", "Commodore PET (1971)", "Washing Machine (1977)"],
    },
    { title: "8. Three home appliances", lines: ["Toasters", "Televisions", "Stereo Systems"] },
    {
      title: "9. Three telecom uses",
      lines: ["Digital Telephone System", "Telephone Exchange", "Modem"],
    },
    { title: "10. Three science measurements", lines: ["Speed", "Temperature", "Moisture"] },
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

  function parseEnumLines(raw) {
    return String(raw || "")
      .split(/\r?\n/)
      .map(function (line) {
        return normalize(line.replace(/^\s*\d+[\.\)]\s*/, "").replace(/^[-*•]\s*/, ""));
      })
      .filter(Boolean);
  }

  function enumTokenMatch(userLineNorm, phrase) {
    const p = normalize(phrase);
    if (!p || !userLineNorm) return false;
    if (userLineNorm === p) return true;
    if (p.length >= 4 && userLineNorm.includes(p)) return true;
    if (p.length <= 3 && userLineNorm === p) return true;
    return false;
  }

  function enumLineMatchNorm(userLineNorm, keyAlts) {
    if (!userLineNorm) return false;
    return keyAlts.some(function (key) {
      return enumTokenMatch(userLineNorm, key);
    });
  }

  function enumSetCorrect(userLines, keysPerLine) {
    if (userLines.length < keysPerLine.length) return false;
    const used = {};
    for (let e = 0; e < keysPerLine.length; e++) {
      let found = false;
      for (let u = 0; u < userLines.length; u++) {
        if (used[u]) continue;
        if (enumLineMatchNorm(userLines[u], keysPerLine[e])) {
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
    return enumSetCorrect(parseEnumLines(raw), ENUM_KEYS[idx]);
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
      ta.setAttribute("rows", num === 1 ? "13" : num === 2 ? "10" : "6");
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
      const labels = [
        "Business Calculator",
        "Washing Machine",
        "Low Power Consumption",
        "Integrated Circuit Technology",
        "EPIC",
        "Overlaps instruction fetching and execution",
        "Digital Signal Multiprocessor",
        "Single Instruction Multiple Data",
        "Leads to overheating",
        "Symbolic Processor",
        "1986",
        "Intel Pentium",
        "Performs multiple tasks simultaneously",
        "Hospitality Sector",
        "Bit-Slice Processor",
        "10.7 kg",
        "Performance can be limited by data size",
        "Digital Signal Multiprocessor",
        "Transputer",
        "AMD K6",
      ];
      d.textContent = i + 1 + ". " + ans + " — " + labels[i];
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
    const enWrap = document.createElement("div");
    enWrap.className = "enum-key-block";
    ENUM_KEY_DETAIL.forEach(function (block) {
      const sec = document.createElement("div");
      sec.style.marginTop = "0.85rem";
      const ht = document.createElement("p");
      ht.style.margin = "0 0 0.35rem";
      ht.style.fontWeight = "600";
      ht.textContent = block.title;
      sec.appendChild(ht);
      const ul = document.createElement("ul");
      ul.style.margin = "0";
      ul.style.paddingLeft = "1.25rem";
      block.lines.forEach(function (ln) {
        const li = document.createElement("li");
        li.textContent = ln;
        ul.appendChild(li);
      });
      sec.appendChild(ul);
      enWrap.appendChild(sec);
    });
    el.appendChild(enTitle);
    el.appendChild(enWrap);
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

    html += "<h3>Part III detail (Enumeration)</h3><table><thead><tr><th>#</th><th>Your answer</th><th>Key (summary)</th></tr></thead><tbody>";
    enumRows.forEach(function (r) {
      const cls = r.ok ? "correct" : "incorrect";
      const u = r.user.length > 200 ? r.user.slice(0, 200) + "…" : r.user;
      html += "<tr class='" + cls + "'><td>" + r.num + "</td><td>" + escapeHtml(u) + "</td><td>" + escapeHtml(r.official) + "</td></tr>";
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

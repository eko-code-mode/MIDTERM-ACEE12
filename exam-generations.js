(function () {
  "use strict";

  const MC_QUESTIONS = [
    { n: 1, q: "What is the CPU often referred to as in relation to the computer?", opts: ["The heart of the computer", "The brain of the computer", "The memory of the computer", "The storage of the computer"] },
    { n: 2, q: "Which part of the CPU performs arithmetic and logical operations on data?", opts: ["Control Unit", "Memory Unit", "Arithmetic Logic Unit", "Input/Output Unit"] },
    { n: 3, q: "Which part of the CPU fetches instructions from memory, decodes them, and ensures the ALU performs the correct operation?", opts: ["Arithmetic Logic Unit", "Register File", "Cache Unit", "Control Unit"] },
    { n: 4, q: "When the entire processor was placed on a single chip and became standard, computers were said to enter which generation?", opts: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"] },
    { n: 5, q: "What technology did First Generation computers use?", opts: ["Transistors", "Integrated Circuits", "Vacuum Tubes", "Microprocessors"] },
    { n: 6, q: "Who noticed the electrical effect while experimenting with light bulbs that eventually led to the development of vacuum tubes?", opts: ["John Ambrose Fleming", "Lee de Forest", "Thomas Edison", "Edwin Armstrong"] },
    { n: 7, q: "Who invented the triode by adding a third element to Fleming's device?", opts: ["Thomas Edison", "Edwin Armstrong", "William Shockley", "Lee de Forest"] },
    { n: 8, q: "What technology did Second Generation computers use?", opts: ["Vacuum Tubes", "Transistors", "Integrated Circuits", "Microprocessors"] },
    { n: 9, q: "Who developed the transistor at Bell Labs in 1947?", opts: ["Jack Kilby, Robert Noyce, and Lee de Forest", "William Shockley, John Bardeen, and Walter Brattain", "Thomas Edison, John Fleming, and Edwin Armstrong", "Gordon Moore, Robert Noyce, and Jack Kilby"] },
    { n: 10, q: "The transistor inventors received the Nobel Prize in Physics in which year?", opts: ["1947", "1958", "1956", "2000"] },
    { n: 11, q: 'What problem with early transistor-based computers was referred to as the "Tyranny of Numbers"?', opts: ["Transistors were too expensive to manufacture", "Too many transistors connected to one another were required", "Numbers could not be trademarked by Intel", "Transistors generated too many numbers in binary"] },
    { n: 12, q: "Who invented the first Integrated Circuit in 1958?", opts: ["Robert Noyce of Fairchild Semiconductor", "Gordon Moore of Intel", "Jack Kilby of Texas Instruments", "William Shockley of Bell Labs"] },
    { n: 13, q: "What distinguishes a microprocessor from other integrated circuits?", opts: ["It has more transistors", "It can be programmed", "It is smaller in size", "It runs at higher clock speeds"] },
    { n: 14, q: "When was the Intel 4004, the first commercial microprocessor, introduced?", opts: ["January 1969", "November 1971", "March 1974", "June 1972"] },
    { n: 15, q: "How many transistors did the Intel 4004 have?", opts: ["6,000", "29,000", "2,300", "4,004"] },
    { n: 16, q: "What was the bus width of the Intel 4004?", opts: ["8 bits", "16 bits", "4 bits", "32 bits"] },
    { n: 17, q: "The Intel 8008 is significant because it was the first:", opts: ["4-bit microprocessor", "16-bit microprocessor", "32-bit microprocessor", "8-bit microprocessor"] },
    { n: 18, q: "The Intel 8080 had how many general-purpose 8-bit registers?", opts: ["Four", "Five", "Seven", "Eight"] },
    { n: 19, q: "The 8086 and 8088 processors were used in which IBM product?", opts: ["IBM Mainframe 360", "IBM PC/XT", "IBM AS/400", "IBM ThinkPad"] },
    { n: 20, q: "The Intel 286 was the first processor in the Intel family to:", opts: ["Include a built-in FPU", "Support 64-bit data processing", "Execute ALL code written for its predecessor (8086)", "Reach 1 GHz clock speed"] },
    { n: 21, q: "What feature introduced by the 286 allows the processor to run more than one program at a time while protecting each program's memory?", opts: ["Virtual Mode", "Protected Mode", "Real Mode", "Cache Mode"] },
    { n: 22, q: "How much addressable memory did the Intel 286 support?", opts: ["1 MB", "4 MB", "8 MB", "16 MB"] },
    { n: 23, q: "The Intel 486 was significant because it was the first processor to include:", opts: ["L2 Cache", "A built-in FPU", "MMX Technology", "Super-pipelining"] },
    { n: 24, q: "The Intel 486 enabled the transition from which operating environment to which?", opts: ["Windows to Linux", "GUI to Command-line", "DOS (command-line) to Windows (GUI)", "Unix to Windows"] },
    { n: 25, q: 'Why did Intel switch from using numbers to the name "Pentium" starting in 1993?', opts: ["Numbers were already taken by competitors", "Numbers could not be registered as a trademark", "The name \"Pentium\" was easier to remember", "Government regulations required brand names"] },
    { n: 26, q: "What does CISC stand for?", opts: ["Central Integrated Systems Circuit", "Complex Instruction Set Computer", "Computed Instruction System Cache", "Controlled Instruction Set Circuit"] },
    { n: 27, q: "Which processor introduced the L2 Cache and RISC architecture?", opts: ["Pentium", "Pentium II", "Pentium Pro", "Intel 486"] },
    { n: 28, q: "What does MMX Technology, introduced in the Pentium II, stand for / specialize in?", opts: ["Memory Management Extensions — managing RAM more efficiently", "MultiMedia eXtensions — processing video, audio, and graphics efficiently", "Multi-Mode eXecution — running multiple programs simultaneously", "Maximum Memory eXpansion — expanding addressable memory"] },
    { n: 29, q: "What does Moore's Law state?", opts: ["Clock speed doubles every 18 months", "The cost of processors halves every two years", "The number of transistors in a dense IC doubles about every two years", "Processing power triples every three years"] },
    { n: 30, q: 'According to the processor comparison table, how many transistors did the Pentium 4 "Prescott" (2004) have?', opts: ["42,000,000", "9,500,000", "125,000,000", "75,000,000"] },
  ];

  const MC_ANSWERS = ["B", "C", "D", "D", "C", "C", "D", "B", "B", "C", "B", "C", "B", "B", "C", "C", "D", "C", "B", "C", "B", "D", "B", "C", "B", "B", "C", "B", "C", "C"];

  const ID_QUESTIONS = [
    "It is the complete set of operations/commands that a programmer can instruct a microprocessor to perform.",
    "This person made the observation in 1965 that the number of transistors in a dense IC doubles approximately every two years.",
    "This is the unit that performs arithmetic operations and logical comparisons inside the CPU.",
    "This generation of computers was the first to use integrated circuits.",
    "This is the term for the smallest size of components that can be manufactured on a chip, measured in one-millionths of a meter.",
    "This Intel processor, released in 1971, was the very first commercial microprocessor ever made.",
    "This is the name of the feature introduced with the 286 that enables multitasking and assigns each program its own protected memory space.",
    "Shockley, Bardeen, and Brattain developed this component in 1947 at Bell Labs, which replaced vacuum tubes in Second Generation computers.",
    "This term refers to the ability of a newer processor to run programs written for older processors.",
    "This is the level of fast memory that was first introduced directly on the microprocessor chip itself, starting with the 386.",
    "This person from Texas Instruments invented the integrated circuit in 1958.",
    "This processor architecture uses a large set of complex instructions where each instruction can perform multiple operations — used in the original Pentium.",
    "This processor architecture uses a smaller set of simple, fast instructions — introduced in the Pentium Pro.",
    "This multimedia technology introduced in the Pentium II was specifically designed to process video, audio, and graphics data more efficiently.",
    "This is the unit of measurement equal to one billion cycles per second, used to express modern processor clock speeds.",
    "This 1998 Intel processor was a budget/affordable version of the Pentium II, featuring lower clock speeds and less cache.",
    "This is the term for the small, extremely fast memory storage locations found inside the CPU itself, used during calculations.",
    "This refers to the number of bits that can be transferred simultaneously across a bus — for example, 8-bit, 16-bit, 32-bit, or 64-bit.",
    'This concept, also called the "monolithic idea," refers to placing many circuit elements on a single piece of semiconductor material.',
    "This is the performance measurement used in the processor comparison table that stands for Millions of Instructions Per Second.",
  ];

  const ID_KEYS = [
    ["instruction set"],
    ["gordon moore"],
    ["alu", "arithmetic logic unit"],
    ["third generation", "3rd generation"],
    ["micron"],
    ["intel 4004", "4004", "i4004"],
    ["protected mode"],
    ["transistor"],
    ["backward compatibility", "backwards compatibility", "backward compatible"],
    ["l1 cache", "level 1 cache", "l1"],
    ["jack kilby", "kilby"],
    ["cisc", "complex instruction set computer"],
    ["risc", "reduced instruction set computer"],
    ["mmx", "mmx technology", "multimedia extensions", "multimedia extension"],
    ["ghz", "gigahertz"],
    ["celeron"],
    ["registers", "register"],
    ["bus width", "buswidth"],
    ["integrated circuit", "monolithic idea", "monolithic", "ic"],
    ["mips", "millions of instructions per second"],
  ];

  const ID_OFFICIAL = [
    "Instruction Set",
    "Gordon Moore",
    "Arithmetic Logic Unit (ALU)",
    "Third Generation",
    "Micron",
    "Intel 4004",
    "Protected Mode",
    "Transistor",
    "Backward Compatibility",
    "L1 Cache",
    "Jack Kilby",
    "CISC (Complex Instruction Set Computer)",
    "RISC (Reduced Instruction Set Computer)",
    "MMX Technology",
    "GHz (Gigahertz)",
    "Celeron",
    "Registers",
    "Bus Width",
    "Integrated Circuit (IC)",
    "MIPS",
  ];

  const ENUM_STEMS = [
    "Enumerate the 2 main parts/components of the CPU.",
    "Enumerate the 4 generations of computers and their corresponding technology used (one pair per line: generation — technology).",
    "Enumerate the 3 inventors of the transistor who worked at Bell Labs in 1947.",
    "Enumerate the 2 inventors of the Integrated Circuit and the company they worked for (one pair per line: inventor — company).",
    "Enumerate the 3 capabilities/features that Protected Mode provides.",
    "Enumerate all 10 processors listed in the processor comparison table in chronological order (one per line).",
    "Enumerate the 3 types of multimedia information that MMX Technology was designed to process efficiently.",
    "Enumerate the 3 things the Control Unit does when processing an instruction (in correct order, one per line).",
    "Enumerate the 3 reasons why transistors were considered better than vacuum tubes.",
    "Enumerate 6 column categories from the processor comparison table (the table has 7 columns — list any 6 correct headings).",
  ];

  const GEN_TECH_ROWS = [
    { L: ["first generation", "first"], R: ["vacuum tube", "vacuum tubes", "vacuum"] },
    { L: ["second generation", "second"], R: ["transistor", "transistors"] },
    { L: ["third generation", "third"], R: ["integrated circuit", "ic", "integrated circuits"] },
    { L: ["fourth generation", "fourth"], R: ["microprocessor", "microprocessors"] },
  ];

  const IC_PAIR_LIST = [
    { inv: ["jack kilby", "kilby"], co: ["texas instruments"] },
    { inv: ["robert noyce", "noyce"], co: ["fairchild semiconductor", "fairchild"] },
  ];

  const TABLE_COLUMN_GROUPS = [
    ["processor name"],
    ["introduced date", "introduction date", "date introduced"],
    ["transistors"],
    ["microns", "micron"],
    ["clock speed"],
    ["size of data"],
    ["mips"],
  ];

  const ENUM_OFFICIAL = [
    "ALU (Arithmetic Logic Unit); Control Unit (CU)",
    "Four generations with technology (First→Vacuum Tubes … Fourth→Microprocessors) — see key",
    "William Shockley; John Bardeen; Walter Brattain",
    "Jack Kilby — TI; Robert Noyce — Fairchild Semiconductor",
    "Multitasking; Memory protection; Extended & virtual memory — see key",
    "10 processors chronologically 8080…Prescott (2004) — see key",
    "Video; Audio; Graphics",
    "Fetch; Decode; Move data / ensure ALU operation — see key",
    "Smaller; Faster; Less power consuming",
    "Any 6 of 7 table columns — see key",
  ];

  const ENUM_KEY_DETAIL = [
    { title: "1. Two main parts of the CPU", lines: ["ALU (Arithmetic Logic Unit)", "Control Unit (CU)"] },
    {
      title: "2. Four generations and technology",
      lines: [
        "First Generation — Vacuum Tubes",
        "Second Generation — Transistors",
        "Third Generation — Integrated Circuits (IC)",
        "Fourth Generation — Microprocessors",
      ],
    },
    { title: "3. Transistor inventors (Bell Labs, 1947)", lines: ["William Shockley", "John Bardeen", "Walter Brattain"] },
    {
      title: "4. IC inventors and companies",
      lines: ["Jack Kilby — Texas Instruments", "Robert Noyce — Fairchild Semiconductor"],
    },
    {
      title: "5. Protected Mode features",
      lines: [
        "Allows multitasking (more than one program at a time)",
        "Memory protection (each program's memory range protected from interference)",
        "Uses extended memory and virtual memory",
      ],
    },
    {
      title: "6. Processors in chronological order",
      lines: [
        "8080 (1974)",
        "8088 (1979)",
        "80286 (1982)",
        "80386 (1985)",
        "80486 (1989)",
        "Pentium (1993)",
        "Pentium II (1997)",
        "Pentium III (1999)",
        "Pentium 4 (2000)",
        'Pentium 4 "Prescott" (2004)',
      ],
    },
    { title: "7. MMX multimedia types", lines: ["Video", "Audio", "Graphics"] },
    {
      title: "8. Control Unit (in order)",
      lines: [
        "Fetches the instruction from memory",
        "Decodes the instruction",
        "Moves data to the appropriate places and ensures the ALU performs the correct operation",
      ],
    },
    {
      title: "9. Transistors vs vacuum tubes",
      lines: ["Significantly smaller in size", "Faster in operation", "Less power consuming / more energy efficient"],
    },
    {
      title: "10. Processor comparison table columns (7 total; any 6 correct)",
      lines: [
        "Processor Name",
        "Introduced Date",
        "Transistors",
        "Microns",
        "Clock Speed",
        "Size of Data",
        "MIPS",
      ],
    },
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

  function genTechRowOk(lineNorm, row) {
    const L = row.L.some(function (a) {
      return enumTokenMatch(lineNorm, a);
    });
    const R = row.R.some(function (a) {
      return enumTokenMatch(lineNorm, a);
    });
    return L && R;
  }

  function genTechOrdered(userLines, rows) {
    if (userLines.length < rows.length) return false;
    for (let i = 0; i < rows.length; i++) {
      if (!genTechRowOk(userLines[i], rows[i])) return false;
    }
    return true;
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

  function enumOrderedLines(userLines, keysPerLine) {
    if (userLines.length < keysPerLine.length) return false;
    for (let i = 0; i < keysPerLine.length; i++) {
      if (!enumLineMatchNorm(userLines[i], keysPerLine[i])) return false;
    }
    return true;
  }

  function dualPairsCorrect(userLines, pairDefs) {
    if (userLines.length < pairDefs.length) return false;
    const used = {};
    for (let p = 0; p < pairDefs.length; p++) {
      let found = false;
      const invAlts = pairDefs[p].inv;
      const coAlts = pairDefs[p].co;
      for (let u = 0; u < userLines.length; u++) {
        if (used[u]) continue;
        const ln = userLines[u];
        const invOk = invAlts.some(function (x) {
          return enumTokenMatch(ln, x);
        });
        const coOk = coAlts.some(function (x) {
          return enumTokenMatch(ln, x);
        });
        if (invOk && coOk) {
          used[u] = true;
          found = true;
          break;
        }
      }
      if (!found) return false;
    }
    return true;
  }

  function procChronoOrdered(userLines) {
    if (userLines.length < 10) return false;
    const checks = [
      function (ln, c) {
        return c.indexOf("8080") !== -1 && c.indexOf("1974") !== -1;
      },
      function (ln, c) {
        return c.indexOf("8088") !== -1 && c.indexOf("1979") !== -1;
      },
      function (ln, c) {
        if (c.indexOf("1982") === -1) return false;
        if (c.indexOf("80286") !== -1) return true;
        return ln.indexOf("286") !== -1 && c.indexOf("80386") === -1 && c.indexOf("80486") === -1;
      },
      function (ln, c) {
        if (c.indexOf("1985") === -1) return false;
        if (c.indexOf("80386") !== -1) return true;
        return ln.indexOf("386") !== -1 && c.indexOf("80486") === -1;
      },
      function (ln, c) {
        if (c.indexOf("1989") === -1) return false;
        if (c.indexOf("80486") !== -1) return true;
        return /\b486\b/.test(ln) && c.indexOf("80386") === -1;
      },
      function (ln, c) {
        return (
          ln.indexOf("pentium") !== -1 &&
          c.indexOf("1993") !== -1 &&
          ln.indexOf("pentium ii") === -1 &&
          ln.indexOf("pentium 2") === -1 &&
          ln.indexOf("pentiumiii") === -1
        );
      },
      function (ln, c) {
        return (ln.indexOf("pentium ii") !== -1 || ln.indexOf("pentium 2") !== -1) && c.indexOf("1997") !== -1;
      },
      function (ln, c) {
        return (ln.indexOf("pentium iii") !== -1 || ln.indexOf("pentium 3") !== -1) && c.indexOf("1999") !== -1;
      },
      function (ln, c) {
        return (
          ln.indexOf("pentium") !== -1 &&
          ln.indexOf("4") !== -1 &&
          c.indexOf("2000") !== -1 &&
          ln.indexOf("prescott") === -1
        );
      },
      function (ln, c) {
        return ln.indexOf("prescott") !== -1 || (ln.indexOf("pentium") !== -1 && ln.indexOf("4") !== -1 && c.indexOf("2004") !== -1);
      },
    ];
    for (let i = 0; i < 10; i++) {
      const ln = userLines[i];
      const c = ln.replace(/\s/g, "");
      if (!checks[i](ln, c)) return false;
    }
    return true;
  }

  function enum6of7Columns(userLines) {
    if (userLines.length < 6) return false;
    let hit = 0;
    for (let c = 0; c < TABLE_COLUMN_GROUPS.length; c++) {
      if (userLines.some(function (ul) { return enumLineMatchNorm(ul, TABLE_COLUMN_GROUPS[c]); })) {
        hit++;
      }
    }
    return hit >= 6;
  }

  function enumItemCorrect(idx, raw) {
    const userLines = parseEnumLines(raw);
    if (userLines.length === 0) return false;
    switch (idx) {
      case 0:
        return enumSetCorrect(userLines, [["alu", "arithmetic logic unit"], ["control unit", "cu"]]);
      case 1:
        return genTechOrdered(userLines, GEN_TECH_ROWS);
      case 2:
        return enumSetCorrect(userLines, [
          ["william shockley", "shockley"],
          ["john bardeen", "bardeen"],
          ["walter brattain", "brattain"],
        ]);
      case 3:
        return dualPairsCorrect(userLines, IC_PAIR_LIST);
      case 4:
        return enumSetCorrect(userLines, [
          ["multitasking", "more than one program", "multiple programs"],
          ["memory protection", "protected from interference", "assigned memory"],
          ["extended memory", "virtual memory", "more memory than physically"],
        ]);
      case 5:
        return procChronoOrdered(userLines);
      case 6:
        return enumSetCorrect(userLines, [["video"], ["audio"], ["graphics"]]);
      case 7:
        if (userLines.length < 3) return false;
        const u0 = enumLineMatchNorm(userLines[0], ["fetch", "fetches the instruction", "instruction from memory"]);
        const u1 = enumLineMatchNorm(userLines[1], ["decode", "decodes"]);
        const u2 =
          enumLineMatchNorm(userLines[2], ["move data", "moves data", "appropriate places"]) ||
          (userLines[2].indexOf("alu") !== -1 && userLines[2].indexOf("correct") !== -1);
        return u0 && u1 && u2;
      case 8:
        return enumSetCorrect(userLines, [
          ["smaller", "size", "compact"],
          ["faster", "speed"],
          ["less power", "power consuming", "energy efficient", "efficient"],
        ]);
      case 9:
        return userLines.length >= 6 && enum6of7Columns(userLines);
      default:
        return false;
    }
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
    enTitle.innerHTML = "<strong>Part III — Enumeration (Microprocessor Generations)</strong>";
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

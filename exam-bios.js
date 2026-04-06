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

  const ENUM_STEMS = [
    "Enumerate the 4 main components of the Motherboard BIOS.",
    "Enumerate the 4 steps in updating the BIOS (in order).",
    "Enumerate the 3 layers of the computer system from highest to lowest (one per line, top to bottom).",
    "Enumerate the 2 common BIOS chip package types and their full names (one line each, e.g. DIP — Dual In-line Package …).",
    "Enumerate 4 alternative keys (aside from Del) that can be used to access the BIOS setup utility depending on the manufacturer (see answer key if listing Del as a fourth).",
    "Enumerate the 7 actions performed by the AwardFlash command A:\\>awdflash bios.bin /cc /cd /cp /py /sn /cks /r (in the order given in the answer key).",
    "Enumerate the 3 types of data that are cleared after flashing the BIOS using the recommended AwardFlash command.",
    "Enumerate 3 things that can go wrong or happen if the BIOS is NOT properly configured or optimized.",
    "Enumerate the 3 components that make up the complete BIOS of a computer system.",
    "Enumerate the 4 chapters of the book and their corresponding topics (Chapter 1 first, then 2–4).",
  ];

  const ENUM_OFFICIAL = [
    "POST; System Configuration Utility; Bootstrap Loader; BIOS Interface",
    "Determine version → obtain update → prepare flash disk → flash BIOS",
    "Application → OS → Hardware",
    "DIP (Dual In-line Package); PLCC (Plastic Leaded Chip Carrier)",
    "Esc; F2; Ctrl-Alt-Esc; (Del ok per key note)",
    "Seven AwardFlash actions in key order — see key",
    "CMOS; DMI; PnP/ESCD",
    "Instability; slower boot; slower performance",
    "Motherboard BIOS; add-on card BIOS; device drivers",
    "Ch.1 What Is BIOS … through Ch.4 in-depth options",
  ];

  const ENUM_KEY_DETAIL = [
    {
      title: "1. Four main components of Motherboard BIOS",
      lines: [
        "Power-On Diagnostic Tests (POST)",
        "System Configuration Utility",
        "Bootstrap Loader",
        "BIOS Interface",
      ],
    },
    {
      title: "2. Four steps in updating the BIOS",
      lines: [
        "Determine your BIOS version",
        "Obtain the appropriate BIOS update",
        "Prepare a BIOS flash disk",
        "Flash the motherboard BIOS",
      ],
    },
    {
      title: "3. Three layers (highest to lowest)",
      lines: ["Application", "Operating System", "Hardware"],
    },
    {
      title: "4. Two common BIOS chip package types",
      lines: [
        "DIP — Dual In-line Package (rectangular)",
        "PLCC — Plastic Leaded Chip Carrier (square)",
      ],
    },
    {
      title: "5. Alternative keys to access BIOS setup",
      lines: [
        "Esc (Escape) key",
        "F2 key",
        "Ctrl-Alt-Esc key combination",
        "Del (Delete) key (primary for AwardBIOS; question says aside from Del — Esc, F2, Ctrl-Alt-Esc are the main alternatives)",
      ],
    },
    {
      title: "6. Seven actions of the AwardFlash command (key order)",
      lines: [
        "Skip backup of original BIOS image",
        "Show the BIOS image file's checksum",
        "Program the Flash BIOS with the BIOS image file",
        "Clear CMOS data after programming",
        "Clear DMI data after programming",
        "Clear PnP (ESCD) data after programming",
        "Automatically reset the computer after programming is complete",
      ],
    },
    {
      title: "7. Three types of data cleared after flashing",
      lines: ["CMOS data", "DMI data", "PnP / ESCD data"],
    },
    {
      title: "8. If BIOS is not optimized",
      lines: [
        "System instability and crashes",
        "Longer boot-up / device initialization time",
        "Overall slower computer performance",
      ],
    },
    {
      title: "9. Three parts of the complete BIOS",
      lines: [
        "Motherboard BIOS",
        "BIOS of all add-on cards in the system",
        "Device drivers",
      ],
    },
    {
      title: "10. Four chapters and topics",
      lines: [
        "Chapter 1 — What Is the BIOS",
        "Chapter 2 — Troubleshooting / Getting out of trouble during optimization",
        "Chapter 3 — Quick guide to BIOS options and optimization recommendations",
        "Chapter 4 — In-depth / detailed explanation of every BIOS option",
      ],
    },
  ];

  const ENUM_BIOS_COMPONENTS = [
    ["post", "power on", "diagnostic"],
    ["system configuration", "configuration utility", "setup utility"],
    ["bootstrap", "bootstrap loader"],
    ["bios interface"],
  ];

  const ENUM_BIOS_UPDATE_STEPS = [
    ["determine", "bios version", "your bios", "current bios"],
    ["obtain", "appropriate", "update", "download", "manufacturer"],
    ["prepare", "flash disk", "bootable", "bios flash disk"],
    ["flash", "motherboard bios", "flashing", "program the flash"],
  ];

  const ENUM_SYS_LAYERS = [["application", "applications"], ["operating system", "os"], ["hardware"]];

  const ENUM_PKG_PAIRS = [
    { type: ["dip"], name: ["dual in line", "rectangular"] },
    { type: ["plcc"], name: ["plastic leaded", "square", "chip carrier"] },
  ];

  const ENUM_BIOS_KEYS_BUCKETS = [
    ["esc", "escape"],
    ["f2"],
    ["ctrl alt esc", "ctrlaltesc"],
    ["del", "delete"],
  ];

  const ENUM_AWARD_ACTIONS = [
    ["skip backup", "no backup", "backup of original", "/sn"],
    ["checksum", "check sum", "/cks", "show the bios image"],
    ["program the flash", "program flash", "flash bios", "/py"],
    ["clear cmos", "cmos data after", "cmos after", "/cc"],
    ["clear dmi", "dmi data after", "dmi after", "/cd"],
    ["pnp", "escd", "clear pnp", "/cp"],
    ["reset", "reboot", "restart", "/r", "automatically reset", "after programming is complete"],
  ];

  const ENUM_CLEARED_DATA = [["cmos"], ["dmi"], ["pnp", "escd"]];

  const ENUM_BIOS_RISKS = [
    ["instability", "crash", "crashes", "unstable"],
    ["boot", "boot up", "initialization", "device initialization"],
    ["slower", "performance", "overall"],
  ];

  const ENUM_COMPLETE_BIOS = [
    ["motherboard bios", "motherboard"],
    ["add on", "add on cards", "expansion card", "addon", "addon cards", "on cards"],
    ["device driver", "drivers"],
  ];

  const ENUM_CHAPTER_ROWS = [
    { ch: ["chapter 1", "ch 1"], top: ["what is", "bios"] },
    { ch: ["chapter 2"], top: ["troubleshoot", "getting out", "optimization", "out of trouble"] },
    { ch: ["chapter 3"], top: ["quick guide", "bios options", "recommendation"] },
    { ch: ["chapter 4"], top: ["in depth", "indepth", "detailed", "every bios"] },
  ];

  const LETTERS = ["A", "B", "C", "D"];

  function normalize(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[’']/g, "'")
      .replace(/\//g, " ")
      .replace(/\+/g, " ")
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

  function enumOrderedLines(userLines, keysPerLine) {
    if (userLines.length < keysPerLine.length) return false;
    for (let i = 0; i < keysPerLine.length; i++) {
      if (!enumLineMatchNorm(userLines[i], keysPerLine[i])) return false;
    }
    return true;
  }

  function tryMatchBuckets(lines, buckets, lineIdx, usedBucket) {
    if (lineIdx === lines.length) return true;
    for (let b = 0; b < buckets.length; b++) {
      if (usedBucket[b]) continue;
      if (enumLineMatchNorm(lines[lineIdx], buckets[b])) {
        usedBucket[b] = true;
        if (tryMatchBuckets(lines, buckets, lineIdx + 1, usedBucket)) return true;
        usedBucket[b] = false;
      }
    }
    return false;
  }

  function enumFourBiosKeys(userLines) {
    if (userLines.length < 4) return false;
    return tryMatchBuckets(userLines.slice(0, 4), ENUM_BIOS_KEYS_BUCKETS, 0, {});
  }

  function dualPackageTypesCorrect(userLines, pairDefs) {
    if (userLines.length < 2) return false;
    const used = {};
    for (let p = 0; p < pairDefs.length; p++) {
      let found = false;
      for (let u = 0; u < userLines.length; u++) {
        if (used[u]) continue;
        const ln = userLines[u];
        const typeOk = pairDefs[p].type.some(function (x) {
          return enumTokenMatch(ln, x);
        });
        const nameOk = pairDefs[p].name.some(function (x) {
          return enumTokenMatch(ln, x);
        });
        if (typeOk && nameOk) {
          used[u] = true;
          found = true;
          break;
        }
      }
      if (!found) return false;
    }
    return true;
  }

  function chapterOrderedMatch(userLines) {
    if (userLines.length < 4) return false;
    for (let i = 0; i < 4; i++) {
      const ln = userLines[i];
      const row = ENUM_CHAPTER_ROWS[i];
      const chOk = row.ch.some(function (x) {
        const nx = normalize(x);
        return nx.length >= 4 ? ln.includes(nx) : ln === nx;
      });
      const topOk = row.top.some(function (x) {
        const nx = normalize(x);
        if (nx.length >= 4) return ln.includes(nx);
        return enumTokenMatch(ln, x);
      });
      if (!chOk || !topOk) return false;
    }
    return true;
  }

  function enumItemCorrect(idx, raw) {
    const userLines = parseEnumLines(raw);
    if (userLines.length === 0) return false;
    switch (idx) {
      case 0:
        return enumSetCorrect(userLines, ENUM_BIOS_COMPONENTS);
      case 1:
        return enumOrderedLines(userLines, ENUM_BIOS_UPDATE_STEPS);
      case 2:
        return enumOrderedLines(userLines, ENUM_SYS_LAYERS);
      case 3:
        return dualPackageTypesCorrect(userLines, ENUM_PKG_PAIRS);
      case 4:
        return enumFourBiosKeys(userLines);
      case 5:
        return enumOrderedLines(userLines, ENUM_AWARD_ACTIONS);
      case 6:
        return enumSetCorrect(userLines, ENUM_CLEARED_DATA);
      case 7:
        return enumSetCorrect(userLines, ENUM_BIOS_RISKS);
      case 8:
        return enumSetCorrect(userLines, ENUM_COMPLETE_BIOS);
      case 9:
        return chapterOrderedMatch(userLines);
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
      let rows = "6";
      if (num === 6) rows = "10";
      if (num === 10) rows = "8";
      if (num === 1 || num === 7 || num === 8 || num === 9) rows = "5";
      ta.setAttribute("rows", rows);
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
      const ok = idItemIsCorrect(i, raw);
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

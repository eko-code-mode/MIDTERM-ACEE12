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

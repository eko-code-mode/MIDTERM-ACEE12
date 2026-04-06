# ACEE12 — Practice & exam pages

Static **HTML / CSS / JavaScript** quizzes for *Microprocessor Systems* and related topics. No build step or server is required.

## Pages

| File | Description |
|------|-------------|
| `index.html` | ACEE12 midterm-style exam (Villasanta lecture) |
| `generations.html` | Microprocessor Generations practice |
| `evolution.html` | Evolution of Microprocessors practice |
| `classification.html` | Classification of computer generations |
| `bios.html` | BIOS (30 MC + 20 ID) |

Shared **`styles.css`**; each page loads its own **`exam-*.js`** or **`exam.js`**.

## Run locally

Open any `.html` file in a browser (double-click, or *Open with* Chrome / Edge / Firefox).  
Keep all files in the **same folder** so styles and scripts load correctly.

## Deploy (e.g. GitHub Pages)

1. Push this folder to a GitHub repository (root should contain `index.html`).
2. **Settings → Pages →** deploy from branch **`main`** (or **`master`**) **/** root.
3. Site URL: `https://<username>.github.io/<repo>/`

Use a **repository name without spaces** (e.g. `acee12-exams`).

## Notes

- **Answer keys** are embedded in JavaScript for self-checking; treat the repo as **non-secret** if it is public.
- Paths are **relative** and **case-sensitive** on GitHub Pages (match file names exactly).

## License

See [LICENSE](LICENSE) (MIT). Exam *content* is for educational use; cite your instructor’s materials as required by your school.

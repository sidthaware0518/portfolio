# 📚 GyaanVault — How to add notes & publish them

This is your no-hassle cheat-sheet. Two things you'll ever do:
**(1) add a file**, and **(2) publish it so everyone can see it on the live site.**

---

## Part 1 — Add a note (or question paper / practical / interview prep)

### Step 1: Put the PDF in the folder
Copy your PDF into:

```
public/study-material/
```

Give it a clear name, ideally starting with the course code, e.g.:
`DS-502-Computational-Mathematics-Notes.pdf`

> Tip: no spaces in the file name — use dashes. Spaces work but are messier in links.

### Step 2: Point the subject to it (one line)
Open **`src/data/notes.js`**, find the subject by its code, and set the resource
using the `sm("...")` shortcut (sm = study-material):

```js
{
  code: "DS-502-MJ",
  title: "Computational Mathematics",
  ...
  resources: resources({
    notes:          sm("DS-502-Computational-Mathematics-Notes.pdf"),
    questionPapers: sm("DS-502-QuestionPapers-2024.pdf"),   // only if you have it
    practicals:     sm("DS-502-Practical-Manual.pdf"),       // only if you have it
    interviewPrep:  sm("DS-502-Interview-QA.pdf"),           // only if you have it
  }),
},
```

- Only list what you actually have — anything you leave out automatically shows
  **"Coming Soon"** on the site. You never need to touch any other file.
- **Prefer Google Drive?** Instead of `sm(...)`, write the link yourself:
  ```js
  notes: { available: true, url: "https://drive.google.com/file/d/FILE_ID/view" },
  ```
  The **Download** button figures out the direct-download link automatically.

### Step 3: See it locally (optional but recommended)
```bash
npm run dev
```
Open <http://localhost:50518/notes>, expand the semester, click **View** / **Download**.

### Adding a whole new Semester (III / IV) later
In `src/data/notes.js`, those semesters already exist with the real course codes
and `comingSoon: true`. When ready:
1. Delete the `comingSoon: true` line for that semester.
2. Fill each subject's `tags` and `resources` exactly like Semester I / II.

That's it — the page, search, filters and accordions update on their own.

---

## Part 2 — Publish so EVERYONE can see it (on your live site)

Editing files on your computer does **not** change the live website. Your site is
hosted on **Render**, which rebuilds automatically when you push to GitHub. So:

```bash
# from the project folder
git add .
git commit -m "Add DS-502 notes to GyaanVault"
git push
```

Within ~1–2 minutes Render rebuilds and the new notes are live for everyone at
your public URL. Refresh the page (Ctrl+F5) to see it.

> First time only: make sure you're pushing to the branch Render deploys (`main`).
> You can watch the deploy finish in your Render dashboard.

---

## Quick checklist every time
- [ ] PDF copied into `public/study-material/`
- [ ] One `sm("filename.pdf")` line added in `src/data/notes.js`
- [ ] (optional) checked it with `npm run dev`
- [ ] `git add . && git commit -m "..." && git push`
- [ ] Waited ~2 min, refreshed the live site

That's the whole workflow. No backend, no database, no dashboards.

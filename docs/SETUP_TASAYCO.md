# Software Configuration Management (Tasayco)

This document summarizes the setup and source-code management used in the **AliviaTech Web Platform**.

> Platform scope: **Web only** (Landing + basic dashboard). No mobile code included.

---

## 1) Development Environment Configuration

- **Editor**: VS Code (extensions: Live Server, EditorConfig for VS Code)
- **Runtime**: Node.js (optional, only for tooling)
- **Version control**: Git + GitHub
- **Design**: Figma (links referenced in the report)
- **Issue tracking**: GitHub Projects or Trello (team choice)

### Local run
1. Clone the repository.
2. Open the folder in VS Code.
3. Use the *Live Server* extension or run a simple server:
   ```bash
   npx serve .
   ```
4. Open `http://localhost:3000` (or suggested port).

Folder structure:
```
aliviatech-web/
├─ css/
├─ js/
├─ assets/
├─ pages/
├─ docs/
├─ index.html
└─ README.md
```

---

## 2) Source Code Management

### Branching model: GitFlow (lightweight)
- `main` → production-ready
- `develop` → integration of features
- `feature/*` → one feature per branch (e.g., `feature/landing-hero`)
- `release/*` → pre-release stabilization
- `hotfix/*` → quick fixes from `main`

### Commit convention: Conventional Commits
Examples:
- `feat: add landing hero section`
- `fix: correct dark theme toggle aria-pressed attr`
- `chore: add editorconfig and update README`

### Semantic versioning
- Start at `v0.1.0` for first public landing.
- Increase minor/patch according to changes.

---

## 3) Deployment configuration (overview)
While deployment details are owned by **Yerico (5.1.4)**, the web can be hosted on:
- **GitHub Pages** (no backend)
- **Netlify** (drag & drop or Git)
- **Firebase Hosting** (`firebase init hosting`)

Static site build: *not required*. Files are ready to host as-is.

---

## 4) Coding standards (pointer)
The repository follows the **Google HTML/CSS Style Guide** and uses English naming. See `docs/STYLE_GUIDE_YERICO.md` for specifics.

---

_Last updated: 2025-11-07_

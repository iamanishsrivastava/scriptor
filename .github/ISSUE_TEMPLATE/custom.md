---
name: Custom issue template
about: Describe this issue template's purpose here.
title: PR
labels: ''
assignees: ''

---

---
name: 🚀 Pull Request
about: Propose a code or documentation change
title: "[PR]: <title-of-your-change>"
labels: ["needs review"]
assignees: []

---

## 📄 Description

<!-- Describe your PR in 2-3 sentences -->
Example:
> Adds voice transcription API route and integrates it with the script management system. Also includes README updates and a schema migration.

## 📋 Type of Change

- [ ] ✨ New Feature
- [ ] 🐛 Bug Fix
- [ ] 🛠️ Refactor
- [ ] 🧪 Test Addition
- [ ] 📝 Documentation
- [ ] 🔧 Config/Tooling
- [ ] 🔁 Other: <!-- describe -->

## ✅ Checklist (Mark completed items)

- [ ] Code compiles locally without errors
- [ ] Tests added or updated
- [ ] Relevant documentation updated
- [ ] I’ve linted and formatted my code (`pnpm lint`)
- [ ] I’ve run all tests (`pnpm test`)
- [ ] No hardcoded secrets/keys/URLs
- [ ] Linked related issues or discussions

## 🔗 Related Issue(s)

<!-- Use "Closes #123" to auto-close an issue -->
Example:  
Closes #45

## 🧪 How to Test Locally

```bash
pnpm install
pnpm dev
```
Then go to:
- http://localhost:3000/voices → to test new voice routes
- http://localhost:3000/api/voices → to check API response

## 📸 Screenshots / Videos
```html
<!-- Optional: Add before-after screenshots, GIFs, or short videos -->
```

## 🧠 Reviewer Tips
```html
<!-- Any gotchas, edge cases, or logic quirks -->
```
Example:
> Example:

Transcription expects input in .webm, anything else might throw 415 error.

⸻

** Thank you for your contribution! **

# ⚔️ Order of Znak Wiki — Collaborator Guide

Welcome to the collaborative repository for the **Order of Znak** and **Acolytes of Znak** wiki! This site is powered by [Quartz v4](https://quartz.jzhao.xyz) and automatically deployed to **https://orderofznak.github.io** via GitHub Actions.

---

## 🚀 Quick Setup (macOS / Linux)

### 1. Clone the Repository
```bash
git clone https://github.com/orderofznak/orderofznak.github.io.git
cd orderofznak.github.io
```

### 2. (Optional) Run Local Live Preview
If you want to view live changes in your browser while editing:
```bash
npm install
npx quartz build --serve
```
Then open `http://localhost:8080` in your browser. Any edits in `content/` will live-reload automatically.

---

## 📝 Editing & Creating Notes

All wiki notes live inside the **`content/`** directory:
- `content/order_of_znak/`: Lore, character sheets, and chronicle from *The Order of Znak* (D&D 5e).
- `content/acolytes_of_znak/`: Campaign plan, character builds, and lore for *The Acolytes of Znak* (D&D 2024 / 5.5e Barovia).
- `content/index.md`: The homepage and campaign matrix.

You can open the `content/` folder directly as an **Obsidian Vault** on your Mac, or edit markdown files with your favorite editor (VS Code, MacVim, CLI, etc.). Standard Obsidian Wikilinks (`[[Note Name]]`) and callouts (`> [!NOTE]`) are fully supported.

---

## 🔒 Keeping DM Secrets & Spoilers Private

When preparing unrevealed campaign notes (boss statblocks, secret NPC motivations, encounter twists):

1. **Frontmatter Flag:** Add `draft: true` or `publish: false` in the YAML header:
   ```yaml
   ---
   title: Secret Dungeon Level
   publish: false
   ---
   ```
2. **Secret Folders:** Or place your prep inside a folder named `dm_secrets/`, `prep/`, or `drafts/`.

> **Note:** Quartz is configured to automatically drop any note with `publish: false`, `draft: true`, or inside `dm_secrets/` during build. They will **never appear on the public website**. When you're ready to reveal the content to the players, simply remove `publish: false` or move the note into the public campaign folder!

---

## 🌿 Standard Git Workflow

Before making edits or pushing:

```bash
# 1. Pull latest changes from Peter
git pull --rebase origin main

# 2. Check your working tree
git status

# 3. Stage and commit
git add .
git commit -m "feat(campaign): add recap for session 2"

# 4. Push to publish
git push origin main
```

Once pushed, GitHub Actions will automatically rebuild and deploy the live site in under 60 seconds!

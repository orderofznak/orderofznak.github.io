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

---

## 📋 Standard Note Layout & "Behind the Screen" Trivia

To maintain an immersive experience while preserving our rich table history:

1. **In-Universe Content First:**
   - Keep the body of character, NPC, and lore notes strictly grounded in the fictional world (Lore, Mechanics, Combat Tactics, Gear, Key Quests, and Alliances).
2. **Dedicated Trivia Section at the Bottom (`## 💡 Behind the Screen & Trivia`):**
   - Place all real-world meta knowledge, table history, and esoteric context in a dedicated section at the bottom of the page (similar to an IMDb trivia or Wikipedia "Behind the scenes" block):
     - **Linguistic Origins & Concept Genesis:** Cyrillic symbols, Russian modifying signs, etymology.
     - **Inside Jokes & Homages:** Video game references (like the *Ultima III: Exodus* greataxe homage), running table gags.
     - **Table Portrayal & Roleplay:** Impromptu accents (Cajun DonJon Raskin), ex-wives banter, player reactions.
     - **DM Encounter Tuning:** Up-scaling boss fights, adding minions to challenge min-maxed DPR.



---

## 🛠️ (Optional) Organization Automation & Data Tools

For bulk importing canonical D&D lore or running automated data extraction, the organization provides standalone tools in the private repository **[`orderofznak/tools`](https://github.com/orderofznak/tools)**.

> [!TIP]
> **Using these tools is 100% optional.** You can always write and edit notes manually in Markdown using Obsidian or your favorite editor. The scripts simply eliminate tedious copy-pasting when referencing official published Wizards of the Coast campaigns.

### Forgotten Realms Wiki Crawler (`orderofznak/tools`)
If you want to pull characters, lore, and portrait illustrations for an official campaign (e.g., *Curse of Strahd* for *Acolytes of Znak* or *Vecna: Eve of Ruin*):

1. **Clone the Tools Repository:**
   ```bash
   git clone https://github.com/orderofznak/tools.git
   cd tools
   ```
2. **Preview Discovered Characters (Dry Run):**
   ```bash
   python main.py --preset acolytes_of_znak --dry-run
   ```
3. **Crawl & Export Directly into Wiki Content:**
   ```bash
   # Crawls Curse of Strahd directly into the Acolytes entity folder
   python main.py --preset acolytes_of_znak -o ../orderofznak.github.io/content/acolytes_of_znak/02_entities/
   ```
4. **Custom Modules:**
   ```bash
   python main.py --modules "Lost_Mine_of_Phandelver" --campaign cousins_and_dragons -o ./output/
   ```

All generated notes feature Quartz-ready YAML frontmatter, portrait downloads, and a dedicated `## ⚔️ Campaign Interactions & Party Encounters` section for table-specific notes.

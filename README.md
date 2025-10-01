# Agents Production

Build and run production-leaning AI agent experiments with TypeScript.  
Includes a TypeScript entrypoint, an (optional) dashboard scaffold, and a place for agent evaluations.

<p align="center">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-blue.svg?logo=typescript">
  <img alt="Node" src="https://img.shields.io/badge/Node-20%2B-339933.svg?logo=node.js&logoColor=white">
  <img alt="Bun" src="https://img.shields.io/badge/Bun-1.0%2B-000000.svg?logo=bun&logoColor=fff">
</p>

---

## ✨ What’s inside

- **TypeScript app entrypoint** (`index.ts`) to launch your agent logic.
- **`src/`**: place agent code, tools, routers, memory, etc.
- **`evals/`**: space for evaluation prompts, fixtures, and run logs.
- **`dashboard/`**: lightweight UI scaffold you can evolve into a local dashboard.
- **Bun / Node support** — run with `npm` or `bun`.

> The repo’s primary language is TypeScript; you’ll also see a small amount of CSS/JS/HTML used for the dashboard scaffolding. :contentReference[oaicite:0]{index=0}

---

## 🧱 Tech stack

- **Language:** TypeScript
- **Runtime:** Node.js (20+) or **Bun** (≥ 1.0.20) :contentReference[oaicite:1]{index=1}
- **LLM Provider:** OpenAI API (via `OPENAI_API_KEY`) :contentReference[oaicite:2]{index=2}
- **Front-end scaffold:** Plain HTML/CSS/JS for a minimal dashboard
- **Tooling:** Prettier config (`.prettierrc`), TS config, standard `package.json`

---

## 📦 Project structure

agents-production/
├─ dashboard/ # (Optional) local dashboard scaffold
├─ evals/ # evaluation prompts/fixtures & results
├─ src/ # your agent code lives here
├─ index.ts # app entrypoint
├─ types.ts # shared TypeScript types
├─ package.json # scripts & deps
├─ tsconfig.json # TypeScript config
├─ .prettierrc # formatting rules
└─ bun.lockb # Bun lockfile

## Setup Instructions

This repo requires **Node.js version 20+** or **bun v1.0.20**.

The `main` branch contains the final application. To code along with the workshop, checkout the `step/1` branch. You will also need an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys).

```bash
git clone https://github.com/Raghav847/agents-production.git
cd agents-production
npm install # or bun install
```

To run the project:

```bash
npm start
# or
bun run index.ts
```

## OpenAI API Key

Create an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys) and save it in a `.env` file:

```
OPENAI_API_KEY='YOUR_API_KEY'
```

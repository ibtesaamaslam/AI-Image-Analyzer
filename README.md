
<img width="1774" height="887" alt="b6440024-4295-4bd0-8e2f-8b852a97a951" src="https://github.com/user-attachments/assets/bd42be69-7373-4819-8c11-49e645577119" />
<br>

<div align="center">

<img src="https://img.shields.io/badge/TypeScript-93.5%25-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Gemini-AI%20Powered-4285F4?style=for-the-badge&logo=google&logoColor=white"/>
<img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind%20CSS-Styling-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
<img src="https://img.shields.io/badge/License-MIT-00C853?style=for-the-badge"/>

<br/>

# 🧠 AI Image Analyzer
### *React · TypeScript · Gemini API · Tailwind CSS · Vite*

**A modern, AI-powered web application that analyses images using Google Gemini — upload any PNG or JPEG, enter a custom prompt, and receive a detailed, context-aware AI-generated response in seconds.**

<br/>

[![GitHub Stars](https://img.shields.io/github/stars/ibtesaamaslam/AI-Image-Analyzer?style=social)](https://github.com/ibtesaamaslam/AI-Image-Analyzer/stargazers)
&nbsp;
[![GitHub Forks](https://img.shields.io/github/forks/ibtesaamaslam/AI-Image-Analyzer?style=social)](https://github.com/ibtesaamaslam/AI-Image-Analyzer/network/members)
&nbsp;
[![GitHub Issues](https://img.shields.io/github/issues/ibtesaamaslam/AI-Image-Analyzer)](https://github.com/ibtesaamaslam/AI-Image-Analyzer/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [How It Works — Gemini API Flow](#-how-it-works--gemini-api-flow)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Usage Workflow](#-usage-workflow)
- [Use Cases](#-use-cases)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

---

## 🔍 Overview

**AI Image Analyzer** is a full-featured, AI-driven image analysis web application that bridges the gap between raw visual data and natural language understanding. Built on **React 18** and **TypeScript** with **Vite** for lightning-fast development, the app sends user-uploaded images alongside custom text prompts to the **Google Gemini API** — which returns rich, contextual AI analysis of everything it sees in the image.

The project is engineered with a mobile-first, responsive design using **Tailwind CSS**, a completely type-safe codebase (TypeScript 93.5%), clean component architecture, and production-grade error handling — making it both a practical tool and a strong demonstration of multimodal AI integration in a modern frontend stack.

> 💡 **What makes this different from basic image classification?** Traditional image classifiers output a fixed label (e.g., "cat"). Gemini's multimodal vision model understands the entire scene — objects, relationships, text in images, emotions, spatial context, and more — and responds in natural language to any question you ask about it.

---

## 🧰 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| [React](https://react.dev/) | 18 | UI framework — component-based architecture |
| [TypeScript](https://www.typescriptlang.org/) | Strict mode | 93.5% of codebase — end-to-end type safety |
| [Vite](https://vitejs.dev/) | Latest | Build tool — ESM-native, fast HMR via `vite.config.ts` |
| [Tailwind CSS](https://tailwindcss.com/) | Latest | Utility-first styling — mobile-first responsive design |
| [Google Gemini API](https://ai.google.dev/) | Latest | Multimodal vision AI — image + text → detailed analysis |
| [dotenv](https://github.com/motdotla/dotenv) | via Vite | Secure `GEMINI_API_KEY` injection via `import.meta.env` |
| HTML5 | — | 6.5% of codebase — `index.html` Vite entry point |

---

## ✨ Features

### 🖼️ Image Upload & Preview
- Drag-and-drop or click-to-browse file input supporting **PNG** and **JPEG** formats.
- Instant image preview rendered in the UI before analysis — no page reload.
- File type validation on selection — unsupported formats trigger a clear, descriptive error.

### 💬 Custom Prompt Input
- Fully customisable text prompt field — ask anything about the uploaded image.
- Default prompt: `"Describe this image in detail."` — works immediately out of the box.
- Supports complex, multi-part questions: object identification, text extraction, mood analysis, scene description, and more.

### 🤖 AI-Powered Analysis (Gemini)
- Sends the image as base64-encoded data alongside the prompt to the **Gemini API** via `services/`.
- Receives a rich, natural-language response covering all visible elements in the image.
- Results displayed in a structured, readable panel adjacent to the image preview.

### ⏳ Loading States
- Visual loading indicator active during the Gemini API call.
- Analyze button disabled while a request is in flight — prevents duplicate submissions.
- Smooth transition from loading to result display.

### 🛡️ Robust Error Handling
- Invalid file types caught at upload — user sees a specific error, not a generic failure.
- API errors (invalid key, network failure, rate limit) surface as clear, actionable messages.
- All errors handled gracefully without crashing the application.

### 🔄 Reset Functionality
- A single **Clear** button removes the current image, resets the prompt, and clears the analysis result — ready for the next image instantly.

### 📱 Responsive Design
- Tailwind CSS breakpoints ensure the two-panel layout (image + analysis) stacks cleanly on mobile.
- Touch-optimised upload zone and buttons work correctly on iOS and Android browsers.

### 🔒 Type-Safe Codebase
- 93.5% TypeScript — strict mode enabled in `tsconfig.json`.
- All component props, API response shapes, and utility functions are fully typed.
- Zero implicit `any` — reliable IntelliSense and compile-time error detection throughout development.

---

## ⚙️ How It Works — Gemini API Flow

```
User uploads image (PNG / JPEG)
            ↓
Image converted to base64 string (client-side)
            ↓
User enters custom prompt text
            ↓
services/geminiService.ts
  └── Builds multimodal request:
      {
        contents: [
          {
            parts: [
              { text: prompt },
              { inlineData: { mimeType, data: base64Image } }
            ]
          }
        ]
      }
            ↓
POST → https://generativelanguage.googleapis.com
       /v1beta/models/gemini-pro-vision:generateContent
            ↓
Gemini Vision Model processes image + prompt
            ↓
Response: { candidates[0].content.parts[0].text }
            ↓
AI analysis text rendered in results panel
```

The `GEMINI_API_KEY` is injected at build time via Vite's `import.meta.env.GEMINI_API_KEY` — it never appears in client-side source code directly.

---

## 📂 Project Structure

```
AI-Image-Analyzer/
│
├── components/                  # Reusable React UI components
│   ├── Header.tsx               # App title and navigation bar
│   ├── ImageUploader.tsx        # Drag-and-drop upload zone with preview
│   ├── PromptInput.tsx          # Custom prompt text field
│   ├── AnalysisResult.tsx       # AI response display panel
│   └── LoadingSpinner.tsx       # Loading indicator during API call
│
├── services/
│   └── geminiService.ts         # Gemini API client — builds and sends requests
│
├── utils/
│   └── imageUtils.ts            # File validation, base64 conversion helpers
│
├── App.tsx                      # Root component — layout, state, orchestration
├── index.tsx                    # React DOM root mount
├── index.html                   # Vite HTML entry point
├── metadata.json                # App metadata (Google AI Studio config)
├── package.json                 # Dependencies and npm scripts
├── tsconfig.json                # TypeScript strict mode configuration
└── vite.config.ts               # Vite build config — API key env injection
```

> **Note:** Files live at the **repository root** — there is no `src/` subdirectory. `App.tsx` and `index.tsx` sit alongside the config files at the top level.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16 or higher
- **npm** v8 or higher
- A **Google Gemini API key** — get one free at [Google AI Studio](https://aistudio.google.com/app/apikey)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ibtesaamaslam/AI-Image-Analyzer.git
cd AI-Image-Analyzer

# 2. Install dependencies
npm install
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the repository root:

```bash
# .env.local
GEMINI_API_KEY=your_gemini_api_key_here
```

> ⚠️ **Security:** `.env.local` must be listed in `.gitignore` — never commit your API key. Vite exposes only variables prefixed with `VITE_` to the browser by default; the `vite.config.ts` handles the `GEMINI_API_KEY` injection safely.

| Variable | Required | Source |
|----------|----------|--------|
| `GEMINI_API_KEY` | Yes | [Google AI Studio](https://aistudio.google.com/app/apikey) → API Keys → Create API Key |

---

## 📜 Available Scripts

```bash
# Start development server with hot module replacement
npm run dev
# → http://localhost:5173

# Build for production (outputs to /dist)
npm run build

# Preview the production build locally
npm run preview
```

---

## 🧑‍💻 Usage Workflow

### Step 1 — Upload an Image
Click the upload zone or drag and drop a **PNG** or **JPEG** file. The image preview appears immediately. Unsupported formats (e.g., `.gif`, `.webp`) will show an error — re-upload a supported format.

### Step 2 — Write Your Prompt
The default prompt is `"Describe this image in detail."` — you can leave it as-is or replace it with any question:
- `"What objects are visible and where are they positioned?"`
- `"Extract all text visible in this image."`
- `"What mood or emotion does this image convey?"`
- `"Is there anything unusual or concerning in this image?"`

### Step 3 — Analyze
Click **Analyze Image**. The loading indicator activates while Gemini processes the multimodal request (typically 1–3 seconds depending on image size and network). The AI response appears in the right panel.

### Step 4 — Clear & Try Again
Click **Clear** to reset everything — image, prompt, and result — and start with a new image.

---

## 🎯 Use Cases

| Domain | Example Prompt |
|--------|----------------|
| **Accessibility** | `"Describe this image for a visually impaired person."` |
| **Content moderation** | `"Does this image contain any harmful or inappropriate content?"` |
| **E-commerce** | `"List all visible product features and condition."` |
| **Education** | `"Explain what is shown in this diagram."` |
| **Medical (informational)** | `"Describe the visible anatomy in this illustration."` |
| **Document scanning** | `"Extract and transcribe all text in this image."` |
| **Art & design** | `"What artistic style and techniques are used in this image?"` |
| **Security** | `"Identify all people and objects in this surveillance image."` |

---

## 🗺️ Roadmap

- [ ] **Multi-image upload** — analyse and compare multiple images in a single session
- [ ] **Analysis history** — persist past analyses to `localStorage` or Supabase
- [ ] **Export results** — download the AI response as `.txt` or `.pdf`
- [ ] **Gemini model selector** — let users switch between `gemini-pro-vision`, `gemini-1.5-pro`, and `gemini-1.5-flash`
- [ ] **Voice prompt input** — Web Speech API integration for hands-free prompt entry
- [ ] **Batch analysis mode** — upload a folder and analyse all images with a shared prompt
- [ ] **Confidence / detail level slider** — prompt engineering presets (brief, detailed, technical)
- [ ] **Dark mode** — system-aware theme via Tailwind `dark:` variants

---

## 🤝 Contributing

Contributions are welcome!

```bash
# 1. Fork the repository

# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/AI-Image-Analyzer.git
cd AI-Image-Analyzer

# 3. Install dependencies
npm install

# 4. Create a feature branch
git checkout -b feature/add-history-panel

# 5. Make changes and commit
git add .
git commit -m "feat: add analysis history panel with localStorage"

# 6. Push and open a Pull Request
git push origin feature/add-history-panel
```

**Contribution ideas:** add a new Gemini model option, build the history panel, implement dark mode, add WEBP support, or write unit tests for `utils/imageUtils.ts`.

---

## 👤 Author

<div align="center">

**Ibtesaam Aslam**

[![GitHub](https://img.shields.io/badge/GitHub-ibtesaamaslam-181717?style=for-the-badge&logo=github)](https://github.com/ibtesaamaslam)

*Full-Stack Developer & AI Enthusiast*

</div>

---

## 📜 License

```
MIT License — Copyright (c) 2024 Ibtesaam Aslam
```

| Permission | Status |
|-----------|--------|
| ✅ Commercial use | Allowed |
| ✅ Modification | Allowed |
| ✅ Distribution | Allowed |
| ✅ Private use | Allowed |
| ❌ Liability | No warranty |
| ❌ Trademark use | Not granted |

---

## 🙏 Acknowledgements

- **[Google Gemini API](https://ai.google.dev/)** — for the powerful multimodal vision model that makes image + prompt → analysis possible in a single API call.
- **[Google AI Studio](https://aistudio.google.com/)** — this project was scaffolded from the AI Studio repository template (`metadata.json`), which provided the initial project structure.
- **[Microsoft & LinkedIn Learning](https://www.linkedin.com/learning/)** — for the *Microsoft Azure AI Essentials* and *Hands-On Generative AI with Multi-Agent LangChain* courses that inspired this project.
- **[React](https://react.dev/) & [Vite](https://vitejs.dev/)** — for the fast, modern frontend development environment.
- **[Tailwind CSS](https://tailwindcss.com/)** — for the utility-first CSS framework that made responsive UI design rapid and consistent.

---

<div align="center">

**⭐ If this project helped you explore multimodal AI, please consider starring it on GitHub!**

[![Star on GitHub](https://img.shields.io/github/stars/ibtesaamaslam/AI-Image-Analyzer?style=social)](https://github.com/ibtesaamaslam/AI-Image-Analyzer)

*Built with ❤️ by [Ibtesaam Aslam](https://github.com/ibtesaamaslam)*

</div>

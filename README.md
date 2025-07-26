
# 🧠 AI Image Analyzer

The **AI Image Analyzer** is a modern web app built with **React** and **TypeScript**, using the **Gemini API** for intelligent image analysis. Users can upload images, enter custom prompts, and get detailed AI-generated responses. With a clean UI, mobile-first design, and solid error handling, this project is a great showcase of AI-driven image interaction.

---

## 📑 Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Configuration](#configuration)
* [Running the Application](#running-the-application)
* [Project Structure](#project-structure)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgements](#acknowledgements)

---

## 🚀 Features

* **Image Upload and Preview**
  Upload PNG or JPEG images and instantly preview them in a responsive layout.

* **Custom Prompt Input**
  Ask your own questions about the image—fully customizable.

* **AI-Powered Analysis**
  Uses the Gemini API to generate context-aware responses from image data.

* **Responsive Design**
  Built with Tailwind CSS for a sleek, mobile-friendly UI.

* **Robust Error Handling**
  Validates file types and shows helpful messages for any issues.

* **Loading Indicators**
  Visual feedback while your image is being processed.

* **Reset Functionality**
  Quickly clear the current image and start fresh.

* **Type-Safe Codebase**
  Entirely written in TypeScript for reliability and better dev experience.

---

## 🛠️ Tech Stack

* **Frontend**: React, TypeScript, Tailwind CSS
* **API Integration**: Gemini API
* **Build Tool**: Vite
* **Package Manager**: npm
* **Env Management**: dotenv
* **Code Quality**: TypeScript (strict mode)

---

## ⚙️ Prerequisites

Before getting started, make sure you have:

* **Node.js** (v16 or higher)
* **npm** (v8 or higher)
* A **Gemini API key** (get it from the Gemini platform)

---

## 📥 Installation

1. **Clone the repo**:

   ```bash
   git clone https://github.com/ibtesaamaslam/ai-image-analyzer.git
   cd ai-image-analyzer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

---

## 🔐 Configuration

1. **Set up your environment variables**:

   Create a `.env.local` file in the root directory and add:

   ```
   GEMINI_API_KEY=your-gemini-api-key
   ```

   Make sure `.env.local` is listed in `.gitignore`.

2. **Check Vite config**:
   The app uses `vite.config.ts` to load the API key using `import.meta.env`.

---

## 🧪 Running the Application

### Start Dev Server

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

Build output goes to `/dist`.

### Preview Production Build

```bash
npm run preview
```

---

## 🗂 Project Structure

```
ai-image-analyzer/
├── public/                   # Static assets
├── src/
│   ├── components/           # React components (Header, ImageUploader, etc.)
│   ├── services/             # Gemini API integration
│   ├── utils/                # Helper functions
│   ├── App.tsx               # Main app component
│   └── index.tsx             # React entry point
├── .env.local                # Environment variables
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🧑‍💻 Usage

### 1. Upload an Image

Click the upload zone or drag-and-drop a supported image (PNG, JPEG). Invalid formats will trigger an error.

### 2. Enter a Prompt

Write your custom query (e.g., `"What’s happening in this image?"`). Default is `"Describe this image in detail."`

### 3. Analyze

Click **Analyze Image** to send the data to Gemini. The AI’s response appears on the right.

### 4. Clear & Reset

Use **Clear** to remove the current image and prompt.

### 5. Error Handling

Bad input or API issues will show friendly error messages. Make sure your API key is valid.

---

## 🤝 Contributing

Contributions are welcome!

1. **Fork** the repo

2. **Create a new branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make changes**, follow best practices

4. **Test** using:

   ```bash
   npm run dev
   ```

5. **Push and PR**
   Submit a pull request with a clear explanation of your feature/fix.

---

## 📄 License

This project is licensed under the **MIT License**. See `LICENSE` for details.

---

## 🙌 Acknowledgements

* **Microsoft & LinkedIn Learning**
  For inspiration via the *Microsoft Azure AI Essentials* and *Hands-On Generative AI with Multi-Agent LangChain* courses.

* **Gemini API**
  For powering image analysis.

* **React & Vite**
  For a fast and flexible dev environment.

* **Tailwind CSS**
  For rapid UI design.

---

Thanks for checking out the **AI Image Analyzer**!
Feel free to open an issue or reach out if you have feedback or questions. 🚀


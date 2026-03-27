# Bloom AI 🌸

![Bloom AI — landing preview](./screenshot.png)

Bloom AI is a generative AI–oriented web app: gallery, AI generation, and 3D structures—built with a dark space-themed UI, liquid glass morphism, and a full-screen video background.

## Screenshots

### AI Generation

![AI Generation — prompt, style, and aspect ratio](./docs/generation.png)

Enter a botanical-style prompt, pick a look (e.g. hyper-realistic) and aspect ratio, then generate; the right panel shows the result when ready.

### Artistic Gallery

![Artistic Gallery — grid of study images](./docs/gallery.png)

Browse curated studies in a dark grid with frosted cards—good for skimming high-quality reference imagery.

### 3D Structures

![3D Structures — interactive viewer](./docs/structures.png)

Use the viewer to rotate and zoom a neural-style floral asset, see the active `.obj` name, and download the file when you need it offline.

## 📁 Project layout

```text
bloom-ai/
├── src/
│   ├── pages/          # Home, Gallery, Generation, Structures
│   ├── App.tsx         # Router, background video, route transitions
│   ├── main.tsx
│   └── index.css       # Tailwind + global styles
├── index.html
├── vite.config.ts
├── tsconfig.json
├── docs/               # Extra README screenshots
├── package.json
├── screenshot.png      # Hero / landing preview
└── README.md
```

## ✨ Features

- **Liquid Glass Morphism:** Custom CSS for a stunning, frosted glass look with complex gradients and borders.
- **Dynamic Background Blur:** The video background smoothly blurs with animations when navigating away from the home page.
- **Animated Transitions:** Seamless page routing using `motion` (Framer Motion) and `react-router-dom`.
- **Responsive Design:** A beautiful two-panel split layout on desktop that gracefully adapts to mobile screens.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Animations:** [Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/wilo101/bloom-ai.git
   cd bloom-ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` in your browser.

## 📄 License

This project is licensed under the MIT License.

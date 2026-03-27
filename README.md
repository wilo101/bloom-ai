# Bloom AI 🌸

![Bloom AI — landing preview](./screenshot.png)

**Bloom AI** is a **front-end / UI–UX portfolio piece** themed around a fictional “generative botanical” product. There is **no backend, no real AI, and no live data**—screens are static layouts and placeholder interactions for presentation only.

**Live site:** [https://wilo101.github.io/bloom-ai/](https://wilo101.github.io/bloom-ai/)

## Screenshots

### AI Generation (UI mock)

![AI Generation — prompt, style, and aspect ratio](./docs/generation.png)

Mock flow: prompt field, style/ratio controls, and an empty preview area—layout and styling only, not connected to a model or API.

### Artistic Gallery (UI mock)

![Artistic Gallery — grid of study images](./docs/gallery.png)

Grid of sample imagery inside cards; demonstrates composition, typography, and dark-theme gallery patterns.

### 3D Structures (UI mock)

![3D Structures — interactive viewer](./docs/structures.png)

Viewer-style panel with copy and controls as a design concept; no real 3D engine or file download pipeline.

## 📁 Project layout

```text
bloom-ai/
├── .github/workflows/  # GitHub Pages deploy
├── public/             # Static assets (+ .nojekyll for Pages)
├── scripts/            # Post-build SPA fallback (404.html)
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

## ✨ UI highlights (front-end only)

- **Liquid glass / frosted panels:** Gradients, borders, and transparency for a premium dark layout.
- **Dynamic background blur:** Video backdrop eases into blur when leaving the home route.
- **Motion & routing:** Page transitions with Motion and React Router.
- **Responsive layout:** Split hero and inner pages adapt for smaller viewports.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Animations:** [Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📄 License

This project is licensed under the MIT License.

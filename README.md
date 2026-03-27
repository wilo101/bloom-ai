# Bloom AI

![Bloom AI — landing](./screenshot.png)

I build **front-end experiences**: type, space, motion, and glass-deep surfaces that still read clearly when the novelty wears off. This repository is one continuous rhythm—a single product narrative told through **UI, UX, and implementation detail**, not through backend wiring.

The brief is botanical and luminous: dark atmospheres, soft glow, typography that carries weight. The goal is an interface that **feels like it could still make sense fifty years from now**—not because the pixels are frozen in time, but because **hierarchy, contrast, and pacing** are treated as the real deliverables.

**Live:** [https://wilo101.github.io/bloom-ai/](https://wilo101.github.io/bloom-ai/)

---

## Surfaces in motion

### Generation

![Generation — composition & controls](./docs/generation.png)

A two-column **editorial layout**: primary copy and controls on one side, a tall **canvas of attention** on the other. The rhythm is *prompt → parameters → action*—clear focal path, generous radii, and glass panels that sit **above** the world instead of fighting it.

### Gallery

![Gallery — grid & card language](./docs/gallery.png)

**Density without noise**: a responsive grid, cards that breathe, labels anchored in the corner system. This is **browsing UX** as craft—how the eye moves row to row when everything shares the same visual weight class.

### Structures

![Structures — viewer chrome](./docs/structures.png)

**Viewer chrome**: instructions, hierarchy around the “stage,” and a bottom bar that reads like **instrumentation**—filename, affordance, download. Spatial storytelling for a tool that *feels* spatial even in the browser.

---

## What this repo exercises (front end)

- **Visual language** — frosted glass, edge light, dark-base contrast, botanical–celestial mood without clipart cliché.
- **Component architecture** — reusable primitives (`GlassPanel`, `IconCircle`, `PageShell`, `PageHeader`, `FeatureCard`) with typed props; pages compose, not duplicate.
- **Motion as UX** — route-aware background blur; transitions that respect **AnimatePresence** and reading order.
- **Information design** — each route is a **self-contained chapter**: hero, ingress, internal rhythm.
- **Responsive posture** — layouts that scale from immersive desktop splits to narrower viewports without collapsing hierarchy.
- **Shipping** — static host–ready build, sensible `base` path, SPA fallback for deep links.

---

## Project layout

```text
bloom-ai/
├── .github/workflows/      # GitHub Pages deploy
├── public/
├── scripts/                # SPA 404 fallback after build
├── src/
│   ├── components/
│   │   ├── layout/         # PageShell, PageHeader
│   │   ├── ui/             # GlassPanel, IconCircle, NavPill, FeatureCard, ConceptBadge
│   │   └── index.ts        # barrel exports
│   ├── pages/              # Home, Gallery, Generation, Structures
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
├── docs/
├── package.json
├── screenshot.png
└── README.md
```

---

## Stack — why these choices

| Layer | Choice | Why |
|--------|--------|-----|
| UI runtime | [React 19](https://react.dev/) | Component model fits the glass-panel language — each surface is a composable `<GlassPanel>` with variant/radius props. |
| Build | [Vite](https://vitejs.dev/) | Near-instant HMR during design iteration; trivial `base` path config for GitHub Pages. |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first keeps the visual system co-located with markup; `@theme` tokens enforce a single type + radius scale. |
| Routing | [React Router](https://reactrouter.com/) | `useLocation` drives both route transitions and the background-blur choreography in one place. |
| Motion | [Motion](https://motion.dev/) | `AnimatePresence` + blur/opacity keyframes give routes a spatial feel without a page reload. |
| Icons | [Lucide React](https://lucide.dev/) | Tree-shakeable, consistent 24 × 24 stroke set that matches the thin-line aesthetic. |

---

## License

MIT.

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

const repoSlug = process.env.GH_REPO_NAME || 'bloom-ui';
const githubPagesBase =
  process.env.GITHUB_PAGES === 'true' ? `/${repoSlug}/` : '/';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: githubPagesBase,
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // Set DISABLE_HMR=true to turn off HMR (e.g. to reduce reload noise in some environments).
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});

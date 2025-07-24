import { defineConfig } from '@pandacss/dev';
import { theme } from './src/theme'; // Импортируем нашу тему

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],

  jsxFramework: 'react',
  outdir: 'styled-system',
  
  conditions: {
    light: '[data-theme="light"] &',
    dark: '[data-theme="dark"] &',
    blue: '[data-theme="blue"] &',
  },

  globalCss: {
    body: {
      bg: 'bg.canvas',
      color: 'text.default',
    },
  },

  // Используем импортированную тему
  theme,
});

import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],

  jsxFramework: 'react',
  outdir: 'styled-system',

  conditions: {
    light: '[data-theme="light"] &',
    dark: '[data-theme="dark"] &',
  },
  globalCss: {
    body: {
      bg: 'bg.canvas',
      color: 'text.default',

    },

  },
  theme: {
    tokens: {
      colors: {
        white: { value: '#ffffff' },
        gray: {
          100: { value: '#f7fafc' },
          200: { value: '#e2e8f0' },
          400: { value: '#a0aec0' },
          500: { value: '#718096' },
          700: { value: '#4a5568' },
          800: { value: '#2d3748' },
          900: { value: '#1a202c' },
        },
        blue: { 500: { value: '#3b82f6' } },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          canvas: { value: { light: '{colors.gray.100}', dark: '{colors.gray.900}' } },
          surface: { value: { light: 'white', dark: '{colors.gray.800}' } }, // Фон для карточки
        },
        text: {
          default: { value: { light: '{colors.gray.900}', dark: '{colors.gray.100}' } },
          muted: { value: { light: '{colors.gray.500}', dark: '{colors.gray.400}' } }, // Приглушенный текст
        },
        border: {
          default: { value: { light: '{colors.gray.200}', dark: '{colors.gray.800}' } }, // Цвет границы
        },
        button: {
          primary: {
            bg: {value: '{colors.blue.500}'},
            text: {value: '{colors.white}'},
          },
          secondary: {
            bg: {value: {light: '{colors.white}', dark: '{colors.gray.800}'}},
            bg_hover: { value: { light: '{colors.gray.100}', dark: '{colors.gray.700}' } },
            text: {value: {light: '{colors.gray.900}', dark: '{colors.gray.100}'}},
            border: {value: {light: '{colors.gray.200}', dark: '{colors.gray.700}'}},
          },
        }
      },
    },
  },
})
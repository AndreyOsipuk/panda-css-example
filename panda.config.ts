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
    blue: '[data-theme="blue"] &',
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
        red: { 500: { value: '#ef4444' } },
        green: { 500: { value: '#22c55e' } },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          canvas: { value: { base: '{colors.white}', _dark: '{colors.gray.900}' } },
          surface: { value: { base: '{colors.gray.50}', _dark: '{colors.gray.800}' } },
        },
        text: {
          default: { value: { base: '{colors.gray.900}', _dark: '{colors.gray.100}' } },
          muted: { value: { base: '{colors.gray.500}', _dark: '{colors.gray.400}' } },
        },
        border: {
          default: { value: { base: '{colors.gray.200}', _dark: '{colors.gray.700}' } },
        },
        // Токены для компонента кнопки
        button: {
          primary: {
            bg: {
              value: { base: '{colors.blue.500}', _dark: '{colors.green.500}', _blue: '{colors.red.500}'  }
            },
            text: {
              value: { base: '{colors.white}', _dark: '{colors.white}' }
            },
          },
          secondary: {
            // Вторичная кнопка теперь имеет прозрачный фон и рамку в цвет акцента
            bg: {
              value: { base: 'transparent', _dark: 'transparent' }
            },
            bg_hover: {
              value: { base: '{colors.gray.100}', _dark: '{colors.gray.800}' }
            },
            text: {
              // Текст кнопки соответствует акцентному цвету темы
              value: { base: '{colors.blue.500}', _dark: '{colors.green.500}' }
            },
            border: {
              // Рамка кнопки соответствует акцентному цвету темы
              value: { base: '{colors.blue.500}', _dark: '{colors.green.500}' }
            },
          },
        }
      },
    },
  },
})

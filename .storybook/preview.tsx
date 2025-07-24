import type { Preview, Decorator  } from '@storybook/react';
import { ThemeProvider, useTheme  } from 'next-themes'
import '../src/app/globals.css';
import {withThemeByDataAttribute} from "@storybook/addon-themes";
import React, { useEffect } from 'react';

function ThemeUpdater({ theme }: { theme: string | undefined }) {
  const { setTheme } = useTheme();

  useEffect(() => {
    if (theme) {
      setTheme(theme);
    }
  }, []);

  return null;
}

const withNextThemes: Decorator = (Story, context) => {
  // Получаем тему, выбранную в тулбаре Storybook
  const { theme } = context.globals;
console.log
  // Оборачиваем историю в наш провайдер
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      <ThemeUpdater theme={theme} />
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withNextThemes,
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
        blue: 'blue',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      toolbar: {
        icon: 'circlehollow', // иконка для тулбара
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'system', title: 'System' },
        ],
        showName: true,
      },
    },
  },
};

export default preview;
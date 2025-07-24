'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {Button} from "@/components/Button";

const themes = ['light', 'dark', 'blue'];

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Этот хук нужен, чтобы избежать ошибок гидратации
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // На сервере и до первой загрузки на клиенте ничего не рендерим
    return null;
  }

  const toggleTheme = () => {
    if(theme) {
      const currentIndex = themes.indexOf(theme);
      const nextIndex = (currentIndex + 1) % themes.length;
      setTheme(themes[nextIndex]);
    }

  };

  return (
    <Button onClick={toggleTheme}>
      Переключить
    </Button>
  );
}
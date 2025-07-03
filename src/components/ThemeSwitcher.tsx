'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {Button} from "@/components/Button";

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
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button onClick={toggleTheme}>
      Переключить на {theme === 'light' ? 'Темную' : 'Светлую'}
    </Button>
  );
}
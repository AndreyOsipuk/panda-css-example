'use client';

import { cva } from '../../styled-system/css';
import { styled } from '../../styled-system/jsx';

// 1. Создаем "рецепт" для нашей кнопки
const buttonRecipe = cva({
  // Базовые стили, общие для всех вариантов
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'lg',
    fontWeight: 'semibold',
    paddingX: '4',
    paddingY: '2',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    // Стили для неактивного состояния
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    }
  },
  // Описываем варианты
  variants: {
    visual: {
      primary: {
        backgroundColor: 'button.primary.bg',
        color: 'button.primary.text',
        _hover: {
          opacity: 0.9,
        },
      },
      secondary: {
        borderWidth: '1px',
        borderColor: 'button.secondary.border',
        backgroundColor: 'button.secondary.bg',
        color: 'button.secondary.text',
        _hover: {
          backgroundColor: 'button.secondary.bg_hover',
        },
      },
    },
  },
  // Вариант по умолчанию
  defaultVariants: {
    visual: 'primary',
  },
});

// 2. Создаем наш React-компонент с помощью styled-фабрики и нашего рецепта
export const Button = styled('button', buttonRecipe);
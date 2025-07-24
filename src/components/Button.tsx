'use client';

import { cva } from '../../styled-system/css';
import { styled } from '../../styled-system/jsx';

// 1. Создаем "рецепт" для кнопки, используя семантические токены
const buttonRecipe = cva({
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
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    }
  },
  variants: {
    visual: {
      primary: {
        // Используем семантические токены. Panda преобразует их в CSS переменные.
        backgroundColor: 'button.primary.bg',
        color: 'button.primary.text',
        borderWidth: '1px',
        borderColor: 'transparent',
        _hover: {
          opacity: 0.9,
        },
      },
      secondary: {
        borderWidth: '1px',
        // Здесь также используются семантические токены
        borderColor: 'button.secondary.border',
        backgroundColor: 'button.secondary.bg',
        color: 'button.secondary.text',
        _hover: {
          backgroundColor: 'button.secondary.bg_hover',
        },
      },
    },
  },
  defaultVariants: {
    visual: 'primary',
  },
});

// 2. Создаем React-компонент
export const Button = styled('button', buttonRecipe);

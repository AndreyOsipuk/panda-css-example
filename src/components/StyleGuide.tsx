'use client';

import { styled } from '../../styled-system/jsx';
import { css } from '../../styled-system/css';
import { vstack, grid, circle, hstack } from '../../styled-system/patterns';
import { Button } from './Button'; // Убедитесь, что путь к вашей кнопке верный
import { theme as themeConfig } from '../theme'; // Импортируем нашу конфигурацию!

const themes = [
  { name: 'Light', value: 'light' },
  { name: 'Dark', value: 'dark' },
  { name: 'Blue', value: 'blue' },
];

// Вспомогательный компонент для отображения образца цвета
const ColorSwatch = ({ name, color }: { name: string; color: string }) => (
  <div className={vstack({ alignItems: 'start', gap: '1' })}>
    <div className={vstack({ alignItems: 'start', gap: '0' })}>
      <p className={css({ fontWeight: 'medium', fontSize: 'sm' })}>{name}</p>
      <p className={css({ color: 'text.muted', fontSize: 'xs' })}>{color}</p>
      <p className={css({ fontSize: 'xs' })} style={{ backgroundColor: color, color, padding: "5px", border: "1px solid black" }}>{color}</p>
    </div>
  </div>
);

// Главный компонент для визуализации
export function StyleGuide() {
  const { tokens, semanticTokens } = themeConfig;

  // Рекурсивно обходим объект с цветами
  const renderColorSwatches = (colorObject: object, prefix = ''): React.ReactElement[] => {
    return Object.entries(colorObject).flatMap(([key, value]) => {
      const name = prefix ? `${prefix}.${key}` : key;
      if (typeof value.value === 'string') {
        return [<ColorSwatch key={name} name={name} color={value.value} />];
      }
      return renderColorSwatches(value, name);
    });
  };

  // Функция для получения значения токена по пути
  const resolveTokenValue = (tokenPath: string): string => {
    if (!tokenPath || !tokenPath.startsWith('{')) return tokenPath;

    const path = tokenPath.replace(/[{}]/g, '').split('.'); // -> ['colors', 'red', '500']
    
    let current: any = tokens;
    for (const part of path) {
      current = current?.[part];
      if (!current) return '#Error'; // Возвращаем ошибку, если путь не найден
    }

    return current.value || '#Error';
  };

  return (
    <div className={vstack({ gap: '12', p: { base: '4', md: '8' }, alignItems: 'stretch' })}>
      
      <section className={vstack({ gap: '4', alignItems: 'stretch' })}>
        <h2 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>Color Palette (Tokens)</h2>
        <div className={grid({ columns: { base: 3, sm: 5, md: 7 }, gap: '6' })}>
          {renderColorSwatches(tokens.colors)}
        </div>
      </section>

      <section className={vstack({ gap: '4', alignItems: 'stretch' })}>
        <h2 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>Themed Showcase (Semantic Tokens)</h2>
        <div className={grid({ columns: { base: 1, lg: 3 }, gap: '8' })}>
          {themes.map((theme) => (
            <div
              key={theme.value}
              data-theme={theme.value}
              className={vstack({
                alignItems: 'stretch', gap: '6', p: '6', borderRadius: 'xl',
                bg: 'bg.canvas', border: '1px solid', borderColor: 'border.default',
                transition: 'all 0.2s ease-in-out',
              })}
            >
              <h3 className={css({ fontSize: 'xl', fontWeight: 'semibold', color: 'text.default' })}>
                {theme.name} Theme
              </h3>

              <div className={vstack({ gap: '4', alignItems: 'stretch' })}>
                <h4 className={css({ fontWeight: 'medium', color: 'text.muted' })}>Semantic Colors</h4>
                <div className={grid({ columns: { base: 2, md: 3 }, gap: '6' })}>
                  {Object.entries(semanticTokens.colors).flatMap(([groupKey, groupValue]) => {
                    if (groupKey === 'button') return [];
                    return Object.entries(groupValue).map(([tokenKey, tokenObject]) => {
                      const tokenName = `${groupKey}.${tokenKey}`;
                      
                      // ИЗМЕНЕНО: Определяем, какой путь к цвету использовать для текущей темы
                      const themeKey = `_${theme.value}` as keyof typeof tokenObject.value;
                      const tokenPath = tokenObject.value[themeKey] || tokenObject.value.base;
                      const resolvedColor = resolveTokenValue(tokenPath);

                      return (
                        <div key={tokenName} className={vstack({ alignItems: 'start', gap: '1' })}>
                          <div className={vstack({ alignItems: 'start', gap: '0' })}>
                            <p className={css({ fontWeight: 'medium', fontSize: 'sm', color: 'text.default' })}>{tokenName}</p>
                            <p className={css({ color: 'text.muted', fontSize: 'xs' })}>{resolvedColor}</p>
                            <p className={css({ fontSize: 'xs' })} style={{ backgroundColor: resolvedColor, color:resolvedColor, padding: "5px", border: "1px solid black" }}>{resolvedColor}</p>
                          </div>
                        </div>
                      );
                    });
                  })}
                </div>
              </div>

              <div className={vstack({ gap: '3', alignItems: 'stretch' })}>
                <h4 className={css({ fontWeight: 'medium', color: 'text.muted' })}>Components</h4>
                <div className={vstack({ gap: '4', p: '4', borderRadius: 'lg', alignItems: 'start' })}>
                  <Button visual="primary">Primary Button</Button>
                  <Button visual="secondary">Secondary Button</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

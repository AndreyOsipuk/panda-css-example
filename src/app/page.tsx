import { Button } from '@/components/Button';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { css } from '../../styled-system/css';
import { hstack, vstack } from '../../styled-system/patterns';
// import './globals.css';

export default function Home() {
  return (
    <main className={css({ minH: '100vh', p: '8', bg: 'bg.canvas', color: 'text.default' })}>
      <div className={hstack({ justify: 'space-between', alignItems: 'center' })}>
        <h1 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
          Кнопки с вариантами и темами
        </h1>
        <ThemeSwitcher />
      </div>

      <div className={vstack({ mt: '8', gap: '4', alignItems: 'flex-start' })}>
        <p>Primary:</p>
        <div className={hstack({ gap: '4' })}>
          <Button visual="primary">Primary Button</Button>
          <Button visual="primary" disabled>Disabled</Button>
        </div>

        <p className={css({ mt: '4' })}>Secondary:</p>
        <div className={hstack({ gap: '4' })}>
          <Button visual="secondary">Secondary Button</Button>
          <Button visual="secondary" disabled>Disabled</Button>
        </div>
          <button className={css({ bg: "button.primary.bg", color: "button.primary.text" })}>
    Test Button
  </button>
      </div>
    </main>
  );
}
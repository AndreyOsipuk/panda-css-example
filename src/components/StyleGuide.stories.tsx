import type { Meta, StoryObj } from '@storybook/react';
import { StyleGuide } from './StyleGuide';

// Эта часть описывает вашу историю: название, компонент и другие настройки.
const meta: Meta<typeof StyleGuide> = {
  // Название истории в дереве Storybook.
  // Использование '/' создает вложенную структуру.
  title: 'Design System/Full Style Guide',
  
  // Компонент, который мы хотим показать.
  component: StyleGuide,
  
  // Дополнительные параметры. 'fullscreen' убирает лишние отступы в Storybook,
  // что идеально подходит для полностраничного гайда.
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

// Определяем тип для наших историй
type Story = StoryObj<typeof StyleGuide>;

// Создаем основную историю.
// Так как наш StyleGuide не принимает пропсов, объект `args` пустой.
export const Default: Story = {
  args: {},
};

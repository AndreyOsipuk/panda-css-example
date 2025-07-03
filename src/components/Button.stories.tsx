import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    visual: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
  args: {
    children: 'Нажми меня',
    disabled: false,
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    visual: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    visual: 'secondary',
  },
};
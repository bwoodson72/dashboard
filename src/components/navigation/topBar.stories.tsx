import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TopBar } from './topBar';

const meta = {
  component: TopBar,
} satisfies Meta<typeof TopBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TopBarStory: Story = {

};
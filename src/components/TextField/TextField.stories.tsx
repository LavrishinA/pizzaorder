import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from "./TextField.tsx"


const meta: Meta<typeof TextField> = {
    component: TextField,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof TextField>;


export const Primary: Story = { };
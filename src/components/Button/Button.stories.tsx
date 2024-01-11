import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
    title: "Controls/Button",
    component: Button,
    parameters: {
        layout: "fullscreen",
    },
}

export default meta
type Story = StoryObj<typeof Button>

export const PrimaryButton: Story = {
    args: {
        name: "Create User",
        variant: "primary",
    },
}

export const RoundIconButton: Story = {
    args: {
        variant: "round",
        name: "+",
    },
}

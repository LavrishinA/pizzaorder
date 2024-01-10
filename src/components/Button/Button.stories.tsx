import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
    title: "Controls",
    component: Button,
    parameters: {
        layout: "fullscreen",
    },
    args: {
        name: "Create user",
    },
}

export default meta
type Story = StoryObj<typeof Button>

export const PrimaryButton: Story = {}

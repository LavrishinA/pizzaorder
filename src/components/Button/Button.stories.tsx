import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
    title: "Controls/Button",
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

export const PrimaryButton: Story = {
    args: {
        ...meta.args,
        variant: "primary",
    },
}

export const RoundIconButton: Story = {
    args: {
        variant: "round",
        name: "+",
    },

    render: () => <Button name={"+"} variant={"round"} />,
}

import type { Meta, StoryObj } from "@storybook/react"
import { FormField } from "./FormField"

const meta: Meta<typeof FormField> = {
    title: "Controls",
    component: FormField,
    parameters: {
        layout: "fullscreen",
    },
}

export default meta
type Story = StoryObj<typeof FormField>

export const PrimaryFormField: Story = {}

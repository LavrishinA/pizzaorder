import type { Meta, StoryObj } from "@storybook/react"
import { MenuItem } from "./MenuItem.tsx"
import "../../../index.css"
const meta: Meta<typeof MenuItem> = {
    title: "Widget/MenuItem",
    component: MenuItem,
    parameters: {
        layout: "fullscreen",
    },
    args: {
        id: 1,
        name: "Margherita",
        unitPrice: 12,
        imageUrl: "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg",
        ingredients: ["tomato", "mozzarella", "basil"],
        soldOut: false,
    },
}

export default meta
type Story = StoryObj<typeof MenuItem>

export const PrimaryMenuItem: Story = {}

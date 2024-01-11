import type { Meta, StoryObj } from "@storybook/react"
import { SetQuantity } from "./SetQuantity.tsx"
import { useState } from "react"
import "../../index.css"

const meta: Meta<typeof SetQuantity> = {
    title: "Features/Quantity",
    component: SetQuantity,
    parameters: {
        layout: "fullscreen",
    },
}

export default meta
type Story = StoryObj<typeof SetQuantity>

const ControlledSetQuantity = () => {
    // Sets the hooks for both the label and primary props
    const [quantity, setQuantity] = useState(1)

    const increaseHandler = () => {
        setQuantity((prevState) => prevState + 1)
    }

    const decreaseQuantity = () => {
        setQuantity((prevState) => prevState - 1)
    }

    return <SetQuantity quantity={quantity} onIncrease={increaseHandler} onDecrease={decreaseQuantity} />
}

export const SetQuantityStory: Story = {
    render: () => <ControlledSetQuantity />,
}

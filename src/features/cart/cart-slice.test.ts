import { beforeEach, expect, test } from "vitest"
import { CartItem } from "../../api/pizzaApi.ts"
import { cartActions, cartReducer } from "./cart-slice.tsx"

let initialState: { cart: CartItem[] }

beforeEach(() => {
    initialState = {
        cart: [
            {
                pizzaId: 1,
                name: "Margherita",
                quantity: 2,
                unitPrice: 12,
                totalPrice: 12,
            },
        ],
    }
})

test("new item should be added into cart", () => {
    const reducedState = cartReducer(
        initialState,
        cartActions.addItem({
            pizzaId: 2,
            name: "Capricciosa",
            unitPrice: 14,
        }),
    )

    expect(reducedState.cart.length).toBe(2)
    expect(reducedState.cart[1].name).toBe("Capricciosa")
})

test("item by id should be deleted", () => {
    const reducedState = cartReducer(initialState, cartActions.deleteItem(1))

    expect(reducedState.cart.length).toBe(0)
})

test("item quantity should be increased", () => {
    const reducedState = cartReducer(initialState, cartActions.increaseQuantity(1))

    expect(reducedState.cart[0].quantity).toBe(3)
})

test("item quantity should be decreased", () => {
    const reducedState = cartReducer(initialState, cartActions.decreaseQuantity(1))

    expect(reducedState.cart[0].quantity).toBe(1)
})

test("cart should be cleared", () => {
    const reducedState = cartReducer(initialState, cartActions.clearCart())

    expect(reducedState.cart.length).toBe(0)
})

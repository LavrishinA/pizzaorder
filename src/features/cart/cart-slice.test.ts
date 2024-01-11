import { CartItem } from "../../api/pizzaApi.ts"
import { cartActions, cartReducer } from "./cart-slice.tsx"

let initialState: { cart: CartItem[] }

beforeEach(() => {
    initialState = {
        cart: [
            {
                pizzaId: 1,
                name: "Margherita",
                quantity: 1,
                unitPrice: 12,
                totalPrice: 12,
            },
        ],
    }
})

test("new item should be added into cart", () => {
    const reducedState = cartReducer(
        initialState,
        cartActions.addToCart({
            pizzaId: 2,
            name: "Capricciosa",
            unitPrice: 14,
        }),
    )

    expect(reducedState.cart.length).toBe(2)
    expect(reducedState.cart[1].name).toBe("Capricciosa")
})

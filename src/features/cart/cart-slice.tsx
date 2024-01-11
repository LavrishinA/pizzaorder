import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItem } from "../../api/pizzaApi.ts"

const initialState = {
    cart: [] as CartItem[],
}

const slice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: {
            reducer(state, action: PayloadAction<CartItem>) {
                state.cart.push(action.payload)
            },
            prepare(payload: { pizzaId: number; name: string; unitPrice: number }) {
                return { payload: { ...payload, quantity: 1, totalPrice: payload.unitPrice } }
            },
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            const index = state.cart.findIndex((p) => p.pizzaId === action.payload)
            if (index !== -1) state.cart.splice(index, 1)
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const index = state.cart.findIndex((p) => p.pizzaId === action.payload)
            if (index !== -1) state.cart[index].quantity += 1
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const index = state.cart.findIndex((p) => p.pizzaId === action.payload)
            if (index !== -1) state.cart[index].quantity -= 1
        },
        clearCart: (state) => {
            state.cart = []
        },
    },
})

export const cartReducer = slice.reducer
export const cartActions = slice.actions

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItem } from "../../api/pizzaApi.ts"

const initialState = {
    cart: [] as CartItem[],
}

const slice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: {
            reducer(state, action: PayloadAction<CartItem>) {
                state.cart.push(action.payload)
            },
            prepare(payload: { pizzaId: number; name: string; unitPrice: number }) {
                return { payload: { ...payload, quantity: 1, totalPrice: payload.unitPrice } }
            },
        },
    },
})

export const cartReducer = slice.reducer
export const cartActions = slice.actions

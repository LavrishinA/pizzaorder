import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {CartItem} from "../../api/pizzaApi.ts"
import {RootState} from "../../app/store.ts";

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
                return {payload: {...payload, quantity: 1, totalPrice: payload.unitPrice}}
            },
        },
        deleteItem: (state, action: PayloadAction<number>) => {

            const index = state.cart.findIndex((p) => p.pizzaId === action.payload)
            if (index !== -1) state.cart.splice(index, 1)
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {

            const index = state.cart.findIndex((p) => p.pizzaId === action.payload)
            if (index !== -1) {
                const item = state.cart[index]
                item.quantity += 1
                item.totalPrice += item.unitPrice
            }
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {

            const index = state.cart.findIndex((p) => p.pizzaId === action.payload)
            if (index !== -1) {
                const item = state.cart[index]
                item.quantity -= 1
                item.totalPrice -= item.unitPrice
            }
        },
        clearCart: (state) => {
            state.cart = []
        },
    },
    selectors: {
        cartItems: (state) => state.cart.length,

    }
})

export const isAddedSelector = createSelector(
    [
        (state: RootState) => state.cart.cart,
        (_state: RootState, id: number) => id
    ],
    (cart, id) => cart.some(item => item.pizzaId === id)
)

export const currentItemQuantitySelector = createSelector(
    [
        (state: RootState) => state.cart.cart,
        (_state: RootState, id: number) => id
    ],
    (cart, id) => {
        const index = cart.findIndex(item => item.pizzaId === id)
        return cart[index]?.quantity

    }
)


export const cartReducer = slice.reducer
export const cartActions = slice.actions
export const cartSelectors = slice.selectors
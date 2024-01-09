import axios, { AxiosResponse } from "axios"

const instance = axios.create({
    baseURL: "https://react-fast-pizza-api.onrender.com/api",
})

export class PizzaApi {
    static getMenu() {
        return instance.get<RestaurantRes<PizzaItem[]>, AxiosResponse<RestaurantRes<PizzaItem[]>>>("/menu")
    }

    static createOrder(order: NewOrder) {
        return instance.post<RestaurantRes<NewOrderRes>, AxiosResponse<RestaurantRes<PizzaItem[]>>, NewOrder>(
            "/order",
            order,
        )
    }

    static getOrder(id: string) {
        return instance.get<RestaurantRes<SearchOrderRes>, AxiosResponse<RestaurantRes<PizzaItem[]>>>(`/order/${id}`)
    }

    static updateOrder(id: string, update: { priority: boolean }) {
        return instance.patch(`/order/${id}`, update)
    }
}

export type RestaurantRes<T> = {
    status: string
    data: T
}

export type PizzaItem = {
    id: number
    name: string
    unitPrice: number
    imageUrl: string
    ingredients: string[]
    soldOut: boolean
}

export type NewOrder = {
    customer: string
    phone: string
    position?: string
    address: string
    priority: boolean
    cart: PizzaItem[]
}

export type Cart = {
    pizzaId: number
    name: string
    quantity: number
    unitPrice: number
    totalPrice: number
    addIngredients: unknown[]
    removeIngredients: unknown[]
}

export type NewOrderRes = Omit<NewOrder, "cart"> & {
    cart: Cart[]
    status: string
    id: string
    createdAt: string
    estimatedDelivery: string
    orderPrice: number
    priorityPrice: number
}

export type SearchOrderRes = Omit<NewOrder, "cart" | "phone" | "position" | "address"> & Omit<NewOrderRes, "createdAt">

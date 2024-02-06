import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AppLayout, Home, Menu, Error, Cart, CreateOrder, Order} from "app/layout";


const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/menu',
                element: <Menu/>,
                loader: menuLoader,
                errorElement: <Error/>

            },
            {path: '/cart', element: <Cart/>},
            {
                path: '/order/new',
                element: <CreateOrder/>,

            },
            {
                path: '/order/:orderId',
                element: <Order/>,
            },
        ],
    },
])


function App() {
    return <RouterProvider router={router}/>
}

export default App

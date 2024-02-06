import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AppLayout} from "./layout";
import {Home} from "./layout";
import {Menu, menuLoader} from "./layout";
import {Cart} from "./layout";
import {CreateOrder} from "./layout";
import {Order} from "./layout";


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
                // errorElement: <Error/>

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

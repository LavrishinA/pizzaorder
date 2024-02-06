import {Outlet} from "react-router-dom";
import {useAppSelector} from "../hooks.ts";
import {cartSelectors} from "../../features/cart/cart-slice.tsx";


export const AppLayout = () => {
    const cartItems = useAppSelector(cartSelectors.cartItems)
    return (
        <div style={{height: "100dvh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <header>
                1
            </header>
            <main style={{overflow: "hidden"}}>
                <Outlet/>
            </main>
            <footer>
                {cartItems}
            </footer>
        </div>
    );
};


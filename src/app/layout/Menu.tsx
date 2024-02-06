import {useLoaderData} from "react-router-dom";
import {PizzaApi, PizzaItem} from "api/pizzaApi.ts";


export const Menu = () => {
    const menu = useLoaderData() as PizzaItem[]

    return (
        <div>

        </div>
    );
};

export const menuLoader = async () => {
    const menu = await PizzaApi.getMenu();

    return menu.data.data
}

import {useLoaderData} from "react-router-dom";
import {PizzaApi, PizzaItem} from "../../api/pizzaApi.ts";
import s from "./Menu.module.css"
import {MenuItem} from "../../components";


export const Menu = () => {
    const menu = useLoaderData() as PizzaItem[]

    return (
        <section className={s.Menu}>
            {menu.map((item) => <MenuItem key={item.id} {...item}/>)}
        </section>
    );
};

export const menuLoader = async () => {
    const menu = await PizzaApi.getMenu();

    return menu.data.data
}

import {useLoaderData} from "react-router-dom";
import {PizzaApi, PizzaItem} from "../../api/pizzaApi.ts";
import {MenuItem} from "../../components";
import s from "./Menu.module.css"


export const Menu = () => {
    const menu = useLoaderData() as PizzaItem[]

    return (
        <div className={s.Menu}>
            {menu.map((item) => <MenuItem key={item.id} {...item}/>)}
        </div>
    );
};

export const menuLoader = async () => {
    const menu = await PizzaApi.getMenu();

    return menu.data.data
}

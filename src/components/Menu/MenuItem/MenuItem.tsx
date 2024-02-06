import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import s from "./MenuItem.module.css"
import {PizzaItem} from "../../../api/pizzaApi.ts";
import {SetQuantity} from "../../SetQuantity/SetQuantity.tsx";



export const MenuItem = (props: PizzaItem )=> {
    return (
        <div className={s.Card}>
            <div className={s.Container}>
                <AspectRatio.Root ratio={16 / 9}>
                    <img
                        src={props.imageUrl}
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                            borderRadius: "8px",
                            filter: `${props.soldOut ? "grayscale(80%)" : ""}`,
                        }}
                    />
                </AspectRatio.Root>
            </div>
            <div className={s.Description}>
                <h3 className={s.H3}> {props.name}</h3>
                <ul >
                    <span>Ingredients:</span>
                    {props.ingredients.map((ing) => (
                        <li>{ing}</li>
                    ))}
                </ul>
                <p className={s.Price}>
                    <span>Price: </span>
                    {props.unitPrice}&#36;
                </p>
            </div>
            <div style={{marginLeft: "auto", padding: "8px"}}>
                <SetQuantity quantity={1} onIncrease={() => {}} onDecrease={() => {}}/>
            </div>

        </div>
    )
}

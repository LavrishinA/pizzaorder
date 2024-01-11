import { FC } from "react"
import { PizzaItem } from "../../../api/pizzaApi.ts"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import s from "./MenuItem.module.css"

export const MenuItem: FC<PizzaItem> = (props) => {
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
                <ul style={{ display: "flex", gap: ".5rem", fontSize: "20px" }}>
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
        </div>
    )
}
0

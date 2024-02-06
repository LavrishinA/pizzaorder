import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import s from "./MenuItem.module.css"
import {PizzaItem} from "../../../api/pizzaApi.ts";
import {SetQuantity} from "../../SetQuantity/SetQuantity.tsx";
import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {cartActions, currentItemQuantitySelector, isAddedSelector} from "../../../features/cart/cart-slice.tsx";
import {Button} from "../../Button/Button.tsx";


export const MenuItem = (props: PizzaItem) => {
    const {id: pizzaId, name, unitPrice} = props
    const dispatch = useAppDispatch()
    const addItemHandler = () => dispatch(cartActions.addItem({pizzaId, name, unitPrice}))
    const increaseQuantityHandler = () => dispatch(cartActions.increaseQuantity(pizzaId))
    const decreaseQuantityHandler = () => dispatch(cartActions.decreaseQuantity(pizzaId))
    const isAdded = useAppSelector(state => isAddedSelector(state, props.id))
    const itemQuantity = useAppSelector(state => currentItemQuantitySelector(state, props.id))

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
                <ul>
                    <span style={{fontWeight: 800}}>Ingredients:</span>
                    {props.ingredients.map((ing, index) => (
                        <li key={index}>{ing}</li>
                    ))}
                </ul>
                <p className={s.Price}>
                    <span>Price: </span>
                    {props.unitPrice}&#36;
                </p>
            </div>
            <div style={{marginLeft: "auto", padding: "8px"}}>
                {isAdded ?
                    <SetQuantity quantity={itemQuantity} onIncrease={increaseQuantityHandler} onDecrease={decreaseQuantityHandler}/>
                    : <Button name={"Add to cart"} variant={"primary"} onClick={addItemHandler}/>}
            </div>

        </div>
    )
}

import { Button } from "../Button/Button.tsx"
import s from "./SetQuantity.module.css"
import { FC } from "react"

export const SetQuantity: FC<SetQuantityProps> = (props) => {
    return (
        <div className={s.Container}>
            <Button name={"-"} disabled={props.quantity === 1} variant={"round"} onClick={props.onDecrease} />
            <p className={s.Quantity}>{props.quantity}</p>
            <Button name={"+"} disabled={props.quantity === 5} variant={"round"} onClick={props.onIncrease} />
        </div>
    )
}

type SetQuantityProps = {
    quantity: number
    onIncrease: () => void
    onDecrease: () => void
}

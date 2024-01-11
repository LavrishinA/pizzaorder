import { Button } from "../Button/Button.tsx"
import s from "./SetQuantity.module.css"
import { FC, useState } from "react"

export const SetQuantity: FC<SetQuantityProps> = (props) => {
    const [clicked, setClicked] = useState(false)

    const clickHandler = (clickFunction: () => void) => {
        setClicked(true)
        clickFunction()
    }

    return (
        <div className={s.Container}>
            <Button
                name={"-"}
                disabled={props.quantity === 1}
                variant={"round"}
                onClick={() => clickHandler(props.onDecrease)}
            />
            <p onAnimationEnd={() => setClicked(false)} className={`${clicked ? s.animate : null}`}>
                {props.quantity}
            </p>
            <Button
                name={"+"}
                disabled={props.quantity === 5}
                variant={"round"}
                onClick={() => clickHandler(props.onIncrease)}
            />
        </div>
    )
}

type SetQuantityProps = {
    quantity: number
    onIncrease: () => void
    onDecrease: () => void
}

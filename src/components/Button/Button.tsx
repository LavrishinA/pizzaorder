import { FC } from "react"
import s from "./Button.module.css"

export const Button: FC<ButtonProps> = ({ name, variant }) => {
    return <button className={`${s.Button} ${variant === "primary" ? s.PrimaryButton : s.ButtonRound}`}>{name}</button>
}
type ButtonProps = {
    name: string
    variant: "primary" | "round"
}

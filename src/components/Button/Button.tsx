import { FC } from "react"
import s from "./Button.module.css"

export const Button: FC<ButtonProps> = ({ name }) => {
    return <button className={s.Button}>{name}</button>
}
type ButtonProps = {
    name: string
}

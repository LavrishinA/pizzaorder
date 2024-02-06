import s from "./Button.module.css"

export const Button = ({ name, variant, onClick, disabled }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${s.Button} ${variant === "primary" ? s.PrimaryButton : s.ButtonRound}`}
            disabled={disabled}
        >
            {name}
        </button>
    )
}
type ButtonProps = {
    name: string
    variant: "primary" | "round"
    onClick: () => void
    disabled?: boolean
}

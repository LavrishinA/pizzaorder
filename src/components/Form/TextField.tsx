import { FC, ReactNode } from "react"
import * as Form from "@radix-ui/react-form"
import s from "./FormField.module.css"

type TextFieldProps = {
    children: ReactNode
    name: string
    type: string
    placeholder: string
}

export const TextField: FC<TextFieldProps> = ({ children, ...props }) => {
    return (
        <Form.Field className={s.FormField} name={props.name}>
            <Form.Label className={s.FormLabel}>Your Name</Form.Label>
            <Form.Control
                className={s.Control}
                type={props.type}
                minLength={3}
                required
                placeholder={props.placeholder}
                autoComplete={"off"}
            />
            {children}
        </Form.Field>
    )
}

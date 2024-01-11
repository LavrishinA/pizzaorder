import * as Form from "@radix-ui/react-form"

import s from "./FormField.module.css"
import { TextField } from "./TextField"
import { Button } from "../Button/Button"

export const FormField = () => {
    return (
        <Form.Root className={s.FormRoot}>
            <TextField name={"firstName"} type={"text"} placeholder={"Enter you name"}>
                <Form.Message className={s.Message} match={"valueMissing"}>
                    Please enter your name
                </Form.Message>
                <Form.Message className={s.Message} match={"tooShort"}>
                    The name must be longer than 3 characters
                </Form.Message>
            </TextField>
            <Form.Submit asChild>
                <Button name={"Create user"} variant={"primary"} />
            </Form.Submit>
        </Form.Root>
    )
}

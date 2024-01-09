import * as Label from '@radix-ui/react-label';
import s from "./TextFiled.module.css"

export const TextField = () => (
    <div className={s.block}>
        <Label.Root htmlFor="firstName">
            Your name
        </Label.Root>
        <input className={s.input} type="text" id="firstName" placeholder={"Enter your name"} autoComplete="off" />
    </div>
);


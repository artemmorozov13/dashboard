import { TextField, Typography } from "@mui/material";
import { FC } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";

interface RegisterByEmailProps {

}

const RegisterByEmail: FC<RegisterByEmailProps> = (props) => {
    const {  } = props

    const methods = useForm()
    const { control } = methods

    return (
        <FormProvider {...methods}>
            <Typography>Создать аккаунт</Typography>
            <Controller
                name="email"
                control={control}
                render={({ field: { value, onChange } }) => (
                    <TextField
                        type="email"
                        value={value}
                        onChange={onChange}
                        label="E-mail почта"
                    />
                )}
            />
            <Controller
                name="password"
                control={control}
                render={({ field: { value, onChange } }) => (
                    <TextField
                        type="password"
                        value={value}
                        onChange={onChange}
                        label="Придумайте пароль"
                    />
                )}
            />
            <Controller
                name="passwordAgain"
                control={control}
                render={({ field: { value, onChange } }) => (
                    <TextField
                        type="password"
                        value={value}
                        onChange={onChange}
                        label="Повторите пароль"
                    />
                )}
            />
        </FormProvider>
    )
}

export default RegisterByEmail
import { FC, useEffect, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";

import { api } from "Shared/api";
import { RegisterByEmailFormStateSchema } from "../types/RegisterByEmailStateSchema";
import { PageLoader } from "Widgets/PageLoader";
import { useNavigate } from "react-router";
import { routes } from "Shared/lib/routes/routesConfig";
import { useAppDispatch } from "Shared/hooks/useAppDispatch/useAppDispatch";
import { UserActions } from "Entities/User";
import { UserType } from "Entities/User/types/UserStateSchema";
import s from "./RegisterByEmail.module.scss"

const RegisterByEmail: FC = () => {
    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const methods = useForm<RegisterByEmailFormStateSchema>()
    const { control, formState: { errors }, handleSubmit, reset } = methods

    const handleResetForm = () => {
        reset({
            email: "",
            password: "",
            passwordAgain: ""
        })
    }

    const onSubmit = async (data: RegisterByEmailFormStateSchema) => {
        try {
            setIsLoading(true)
            const response = await api.post("/users", data)

            if (!response.data) {
                setError("Ошибка при создании пользователя")
            }

            window.localStorage.setItem("userId", response.data.id)

            const payload: UserType = {
                email: data.email
            }

            dispatch(UserActions.setUser(payload))

            return navigate(routes.profile)
        } catch (error) {
            setError(`Ошибка при создании пользователя`)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <FormProvider {...methods}>
            <Grid container xs={12} spacing={2} className={s.container}>
                {isLoading ? (
                    <PageLoader />
                ) : (
                    <>
                        <Grid item xs={12}>
                            <Typography variant="h4">Создать аккаунт</Typography>
                            {error && <Alert severity="error">{error}</Alert>}
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Поле email обязательно для заполнения"
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Не корректный email адресс"
                                    }
                                }}
                                render={({ field: { value, onChange } }) => (
                                    <TextField
                                        type="email"
                                        value={value}
                                        onChange={onChange}
                                        label="E-mail почта"
                                        error={Boolean(errors.email)}
                                        helperText={errors.email?.message}
                                        fullWidth
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="password"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Поле email обязательно для заполнения"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Минимальная длинна пароля 6 символов"
                                    }
                                }}
                                render={({ field: { value, onChange } }) => (
                                    <TextField
                                        type="password"
                                        value={value}
                                        onChange={onChange}
                                        label="Придумайте пароль"
                                        error={Boolean(errors.password)}
                                        helperText={errors.password?.message}
                                        fullWidth
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="passwordAgain"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Поле email обязательно для заполнения"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Минимальная длинна пароля 6 символов"
                                    }
                                }}
                                render={({ field: { value, onChange } }) => (
                                    <TextField
                                        type="password"
                                        value={value}
                                        onChange={onChange}
                                        label="Повторите пароль"
                                        error={Boolean(errors.passwordAgain)}
                                        helperText={errors.passwordAgain?.message}
                                        fullWidth
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} className={s.buttons}>
                            <Button
                                variant="contained"
                                onClick={handleSubmit(onSubmit)}
                            >Создать аккаунт</Button>
                            <Button
                                variant="outlined"
                                onClick={handleResetForm}
                            >Сбросить</Button>
                        </Grid>
                    </>
                )}
            </Grid>
        </FormProvider>
    )
}

export default RegisterByEmail
export interface RegisterByEmailStateSchema {
    isLoading: boolean
    error: string | null
    data: RegisterByEmailFormStateSchema | null
}

export interface RegisterByEmailFormStateSchema {
    email: string
    password: string
    passwordAgain: string
}
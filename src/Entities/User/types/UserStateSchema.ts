export interface UserType {
    login: string
    email: string
    name?: string
    lastName?: string
}

export interface UserStateSchema {
    user: UserType | null
}
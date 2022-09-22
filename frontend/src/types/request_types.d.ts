export interface Business {
    email: string
    password: string
}

export interface Business_Register extends Business {
    name: string
    short_name?: string
    password_confirm: string
}

export interface Business_Login extends Business {

}
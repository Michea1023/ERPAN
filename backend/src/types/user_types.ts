export interface User {
    id: number;
    name_business: string;
    email: string;
    password: string;
    short_name?: string;
}

export interface UserWithToken extends User {
    token: string;
}


type UserResponse = Omit<UserWithToken,"id" | "email" | "password" | "short_name">


export default UserResponse;
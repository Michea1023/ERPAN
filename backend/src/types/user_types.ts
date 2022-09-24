export interface User {
    id: number;
    name_business: string;
    email: string;
    password: string;
    short_name?: string;
};

export interface UserWithToken extends User {
    token: string;
};

export type UserLogin = Omit<User, "id" | "name_business" | "short_name">

export type UserResponse = Omit<UserWithToken,"id" | "email" | "password" | "short_name">;

export type NewUser = Omit<User, "id">;
export type UserModel = {
    // Attributes
    id: string | number;
    name: string;
    email: string;
}

// export type AddUserParams = Omit<UserModel, 'id'>
export type AddUserParams = Omit<UserModel, 'id'>

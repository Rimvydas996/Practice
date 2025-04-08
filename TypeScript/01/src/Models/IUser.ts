type UserRole = 'admin' | 'user' 

interface IUser {
    id: string,
    name: string,
    email: string,
    role:  UserRole
}

export { IUser, UserRole };
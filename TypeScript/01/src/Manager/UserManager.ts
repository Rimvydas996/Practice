import { IUser, UserRole } from "../Models/IUser"

export class UserManager {
    private static instance: UserManager;
    private users: IUser[] = [];

    private constructor() {}

    public static getInstance(): UserManager {
        if (!UserManager.instance) {
            UserManager.instance = new UserManager();
        }
        return UserManager.instance;
    }

    addUser(user: IUser): void {
            this.users.push(user)
    }

    removeUser(id: string): void{
        this.users = this.users.filter(user => user.id !== id);
    }

    getUserByRole(role: UserRole): IUser[]{
       return this.users = this.users.filter(user => user.role === role);
    }

    getAllUsers(): IUser[]{
        return this.users;
    }
}
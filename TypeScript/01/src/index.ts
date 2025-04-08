import { UserManager } from "./Manager/UserManager";
import { IUser } from "./Models/IUser";

const user1: IUser = {
    id: '1',
    name: 'Jonas',
    email: 'jonas@example.com',
    role: 'admin'
};

const user2: IUser = {
    id: '2',
    name: 'Aistė',
    email: 'aiste@example.com',
    role: 'user'
};

const user3: IUser = {
    id: '3',
    name: 'Tomas',
    email: 'tomas@example.com',
    role: 'user'
};

const userManager = UserManager.getInstance();

userManager.addUser(user1);
userManager.addUser(user2);
userManager.addUser(user3);


// userManager.removeUser("1")
console.log(userManager.getAllUsers());
console.log(userManager.getUserByRole('user'));

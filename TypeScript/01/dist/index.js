"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserManager_1 = require("./Manager/UserManager");
const user1 = {
    id: '1',
    name: 'Jonas',
    email: 'jonas@example.com',
    role: 'admin'
};
const user2 = {
    id: '2',
    name: 'Aistė',
    email: 'aiste@example.com',
    role: 'user'
};
const user3 = {
    id: '3',
    name: 'Tomas',
    email: 'tomas@example.com',
    role: 'user'
};
const userManager = UserManager_1.UserManager.getInstance();
userManager.addUser(user1);
userManager.addUser(user2);
userManager.addUser(user3);
// userManager.removeUser("1")
console.log(userManager.getAllUsers());
console.log(userManager.getUserByRole('user'));

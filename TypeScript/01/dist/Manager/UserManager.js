"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
class UserManager {
    constructor() {
        this.users = [];
    }
    static getInstance() {
        if (!UserManager.instance) {
            UserManager.instance = new UserManager();
        }
        return UserManager.instance;
    }
    addUser(user) {
        this.users.push(user);
    }
    removeUser(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
    getUserByRole(role) {
        return this.users = this.users.filter(user => user.role === role);
    }
    getAllUsers() {
        return this.users;
    }
}
exports.UserManager = UserManager;

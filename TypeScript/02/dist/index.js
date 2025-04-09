"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formValidation_1 = __importDefault(require("./Middleware/formValidation"));
const mockFields = [
    {
        value: "jonas@example.com",
        required: true,
        validate: (value) => value.includes("@")
    },
    {
        value: "",
        required: true,
        validate: (value) => value.length >= 6
    },
    {
        value: "Kažkas",
        required: false,
        validate: (value) => value.length > 0
    },
    {
        value: "password123",
        required: true,
        validate: (value) => value.length >= 8
    },
    {
        value: "",
        required: false,
        validate: (value) => value.trim().length > 0
    },
    {
        value: "12345",
        required: true,
        validate: (value) => !isNaN(Number(value))
    },
    {
        value: "hello@world.com",
        required: true,
        validate: (value) => value.includes("@") && value.includes(".")
    },
];
console.log((0, formValidation_1.default)(mockFields));

// Sukurk funkciją isFormValid(fields: FormField[]): boolean, kuri grąžina true, 
// jei visi required laukai turi value ir validate funkcija grąžina true.
import { FormField } from "./Models/FormField";
import isFormValid from "./Middleware/formValidation";
const mockFields: FormField[] = [
    {
      value: "jonas@example.com",
      required: true,
      validate: (value: string) => value.includes("@")
    },
    {
      value: "",
      required: true,
      validate: (value: string) => value.length >= 6
    },
    {
      value: "Kažkas",
      required: false,
      validate: (value: string) => value.length > 0
    },
    {
      value: "password123",
      required: true,
      validate: (value: string) => value.length >= 8
    },
    {
      value: "",
      required: false,
      validate: (value: string) => value.trim().length > 0
    },
    {
      value: "12345",
      required: true,
      validate: (value: string) => !isNaN(Number(value))
    },
    {
      value: "hello@world.com",
      required: true,
      validate: (value: string) => value.includes("@") && value.includes(".")
    },
  ];
  
console.log(isFormValid(mockFields))
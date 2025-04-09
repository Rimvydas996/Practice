import { FormField } from "../Models/FormField";

export default function isFormValid(fields: FormField[]): boolean {
    let isValid = true;
    
    fields.forEach((field, index) => {
        console.log(`Field ${index + 1}:`);
        console.log(`Value: ${field.value}`);
        console.log(`Required: ${field.required}`);
        console.log(`Validation: ${field.validate(field.value)}`);
        console.log('-------------------');

        if (!field.required) {
            return true;
        }
        
        if (!field.validate(field.value)) {
            isValid = false;
        }
    });

    return isValid;
}
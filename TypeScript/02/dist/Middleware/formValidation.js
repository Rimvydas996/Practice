"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isFormValid;
function isFormValid(fields) {
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

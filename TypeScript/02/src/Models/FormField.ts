export interface FormField {
    value: string;
    required: boolean;
    validate: (value: string) => boolean;
  }
  
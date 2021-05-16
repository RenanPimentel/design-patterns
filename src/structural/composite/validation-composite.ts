export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    return /@/.test(value as string);
  }
}

export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    return /\d/.test(String(value));
  }
}

export class ValidationComposite extends ValidationComponent {
  private readonly children: Array<ValidationComponent> = [];

  validate(value: unknown): boolean {
    return this.children.every((child) => child.validate(value));
  }

  add(...validations: ValidationComponent[]): void {
    this.children.push(...validations);
  }
}

const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();

const validationComposite = new ValidationComposite();
validationComposite.add(validateEmail, validateString, validateNumber);

console.log(validationComposite.validate('123@'));

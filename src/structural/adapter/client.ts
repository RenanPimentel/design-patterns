import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';
import { emailValidatorFnAdapter } from './validation/email-validator-function-adapter';

const email = 'luiz@gmail.com';

function validateEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('É válido');
  } else {
    console.log('Inválido');
  }
}

function validateEmailFunction(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
) {
  if (emailValidator(email)) {
    console.log('É válido');
  } else {
    console.log('Inválido');
  }
}

validateEmailClass(new EmailValidatorClassAdapter(), email);
validateEmailFunction(emailValidatorFnAdapter, email);

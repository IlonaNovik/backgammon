import {FieldError, Merge} from 'react-hook-form';

export function getErrorMessage(error: Merge<FieldError, (FieldError | undefined)[]>, fieldLabel?: string): string {
  if (!Array.isArray(error)) {
    if (error.message && error.message !== '') {
      return error.message;
    }

    if (error.type === 'required') {
      return `${fieldLabel ? fieldLabel : 'This field'} is required.`;
    }

    if (error.type === 'minLength') {
      return `${fieldLabel ? fieldLabel : 'This field'} is not long enough.`;
    }

    if (error.type === 'maxLength') {
      return `${fieldLabel ? fieldLabel : 'This field'} is too long.`;
    }
  } else {
    return error.map((singleError) => singleError.message).join(', ');
  }

  return 'Error';
}

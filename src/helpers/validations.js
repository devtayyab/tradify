import { capitalizeFirstLetter } from './utils';

export const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const isRequiredBuilder = (field) => {
  return `${capitalizeFirstLetter(field)} field is Required`;
};

export const isTextEmpty = (value) => {
  return !value?.trim();
};

export const validateFirstName = (first_name) => {
  const errors = [];

  if (isTextEmpty(first_name)) {
    errors.push(isRequiredBuilder('First name'));
  }

  return errors;
};

export const validateLastName = (last_name) => {
  const errors = [];

  if (isTextEmpty(last_name)) {
    errors.push(isRequiredBuilder('Last name'));
  }

  return errors;
};

export const validateEmail = (email) => {
  const errors = [];

  if (isTextEmpty(email)) {
    errors.push(isRequiredBuilder('Email address'));

    return errors;
  }

  if (!isValidEmail(email)) {
    errors.push('Invalid email address.');
  }

  return errors;
};

export const validatePassword = (password) => {
  const errors = [];

  if (isTextEmpty(password)) {
    errors.push(isRequiredBuilder('Password'));

    return errors;
  }

  if (password.length < 8) {
    // check 8 char minimum
    errors.push('Password should have atleast 8 characters.');
  }

  if (!/[\d]+/.test(password)) {
    // check has numeric character
    errors.push('Password should have atleast 1 numeric character.');
  }

  return errors;
};

export const validateConfirmPassword = (confirm_password, password) => {
  const errors = [];
  if (isTextEmpty(confirm_password)) {
    errors.push(isRequiredBuilder('Password confirmation'));

    return errors;
  }

  if (confirm_password !== password) {
    errors.push('Password does not match.');
  }

  return errors;
};

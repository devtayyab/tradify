import { createSelector } from 'reselect';

const getSignUpErrors = (store) => {
  const sign_up = store?.signUp?.toJS()?.errors;
  return sign_up;
};

export const isFormValid = createSelector([getSignUpErrors], (errors) => {
  const { first_name, last_name, email, password, confirm_password } = errors || {};
  let hasErrors = false;

  hasErrors = first_name?.some((e) => !!e);

  if (!hasErrors) {
    hasErrors = last_name?.some((e) => !!e);
  }

  if (!hasErrors) {
    hasErrors = email?.some((e) => !!e);
  }

  if (!hasErrors) {
    hasErrors = password?.some((e) => !!e);
  }

  if (!hasErrors) {
    hasErrors = confirm_password?.some((e) => !!e);
  }

  return !hasErrors;
});

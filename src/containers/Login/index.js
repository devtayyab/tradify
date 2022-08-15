import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { Box } from '@material-ui/core';

import useStyle from './index.style';
import { useDispatch, useSelector } from 'react-redux';
import { editFormAction, setErrorAction, loginAction } from '../../redux/actions/login.action';
import { isRequiredBuilder, isTextEmpty, validateEmail } from '../../helpers/validations';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyle();
  const login = useSelector((store) => {
    const login_store = store.login;

    if (login_store) return login_store.toJS();

    return {};
  });
  const { general_error, unverified_email_modal } = login || {};
  const form = login.form || {};
  const errors = login.errors || {};
  const [showPassword, setShowPassword] = useState([false, false]);
  const [remember_me, setRememberMe] = useState(false);

  const handleLoginClick = () => {
    dispatch(loginAction());
    history.push('/app');
  };

  const handleTogglePasswordVisibility = (index) => {
    const newShowPassword = [...showPassword];
    newShowPassword[index] = !newShowPassword[index];
    setShowPassword(newShowPassword);
  };

  const handleOnChange = (e) => {
    const { id: key, value } = e.target;

    dispatch(editFormAction(key, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allValid = validateAll();

    if (!!allValid) {
      dispatch(loginAction(form));
    }
  };

  const validateAll = () => {
    const usernameValidation = handleValidate({ target: { id: 'username', value: form.username } });
    const passwordValidation = handleValidate({ target: { id: 'password', value: form.password } });

    return usernameValidation && passwordValidation;
  };

  const handleValidate = (e) => {
    const { id, value } = e.target;
    let errors = [];

    switch (id) {
      case 'username':
        errors = validateEmail(value);
        break;

      case 'password':
        if (isTextEmpty(value)) {
          errors.push(isRequiredBuilder('Password'));
        }
        break;

      default:
        break;
    }

    if (!!errors.length) {
      dispatch(setErrorAction(id, errors));

      return false;
    }

    return true;
  };

  return (
    <Box>
      <Desktop
        dispatch={dispatch}
        history={history}
        classes={classes}
        form={form}
        errors={errors}
        general_error={general_error}
        unverified_email_modal={unverified_email_modal}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        remember_me={remember_me}
        setRememberMe={setRememberMe}
        handleLoginClick={handleLoginClick}
        handleTogglePasswordVisibility={handleTogglePasswordVisibility}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        validateAll={validateAll}
        handleValidate={handleValidate}
      />
      <Mobile
        dispatch={dispatch}
        history={history}
        classes={classes}
        form={form}
        errors={errors}
        general_error={general_error}
        unverified_email_modal={unverified_email_modal}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        remember_me={remember_me}
        setRememberMe={setRememberMe}
        handleLoginClick={handleLoginClick}
        handleTogglePasswordVisibility={handleTogglePasswordVisibility}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        validateAll={validateAll}
        handleValidate={handleValidate}
      />
    </Box>
  );
};

export default Login;

import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Box,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Typography,
  Hidden,
  Card,
  CardContent,
  Checkbox,
  InputAdornment,
  IconButton,
  useTheme,
} from '@material-ui/core';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import useStyle from './index.style';
import { Link, useHistory } from 'react-router-dom';
import Switch from '../../components/Switch';
import { Contained } from '../../components/Button';
import { HEADER_HEIGHT } from '../../constants/reponsive';
import RegisterButton from './RegisterButton';

import {
  editFormAction,
  setErrorAction,
  signUpAction,
  modalCloseAction,
  resetAction,
} from '../../redux/actions/signup.action';

import fb_icon from '../../assets/images/signup/fb_icon.png';
import apple_icon from '../../assets/images/signup/apple_icon.png';
import google_icon from '../../assets/images/signup/google_icon.png';
import signup_bg from '../../assets/images/signup/bg.png';
import { TYPE_2 } from '../../components/Header/constants';
import TextInput from '../../components/TextInput';
import SuccessModal from './SuccessModal';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
  validateConfirmPassword,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword,
} from '../../helpers/validations';

import { isFormValid } from '../../redux/reselect/signUp';
import { ERROR, INFO } from '../../constants';
import Desktop from './Desktop';
import Mobile from './Mobile';

const SignUp = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyle();
  const validForm = useSelector(isFormValid);
  const [termsAgree, setTermsAgree] = useState(false);
  const [showPassword, setShowPassword] = useState([false, false]);
  const { form, errors, loading, successModal } =
    useSelector((store) => store?.signUp?.toJS()) || {};

  useEffect(() => {
    return () => {
      dispatch(resetAction());
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFieldsValid = validateAll();

    if (!allFieldsValid) {
      return false;
    }

    dispatch(signUpAction(form));
  };

  const handleOnChange = (e) => {
    const { id: key, value } = e.target;

    dispatch(editFormAction(key, value));
  };

  const validateAll = () => {
    return (
      handleValidate({ target: { id: 'first_name', value: form.first_name } }) &&
      handleValidate({ target: { id: 'last_name', value: form.last_name } }) &&
      handleValidate({ target: { id: 'email', value: form.email } }) &&
      handleValidate({ target: { id: 'password', value: form.password } }) &&
      handleValidate({ target: { id: 'confirm_password', value: form.confirm_password } })
    );
  };

  const handleValidate = (e) => {
    const { id, value } = e.target;
    let errors = [];

    switch (id) {
      case 'first_name':
        errors = validateFirstName(value);
        break;

      case 'last_name':
        errors = validateLastName(value);
        break;

      case 'email':
        errors = validateEmail(value);
        break;

      case 'password':
        errors = validatePassword(value);
        break;

      case 'confirm_password':
        errors = validateConfirmPassword(value, form.password);
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

  const handleModalClose = () => {
    dispatch(modalCloseAction());
    // history.push('/login');
  };

  const handleTogglePasswordVisibility = (index) => {
    const newShowPassword = [...showPassword];
    newShowPassword[index] = !newShowPassword[index];
    setShowPassword(newShowPassword);
  };

  return (
    <Box>
      <Desktop
        classes={classes}
        validForm={validForm}
        termsAgree={termsAgree}
        setTermsAgree={setTermsAgree}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        form={form}
        errors={errors}
        loading={loading}
        successModal={successModal}
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
        validateAll={validateAll}
        handleValidate={handleValidate}
        handleModalClose={handleModalClose}
        handleTogglePasswordVisibility={handleTogglePasswordVisibility}
      />
      <Mobile
        classes={classes}
        validForm={validForm}
        termsAgree={termsAgree}
        setTermsAgree={setTermsAgree}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        form={form}
        errors={errors}
        loading={loading}
        successModal={successModal}
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
        validateAll={validateAll}
        handleValidate={handleValidate}
        handleModalClose={handleModalClose}
        handleTogglePasswordVisibility={handleTogglePasswordVisibility}
      />
    </Box>
  );
};

export default SignUp;

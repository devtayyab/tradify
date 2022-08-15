import { createTheme } from '@material-ui/core';
import colors from '../colors';
import typography from '../typography';

const palette = {
  type: 'light',
  primary: {
    main: colors.dark3,
    mainGradient: colors.gradients.main_linear_2,
    disabled: colors.disabled,
  },
  secondary: {
    main: colors.gray3,
    mainGradient: colors.gradients.prunus_avium,
  },
  drawer: {
    bg: colors.headerNavBg,
    text: colors.white,
  },
  header: {
    bg: colors.gradients.main_linear_1,
    searchbar_bg: colors.white,
    searchbar_text: colors.dark1,
  },

  text: {
    primary: colors.dark3,
    secondary: colors.gray3,
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },

  card: {
    base: colors.base,
    textPrimary: colors.dark1,
    textSecondary: colors.peter_river,
    desc: colors.dark1,
  },

  quiz: {
    stepper: colors.gradients.stepper_linear,
  },

  ...colors,
};

const text = [
  colors.dark1,
  colors.gray,
  colors.gray1,
  colors.peter_river,
  colors.gray2,
  colors.dark2,
  colors.dark3,
];

const light_theme = {
  palette,
  text,
  typography,
};

export default createTheme(light_theme);

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
    bg: colors.headerNavBg,
    searchbar_bg: colors.headerNavBg,
    searchbar_text: colors.white,
  },

  text: {
    primary: colors.dark3,
    secondary: colors.gray3,
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },

  card: {
    base: colors.gradients.main_linear_2,
    textPrimary: colors.white,
    textSecondary: colors.peter_river,
    desc: colors.white,
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

const dark_theme = {
  palette,
  text,
  typography,
};

export default createTheme(dark_theme);

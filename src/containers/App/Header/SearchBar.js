import { InputBase, useTheme } from '@material-ui/core';

import search_icon from '../../../assets/images/header/search_icon.png';
import search_icon_white from '../../../assets/images/header/search_icon_white.svg';
import search_icon_black from '../../../assets/images/header/search_icon_black.svg';
import { THEME_DARK_MODE } from '../../../constants';

import useStyles from './searchbar.styles';
import { useSelector } from 'react-redux';

const SearchBar = (props) => {
  const classes = useStyles();
  const theme = useSelector((store) => store.app.get('theme'));
  const isDarkMode = theme === THEME_DARK_MODE;

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        {isDarkMode ? (
          <img src={search_icon_white} alt="search icon" />
        ) : (
          <img src={search_icon_black} alt="search icon" />
        )}
      </div>
      <InputBase
        placeholder="Search e.g. card"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export default SearchBar;

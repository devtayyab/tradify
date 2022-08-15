import { InputBase } from '@material-ui/core';

import search_icon from '../../../assets/images/searchbar/search_icon_gradient.png';
import { Contained } from '../../../components/Button';

import useStyles from './styles';

const SearchBar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <img src={search_icon} alt="search icon" />
      </div>
      <InputBase
        placeholder="Search e.g. card"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      <div className={classes.searchButton}>
        <Contained>Search</Contained>
      </div>
    </div>
  );
};

export default SearchBar;

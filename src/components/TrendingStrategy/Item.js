import { Box, Typography } from '@material-ui/core';

import library from '../../assets/images/macroeconomics/icon_library.png';

import useStyles from './styles';

const Item = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.item}>
      <Box>
        <img src={library} />
      </Box>
      <Box pl="1rem">
        <Box>
          <Typography variant="body2" className={classes.name}>
            Bull Put Spread
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" className={classes.desc}>
            PHP, SQLite, Artisan CLIмм
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;

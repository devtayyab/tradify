import { makeStyles, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import TextInput from '../TextInput';

const AutoComplete = (props) => {
  const classes = useStyles();

  const _renderitem = (item) => {
    return (
      <li>
        <Typography variant="body2">{item.title}</Typography>
      </li>
    );
  };

  const _renderList = (items) => {
    const rows = items.map((item) => _renderitem(item));

    if (!items?.length) return;

    return (
      <Box pt="5px" position="relative">
        <ul className={classes.itemsContainer}>{rows}</ul>
      </Box>
    );
  };

  return (
    <Box className={classes.root}>
      <Box flex={1}>
        <TextInput onChange={props.onChange} placeholder={props.placeholder} fullWidth />
      </Box>
      {_renderList(props.items)}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
  },
  itemsContainer: {
    margin: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderRadius: '10px',
    padding: 0,
    backgroundColor: '#FFF',
    zIndex: 100,

    '& li': {
      backgroundColor: '#FFF',
      listStyleType: 'none',
      padding: '1rem',
      borderBottom: `solid #EFEFEF .5px`,
      borderLeft: `solid #EFEFEF .5px`,
      borderRight: `solid #EFEFEF .5px`,

      '&:last-child': {
        borderBottomRightRadius: '10px',
        borderBottomLeftRadius: '10px',
      },
      '&:first-child': {
        borderTop: `solid #EFEFEF .5px`,
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
      },

      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#EFEFEF',
      },
    },
  },
}));

export default AutoComplete;

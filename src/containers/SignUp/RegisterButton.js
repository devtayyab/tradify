import { Box, ButtonBase, makeStyles } from '@material-ui/core';

const RegisterButton = (props) => {
  const styles = useStyles();
  return (
    <Box className={styles.wrapper}>
      <ButtonBase
        focusRipple
        key={props.name}
        className={styles.root}
        focusVisibleClassName={styles.focusVisible}
      >
        <img src={props.src} />
      </ButtonBase>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '85px',
    height: '55px',
    border: `solid ${theme.palette.gray1} 1px`,
    borderRadius: '8px',
    margin: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

    '&:hover': {
      boxShadow: theme.shadows[5],
    },
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
}));

export default RegisterButton;

import {
  Backdrop,
  Box,
  Card,
  CardContent,
  Fade,
  IconButton,
  makeStyles,
  Modal,
} from '@material-ui/core';
import clsx from 'clsx';

import close_icon from '../../assets/images/icons/close.png';

const BaseModal = ({
  Backdrop,
  children,
  className,
  closeAfterTransition,
  handleClose,
  open,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Modal
      className={clsx(className, classes.modal)}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      {...props}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <IconButton onClick={handleClose} className={classes.closeButton}>
            <img src={close_icon} />
          </IconButton>
          {children}
        </div>
      </Fade>
    </Modal>
  );
};

export default BaseModal;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'relative',
    minWidth: '350px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 10,
    padding: '30px 40px',

    [theme.breakpoints.down('sm')]: {
      padding: '20px 20px',
      minWidth: '400px',
    },

    '&:focus-visible': {
      outline: 'none',
    },
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
}));

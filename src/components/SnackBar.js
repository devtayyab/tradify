import MuiSnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Snackbar = ({ onClose, open, severity, message }) => {
  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export default Snackbar;

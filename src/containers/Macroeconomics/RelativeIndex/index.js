import { Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import useStyles from './styles';
import Table from './Table';

export const RelativeIndex = ({ data, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        <Typography variant="body2">{data.title}</Typography>
      </Box>
      {data.items.map((tableData, i) => (
        <Table data={tableData} />
      ))}
    </Box>
  );
};

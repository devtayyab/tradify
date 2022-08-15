import { Box, Container, Grid, Typography } from '@material-ui/core';
import SearchBar from '../../components/SearchBar';
import useStyles from './index.style';
import folder from '../../assets/images/portfolio_management/folder.png';
import Balance from './Balance';
import colors from '../../styles/colors';
import CardItem from './CardItem';

import analysis from '../../assets/images/portfolio_management/analysis.png';
import technicals from '../../assets/images/portfolio_management/technicals.png';
import economic from '../../assets/images/portfolio_management/economic.png';
import portfolio from '../../assets/images/portfolio_management/portfolio.png';

export const PortfolioManagement = (props) => {
  const styles = useStyles();
  const card_items = [
    {
      title: 'Text Analysis',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore.
 
      Magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      image: analysis,
    },
    {
      title: 'Technicals',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore.
 
      Magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      image: technicals,
    },
    {
      title: 'Economic Outlook',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore.
 
      Magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      image: economic,
    },
    {
      title: 'Portfolio Management',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore.
 
      Magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      image: portfolio,
    },
    {
      title: 'Videos',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore.
 
      Magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      image: portfolio,
    },
    {
      title: 'Test Your Knowledge',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et dolore.
 
      Magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      image: portfolio,
    },
  ];
  return (
    <Container className={styles.container}>
      <Grid container>
        <Grid className={styles.title} xs={6} sm={6} md={8} lg={9} xl={9}>
          <Box>Portfolio Management</Box>
        </Grid>
        <Grid className={styles.searchBarWrapper} xs={6} sm={6} md={4} lg={3} xl={3}>
          <SearchBar />
        </Grid>
      </Grid>
      <Box className={styles.content}>
        <Box paddingLeft="60px" paddingRight="50px" color="white">
          <Grid container spacing={0}>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box>
                <Typography variant="h3">Hi There, Olivia</Typography>
              </Box>
              <Box paddingTop="1rem">
                <Typography variant="h5">Choose Your Game.</Typography>
              </Box>
            </Grid>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box className={styles.rightContent}>
                <Box display="flex">
                  <img src={folder} />
                  <Box paddingLeft=".75rem">Portfolio Management</Box>
                </Box>
                <Box display="flex" paddingTop="40px">
                  <Box paddingX="10px">
                    <Balance
                      title="SAVINGS"
                      color={colors.light_greenish_blue}
                      value={21509.75}
                      currency={'₹'}
                      limit={30000}
                    />
                  </Box>
                  <Box paddingX="10px">
                    <Balance title="ASSETS" value={4500.75} currency={'₹'} limit={30000} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box paddingTop="2rem">
          <Box className={styles.content2}>
            <Grid container spacing={0}>
              {card_items.map((item, index) => (
                <Grid key={index} xs={12} sm={12} md={12} lg={6} xl={6}>
                  <CardItem {...item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PortfolioManagement;

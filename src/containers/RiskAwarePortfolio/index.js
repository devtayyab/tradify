import React, { useEffect } from 'react';

import useStyle from './index.style';
import { Doughnut, AreaChart } from '../../components/Graph';
import TradeGraph from './TradeGraph';
import { ButtonGroup } from '../../components/Button';
import { Box, Typography, Grid, Card, CardContent, Container } from '@material-ui/core';
import alert_icon from '../../assets/images/icons/alert_icon.svg';
import UnfinishedModal from '../RiskToleranceQuiz/UnfinishedModal';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserDetails } from '../../redux/actions/quiz.action';

const RiskAwareProfile = (props) => {
  const styles = useStyle();
  const dispatch = useDispatch();

  const { showUnfinishedModal } = useSelector((store) => {
    const quiz_store = store.quiz;

    if (quiz_store) return quiz_store.toJS();

    return {};
  });

  useEffect(() => {
    dispatch(fetchUserDetails());
  }, []);

  const graphItems = ['Short Term Investments', 'Bonds', 'Stocks'];

  return (
    <Container className={styles.container}>
      <Box>
        <Grid container>
          <Grid xs={6} sm={6} md={8} lg={9} xl={9}>
            <Typography className={styles.title} variant="h5">
              Portfolio
            </Typography>
          </Grid>
          <Grid xs={6} sm={6} md={4} lg={3} xl={2}>
            <ButtonGroup buttons={['Stock', 'BlockChain']} currentTab={'Stock'}></ButtonGroup>
          </Grid>
        </Grid>

        <Box marginTop="3em" display="flex" alignItems="center" justifyContent="center">
          <Doughnut labels={graphItems} values={[30, 50, 20]} />
        </Box>
        <Box>
          <TradeGraph />
        </Box>
        <Box>
          <Card className={styles.cardContainer}>
            <CardContent>
              <Typography className={styles.title} variant="h5">
                Risk Adjusted Return Graph
              </Typography>

              <AreaChart />
              <Box>
                <Grid container spacing={2}>
                  <Grid xs={4}>
                    <span>
                      <img src={alert_icon} alt="alert" /> A typical portfolio like this would
                      target an annual return of
                    </span>
                  </Grid>
                  <Grid xs={8}>
                    <Typography className={styles.title} variant="h4">
                      5.80%
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>

          {/* Risk Index Bottom Container */}

          <Box>
            <div className={styles.riskIndexContainer}>
              <span className={styles.riskNumber}>Risk Index:</span>
              <Typography className={styles.riskNumber} variant="h1">
                51
              </Typography>
            </div>
          </Box>

          <Box marginTop="3em">
            <Typography variant="h4">For the change at gaining:</Typography>
            <Typography className={styles.title} variant="h2">
              + $47,190
            </Typography>
          </Box>

          <Box marginTop="2em" marginBottom="3em">
            <Typography variant="h4">I’m comfortable risking:</Typography>
            <Typography className={styles.lossText} variant="h2">
              - $29,802
            </Typography>
          </Box>

          <Box className={styles.bottomArea}>
            <Typography>
              Your Risk Tolerance is 51, meaning that you have a Moderate Risk Profile, which place
              you with a portfolio of 70% Equities and 30% Bonds.
            </Typography>

            <Typography marginTop="2em" mt={4}>
              Nunc sed id semper risus. Nullam ac tortor vitae purus faucibus ornare suspendise sed.
              Sagittis aliquam malesuada bibendum arcu vitae. Proin nibh nisl condimentum id
              venenatis a condimentum vitae. Pulvinar libero volutpat.
            </Typography>
          </Box>
        </Box>
      </Box>
      <UnfinishedModal open={showUnfinishedModal} />
    </Container>
  );
};

export default RiskAwareProfile;

import React from 'react';

import { useSelector } from 'react-redux';

import { ButtonContainer } from '../../components/Button';

import Options from './Options';
import useStyle from './index.style';

import { Box, CardContent, Typography, Container, Hidden } from '@material-ui/core';

const RiskProfile = ({ handleGoBack, handleGoNext, handleAnswerClick, ...props }) => {
  const styles = useStyle();

  const { currentQuestion = {}, answerList } = useSelector((store) => {
    const quiz_store = store.quiz;

    if (quiz_store) return quiz_store.toJS();

    return {};
  });

  const getTitle = () => {
    return (
      <div>
        <span className={styles.titleThin}>Your </span>
        <span>Risk Profile</span>
      </div>
    );
  };

  const getInputType = () => {
    const { answer_set, id } = currentQuestion;

    return (
      <Options
        choices={answer_set}
        id={id}
        answerList={answerList}
        onAnswerClick={(e) => handleAnswerClick(e)}
      />
    );
  };

  return (
    <Hidden mdUp>
      <Container className={styles.container}>
        <Box paddingTop="1.5em" paddingBottom="3em">
          <CardContent>
            <Box alignItems="center" display="flex" flex="1" flexDirection="column" width="100%">
              <Typography variant="h2" className={styles.title}>
                {getTitle()}
              </Typography>

              <Typography variant="h5" className={styles.question}>
                {currentQuestion.label}
              </Typography>

              <Box display="flex" className={styles.optionContainer}>
                {getInputType()}
              </Box>

              <ButtonContainer className={styles.nextBtn} white onClick={handleGoNext}>
                NEXT
              </ButtonContainer>

              <ButtonContainer className={styles.nextBtn} white onClick={handleGoBack}>
                BACK
              </ButtonContainer>

              {/* <ButtonContainer className={styles.backBtn} onClick={handleGoBack}>
                SKIP
              </ButtonContainer> */}
            </Box>
          </CardContent>
        </Box>
      </Container>
    </Hidden>
  );
};

export default RiskProfile;

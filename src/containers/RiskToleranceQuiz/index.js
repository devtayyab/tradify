import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

// Components Import
import { Contained as ContainedButton } from '../../components/Button';
import ProgressCircular from '../../components/ProgressCircular';
import { PieChart } from '../../components/Graph';
import Options from './Options';
import Steppers from './Steppers';
import QuizModal from '../../components/Modal';
import UnfinishedModal from './UnfinishedModal';
import FinishedModal from './FinishedModal';
import { Box, Grid, Container, Card, CardContent, Typography, Hidden } from '@material-ui/core';
import { ErrorIndicator, LoadingIndicator } from '../../components/ContainerIndicator';
import Mobile from '../RiskProfile';

// Redux Import
import { useDispatch, useSelector } from 'react-redux';

import {
  appendAnswerAction,
  setIndexAction,
  modalToggle,
  fetchQuizData,
  saveUserAnswer,
  uploadQuizData,
  fetchUserDetails,
  toggleContinueModal,
} from '../../redux/actions/quiz.action';

// Assets Import
import useStyle from './index.style';
import right_arrow from '../../assets/images/icons/right_arrow_white.svg';
import left_arrow from '../../assets/images/icons/left_arrow_blue.svg';

import { QUIZ_ENTRY_MODAL } from '../../constants/modal';

const RiskToleranceQuiz = (props) => {
  const [showExitPrompt, setShowExitPrompt] = useState(false);
  const dispatch = useDispatch();
  const styles = useStyle();
  const history = useHistory();
  const location = useLocation();

  const {
    userQuizDetails = {},
    currentQuestion = {},
    questionNumber,
    answerList = [],
    quizLength,
    questionList = [],
    showModal,
    isLoading,
    showUnfinishedModal,
    showFinishedModal,
    isError,
    error,
  } = useSelector((store) => {
    const quiz_store = store.quiz;

    if (quiz_store) return quiz_store.toJS();

    return {};
  });

  useEffect(() => {
    dispatch(fetchQuizData());
    dispatch(fetchUserDetails());
  }, []);

  const initBeforeUnLoad = (showExitPrompt) => {};

  window.onbeforeunload = (event) => {
    console.log('EXIT');
    // Show prompt based on state
    if (showExitPrompt) {
      alert('YOU HAVE EXIT');
      const e = event || window.event;
      e.preventDefault();
      if (e) {
        e.returnValue = '';
      }
      return '';
    }
  };

  window.onload = function () {
    initBeforeUnLoad(showExitPrompt);
  };

  useEffect(() => {
    initBeforeUnLoad(showExitPrompt);
  }, [showExitPrompt]);

  const handleGoBack = () => {
    if (questionNumber >= 1) {
      dispatch(setIndexAction(questionNumber - 1));
      handlePostAnswer();
    }
  };

  const handleGoNext = () => {
    console.log('CLICKED', questionNumber, quizLength - 1);
    if (questionNumber < quizLength) {
      dispatch(setIndexAction(questionNumber + 1));
      handlePostAnswer();
    }
  };

  const handlePostAnswer = () => {
    const getQuestion = getCurrentQuestion();

    if (getQuestion) {
      const payload = getPayload();
      const getFunction = getPostFunction(payload);
      console.log('CURRENT STEP', questionNumber, quizLength, answerList);
      dispatch(getFunction(payload));
    }
  };

  const getPostFunction = () => {
    return questionNumber + 1 === questionList.length ? uploadQuizData : saveUserAnswer;
  };

  const isQuizFinished = () => {
    return questionNumber === questionList.length;
  };

  const getCurrentQuestion = () => {
    return answerList.find((item) => item.question === currentQuestion.id);
  };

  const getPayload = () => {
    const question = getCurrentQuestion();
    return {
      quiztaker: userQuizDetails.id,
      question: question.question,
      answer: question.id,
    };
  };

  const handleAnswerClick = (option) => {
    const isExisting = answerList.find((item) => item.question === option.question);

    dispatch(
      appendAnswerAction(
        isExisting
          ? [...answerList.filter((item) => item.question !== option.question), option]
          : [...answerList, option]
      )
    );
  };

  const handleModalClose = () => {
    dispatch(modalToggle(false));
    localStorage.setItem(QUIZ_ENTRY_MODAL, true);
  };

  const goToProfile = () => {
    history.push('/app/risk-aware-profile/');
  };

  const isFinished = isError ? (
    <ErrorIndicator
      title={`Ooops! Something Went Wrong!`}
      description={'We were not able to fetch your quiz data. Please try again.'}
    />
  ) : (
    <Container>
      <Hidden smDown>
        <Box paddingTop="1.5em" paddingBottom="3em">
          <Card className={styles.card}>
            <CardContent>
              <Box alignItems="center" display="flex" flex="1" flexDirection="column" width="100%">
                <Steppers
                  length={[...Array(quizLength).keys()]}
                  currentStep={questionNumber}
                  answerList={questionList?.map((question) =>
                    answerList.find((item) => item.question === question.id)
                  )}
                />

                <Typography className={styles.contentBlue}>
                  {`QUESTION ${questionNumber + 1}/${quizLength} `}
                </Typography>
                <Typography variant="h5" className={styles.title}>
                  {currentQuestion.label}
                </Typography>

                {isLoading ? (
                  <ProgressCircular loadingText={'Loading...'} />
                ) : (
                  <>
                    <Options
                      choices={currentQuestion.answer_set}
                      id={currentQuestion.id}
                      answerList={answerList}
                      onAnswerClick={(e) => handleAnswerClick(e)}
                    />
                    <ContainedButton className={styles.nextBtn} rounded onClick={handleGoNext}>
                      NEXT QUESTION
                      <img className={styles.imgIcon} src={right_arrow} alt="next-button" />
                    </ContainedButton>
                    {questionNumber !== 0 ? (
                      <div className={styles.backBtn} onClick={handleGoBack}>
                        <img className={styles.imgBackIcon} src={left_arrow} alt="back" />
                        GO BACK
                      </div>
                    ) : (
                      ''
                    )}
                  </>
                )}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Hidden>
      <Mobile
        handleGoBack={handleGoBack}
        handleGoNext={handleGoNext}
        handleAnswerClick={handleAnswerClick}
      />
    </Container>
  );
  // <Box paddingTop="1.5em" paddingBottom="3em">
  //   <Card className={styles.card}>
  //     <CardContent>
  //       <Box alignItems="center" display="flex" flex="1" flexDirection="column" width="100%">
  //         <Grid display="flex" container>
  //           <Grid xs={2} sm={2} md={2} lg={2} xl={2}>
  //             <div className={styles.backBtn} onClick={handleGoBack}>
  //               <img className={styles.imgBackIcon} src={left_arrow} alt="back" />
  //               GO BACK
  //             </div>
  //           </Grid>
  //           <Grid xs={8} sm={8} md={8} lg={8} xl={8}>
  //             <Steppers length={[...Array(quizLength).keys()]} currentStep={questionNumber} />
  //           </Grid>
  //           <Grid>
  //             <Typography className={styles.contentBlue} xs={2} sm={2} md={2} lg={2} xl={2}>
  //               {`ANSWERED ${answerList.length + 1} OUT OF ${quizLength} `}
  //             </Typography>
  //           </Grid>
  //         </Grid>

  //         <Grid className={styles.contentBlue} xs={6} sm={6} md={8} lg={9} xl={9}>
  //           <Typography variant="h4" className={styles.resultTitle}>
  //             Investment Risk Tolerance Quiz
  //           </Typography>
  //         </Grid>

  //         <Grid alignItems="center" display="flex" justifyContent="center">
  //           {questionList.map((question, index) => {
  //             return (
  //               <Box alignItems="center" display="flex" flexDirection="column" maxWidth="500px">
  //                 <Typography className={styles.resultItem}>{`${index + 1}. ${
  //                   question.label
  //                 }`}</Typography>
  //                 <div className={styles.chartContainer}>
  //                   <PieChart labels={question.answer_set.map((item) => item.label)} />
  //                 </div>
  //               </Box>
  //             );
  //           })}
  //         </Grid>

  //         <ContainedButton className={styles.nextBtn} rounded onClick={goToProfile}>
  //           PROCEED
  //           <img className={styles.imgIcon} src={right_arrow} alt="next-button" />
  //         </ContainedButton>
  //       </Box>
  //     </CardContent>
  //   </Card>
  // </Box>

  return (
    <Container className={styles.container}>
      {isLoading && !currentQuestion ? <LoadingIndicator /> : isFinished}

      <QuizModal open={showModal} handleClose={handleModalClose} />
      <UnfinishedModal open={showUnfinishedModal} />
      <FinishedModal open={showFinishedModal} />
    </Container>
  );
};

export default RiskToleranceQuiz;

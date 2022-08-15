import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
    backgroundColor: '#FFCA1B',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      border: 'linear-gradient(138.19deg, #FFCA1B 2.08%, #F77455 50.52%, #FE8F1A 94.79%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      border: 'linear-gradient(138.19deg, #FFCA1B 2.08%, #F77455 50.52%, #FE8F1A 94.79%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const Steppers = (props) => {
  const { length, currentStep, answerList = [] } = props;

  const isAnswered = (index) => {
    return answerList.find((question, questionOrder) => questionOrder === index);
  };

  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper alternativeLabel activeStep={currentStep} connector={<QontoConnector />}>
        {length.map((label, index) => (
          <Step key={label} completed={isAnswered(index) && index !== currentStep}>
            <StepLabel>{label + 1}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default Steppers;

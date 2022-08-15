import * as React from 'react';

import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
  CardMedia,
  Paper,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function VideoSubTopic({ category, ...props }) {
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (e, title) => {
    e.stopPropagation();
    history.push({ pathname: `/app/challenge/${category}/?title=${title}` });
    //setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (e) => {
    e.stopPropagation();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const subTopics = props.subTopic;

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {subTopics.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.title}</StepLabel>

            <StepContent>
              <CardMedia component="img" height="194" image={step.thumbnail} alt={step.title} />
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={(e) => handleNext(e, step.title)}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === subTopics.length - 1 ? 'Finish' : 'Watch'}
                  </Button>
                  <Button variant="contained" onClick={handleNext} sx={{ mt: 1, ml: 2 }}>
                    Next
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === subTopics.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}

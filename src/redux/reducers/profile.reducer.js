import { fromJS } from 'immutable';

import { APPEND_ANSWER, SET_QUESTION_INDEX, SET_QUESTION } from '../constants/profile.constant';

const quizData = [
  {
    id: 1,
    question: 'In general, how would your best friend describe you as a risk taker?',
    choices: [
      {
        choiceName: 'A real gambler',
        score: 4,
      },
      {
        choiceName: 'Willing to take risks after completing adequate research',
        score: 3,
      },
      {
        choiceName: 'Cautious',
        score: 2,
      },
      {
        choiceName: 'A real risk avoider',
        score: 1,
      },
    ],
  },

  {
    id: 2,
    question:
      'You are on a TV game show and can choose one of the following.  Which would you take?',
    choices: [
      {
        choiceName: '$1,000 in cash',
        score: 1,
      },
      {
        choiceName: 'A 50% chance at winning $5,000',
        score: 2,
      },
      {
        choiceName: 'A 25% chance at winning $10,000',
        score: 3,
      },
      {
        choiceName: 'A 5% chance at winning $100,000',
        score: 4,
      },
    ],
  },

  {
    id: 3,
    question: `You have just finished saving for a “once-in-a-lifetime” vacation.  Three weeks before you plan to 
      leave, you lose your job. You would:`,
    choices: [
      {
        choiceName: 'Cancel the vacation',
        score: 1,
      },
      {
        choiceName: 'Take a much more modest vacation ',
        score: 2,
      },
      {
        choiceName: 'Go as scheduled, reasoning that you need the time to prepare for a job search',
        score: 3,
      },
      {
        choiceName:
          'Extend your vacation, because this might be your last chance to go first-class',
        score: 4,
      },
    ],
  },

  {
    id: 4,
    question: 'If you unexpectedly received $20,000 to invest, what would you do?',
    choices: [
      {
        choiceName: 'Deposit it in a bank account, money market account, or an insured CD',
        score: 1,
      },
      {
        choiceName: 'Invest it in safe high quality bonds or bond mutual funds',
        score: 2,
      },
      {
        choiceName: 'Invest it in stocks or stock mutual funds ',
        score: 3,
      },
    ],
  },

  {
    id: 5,
    question:
      'In terms of experience, how comfortable are you investing in stocks or stock mutual funds?',
    choices: [
      {
        choiceName: 'Not at all comfortable',
        score: 1,
      },
      {
        choiceName: 'Somewhat comfortable',
        score: 2,
      },
      {
        choiceName: 'Very comfortable',
        score: 3,
      },
    ],
  },

  {
    id: 6,
    question: 'When you think of the word “risk” which of the following words comes to mind first?',
    choices: [
      {
        choiceName: 'Loss',
        score: 1,
      },
      {
        choiceName: 'Uncertainty',
        score: 2,
      },
      {
        choiceName: 'Opportunity',
        score: 3,
      },
      {
        choiceName: 'Thrill',
        score: 4,
      },
    ],
  },

  {
    id: 7,
    question: `Some experts are predicting prices of assets such as gold, jewels, collectibles, and real estate (hard 
      assets) to increase in value; bond prices may fall, however, experts tend to agree that government 
      bonds are relatively safe.  Most of your investment assets are now in high interest government bonds.  
      What would you do?`,
    choices: [
      {
        choiceName: 'Hold the bonds',
        score: 1,
      },
      {
        choiceName:
          'Sell the bonds, put half the proceeds into money market accounts, and the other half into hard assets',
        score: 2,
      },
      {
        choiceName: 'Sell the bonds and put the total proceeds into hard assets',
        score: 3,
      },
      {
        choiceName:
          'Sell the bonds, put all the money into hard assets, and borrow additional money to buy more',
        score: 4,
      },
    ],
  },

  {
    id: 8,
    question:
      'Given the best and worst case returns of the four investment choices below, which would you prefer?',
    choices: [
      {
        choiceName: '$200 gain best case; $0 gain/loss worst case',
        score: 1,
      },
      {
        choiceName: '$800 gain best case; $200 loss worst case',
        score: 2,
      },
      {
        choiceName: '$2,600 gain best case; $800 loss worst case',
        score: 3,
      },
      {
        choiceName: '$4,800 gain best case; $2,400 loss worst case',
        score: 4,
      },
    ],
  },

  {
    id: 9,
    question:
      'In addition to whatever you own, you have been given $1,000.  You are now asked to choose between:',
    choices: [
      {
        choiceName: 'A sure gain of $500',
        score: 1,
      },
      {
        choiceName: 'A 50% chance to gain $1,000 and a 50% chance to gain nothing',
        score: 3,
      },
    ],
  },

  {
    id: 10,
    question:
      'In addition to whatever you own, you have been given $2,000.  You are now asked to choose between:',
    choices: [
      {
        choiceName: 'A sure loss of $500',
        score: 1,
      },
      {
        choiceName: 'A 50% chance to lose $1,000 and a 50% chance to lose nothing',
        score: 3,
      },
    ],
  },

  {
    id: 11,
    question:
      'Suppose a relative left you an inheritance of $100,000, stipulating in the will that you invest ALL the money in ONE of the following choices.  Which one would you select? ',
    choices: [
      {
        choiceName: 'A savings account or money market mutual fund',
        score: 1,
      },
      {
        choiceName: 'A mutual fund that owns stocks and bonds',
        score: 2,
      },
      {
        choiceName: 'A portfolio of 15 common stocks',
        score: 3,
      },
      {
        choiceName: 'Commodities like gold, silver, and oil',
        score: 4,
      },
    ],
  },

  {
    id: 12,
    question:
      'If you had to invest $20,000, which of the following investment choices would you find most appealing?',
    choices: [
      {
        choiceName:
          '60% in low-risk investments 30% in medium-risk investments 10% in high-risk investments',
        score: 1,
      },
      {
        choiceName:
          '30% in low-risk investments 40% in medium-risk investments 30% in high-risk investments',
        score: 2,
      },
      {
        choiceName:
          '10% in low-risk investments 40% in medium-risk investments 50% in high-risk investments',
        score: 3,
      },
    ],
  },

  {
    id: 13,
    question: `Your trusted friend and neighbor, an experienced geologist, is putting together a group of investors to 
      fund an exploratory gold mining venture. The venture could pay back 50 to 100 times the investment 
      if successful.  If the mine is a bust, the entire investment is worthless.  Your friend estimates the 
      chance of success is only 20%.  If you had the money, how much would you invest?`,
    choices: [
      {
        choiceName: 'Nothing',
        score: 1,
      },
      {
        choiceName: 'One month’s salary',
        score: 2,
      },
      {
        choiceName: 'Three month’s salary ',
        score: 3,
      },
      {
        choiceName: 'Six month’s salary',
        score: 4,
      },
    ],
  },
];

const initial_state = fromJS({
  currentQuestion: quizData[0],
  questionNumber: 0,
  answerList: [],
  quizLength: quizData.length,
  quizData: quizData,
  showModal: true,
});

const quizReducer = (state = initial_state, action) => {
  switch (action.type) {
    case APPEND_ANSWER:
      return state.set('answerList', action.params);

    case SET_QUESTION_INDEX:
      return state
        .set('questionNumber', action.index)
        .set('currentQuestion', quizData[action.index]);

    case SET_QUESTION:
      return state.set('currentQuestion', action.currentQuestion);

    default:
      return state;
  }
};

export default quizReducer;

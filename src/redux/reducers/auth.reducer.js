import { fromJS } from 'immutable';
import { TOKEN_KEY } from '../../constants/auth';
import { TRAINING_MODAL, QUIZ_ENTRY_MODAL } from '../../constants/modal';
import { LOGOUT_ACTION } from '../constants/auth.constant';

const initial_state = fromJS({
  user: 1,
});

const authStore = (state = initial_state, action) => {
  switch (action.type) {
    case LOGOUT_ACTION:
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(TRAINING_MODAL);
      localStorage.removeItem(QUIZ_ENTRY_MODAL);
      return state.set('user', undefined);
    default:
      return state;
  }
};

export default authStore;

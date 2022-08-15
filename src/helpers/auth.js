import { useSelector, useStore } from 'react-redux';
import { TOKEN_KEY } from '../constants/auth';

export const isLoggedIn = () => !!localStorage.getItem(TOKEN_KEY);

import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import immutableTransform from 'redux-persist-transform-immutable';

import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers/root.reducer';
import rootSaga from './sagas/root.saga';
import { ENV } from '../config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory();
const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage,
  whitelist: ['app'],
  stateReconciler: hardSet,
};

const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, routerMiddleware(history), thunk];
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  if (ENV === 'development') {
    // add logger for development only
    const logger = createLogger({
      collapsed: false,
      stateTransformer: (state) => {
        let newState = {};

        for (var i of Object.keys(state)) {
          if (Iterable.isIterable(state[i])) {
            newState[i] = state[i].toJS();
          } else {
            newState[i] = state[i];
          }
        }

        return newState;
      },
    });
    middleware.push(logger);
  }

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  let persistor = persistStore(store);

  // persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};

export default configureStore;

export { history };

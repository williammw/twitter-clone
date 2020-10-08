import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'
import rootReducer from './root-reducer';

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const middlewares = [thunk];


export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares),
  // other store enhancers if any
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

export const persistor = persistStore(store);
export default  {store, persistor};
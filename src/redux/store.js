import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'
// import createSagaMiddleware from 'redux-saga'
// import rootSagas from './root-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

//const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
//sagaMiddleware.run()
//sagaMiddleware.run(rootSagas);
export const persistor = persistStore(store);

export default {store, persistor};
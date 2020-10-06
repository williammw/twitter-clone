import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './StateProvider';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store'
// import reducer , {initialState} from './reducer'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>      
      {/* <StateProvider initialState={initialState} reducer={reducer}> */}
      <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
      {/* </StateProvider>       */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

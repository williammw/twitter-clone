import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './StateProvider';

import reducer , {initialState} from './reducer'

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>      
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import loginReducer from '../LoginSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    login :loginReducer,
  },
});

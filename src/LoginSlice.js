import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {auth, provider} from './firebase'

export const doSignIn = createAsyncThunk(
  'doSignInWithGoogle',
  async (env) => {
    const res = await auth.signInWithPopup(provider)
    if(res?.user){
      return "fuckfuck"
    }
    //return  res.user
  }
)

export const LoginSlice = createSlice({
  name: 'LOGIN',
  initialState: {
    user :[],
  },
  reducers: {
    getloginstatus  : (state, action) => {
      state.user = state.user
    }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [doSignIn.fulfilled]: (state, action) => {
      // Add user to the state array
      console.log(action)
      state.user =[ action.payload];
    },
    [doSignIn.rejected]: (state, action) => {
      // Add user to the state array
      alert('NO STREAM URL AVALIABLE ')
    },
    
  }
});

export const selectLogin = state => state.user;
export const {getloginstatus} = LoginSlice.actions;
export default LoginSlice.reducer;
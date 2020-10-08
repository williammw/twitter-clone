import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {auth, provider} from './firebase'

export const doSignIn = createAsyncThunk (
  'doSignInWithGoogle',
 async () => {    
   const response = await auth.signInWithPopup(provider)   
   //console.log(response)   
   return response.user.displayName   
  }
)

export const LoginSlice = createSlice({
  name: 'loginState',
  initialState: {
    user : null,
  },
  reducers: {
    getloginstatus  : (state, action) => {
      state.user = state.user
    }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [doSignIn.fulfilled]: (state, action)  => {
      // Add user to the state array       
      state.user = action.payload;
      
    },
    [doSignIn.rejected]: (state, action) => {
      // Add user to the state array
      alert('NO STREAM URL AVALIABLE ')
    },
    
  }
});


export const { getloginstatus } = LoginSlice.actions



export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(getloginstatus(amount));
  }, 1000);
};
export const selectLogin = state => state.loginState;
export default LoginSlice.reducer;
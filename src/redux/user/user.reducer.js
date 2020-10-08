import UserActionTypes from './user.types';
import { doGoogleSignIn } from './user.util';


const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case UserActionTypes.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        isFetching: true,
        doSignIn: "s"
      }
    default:
      return state;
  }
}

export default userReducer
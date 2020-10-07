import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case UserActionTypes.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        isFetching : true
      }
    default:
      return state;
  }
}

export default userReducer
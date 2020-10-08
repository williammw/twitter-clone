import actionTypes from '../redux/user.types'

export default (state = [], action) => {
  switch (action.type){
    case actionTypes.SIGN_IN_WITH_FIREBASE_AUTH:          
          return [...state, action.payload.displayName];
      default:
          return state;
  }
};
import actionTypes from '../redux/user.types'

const initialState = {
  user : []
}

export default (state = initialState, action) => {
  switch (action.type){
    case actionTypes.SIGN_IN_WITH_FIREBASE_AUTH:          
      return [...state.user, action.payload.displayName ] ;
      default:
          return state;
  }
};
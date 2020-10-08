import jsonplaceholder from '../apis/jsonplaceholder';
import { auth, provider } from '../firebase'
import actionTypes from '../redux/user.types'

export const fetchPost = () => async dispatch => {
  const response = await  jsonplaceholder.get('/posts');
  dispatch({type: actionTypes.FETCH_POSTS , payload: response.data});
};

export const signInWithFirebaseAuth = () => async dispatch => {
  const response = await auth.signInWithPopup(provider)
  dispatch({ type: actionTypes.SIGN_IN_WITH_FIREBASE_AUTH , payload: response.user });
}
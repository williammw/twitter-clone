import { auth, provider } from '../../firebase'

export const doGoogleSignIn = async () => {
  const response = await auth.signInWithPopup(provider)
    .then(result => {
      return result.user;
  }).catch( (error) =>{
    alert(error.message)
  })
  // console.log(response)
  return response;
  
}
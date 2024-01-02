import { signInGooglePopup, createUserDocfromUserAuth } from '../../utils/firebase/firebase.utils'


import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
 
    const logGoogleUser = async () => {
        const { user } = await signInGooglePopup();
        const userDocRef = await createUserDocfromUserAuth(user)
    }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;

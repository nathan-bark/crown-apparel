import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiDLPmlh4hFfz6oRa7ZsmyBAi4aUYteYA",
  authDomain: "crown-apparel-bfb45.firebaseapp.com",
  projectId: "crown-apparel-bfb45",
  storageBucket: "crown-apparel-bfb45.appspot.com",
  messagingSenderId: "890302376580",
  appId: "1:890302376580:web:6dd696c132718dc90bf0d1",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInGooglePopup = () => signInWithPopup(auth, provider);

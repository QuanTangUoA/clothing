import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const QuansConfig = {
    apiKey: "AIzaSyCamvUJMVEQzx_A9NkoN-R8sJLi1tKeBXM",
    authDomain: "clothing-8a8c8.firebaseapp.com",
    projectId: "clothing-8a8c8",
    storageBucket: "clothing-8a8c8.appspot.com",
    messagingSenderId: "293664389358",
    appId: "1:293664389358:web:0e0e480138f4106c9edbff",
    measurementId: "G-S4293K1L0S"
}

firebase.initializeApp(QuansConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
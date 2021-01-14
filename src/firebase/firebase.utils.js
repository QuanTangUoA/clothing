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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot){
        const {displayName, email} = userAuth;
        console.log('AAA');
        console.log('BBB');
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch (err) {
            console.log('Failed to create new user, ',err)
        };
    }
    return userRef;
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
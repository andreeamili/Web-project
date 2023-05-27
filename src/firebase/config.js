import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCZfyJbl0a1tJXUaargtaAO9yp49iRvlek",
  authDomain: "csm-equitation-website.firebaseapp.com",
  projectId: "csm-equitation-website",
  storageBucket: "csm-equitation-website.appspot.com",
  messagingSenderId: "945715715672",
  appId: "1:945715715672:web:c283c7770bb67768e3742d"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export const createUserDocument = async (user, additionalName, additionalAge, additionalPhone) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  console.log(user.uid);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const  Name  = additionalName;
    //const  email  = user;
    const  Age  = additionalAge;
    const  Phone  = additionalPhone;
    const  Experience  = "beginner";
    const  Sessions  = 0;
    const  Subscription  = 0;
    const  Horse  = "none";
    const Remaining =0;
    try {
      userRef.set({
        Name,
        Age,
        Phone,
        Experience,
        Sessions,
        Subscription,
        Horse,
        Remaining
      })
    } catch (error) {
      console.log("Error in creating use", error);
    }
  }

}
export default app

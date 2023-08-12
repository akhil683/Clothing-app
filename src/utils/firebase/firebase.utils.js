import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc, 
    getDoc,
    setDoc
  } from 'firebase/firestore';
  

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwc5J6ZZ2VCPyk8mudQ_Lb6CTvB3BNJ-U",
    authDomain: "crown-clothing-daf91.firebaseapp.com",
    projectId: "crown-clothing-daf91",
    storageBucket: "crown-clothing-daf91.appspot.com",
    messagingSenderId: "172053694423",
    appId: "1:172053694423:web:abc7262f0db0264a666d92"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account',
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();
   
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'uers', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt 
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
  } 
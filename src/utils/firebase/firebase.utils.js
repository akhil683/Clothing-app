import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged 
} from 'firebase/auth';

import {
    getFirestore,
    doc, 
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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

  const Googleprovider = new GoogleAuthProvider();

  Googleprovider.setCustomParameters({
    prompt: 'select_account',
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, Googleprovider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, Googleprovider);

  export const db = getFirestore();

  export const addCollectionAndDocuments = async (     
    collectionKey, 
    objectsToAdd
    ) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    })

    await batch.commit();
    console.log('done');
  }; 

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});

    return categoryMap;
  }
   
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'uers', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser = async () => signOut(auth); 

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);


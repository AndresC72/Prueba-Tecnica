import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkgRhPXH0dngYY6y4lrEFjbjYCDQDYcfE",
authDomain: "fakexinside-b8ad6.firebaseapp.com",
projectId: "fakexinside-b8ad6",
storageBucket: "fakexinside-b8ad6.appspot.com",
messagingSenderId: "443928555879",
appId: "1:443928555879:web:f5b88fd93b45efc362bfc2"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };


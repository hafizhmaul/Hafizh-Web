import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: `${process.env.DB_FIREBASE_API_KEY}`,
  authDomain: "portofolio-website-56788.firebaseapp.com",
  projectId: "portofolio-website-56788",
  storageBucket: "portofolio-website-56788.appspot.com",
  messagingSenderId: "854394863426",
  appId: `${process.env.DB_FIREBASE_APP_ID}`
};

//init firebase app
initializeApp(firebaseConfig);

//connect to database firebase app
const db = getFirestore();

export default db;
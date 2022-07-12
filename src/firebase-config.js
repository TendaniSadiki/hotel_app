import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAHC_tFwSv-nEdOmP8UawhFz8PqD8M_hpA",
  authDomain: "hotelapp-ead6b.firebaseapp.com",
  databaseURL: "https://hotelapp-ead6b-default-rtdb.firebaseio.com",
  projectId: "hotelapp-ead6b",
  storageBucket: "hotelapp-ead6b.appspot.com",
  messagingSenderId: "458163058897",
  appId: "1:458163058897:web:bf6b90c8c058d0b8836df0"
  };
  
  
  const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export const db = getDatabase(app);

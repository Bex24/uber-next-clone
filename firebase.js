import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB-01yrBds9stPd5VOYUp8bIkV5yux327w",
  authDomain: "uber-next-clone-2bd28.firebaseapp.com",
  projectId: "uber-next-clone-2bd28",
  storageBucket: "uber-next-clone-2bd28.appspot.com",
  messagingSenderId: "668781903875",
  appId: "1:668781903875:web:044cdee064de9e01ef4e36",
  measurementId: "G-RHETGFN778"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
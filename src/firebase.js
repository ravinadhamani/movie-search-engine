import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8ID_bxMHlc8paLSl7Tm_3xO5G3P7B72k",
  authDomain: "insta-dev-90aee.firebaseapp.com",
  projectId: "insta-dev-90aee",
  storageBucket: "insta-dev-90aee.appspot.com",
  messagingSenderId: "892098403591",
  appId: "1:892098403591:web:4ea6de0a7b3ea2d677b9a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
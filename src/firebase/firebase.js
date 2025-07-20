// import { initializeApp } from "firebase/app";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//    apiKey: "AIzaSyB0zVrtEJ43T-7CBZTRoypqdfLBOt76dU4",
//   authDomain: "pizzaa-hut.firebaseapp.com",
//   projectId: "pizzaa-hut",
//   storageBucket: "pizzaa-hut.firebasestorage.app",
//   messagingSenderId: "761572155788",
//   appId: "1:761572155788:web:73669b28d140e54f8176a9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);
// export { app, auth, db, storage };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0zVrtEJ43T-7CBZTRoypqdfLBOt76dU4",
  authDomain: "pizzaa-hut.firebaseapp.com",
  projectId: "pizzaa-hut",
  storageBucket: "pizzaa-hut.appspot.com", // ✅ تم تصحيحه هنا
  messagingSenderId: "761572155788",
  appId: "1:761572155788:web:73669b28d140e54f8176a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };

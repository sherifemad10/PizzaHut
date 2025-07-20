// import  { createContext, useState, useEffect } from 'react';
// import { auth } from '../firebase/firebase';
// import {
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
// } from 'firebase/auth';

// export const AuthContext = createContext(null);

// export const AuthProvider = ({children}) => {

//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if(user){
//               setUser(currentUser);
//            setLoading(false);
//       }else{
//         setUser(null)

//       }
    
//     });

//     return () => unsubscribe();
//   }, []);

//   const signIn = async (email, password) => {
//     setLoading(true);
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       console.error("Sign In Error:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const signOutUser = async () => {
//     setLoading(true);
//     try {
//       await signOut(auth);
//     } catch (error) {
//       console.error("Sign Out Error:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, signIn, signOut: signOutUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth';

import { db } from '../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Sign In Error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (name, email, password, newsletter) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const createdUser = userCredential.user;

      // Add name to user profile
      await updateProfile(createdUser, { displayName: name });

      // Save additional user data in Firestore
      await setDoc(doc(db, 'users', createdUser.uid), {
        name,
        email,
        newsletter,
        createdAt: new Date().toISOString()
      });

      setUser(createdUser);
    } catch (error) {
      console.error("Sign Up Error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign Out Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut: signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};


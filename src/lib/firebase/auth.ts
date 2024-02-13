import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
  } from "firebase/auth";
  import { doc, setDoc, updateDoc } from "firebase/firestore";
  import { auth, db } from "./firebase";
  import { defaultUserObject } from "../types";
  
  export const signUpWithEmail = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const { user } = userCredential;
      const newUserDoc = defaultUserObject;
        newUserDoc.firstName = firstName;
        newUserDoc.lastName = lastName;
        newUserDoc.email = email;
      await setDoc(doc(db, "users", user.uid), newUserDoc);
      await updateProfile(user, {
        displayName: firstName,
        photoURL:
          "https://i.pinimg.com/originals/f6/bc/9a/f6bc9a75409c4db0acf3683bab1fab9c.png",
      });
      await sendEmailVerification(user);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  
  export const signInWithEmail = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return userCredential.user;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  
  export const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  
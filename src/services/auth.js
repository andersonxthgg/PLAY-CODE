import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "./firebase";
import { createUserProfile } from "./firestore";

export async function registerUser(email, password, name) {
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  const user = userCredential.user;

  await createUserProfile(user, name);

  return user;
}

export async function loginUser(email, password) {
  const userCredential =
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  return userCredential.user;
}

export async function logoutUser() {
  await signOut(auth);
}
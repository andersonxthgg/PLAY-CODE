import {
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

import { db } from "./firebase";

export async function createUserProfile(user, name) {
  const userRef = doc(db, "users", user.uid);

  await setDoc(userRef, {
    name: name,
    email: user.email,
    xp: 0,
    level: 1,
    createdAt: new Date(),
  });
}

export async function getUserProfile(uid) {
  const userRef = doc(db, "users", uid);

  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data();
}
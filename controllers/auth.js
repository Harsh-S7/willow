import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

/**
 * Creates the user's account
 * @param {string} fName - user's first name
 * @param {string} lName - user's last name
 * @param {string} email - user's email
 * @param {string} password - user's password
 * @returns true if success, false if failure
 */
export async function createAccount(fName, lName, email, password) {
  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await firebase.firestore().collection('users').doc(user.user.uid).set({
      uid: user.user.uid,
      email: email,
      fName: fName,
      lName: lName
    });
    return true;
  } catch {
    return false;
  }
}

/**
 * Signs in the user
 * @param {string} email - user's email
 * @param {string} password - user's password
 * @returns true if success, false if failure
 */
export async function signIn(email, password) {
  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return true;
  } catch {
    return false;
  }
}

/**
 * Signs in the user anonymously
 * @returns true if success, false if failure
 */
export async function signInAnonymous() {
  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    await firebase.auth().signInAnonymously();
    return true;
  } catch {
    return false;
  }
}

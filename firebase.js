import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase configuration (copy your actual keys from Project Settings)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Replace with your web app's API key
  authDomain: "st-ignatius-exam-portal-faf28.firebaseapp.com",
  projectId: "st-ignatius-exam-portal-faf28",
  storageBucket: "st-ignatius-exam-portal-faf28.firebasestorage.app",
  messagingSenderId: "585453149710",
  appId: "YOUR_APP_ID" // Replace with your web app's App ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

/**
 * Logs in a user using Email and Password.
 */
export async function loginStudent(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in successfully:", userCredential.user.email);
    return userCredential.user;
  } catch (error) {
    console.error("Authentication failed:", error.message);
    throw error;
  }
}

/**
 * Saves an exam result to Firestore.
 * Your security rules require the user to be logged in first!
 */
export async function saveExamResult(studentName, subject, score) {
  try {
    const docRef = await addDoc(collection(db, "exam_results"), {
      studentName,
      subject,
      score,
      submittedAt: new Date()
    });
    console.log("Exam result recorded with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving exam result:", error);
    throw error;
  }
}

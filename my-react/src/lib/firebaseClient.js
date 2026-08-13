import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvyLSTtaKdknZ7XlqyIVc-4zJvwKSzaWY",
  authDomain: "blog-b6541.firebaseapp.com",
  projectId: "blog-b6541",
  storageBucket: "blog-b6541.firebasestorage.app",
  messagingSenderId: "951368328906",
  appId: "1:951368328906:web:d79de875fc7947dac2b633",
  measurementId: "G-QBSH7Q57LL"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)

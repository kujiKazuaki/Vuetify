// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ3jluQlOzaMP58uAe0x9VCTUuM5aUPGw",
  authDomain: "vuetify-e1acc.firebaseapp.com",
  projectId: "vuetify-e1acc",
  storageBucket: "vuetify-e1acc.appspot.com",
  messagingSenderId: "645070955189",
  appId: "1:645070955189:web:f750be93c7172979e794fc",
  measurementId: "G-CEHQZRSKT3",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)

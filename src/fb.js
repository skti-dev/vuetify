import firebase from "firebase/app"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmdszjzjiXcIbjzk4WwBVJWSuFdRIgPaA",
  authDomain: "vuetify-4c991.firebaseapp.com",
  projectId: "vuetify-4c991",
  storageBucket: "vuetify-4c991.appspot.com",
  messagingSenderId: "181804384860",
  appId: "1:181804384860:web:409bee4669abd0f2e7dc99",
  measurementId: "G-6235VG3R0H"
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

db.settings({ timestampsInSnapshots: true })

export default db

import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: 'AIzaSyCQa0vBYxFtfFHdJJvSmopN7IFT97EKtDs',
  authDomain: 'chatapp-46178.firebaseapp.com',
  projectId: 'chatapp-46178',
  storageBucket: 'chatapp-46178.appspot.com',
  messagingSenderId: '1015291988710',
  appId: '1:1015291988710:web:c502594ed395a1cd594927',
  measurementId: 'G-NNBYXH2MHY',
}

let app
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()
export { db, auth }

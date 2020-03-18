/*
*
Ejemplo de configuracion de Firebase que se usa en el proyecto

Renombrar el archivo para que se llame firebase.js
*
*/

import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
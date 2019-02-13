import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCnDkBUmtSObb4YZOnFm1djSpMt5lT8cWI",
    authDomain: "man-city-a7828.firebaseapp.com",
    databaseURL: "https://man-city-a7828.firebaseio.com",
    projectId: "man-city-a7828",
    storageBucket: "man-city-a7828.appspot.com",
    messagingSenderId: "519427491775"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

firebaseDB.ref('matches').once('value').then((snapshot) => {
    // console.log(snapshot)
})
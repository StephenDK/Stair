const KEYS = require('./keys');
const firebase = require('firebase');



var firebaseConfig = {
    apiKey: KEYS.APIKEY,
    authDomain: KEYS.AUTHDOMAIN,
    databaseURL: KEYS.DATABASEURL,
    projectId: KEYS.PROJECTID,
    storageBucket: KEYS.STORAGEBUCKET,
    messagingSenderId: KEYS.MESSAGINGSENDERID,
    appId: KEYS.APPID,
    measurementId: KEYS.MEASUREMENTID
  };

  firebase.initializeApp(firebaseConfig);
  console.log('The database has connected!!');
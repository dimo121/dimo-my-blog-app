import * as firebase from 'firebase/app';

import 'firebase/database';

const config = {
  apiKey: "AIzaSyB9wi48bD85xbHAJZHmSFWlWwWLYLUieGw",
  authDomain: "dimo-blog-app.firebaseapp.com",
  databaseURL: "https://dimo-blog-app.firebaseio.com",
  projectId: "dimo-blog-app",
  storageBucket: "dimo-blog-app.appspot.com",
  messagingSenderId: "915245289125",
  appId: "1:915245289125:web:4f944395963e61a7bcc74c"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
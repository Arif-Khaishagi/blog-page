import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyBIqsAZAzwEDHwQUMyQ29ru6hyi5H-4xME",
  authDomain: "arif-chat-2.firebaseapp.com",
  databaseURL: "https://arif-chat-2-default-rtdb.firebaseio.com",
  projectId: "arif-chat-2",
  storageBucket: "arif-chat-2.appspot.com",
  messagingSenderId: "961153848363",
  appId: "1:961153848363:web:1136e3ea809f89f6cec66e",
};

firebase.initializeApp(config);

export default firebase;

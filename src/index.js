import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  authDomain: "lil-playlist-emma.firebaseapp.com",
  databaseURL: "https://lil-playlist-emma.firebaseio.com",
  projectId: "lil-playlist-emma",
  storageBucket: "lil-playlist-emma.appspot.com",
  messagingSenderId: "328834488298",
  appId: "1:328834488298:web:b67fcc69c47ba1e1078493",
  measurementId: "G-CMDM85DMBM",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

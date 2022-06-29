import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDxRHk87AOdtmiw3CZSNCvnFtzppnKBDYg",
  authDomain: "andrethestore.firebaseapp.com",
  projectId: "andrethestore",
  storageBucket: "andrethestore.appspot.com",
  messagingSenderId: "953400759717",
  appId: "1:953400759717:web:c8ce4d67272f07bc1f444c"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   
  // </React.StrictMode>
  <><App /></>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

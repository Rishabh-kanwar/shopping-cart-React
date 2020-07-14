import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig= {

  apiKey: "AIzaSyDo-TyJDZLwtU_25-vUemBQUjbKuSSlm1A",
  authDomain: "cart-d1acb.firebaseapp.com",
  databaseURL: "https://cart-d1acb.firebaseio.com",
  projectId: "cart-d1acb",
  storageBucket: "cart-d1acb.appspot.com",
  messagingSenderId: "1010699958852",
  appId: "1:1010699958852:web:ba1cb6f1e8eccb58f59a11"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



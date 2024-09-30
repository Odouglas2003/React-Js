import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCI-AdPJIJsVdUnD8Dxx8FT64i2j9tN9cE",
  authDomain: "coderhouse-ecommerce-e76a9.firebaseapp.com",
  projectId: "coderhouse-ecommerce-e76a9",
  storageBucket: "coderhouse-ecommerce-e76a9.appspot.com",
  messagingSenderId: "671559853846",
  appId: "1:671559853846:web:c7ae9f956b5792ad60d237"
};
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

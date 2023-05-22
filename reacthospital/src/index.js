import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import App from './App';
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'react-chatbot-kit/build/main.css'
import {BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Utils/Context/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UserProvider>
  </>
);


import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import ShopContextProvider, { ShopContext } from "./Context/ShopContext";
import ShopContextProvider from "./Context/ShopContext";

function setDefaultLanguageAction() {
  console.log("set language function started")
  let defaultLanguageAction = localStorage.getItem("defaultLanguageAction");
  if (defaultLanguageAction === null) {
    localStorage.setItem("language", "uz");
    localStorage.setItem("defaultLanguageAction", true);
  }
}
setDefaultLanguageAction();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

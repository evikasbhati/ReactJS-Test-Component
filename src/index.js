import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Test from '../src/Pages/Test/Test'
import reportWebVitals from './reportWebVitals';
import Check from './Pages/Check/Check';
import Color from './Pages/Color/Color';
import SelectInput from './components/SelectInput/SelectInput';
import Login from './Pages/Login/Login';
// import Class from './Pages/Class/Class';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Color />
    {/* <SelectInput /> */}
    {/* <Login /> */}
    {/* <Test /> */}
    {/* <App /> */}
    {/* <Check/> */}
    {/* <Class/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

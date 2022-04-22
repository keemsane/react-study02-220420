import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import App02 from './220421/App02';
// import App03 from './220421/App03';
// import App04 from './220421/App04';
// import App05 from './220421/App05';
// import App06 from './220421/App06';
// import App06_1 from './220421/App06_1';
// import App07 from './220422/App07';
import App08 from './220422/App08';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App08 />
  </BrowserRouter>,
);

// ReactDOM.render(
//   <BrowserRouter>
//     <App08 />
//   </BrowserRouter>,
//   document.getElementById('root'),
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <App02 /> */}
//     {/* <App03 /> */}
//     {/* <App04 /> */}
//     {/* <App05 /> */}
//     {/* <App06 /> */}
//     {/* <App06_1 /> */}
//     {/* <App07 /> */}
//     <App08 />
//   </React.StrictMode>,
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

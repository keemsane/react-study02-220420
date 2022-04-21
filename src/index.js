import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import App02 from './220421/App02';
// import App03 from './220421/App03';
// import App04 from './220421/App04';
// import App05 from './220421/App05';
import App06 from './220421/App06';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App02 /> */}
    {/* <App03 /> */}
    {/* <App04 /> */}
    {/* <App05 /> */}
    <App06 />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

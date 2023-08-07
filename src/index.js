import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,} from "react-router-dom";
  import 'mapbox-gl/dist/mapbox-gl.css';
  import { Provider } from 'react-redux';
  import store from './app/store';
import User_info from './reducers/User_info';
import Profile from './reducers/Profile';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
<React.StrictMode>
<Provider store ={store}>
<BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }/>
        <Route path= "User_info" element={ <User_info />} /> 
         </Routes>
    </BrowserRouter>
    </Provider>
</React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

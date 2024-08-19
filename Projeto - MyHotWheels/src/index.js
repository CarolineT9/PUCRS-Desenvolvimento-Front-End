import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import About from './About/About.jsx'
import CarForm from './CarForm.jsx/CarForm.jsx';
import Home from './Home/Home.jsx';
import CarList from './CarList/CarLis.jsx';

import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/add-car",
    element: <CarForm/>
  },
  {
    path: "/carros",
    element: <CarList/>
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

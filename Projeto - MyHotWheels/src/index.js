import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import About from './Components/About/About.jsx'
import CarForm from './Components/CarForm/CarForm.jsx';
import App from './App.jsx'
import Home from './Components/Home/Home.jsx';
import CarList from './Components/CarList/CarList.jsx';

import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/add-car",
        element: <CarForm />
      },
      {
        path: "/cars",
        element: <CarList />
      }
    ]
  },


])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

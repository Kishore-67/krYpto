import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom' instead of 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Watchlist from './Pages/Watchlist';
import Wishlist from './Pages/Wishlist';
import SignUp from './Authentication/SignUp';
import Signin from './Authentication/Signin';
import Crypto from './Pages/Crypto';
import Home from './Pages/Home';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Wishlist',
    element:<Wishlist/>
  },
  {
    path: '/Dashboard',
    element:<Dashboard/>
  },
  {
    path: '/Home',
    element:<Home/>
  },
  {
    path: '/Crypto',
    element:<Crypto/>
  },
  {
    path: '/Watchlist',
    element:<Watchlist/>
  },{
    path: '/Login',
    element:<Signin/>
  },
  {
    path:'/Signup',
    element:<SignUp/>
  }
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

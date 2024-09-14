import ReactDom from 'react-dom/client' ;
import React from 'react';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import Navbar from './component/nav-bar/navbar'
import Home from './view/home/home';
import About from './view/about/about';
import Contact from './view/contact/conact';
const root = ReactDom.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },
  {
    path:'/about',
    element:<About/>,
  },
  {
    path:'/contact',
    element:<Contact/>,
  }
])
root.render(<RouterProvider router={router}/>)
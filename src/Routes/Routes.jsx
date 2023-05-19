import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Blog from '../Pages/Blog/Blog';
import AllToys from '../Pages/AllToys/AllToys';
import MyToys from '../Pages/MyToys/MyToys';
import AddToys from '../Pages/AddToys/AddToys';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Register></Register>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>
        },
        {
          path: '/myToys',
          element: <MyToys></MyToys>
        },
        {
          path: '/addToys',
          element: <AddToys></AddToys>
        }
      ]
    }
  ]);

export default router;
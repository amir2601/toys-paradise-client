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
import ToyDetails from '../Pages/ToyDetails/ToyDetails';
import PrivateRoutes from './PrivateRoutes';
import UpdateToy from '../Pages/MyToys/UpdateToy';
import Error from '../Pages/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        path: '/Toy/:id',
        element: <PrivateRoutes>
          <ToyDetails></ToyDetails>
        </PrivateRoutes>,
        loader: ({ params }) => fetch(`https://toys-paradise-server.vercel.app/toy/${params.id}`)
      },
      {
        path: '/myToys',
        element: <PrivateRoutes>
          <MyToys></MyToys>
        </PrivateRoutes>
      },
      {
        path: '/myToys/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({params}) => fetch(`https://toys-paradise-server.vercel.app/myToys/${params.id}`)
      },
      {
        path: '/addToy',
        element: <PrivateRoutes>
          <AddToys></AddToys> 
        </PrivateRoutes>
      }
    ]
  }
]);

export default router;
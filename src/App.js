import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AllHotel from './components/Home/Hotel/AllHotel';
import HotelDetails from './components/Home/Hotel/HotelDetails';
import Checkout from './components/Checkout/Checkout';
import Main from '../src/layout/Main';
import SignUp from './components/SignUp/SignUp';
// import PriveteRoute from '../src/Routes/PriveteRoutes'
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Routes/PrivateRoute';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/allhotel',
          element: <AllHotel />
        },
        {
          path: '/allhotel/:hotelId',
          element: <HotelDetails />,
          loader: () => fetch('../hoteldata.json')
        },
        // {
        //   path: '/checkout',
        //   element: <Checkout />
        // },
        {
          path: '/checkout/:hotelId',
          element: <PrivateRoute><Checkout/></PrivateRoute>,
          loader: () => fetch('../hoteldata.json')
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

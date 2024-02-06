import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import Home from '../components/Home';
import Donation from '../components/Donation';
import Statistics from '../components/Statistics';
import SingleInfo from '../components/SingleInfo';
import Login from '../components/login';
import SignUp from '../components/SignUp';
import PrivateRout from './PrivateRout';

const Routers = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/jsonInfo.json')                
            },
            {
                path:'/donation',
                element: <PrivateRout><Donation></Donation></PrivateRout>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/statistics',
                element: <PrivateRout><Statistics></Statistics></PrivateRout>,
                loader: () => fetch('/jsonInfo.json')
            },
            {
                path: '/singleInfo/:id',
                element: <PrivateRout><SingleInfo></SingleInfo></PrivateRout>,
                loader: () => fetch('/jsonInfo.json')
            }
        ]
    }
])

export default Routers;
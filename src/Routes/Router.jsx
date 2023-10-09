
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import EventDetails from '../Pages/EventDetails/EventDetails';
import PrivateRoute from './PrivateRoute';
import Feedback from '../Pages/Feedback/Feedback';
import Profile from '../Pages/Profile/Profile';

const Router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:()=> fetch('../events.json'),
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/feedback',
                element: <PrivateRoute><Feedback></Feedback></PrivateRoute>
            },
            {
                path:'/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:'/event/:id',
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader: ()=>fetch('../events.json')
            },
        ]
    }
])
export default Router;
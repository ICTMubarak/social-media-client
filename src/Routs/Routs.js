import Login from "../Login/Login";
import Messanger from "../Pages/Messanger/Messanger";
import Notifications from "../Pages/Notifications/Notifications";
import Profile from "../Pages/Profile/Profile";
import Setting from "../Pages/Setting/Setting";
import Register from "../Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()  => fetch('http://localhost:5000/allstatus')
            },          
            {
                path: '/messanger',
                element: <Messanger></Messanger>,
            },          
            {
                path: '/notifications',
                element: <Notifications></Notifications>,
            },          
            {
                path: '/profile',
                element: <Profile></Profile>,
            },          
            {
                path: '/setting',
                element: <Setting></Setting>,
            },          
            {
                path: '/signup',
                element: <Register></Register>,
            },          
            {
                path: '/signin',
                element: <Login></Login>,
            },          

        ]
    }
    
])

export default router;
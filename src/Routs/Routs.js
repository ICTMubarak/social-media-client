import Login from "../Login/Login";
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
import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import Blogs from "../../Blog/Blogs";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import Signup from "../../Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    }
])
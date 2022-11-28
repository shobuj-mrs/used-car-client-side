import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import Blogs from "../../Blog/Blogs";
import CarCategories from "../../CarCategories/CarCategories";
import AddCars from "../../Dashboard/AddCars/AddCars";
import AddedBooks from "../../Dashboard/AddedCars/AddedCars";
import AllBuyers from "../../Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Dashboard/AllSellers/AllSellers";
import DashboardLayout from "../../Dashboard/DashboardLayout/DashboardLayout";
import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import ReportedItems from "../../Dashboard/ReportedItems/ReportedItems";
import Errorpage from "../../ErrorPage/Errorpage";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import Signup from "../../Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Errorpage></Errorpage>,
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
            {
                path: '/categories/:id',
                element: <CarCategories></CarCategories>,
                loader: ({ params }) => fetch(`http://localhost:5000/allcars/category/${params.id}`)

            }
        ]
    }
    ,
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/dashboard',

            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/reporteditems',
                element: <ReportedItems></ReportedItems>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addcars',
                element: <AddCars></AddCars>
            },
            {
                path: '/dashboard/addedcars',
                element: <AddedBooks></AddedBooks>
            }
        ]
    }
])
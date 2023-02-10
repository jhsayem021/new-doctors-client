import React from "react";
import { createBrowserRouter  } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Contact from "../../Pages/Contact/Contact";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Users from "../../Pages/Dashboard/Users/Users";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                 path: '/home',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            ,
            {
                path: '/about',
                element: <About></About>
            }
            ,
            {
                path: '/contact',
                element: <Contact></Contact>
            }
            ,
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
            ,
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout> </PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
                {
                    path: '/dashboard',
                    element: <Dashboard></Dashboard>
                },
                {
                    path: '/dashboard/users',
                    element: <AdminRoute><Users></Users></AdminRoute>
                },
                {
                    path: '/dashboard/adddoctor',
                    element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
                },
                {
                    path: '/dashboard/managedoctors',
                    element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
                },
                {
                    path: '/dashboard/payment/:id',
                    element: <AdminRoute><Payment></Payment></AdminRoute>,
                    loader: ({params}) => fetch(`https://new-doctors-server-jhsayem021.vercel.app/booking/${params.id}`)
                    
                }
        ]
    }
])

export default router;
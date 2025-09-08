import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "@/pages/authPages/Login";
import MyCourses from "@/pages/students/MyCourses";
import About from "@/pages/About";
import Profile from "@/pages/Profile";
import Dashboard from "@/pages/admin/Dashboard";
import DaHome from "@/pages/admin/DaHome";

export const Router = createBrowserRouter([
    {
        path: "/" ,
        element: <MainLayout /> ,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true ,
                element: <Home />
            } ,
            {
                 path: "about" ,
                 element: <About />
            },
            {
                path: "my-courses" ,
                element: <MyCourses/>
            }
            ,
            {
                path: "profile" ,
                element: <Profile/>
            } ,
            {
                path: "Dashboard" ,
                element: <Dashboard /> ,
                children: [
                    {
                        index: true ,
                        element : <DaHome />
                    }
                ]
            }
        ] ,
    } ,
    {
        path : "/login" ,
        element: <Login />
    }
])
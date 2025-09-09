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
import Courses from "@/pages/Courses";
import DaCourses from "@/pages/admin/DaCourses";
import EditCourse from "@/pages/admin/EditCourse";
import DaLectures from "@/pages/admin/lecture/DaLectures";
import EditLecture from "@/pages/admin/lecture/EditLecture";
import CourseDetails from "@/pages/CourseDetails";
import CourseProgress from "@/pages/students/CourseProgress";

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
                path: "course-details/:courseId" ,
                element : <CourseDetails />
            },
            {
                path: "my-course/:courseId" ,
                element : <CourseProgress />
            },
            {
                path: "Dashboard" ,
                element: <Dashboard /> ,
                children: [
                    {
                        path: "preview" ,
                        element : <DaHome />
                    } ,
                    {
                        path : "courses" ,
                        element : <DaCourses />
                    },
                    {
                        path : "courses/:courseId" ,
                        element : <EditCourse />
                    },
                    {
                        path: "courses/:courseId/lectures" ,
                        element : <DaLectures />
                    },
                    {
                        path: "courses/:courseId/lectures/:lectureId" ,
                        element : <EditLecture />
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
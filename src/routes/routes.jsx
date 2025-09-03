import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

export const Router = createBrowserRouter([
    {
        path: "/" ,
        element: <MainLayout /> ,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true ,
                element: <Home />
            }
        ]
    }
])
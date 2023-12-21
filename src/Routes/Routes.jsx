import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import SignUpPage from "../Pages/SignUpPgae/SignUpPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import DashboardPage from "../Pages/DashboardPage/DashboardPage";
import CreateTaskPage from "../Pages/CreateTaskPage/CreateTaskPage";

export const router = createBrowserRouter([
    
{
   path:'/',
   element:<Root></Root>,
   children : [
    {
        path : '/',
        element:<HomePage></HomePage>,
    },
    {   path:'/signUp',
        element:<SignUpPage></SignUpPage>
                
    },
    {
        path:'/login',
        element:<LoginPage></LoginPage>
    },
    {
        path:'/dashboard',
        element:<DashboardPage></DashboardPage>
    },
    {
        path:'/createTask',
        element:<CreateTaskPage></CreateTaskPage>
    }
        
   
   ]
}
])
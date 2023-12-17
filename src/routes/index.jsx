import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import Student from "../pages/student";
const router =  createBrowserRouter([
{
    path:'/',
    element: <Home/>
},
{
    path:'/estudiante',
    element: <Student/>
}

]);
const MyRoutes = () => <RouterProvider router={router}/>

export default MyRoutes;
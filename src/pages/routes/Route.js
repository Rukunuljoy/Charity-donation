import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../component/Home/Home";
import Login from "../shared/Login/Login";
import Registration from "../shared/Registration/Registration";
import Gallery from "../component/Gallery/Gallery";
import Contact from "../component/Contact/Contact";
import Blog from "../component/Blog/Blog";
import Event from "../component/Event/Event";
import Donate from "../component/DonateService/Donate";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
           {
            path:"/",
            element:<Home/>
           },
           {
            path:'/login',
            element:<Login/>,
           },
           {
            path:'/registration',
            element:<Registration/>
           },
           {
            path:'/gallery',
            element:<Gallery/>
           },
           {
            path:'/causes',
            element:<Donate/>
           },
           {
            path:'/contact',
            element:<Contact/>
           },
           {
            path:'/blog',
            element:<Blog/>
           },
           {
            path:'/event',
            element:<Event/>
           },
        ]
    }
])
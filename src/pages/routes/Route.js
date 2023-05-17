import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../component/Home/Home";
import Login from "../shared/Login/Login";
import Registration from "../shared/Registration/Registration";

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
           }
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Blog from "../../pages/blog/Blog";
import Login from "../../pages/login/Login";
import ChefRecipe from "../../assets/asset/chefrecipe/ChefRecipe";
import ErrorPage from "../../pages/404page/ErrorPage";
import Registration from "../../pages/registration/Registration";
import PrivateRoute from "../prvateroute/PrivateRoute";






const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'registration',
                element:<Registration></Registration>
            },
            {
                path:'chefrecipe/:id',
                element:<PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
                loader: ({params})=> fetch(`https://assign-10-server-firozahmmed1.vercel.app/data/${params.id}`)
            },
            
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])

export default router;
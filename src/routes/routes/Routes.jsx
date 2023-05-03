import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Blog from "../../pages/blog/Blog";
import Login from "../../pages/login/Login";
import ChefRecipe from "../../assets/asset/chefrecipe/ChefRecipe";
import ErrorPage from "../../pages/404page/ErrorPage";






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
                path:'chefrecipe',
                element:<ChefRecipe></ChefRecipe>
            },
            
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])

export default router;
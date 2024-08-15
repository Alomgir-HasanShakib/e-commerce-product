import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import ProductPage from "../pages/product/ProductPage";
import Login from "../pages/LoginPage/Login";
import Registration from "../pages/registration/Registration";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children:[
            {
                path: '/products',
                element: <ProductPage></ProductPage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }

])

export default router

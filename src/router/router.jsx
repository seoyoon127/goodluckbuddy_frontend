import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import MyPage from "../pages/MyPage";
import HomePage from "../pages/HomePage";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import NotFound from "../pages/NotFound";
import RecommendPage from "../pages/RecommendPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children:[
            {
                index:true,
                element:<MainPage/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'signup',
                element: <SignupPage/>
            },
            {
                path: 'home',
                element: <HomePage/>
            },
            {
                path: 'recommend',
                element: <RecommendPage/>
            },
            {
                path: 'my',
                element: <MyPage/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])

export default router
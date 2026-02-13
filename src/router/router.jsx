import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import MyPage from "../pages/MyPage";
import HomePage from "../pages/HomePage";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <h1>에러 페이지</h1>,
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
                element: <h1>회원가입 페이지</h1>
            },
            {
                path: 'home',
                element: <HomePage/>
            },
            {
                path: 'recommend',
                element: <h1>추천 편지 페이지</h1>
            },
            {
                path: 'mypage',
                element: <MyPage/>
            }]
    }
])

export default router
import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import MyPage from "../pages/MyPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <h1>에러 페이지</h1>,
        children:[
            {
                index:true,
                element:<h1>홈 페이지</h1>
            },
            {
                path: 'login',
                element: <h1>로그인 페이지</h1>
            },
            {
                path: 'signup',
                element: <h1>회원가입 페이지</h1>
            },
            {
                path: 'home',
                element: <h1>홈 페이지</h1>
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
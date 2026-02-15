import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import MyPage from "../pages/MyPage";
import HomePage from "../pages/HomePage";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import NotFound from "../pages/NotFound";
import RecommendPage from "../pages/RecommendPage";
import ProfileModifyPage from "../pages/ProfileModifyPage";
import WithdrawPage from "../pages/WithdrawPage";
import MyLikesPage from "../pages/MyLikesPage";
import MyLetterPage from "../pages/MyLetterPage";
import MyReplyPage from "../pages/MyReplyPage";
import UserProfilePage from "../pages/UserProfilePage";
import UserLetterPage from "../pages/UserLetterPage";
import UserReplyPage from "../pages/UserReplyPage";

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
                path: 'my/profile',
                element: <ProfileModifyPage/>
            },
            {
                path: 'withdraw',
                element: <WithdrawPage/>
            },
            {
                path: 'my/likes',
                element: <MyLikesPage/>
            },
            {
                path: 'my/letter',
                element: <MyLetterPage/>
            },
            {
                path: 'my/reply',
                element: <MyReplyPage/>
            },
            {
                path: 'user/:id',
                element: <UserProfilePage/>
            },
            {
                path: 'user/:id/letter',
                element: <UserLetterPage/>
            },
            {
                path: 'user/:id/reply',
                element: <UserReplyPage/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])

export default router
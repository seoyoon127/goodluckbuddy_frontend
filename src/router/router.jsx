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
import LetterWrite1Page from "../pages/LetterWrite1Page";
import LetterWrite2Page from "../pages/LetterWrite2Page";
import LetterModify1Page from "../pages/LetterModify1Page";
import LetterModify2Page from "../pages/LetterModify2Page";
import LetterDetailPage from "../pages/LetterDetailPage";
import ProtectedRoute from "./ProtectedRoute";

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
                element: <ProtectedRoute><RecommendPage/></ProtectedRoute>
            },
            {
                path: 'my',
                element: <ProtectedRoute><MyPage/></ProtectedRoute>
            },
            {
                path: 'my/profile',
                element: <ProtectedRoute><ProfileModifyPage/></ProtectedRoute>
            },
            {
                path: 'withdraw',
                element: <ProtectedRoute><WithdrawPage/></ProtectedRoute>
            },
            {
                path: 'my/likes',
                element: <ProtectedRoute><MyLikesPage/></ProtectedRoute>
            },
            {
                path: 'my/letter',
                element: <ProtectedRoute><MyLetterPage/></ProtectedRoute>
            },
            {
                path: 'my/reply',
                element: <ProtectedRoute><MyReplyPage/></ProtectedRoute>
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
                path: 'letter/category',
                element: <ProtectedRoute><LetterWrite1Page/></ProtectedRoute>
            },
            {
                path: 'letter/write',
                element: <ProtectedRoute><LetterWrite2Page/></ProtectedRoute>
            },
            {
                path: 'category/:id/modify',
                element: <ProtectedRoute><LetterModify1Page/></ProtectedRoute>
            },
            {
                path: 'letter/:id/modify',
                element: <ProtectedRoute><LetterModify2Page/></ProtectedRoute>
            },
            {
                path: 'letter/:id',
                element: <LetterDetailPage/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])

export default router
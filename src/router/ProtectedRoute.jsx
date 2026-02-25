import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import useAuthStore from "../store/useAuthStore"
import { useEffect } from "react";
import LoadingPage from "../pages/LoadingPage";
import useGetProfile from "../apis/useGetProfile";

const ProtectedRoute = ({ children }) => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const accessToken = useAuthStore((state) => state.accessToken);
  const setId = useAuthStore((state) => state.setId);
  const location = useLocation();
  const { data:profile } = useGetProfile();

   useEffect(() => {
    if (!token) return;

    setAccessToken(token);

  }, [token]);

  useEffect(() => {
    if (!profile) return;

    setId(profile.id);

  }, [profile]);

  if (token && !accessToken) {
    return <LoadingPage/>
  }

  if (!accessToken) {
    return <Navigate to={`/login?redirect=${encodeURIComponent(location.pathname)}`} replace />;
  }

  return children;
};


export default ProtectedRoute;
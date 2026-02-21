import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import useAuthStore from "../store/useAuthStore"
import { useState, useEffect } from "react";
import LoadingPage from "../pages/LoadingPage";

const ProtectedRoute = ({ children }) => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const accessToken = useAuthStore((state) => state.accessToken);
  const location = useLocation();
  const [isLoadingToken, setIsLoadingToken] = useState(!!token);

  useEffect(() => {
    if (!token) return;
    const timer = setTimeout(() => {
      setAccessToken(token);
      setIsLoadingToken(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [token,  setAccessToken]);

  if (isLoadingToken) {
    return <LoadingPage/>
  }

  if (!accessToken) {
    return <Navigate to={`/login?redirect=${encodeURIComponent(location.pathname)}`} replace />;
  }

  return children;
};


export default ProtectedRoute;
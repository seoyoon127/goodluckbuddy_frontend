import axios from "axios";
import useAuthStore from "../store/useAuthStore";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().accessToken;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  res => res,
  async error => {

    const originalRequest = error.config;

    if (originalRequest.url.includes("/token/reissue")) {
        return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {

        originalRequest._retry = true;

        try {

            await reissue();

            return axiosInstance(originalRequest);

        } catch (reissueError) {

            logout();

            return Promise.reject(reissueError);
        }
    }

    return Promise.reject(error);
  }
);

const reissue = async () => {
  await axiosInstance.post("/token/reissue");
};

const logout = () => {
  localStorage.removeItem("accessToken");
  window.location.href = "/login";
};

export default axiosInstance;
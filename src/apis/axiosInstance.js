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

// axiosInstance.interceptors.response.use(
//     (response) => response,

//     async (error) => {
//         const originalRequest = error.config;

//         // 401 아니면 그냥 에러 반환
//         if (error.response?.status !== 401) {
//             return Promise.reject(error);
//         }

//         // 재발급 요청 자체가 실패한 경우 무한루프 방지
//         if (originalRequest._retry) {
//             return Promise.reject(error);
//         }

//         originalRequest._retry = true;

//         try {
//             const response = await axiosInstance.post("/api/auth/token/reissue");

//             const newAccessToken = response.data.accessToken;
//             useAuthStore.getState().setAccessToken(newAccessToken);

//             // 헤더 갱신
//             originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

//             // 원래 요청 재시도
//             return axiosInstance(originalRequest);

//         } catch (reissueError) {
//             console.error("토큰 재발급 실패", reissueError);
//             useAuthStore.getState().logout();

//             return Promise.reject(reissueError);
//         }
//     }
// );

export default axiosInstance;
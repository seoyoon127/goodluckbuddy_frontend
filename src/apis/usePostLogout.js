import { useMutation } from "@tanstack/react-query"
import axiosInstance from "./axiosInstance";
import useAuthStore from "../store/useAuthStore";

const usePostLogout = () => {
    const clearAccessToken = useAuthStore((state) => state.clearAccessToken);

    return useMutation({
        mutationFn: async () => {
            const response = await axiosInstance.post("/api/auth/logout");
            return response.data;
        },
        onSuccess: () => {
            clearAccessToken();
        },
        onError: (error) => {
            console.error("🚨 logout 실패", error);
        }
    });
};

export default usePostLogout;
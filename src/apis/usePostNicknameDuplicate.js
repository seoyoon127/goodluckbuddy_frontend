import { useMutation } from "@tanstack/react-query"
import axiosInstance from "./axiosInstance";

const usePostNicknameDuplicate = (setErrors) => {
    return useMutation({
        mutationFn: async (nickname) => {
            const response = await axiosInstance.post("/api/users/nickname", {
                nickname: nickname
            });
            return response.data;
        },
        onSuccess: () => {
            setErrors(prev => ({
                ...prev,
                nickname: ""
            }));
        },
        onError: (error) => {
            const message = error.response?.data?.message;
            setErrors(prev => ({
                ...prev,
                nickname: message || "닉네임 확인 실패"
            }));
        }
    });
};

export default usePostNicknameDuplicate;
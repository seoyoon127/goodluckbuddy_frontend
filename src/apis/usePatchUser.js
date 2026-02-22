import { useMutation } from "@tanstack/react-query"
import axiosInstance from "./axiosInstance";
import { useNavigate } from "react-router-dom";

const usePatchUser = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async (profile) => {
            const response = await axiosInstance.patch("/api/users/profile",profile);
            return response.data;
        },
        onSuccess: () => {
            alert("프로필이 저장되었습니다.")
            navigate("/home");
        },
        onError: (error) => {
            console.error("프로필 저장 실패", error);
        }
    });
};

export default usePatchUser;
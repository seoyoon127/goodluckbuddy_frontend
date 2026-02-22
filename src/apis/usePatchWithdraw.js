import { useMutation } from "@tanstack/react-query"
import axiosInstance from "./axiosInstance";
import { useNavigate } from "react-router-dom";

const usePatchWithdraw = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async () => {
            const response = await axiosInstance.patch("/api/users/withdraw");
            return response.data;
        },
        onSuccess: () => {
            alert("탈퇴 되었습니다.")
            navigate("/");
        },
        onError: (error) => {
            console.error("회원 탈퇴 실패", error);
        }
    });
};

export default usePatchWithdraw;
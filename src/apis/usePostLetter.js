import { useMutation } from "@tanstack/react-query"
import axiosInstance from "./axiosInstance";
import { useNavigate } from "react-router-dom";

const usePostLetter = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async (letter) => {
            const response = await axiosInstance.post("/api/letters", letter);
            return response.data;
        },
        onSuccess: () => {
            alert("편지가 저장되었습니다.");
            navigate("/home")
        },
        onError: (error) => {
            console.error("편지 작성 실패", error);
        }
    });
};

export default usePostLetter;
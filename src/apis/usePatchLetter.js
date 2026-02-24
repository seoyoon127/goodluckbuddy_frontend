import { useMutation } from "@tanstack/react-query"
import axiosInstance from "./axiosInstance";
import { useNavigate } from "react-router-dom";

const usePatchLetter = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async ({id, letter}) => {
            const response = await axiosInstance.patch(`/api/letters/${id}`, letter);
            return response.data;
        },
        onSuccess: () => {
            alert("변경사항이 저장되었습니다.")
            navigate("/home");
        },
        onError: (error) => {
            console.error("편지 수정 실패", error);
        }
    });
};

export default usePatchLetter;
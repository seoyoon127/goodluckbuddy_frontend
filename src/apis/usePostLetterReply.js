import { useMutation } from "@tanstack/react-query"
import axiosInstance from "./axiosInstance";

const usePostReply = (id) => {
    return useMutation({
        mutationFn: async (reply) => {
            const response = await axiosInstance.post(`/api/replies/letters/${id}`, reply);
            return response.data;
        },
        onSuccess: () => {
            alert("답글이 저장되었습니다.");
        },
        onError: (error) => {
            console.error("답글 작성 실패", error);
        }
    });
};

export default usePostReply;
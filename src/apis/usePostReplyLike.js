import { useMutation, useQueryClient } from "@tanstack/react-query"
import axiosInstance from "./axiosInstance";

const usePostReplyLike = (letterId) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id) => {
            const response = await axiosInstance.post(`/api/replies/${id}/like`);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["replies",letterId]);
            console.log("좋아요가 저장되었습니다.");
        },
        onError: (error) => {
            console.error("좋아요 저장 실패", error);
        }
    });
};

export default usePostReplyLike;
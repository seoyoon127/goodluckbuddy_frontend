import { useMutation, useQueryClient } from "@tanstack/react-query"
import axiosInstance from "./axiosInstance";

const useDeleteReplyLike = (letterId) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id) => {
            const response = await axiosInstance.delete(`/api/replies/${id}/like`);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["replies", letterId]);
            console.log("좋아요가 삭제되었습니다.");
        },
        onError: (error) => {
            console.error("좋아요 삭제 실패", error);
        }
    });
};

export default useDeleteReplyLike;
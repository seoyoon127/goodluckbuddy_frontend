import { useMutation, useQueryClient } from "@tanstack/react-query"
import axiosInstance from "./axiosInstance";

const useDeleteLetterLike = (id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async () => {
            const response = await axiosInstance.delete(`/api/letters/${id}/like`);
            console.log(response)
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["letter", id]);
            console.log("좋아요가 삭제되었습니다.");
        },
        onError: (error) => {
            console.error("좋아요 삭제 실패", error);
        }
    });
};

export default useDeleteLetterLike;
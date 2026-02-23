import { useMutation, useQueryClient } from "@tanstack/react-query"
import axiosInstance from "./axiosInstance";

const usePostLetterLike = (id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async () => {
            const response = await axiosInstance.post(`/api/letters/${id}/like`);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["letter", id]);
            console.log("좋아요가 저장되었습니다.");
        },
        onError: (error) => {
            console.error("좋아요 저장 실패", error);
        }
    });
};

export default usePostLetterLike;
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axiosInstance from "./axiosInstance";

const useDeleteReply = (id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async () => {
            const response = await axiosInstance.delete(`/api/replies/${id}`);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["letter", id]);
            alert("답글이 삭제되었습니다.");
        },
        onError: (error) => {
            console.error("답글 삭제 실패", error);
        }
    });
};

export default useDeleteReply;
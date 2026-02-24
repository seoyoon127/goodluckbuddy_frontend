import { useMutation, useQueryClient } from "@tanstack/react-query"
import axiosInstance from "./axiosInstance";

const useDeleteLetter = (id) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async () => {
            const response = await axiosInstance.delete(`/api/letters/${id}`);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["letter", id]);
            alert("편지가 삭제되었습니다.");
        },
        onError: (error) => {
            console.error("편지삭제 실패", error);
        }
    });
};

export default useDeleteLetter;
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useGetReplies = (id) => {
    return useQuery({
        queryKey: ["replies", id],
        queryFn: async () => {
            const response = await axiosInstance.get(`/api/replies/letters/${id}`);
            return response.data.result ?? [];
        },
    });
}

export default useGetReplies;
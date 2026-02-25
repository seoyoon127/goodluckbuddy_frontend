import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useGetUserReplies = ({category, sort, id}) => {
    return useQuery({
        queryKey: ["replies", id],
        queryFn: async () => {
            const response = await axiosInstance.get(`/api/replies/writer/${id}?category=${category}&sort=${sort}`);
            return response.data.result ?? [];
        },
    });
}

export default useGetUserReplies;
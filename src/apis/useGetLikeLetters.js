import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useGetLikeLetters = ({category, sort, options = {}}) => {
    return useQuery({
        queryKey: ["likeLetters", category, sort],
        queryFn: async () => {
            const response = await axiosInstance.get(`/api/letters/like?category=${category}&sort=${sort}`);
            return response.data.result ?? [];
        },
        enabled: options.enabled, 
    });
}

export default useGetLikeLetters;
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useGetUserLetters = ({category, sort, id},  options = {}) => {
    return useQuery({
        queryKey: ["userLetters", category, sort, id],
        queryFn: async () => {
            const response = await axiosInstance.get(`/api/letters/writer/${id}?category=${category}&sort=${sort}`);
            return response.data.result ?? [];
        },
        enabled: options.enabled, 
    });
}

export default useGetUserLetters;
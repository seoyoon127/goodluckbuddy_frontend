import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useGetMyLetters = ({category, sort, options = {}}) => {
    return useQuery({
        queryKey: ["myLetters", category, sort],
        queryFn: async () => {
            const response = await axiosInstance.get(`/api/letters/me?category=${category}&sort=${sort}`);
            return response.data.result ?? [];
        },
        enabled: options.enabled, 
    });
}

export default useGetMyLetters;
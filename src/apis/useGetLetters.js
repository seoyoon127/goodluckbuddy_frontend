import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useGetLetters = ({category, sort, options = {}}) => {
    return useQuery({
        queryKey: ["letters", category, sort],
        queryFn: async () => {
            const response = await axiosInstance.get(`/api/letters?category=${category}&sort=${sort}`);
            return response.data.result ?? [];
        },
        enabled: options.enabled, 
    });
}

export default useGetLetters;
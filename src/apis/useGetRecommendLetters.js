import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useGetRecommendLetters = () => {
    return useQuery({
        queryKey: ["recommendLetters"],
        queryFn: async () => {
            const response = await axiosInstance.get(`/api/letters/recommend`);
            return response.data.result ?? { letters: [], phrase: "" };
        },
    });
}

export default useGetRecommendLetters;
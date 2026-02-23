import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useGetLetters = ({category, sort}) => {
    return useQuery({
        queryKey: ["letters", category, sort],
        queryFn: async () => {
            const response = await axiosInstance.get(`/api/letters?category=${category}&sort=${sort}`);
            console.log(response.data.result)
            return response.data.result;
        },
    });
}

export default useGetLetters;
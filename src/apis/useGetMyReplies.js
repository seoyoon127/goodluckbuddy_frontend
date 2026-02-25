import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useGetMyReplies = ({category, sort}) => {
    return useQuery({
        queryKey: ["myReplies"],
        queryFn: async () => {
            const response = await axiosInstance.get(`/api/replies/me?category=${category}&sort=${sort}`);
            return response.data.result ?? [];
        },
    });
}

export default useGetMyReplies;
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useGetLetterDetail = (id) => {
    return useQuery({
        queryKey: ["letter", id],
        queryFn: async () => {
            const response = await axiosInstance.get(`/api/letters/${id}`);
            console.log(response.data.result)
            return response.data.result;
        },
        enabled: !!id
    });
}

export default useGetLetterDetail;
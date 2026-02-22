import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

const useGetProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const response = await axiosInstance.get("/api/users/me/profile");
            return response.data.result;
        }
    });
}

export default useGetProfile;
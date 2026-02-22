import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";
import useAuthStore from "../store/useAuthStore";

const useGetProfile = () => {
    const accessToken = useAuthStore(state => state.accessToken);
    return useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const response = await axiosInstance.get("/api/users/me/profile");
            return response.data.result;
        },
        enabled: !!accessToken 
    });
}

export default useGetProfile;
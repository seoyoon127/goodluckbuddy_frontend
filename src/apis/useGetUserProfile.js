import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";
import useAuthStore from "../store/useAuthStore";

const useGetUserProfile = (id) => {
    const accessToken = useAuthStore(state => state.accessToken);
    return useQuery({
        queryKey: ["profile", id],
        queryFn: async () => {
            const response = await axiosInstance.get(`/api/users/${id}/profile`);
            return response.data.result;
        },
        enabled: !!accessToken 
    });
}

export default useGetUserProfile;
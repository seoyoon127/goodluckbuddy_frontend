import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      id: null,
      setAccessToken: (token) => set({ accessToken: token }),
      clearAccessToken: () => set({ accessToken: null }),
      setId: (id) => set({id: id})
    }),
    {
      name: "userIdStorage",
    }
  )
);

export default useAuthStore;
import { create } from "zustand";

export const useAppState = create((set) => ({
  user: null,
  login: (email) =>
    set({
      user: {
        email,
      },
    }),
  logout: () => set({ user: null }),
}));

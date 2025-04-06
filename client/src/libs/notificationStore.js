import { create } from "zustand";
import apiRequest from "./apiRequest";

export const notificationStore = create((set) => ({
    number:0,

    getNumber: async () => {
        const res = await apiRequest("/users/notification");
        set({ number: res.data });
    },

    decrease: () => {
        set({ number: (prev) => prev - 1 });
    },

    reset: () => {
        set({ number: 0 });
    },  

}));
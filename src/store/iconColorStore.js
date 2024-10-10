import { create } from "zustand";

const DARK = "rgba(0, 0, 0, 1)";
const LIGHT = "rgba(255, 255, 255, 1)";

const useIconColorStore = create((set) => ({
  fill: DARK,
  setLight: () => set({ fill: LIGHT }),
  setDark: () => set({ fill: DARK }),
}));

export default useIconColorStore;

import { create } from "zustand";

const playerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { id: null, src: null },
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));

export default playerStore;

import { create } from "zustand";
import { Place } from "../types";

interface PlaceStore {
  places: Place[];
  setPlaces: (places: Place[]) => void;
  addPlace: (place: Place) => void;
}

export const usePlaceStore = create<PlaceStore>((set) => ({
  places: [],

  setPlaces: (places) => set({ places }),

  addPlace: (place) => set((state) => ({ places: [...state.places, place] })),
}));

import { create } from "zustand";
import { Garment, Outfit } from "./models";
import { API, graphqlOperation } from "aws-amplify";
import { getOutfit, listGarments, listOutfits } from "./graphql/queries";
import { createOutfit, createOutfitGarment } from "./graphql/mutations";

interface ClosetState {
  garments: Garment[];
  fetchGarments: () => Promise<void>;
  addGarment: (garment: Garment) => void;
  getGarment: (id: string) => Garment | undefined;
  outfits: Outfit[];
  addOutfit: (outfit: Outfit) => void;
  getOutfit: (id: string) => Outfit | undefined;
  pickedGarments: Garment[];
  pickGarments: (garments: Garment[]) => void;
  removePickedGarment: (garment: Garment) => void;
  clearPickedGarments: () => void;
}

export const useClosetStore = create<ClosetState>((set, get) => ({
  garments: [],
  fetchGarments: async () => {
    const response = await API.graphql(graphqlOperation(listGarments));
    const fetchedGarments = response.data.listGarments.items;
    set({ garments: fetchedGarments });
  },
  addGarment: (garment) =>
    set((state) => ({ garments: [...state.garments, garment] })),
  getGarment: (id) => get().garments.find((garment) => garment.id === id),
  outfits: [],
  fetchOutfits: async () => {
    const response = await API.graphql(graphqlOperation(listOutfits));
    const fetchedOutfits = response.data.listOutfits.items;
    set({ outfits: fetchedOutfits });
  },
  addOutfit: async (outfit) => {
    const createdOutfit = await API.graphql(
      graphqlOperation(createOutfit, {
        input: {
          name: outfit.name,
        },
      })
    );
    for (const garment of outfit.garments) {
      await API.graphql(
        graphqlOperation(createOutfitGarment, {
          input: {
            outfitId: createdOutfit.data?.createOutfit.id,
            garmentId: garment.id,
          },
        })
      );
    }
    set((state) => ({
      outfits: [...state.outfits, createdOutfit.data?.createOutfit],
    }));
  },
  getOutfit: async (id) => {
    const outfit = await API.graphql(
      graphqlOperation(getOutfit, {
        id: id,
      })
    );
    return outfit.data.getOutfit;
  },
  pickedGarments: [],
  pickGarments: (garments) => {
    set((state) => ({
      pickedGarments: [...state.pickedGarments, ...garments],
      pickableGarments: state.garments.filter(
        (garment) => !state.pickedGarments.includes(garment)
      ),
    }));
  },
  removePickedGarment: (garment) =>
    set((state) => ({
      pickedGarments: state.pickedGarments.filter(
        (pickedGarment) => pickedGarment.id !== garment.id
      ),
    })),
  clearPickedGarments: () => set({ pickedGarments: [] }),
}));

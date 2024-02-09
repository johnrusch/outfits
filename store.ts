import { create } from "zustand";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { listGarments, listOutfits } from "./graphql/queries";
import {
  createGarment,
  createOutfitWithGarments,
} from "./graphql/mutations";
import { GraphQLResult } from "@aws-amplify/api";
import {
  CreateGarmentInput,
  CreateGarmentMutation,
  CreateOutfitInput,
  Garment,
  Outfit,
  CreateOutfitWithGarmentsMutation,
  CreateOutfitWithGarmentsInput,
} from "./API";

interface ClosetState {
  garments: Garment[];
  fetchGarments: () => Promise<void>;
  addGarment: (garment: CreateGarmentInput) => Promise<void>;
  getGarment: (id: string) => Garment | undefined;
  outfits: Outfit[];
  addOutfit: (outfit: CreateOutfitInput, garments: Garment[]) => void;
  fetchOutfits: () => Promise<void>;
  getOutfit: (id: string) => Outfit | undefined;
  pickedGarments: Garment[];
  pickableGarments: Garment[];
  pickGarments: (garments: Garment[]) => void;
  removePickedGarment: (garment: Garment) => void;
  clearPickedGarments: () => void;
}

export const useClosetStore = create<ClosetState>((set, get) => ({
  garments: [],
  fetchGarments: async () => {
    const response = await API.graphql(graphqlOperation(listGarments));
    const fetchedGarments: Garment[] =
      (response as GraphQLResult<{ listGarments: { items: Garment[] } }>).data
        ?.listGarments?.items ?? [];
    set({ garments: fetchedGarments });
  },
  addGarment: async (garment) => {
    try {
      const response = (await API.graphql(
        graphqlOperation(createGarment, { input: garment })
      )) as { data: CreateGarmentMutation };
      const createdGarmentData = response.data.createGarment;
      if (createdGarmentData) {
        const createdGarment: Garment = createdGarmentData as Garment;
        if (createdGarment) {
          set((state) => ({
            garments: [...state.garments, createdGarment],
          }));
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  getGarment: (id) => get().garments.find((garment) => garment.id === id),
  outfits: [],
  fetchOutfits: async () => {
    try {
      const response = await API.graphql(graphqlOperation(listOutfits));
      const fetchedOutfits: Outfit[] =
        (response as GraphQLResult<{ listOutfits: { items: Outfit[] } }>).data
          ?.listOutfits?.items ?? [];
      set({ outfits: fetchedOutfits });
    } catch (error) {
      console.log(error);
    }
  },
  addOutfit: async (outfit, garments) => {
    const user = await Auth.currentAuthenticatedUser();
    const userId = user.attributes.sub;
    try {
      const garmentIds = garments.map((garment) => garment.id);
      if (!outfit.name) {
        console.error("Outfit name is required");
        throw new Error("Outfit name is required");
      }
      const outfitName: string = outfit.name;
      const newOutfit: CreateOutfitWithGarmentsInput = {
        name: outfitName,
        garmentIds: garmentIds,
        userId: userId,
      };

      // Call the new resolver
      const response = (await API.graphql(
        graphqlOperation(createOutfitWithGarments, { input: newOutfit })
      )) as { data: CreateOutfitWithGarmentsMutation };
      const createdOutfitData = response.data.createOutfitWithGarments;

      if (createdOutfitData) {
        const createdOutfit: Outfit = createdOutfitData as Outfit;

        set((state) => ({
          outfits: [...state.outfits, createdOutfit],
        }));
      }
    } catch (error) {
      console.log("Error creating outfit: ", error);
    }
  },
  getOutfit: (id) => {
    const outfit = get().outfits.find((outfit) => outfit.id === id);
    return outfit;
  },
  pickedGarments: [],
  pickableGarments: [],
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

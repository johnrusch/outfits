import { create } from "zustand";
import { API, graphqlOperation } from "aws-amplify";
import { getOutfit, listGarments, listOutfits } from "./graphql/queries";
import {
  createGarment, createOutfit, createOutfitGarment
} from "./graphql/mutations";
import {  GraphQLResult } from "@aws-amplify/api";
import { CreateGarmentInput, CreateGarmentMutation, CreateOutfitInput, CreateOutfitMutation, Garment, Outfit } from "./API";

interface ClosetState {
  garments: Garment[];
  fetchGarments: () => Promise<void>;
  addGarment: (garment: CreateGarmentInput) => Promise<void>;
  getGarment: (id: string) => Garment | undefined;
  outfits: Outfit[];
  addOutfit: (outfit: CreateOutfitInput) => void;
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
      const response = await API.graphql(graphqlOperation(createGarment, { input: garment })) as { data: CreateGarmentMutation };
      const createdGarmentData = response.data.createGarment;
      if (createdGarmentData) {
        const createdGarment: Garment = createdGarmentData as Garment;
        console.log('Garment created: ', createdGarment);
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
        (response as GraphQLResult<{ listOutfits: { items: Outfit[] }}>).data
          ?.listOutfits?.items ?? [];
      set({ outfits: fetchedOutfits });
    } catch (error) {
      console.log(error);
    }
  },
  addOutfit: async (outfit) => {
    try {
      const response = await API.graphql(graphqlOperation(createOutfit, { input: outfit })) as { data: CreateOutfitMutation };
      const createdOutfitData = response.data.createOutfit;

      if (createdOutfitData) {
        const createdOutfit: Outfit = createdOutfitData as Outfit;
        const createdOutfitId = createdOutfit.id;
        console.log('Outfit created: ', createdOutfit);
        const garments = get().pickedGarments;
        console.log("garments: ", garments);
        const garmentIds = garments.map((garment) => garment.id);
        for (const garmentId of garmentIds) {
          await API.graphql(
            graphqlOperation(createOutfitGarment, {
              input: {
                id: createdOutfitId,
                garmentId: garmentId,
              },
            })
          );
        }

        // get the created outfit with its garments
        const response = await API.graphql(
          graphqlOperation(getOutfit, {
            filter: {
              id: {
                eq: createdOutfitId,
              },
            },
          })
        );
        console.log("response: ", response);
        const fetchedOutfits: Outfit[] = 
          (response as GraphQLResult<{ listOutfits: { items: Outfit[] }}>).data
            ?.listOutfits?.items ?? [];
        console.log("fetchedOutfits: ", fetchedOutfits);
        const fetchedOutfit = fetchedOutfits[0];
        set((state) => ({
          outfits: [...state.outfits, fetchedOutfit],
        }));
      }
    } catch (error) {
      console.log(error);
    }
  },
  getOutfit: (id) => {
    const outfit = get().outfits.find(outfit => outfit.id === id);
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

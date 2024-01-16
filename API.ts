/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Outfit = {
  __typename: "Outfit",
  id: string,
  garments?: ModelOutfitGarmentConnection | null,
  name?: string | null,
  dateWorn?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelOutfitGarmentConnection = {
  __typename: "ModelOutfitGarmentConnection",
  items:  Array<OutfitGarment | null >,
  nextToken?: string | null,
};

export type OutfitGarment = {
  __typename: "OutfitGarment",
  id: string,
  outfitId: string,
  garmentId: string,
  outfit: Outfit,
  garment: Garment,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Garment = {
  __typename: "Garment",
  id: string,
  name?: string | null,
  dateAcquired?: string | null,
  brand?: string | null,
  color?: string | null,
  size?: string | null,
  material?: string | null,
  acquisitionType?: AcquisitionType | null,
  source?: string | null,
  image?: string | null,
  garmentType?: GarmentType | null,
  outfits?: ModelOutfitGarmentConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum AcquisitionType {
  GIFT = "GIFT",
  PURCHASE = "PURCHASE",
  LEGACY = "LEGACY",
  HANDMEDOWN = "HANDMEDOWN",
}


export enum GarmentType {
  SHIRT = "SHIRT",
  PANTS = "PANTS",
  JACKET = "JACKET",
  DRESS = "DRESS",
  SKIRT = "SKIRT",
  BLOUSE = "BLOUSE",
  SWEATER = "SWEATER",
  SHORTS = "SHORTS",
  VEST = "VEST",
  COAT = "COAT",
  SWEATSHIRT = "SWEATSHIRT",
  UNDERWEAR = "UNDERWEAR",
  SOCKS = "SOCKS",
}


export type CreateOutfitInput = {
  id?: string | null,
  name?: string | null,
  dateWorn?: Array< string | null > | null,
};

export type ModelOutfitConditionInput = {
  name?: ModelStringInput | null,
  dateWorn?: ModelStringInput | null,
  and?: Array< ModelOutfitConditionInput | null > | null,
  or?: Array< ModelOutfitConditionInput | null > | null,
  not?: ModelOutfitConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateOutfitInput = {
  id: string,
  name?: string | null,
  dateWorn?: Array< string | null > | null,
};

export type DeleteOutfitInput = {
  id: string,
};

export type CreateGarmentInput = {
  id?: string | null,
  name?: string | null,
  dateAcquired?: string | null,
  brand?: string | null,
  color?: string | null,
  size?: string | null,
  material?: string | null,
  acquisitionType?: AcquisitionType | null,
  source?: string | null,
  image?: string | null,
  garmentType?: GarmentType | null,
};

export type ModelGarmentConditionInput = {
  name?: ModelStringInput | null,
  dateAcquired?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  color?: ModelStringInput | null,
  size?: ModelStringInput | null,
  material?: ModelStringInput | null,
  acquisitionType?: ModelAcquisitionTypeInput | null,
  source?: ModelStringInput | null,
  image?: ModelStringInput | null,
  garmentType?: ModelGarmentTypeInput | null,
  and?: Array< ModelGarmentConditionInput | null > | null,
  or?: Array< ModelGarmentConditionInput | null > | null,
  not?: ModelGarmentConditionInput | null,
};

export type ModelAcquisitionTypeInput = {
  eq?: AcquisitionType | null,
  ne?: AcquisitionType | null,
};

export type ModelGarmentTypeInput = {
  eq?: GarmentType | null,
  ne?: GarmentType | null,
};

export type UpdateGarmentInput = {
  id: string,
  name?: string | null,
  dateAcquired?: string | null,
  brand?: string | null,
  color?: string | null,
  size?: string | null,
  material?: string | null,
  acquisitionType?: AcquisitionType | null,
  source?: string | null,
  image?: string | null,
  garmentType?: GarmentType | null,
};

export type DeleteGarmentInput = {
  id: string,
};

export type CreateOutfitGarmentInput = {
  id?: string | null,
  outfitId: string,
  garmentId: string,
};

export type ModelOutfitGarmentConditionInput = {
  outfitId?: ModelIDInput | null,
  garmentId?: ModelIDInput | null,
  and?: Array< ModelOutfitGarmentConditionInput | null > | null,
  or?: Array< ModelOutfitGarmentConditionInput | null > | null,
  not?: ModelOutfitGarmentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateOutfitGarmentInput = {
  id: string,
  outfitId?: string | null,
  garmentId?: string | null,
};

export type DeleteOutfitGarmentInput = {
  id: string,
};

export type ModelOutfitFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  dateWorn?: ModelStringInput | null,
  and?: Array< ModelOutfitFilterInput | null > | null,
  or?: Array< ModelOutfitFilterInput | null > | null,
  not?: ModelOutfitFilterInput | null,
};

export type ModelOutfitConnection = {
  __typename: "ModelOutfitConnection",
  items:  Array<Outfit | null >,
  nextToken?: string | null,
};

export type ModelGarmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  dateAcquired?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  color?: ModelStringInput | null,
  size?: ModelStringInput | null,
  material?: ModelStringInput | null,
  acquisitionType?: ModelAcquisitionTypeInput | null,
  source?: ModelStringInput | null,
  image?: ModelStringInput | null,
  garmentType?: ModelGarmentTypeInput | null,
  and?: Array< ModelGarmentFilterInput | null > | null,
  or?: Array< ModelGarmentFilterInput | null > | null,
  not?: ModelGarmentFilterInput | null,
};

export type ModelGarmentConnection = {
  __typename: "ModelGarmentConnection",
  items:  Array<Garment | null >,
  nextToken?: string | null,
};

export type ModelOutfitGarmentFilterInput = {
  id?: ModelIDInput | null,
  outfitId?: ModelIDInput | null,
  garmentId?: ModelIDInput | null,
  and?: Array< ModelOutfitGarmentFilterInput | null > | null,
  or?: Array< ModelOutfitGarmentFilterInput | null > | null,
  not?: ModelOutfitGarmentFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionOutfitFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  dateWorn?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOutfitFilterInput | null > | null,
  or?: Array< ModelSubscriptionOutfitFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionGarmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  dateAcquired?: ModelSubscriptionStringInput | null,
  brand?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  size?: ModelSubscriptionStringInput | null,
  material?: ModelSubscriptionStringInput | null,
  acquisitionType?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  garmentType?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGarmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionGarmentFilterInput | null > | null,
};

export type ModelSubscriptionOutfitGarmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  outfitId?: ModelSubscriptionIDInput | null,
  garmentId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionOutfitGarmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionOutfitGarmentFilterInput | null > | null,
};

export type AddGarmentsToOutfitMutationVariables = {
  outfitId: string,
  garmentIds: Array< string >,
};

export type AddGarmentsToOutfitMutation = {
  addGarmentsToOutfit?:  {
    __typename: "Outfit",
    id: string,
    garments?:  {
      __typename: "ModelOutfitGarmentConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    dateWorn?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateOutfitMutationVariables = {
  input: CreateOutfitInput,
  condition?: ModelOutfitConditionInput | null,
};

export type CreateOutfitMutation = {
  createOutfit?:  {
    __typename: "Outfit",
    id: string,
    garments?:  {
      __typename: "ModelOutfitGarmentConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    dateWorn?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateOutfitMutationVariables = {
  input: UpdateOutfitInput,
  condition?: ModelOutfitConditionInput | null,
};

export type UpdateOutfitMutation = {
  updateOutfit?:  {
    __typename: "Outfit",
    id: string,
    garments?:  {
      __typename: "ModelOutfitGarmentConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    dateWorn?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteOutfitMutationVariables = {
  input: DeleteOutfitInput,
  condition?: ModelOutfitConditionInput | null,
};

export type DeleteOutfitMutation = {
  deleteOutfit?:  {
    __typename: "Outfit",
    id: string,
    garments?:  {
      __typename: "ModelOutfitGarmentConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    dateWorn?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateGarmentMutationVariables = {
  input: CreateGarmentInput,
  condition?: ModelGarmentConditionInput | null,
};

export type CreateGarmentMutation = {
  createGarment?:  {
    __typename: "Garment",
    id: string,
    name?: string | null,
    dateAcquired?: string | null,
    brand?: string | null,
    color?: string | null,
    size?: string | null,
    material?: string | null,
    acquisitionType?: AcquisitionType | null,
    source?: string | null,
    image?: string | null,
    garmentType?: GarmentType | null,
    outfits?:  {
      __typename: "ModelOutfitGarmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateGarmentMutationVariables = {
  input: UpdateGarmentInput,
  condition?: ModelGarmentConditionInput | null,
};

export type UpdateGarmentMutation = {
  updateGarment?:  {
    __typename: "Garment",
    id: string,
    name?: string | null,
    dateAcquired?: string | null,
    brand?: string | null,
    color?: string | null,
    size?: string | null,
    material?: string | null,
    acquisitionType?: AcquisitionType | null,
    source?: string | null,
    image?: string | null,
    garmentType?: GarmentType | null,
    outfits?:  {
      __typename: "ModelOutfitGarmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteGarmentMutationVariables = {
  input: DeleteGarmentInput,
  condition?: ModelGarmentConditionInput | null,
};

export type DeleteGarmentMutation = {
  deleteGarment?:  {
    __typename: "Garment",
    id: string,
    name?: string | null,
    dateAcquired?: string | null,
    brand?: string | null,
    color?: string | null,
    size?: string | null,
    material?: string | null,
    acquisitionType?: AcquisitionType | null,
    source?: string | null,
    image?: string | null,
    garmentType?: GarmentType | null,
    outfits?:  {
      __typename: "ModelOutfitGarmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateOutfitGarmentMutationVariables = {
  input: CreateOutfitGarmentInput,
  condition?: ModelOutfitGarmentConditionInput | null,
};

export type CreateOutfitGarmentMutation = {
  createOutfitGarment?:  {
    __typename: "OutfitGarment",
    id: string,
    outfitId: string,
    garmentId: string,
    outfit:  {
      __typename: "Outfit",
      id: string,
      name?: string | null,
      dateWorn?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    garment:  {
      __typename: "Garment",
      id: string,
      name?: string | null,
      dateAcquired?: string | null,
      brand?: string | null,
      color?: string | null,
      size?: string | null,
      material?: string | null,
      acquisitionType?: AcquisitionType | null,
      source?: string | null,
      image?: string | null,
      garmentType?: GarmentType | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateOutfitGarmentMutationVariables = {
  input: UpdateOutfitGarmentInput,
  condition?: ModelOutfitGarmentConditionInput | null,
};

export type UpdateOutfitGarmentMutation = {
  updateOutfitGarment?:  {
    __typename: "OutfitGarment",
    id: string,
    outfitId: string,
    garmentId: string,
    outfit:  {
      __typename: "Outfit",
      id: string,
      name?: string | null,
      dateWorn?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    garment:  {
      __typename: "Garment",
      id: string,
      name?: string | null,
      dateAcquired?: string | null,
      brand?: string | null,
      color?: string | null,
      size?: string | null,
      material?: string | null,
      acquisitionType?: AcquisitionType | null,
      source?: string | null,
      image?: string | null,
      garmentType?: GarmentType | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteOutfitGarmentMutationVariables = {
  input: DeleteOutfitGarmentInput,
  condition?: ModelOutfitGarmentConditionInput | null,
};

export type DeleteOutfitGarmentMutation = {
  deleteOutfitGarment?:  {
    __typename: "OutfitGarment",
    id: string,
    outfitId: string,
    garmentId: string,
    outfit:  {
      __typename: "Outfit",
      id: string,
      name?: string | null,
      dateWorn?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    garment:  {
      __typename: "Garment",
      id: string,
      name?: string | null,
      dateAcquired?: string | null,
      brand?: string | null,
      color?: string | null,
      size?: string | null,
      material?: string | null,
      acquisitionType?: AcquisitionType | null,
      source?: string | null,
      image?: string | null,
      garmentType?: GarmentType | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetOutfitQueryVariables = {
  id: string,
};

export type GetOutfitQuery = {
  getOutfit?:  {
    __typename: "Outfit",
    id: string,
    garments?:  {
      __typename: "ModelOutfitGarmentConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    dateWorn?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListOutfitsQueryVariables = {
  filter?: ModelOutfitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOutfitsQuery = {
  listOutfits?:  {
    __typename: "ModelOutfitConnection",
    items:  Array< {
      __typename: "Outfit",
      id: string,
      name?: string | null,
      dateWorn?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGarmentQueryVariables = {
  id: string,
};

export type GetGarmentQuery = {
  getGarment?:  {
    __typename: "Garment",
    id: string,
    name?: string | null,
    dateAcquired?: string | null,
    brand?: string | null,
    color?: string | null,
    size?: string | null,
    material?: string | null,
    acquisitionType?: AcquisitionType | null,
    source?: string | null,
    image?: string | null,
    garmentType?: GarmentType | null,
    outfits?:  {
      __typename: "ModelOutfitGarmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListGarmentsQueryVariables = {
  filter?: ModelGarmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGarmentsQuery = {
  listGarments?:  {
    __typename: "ModelGarmentConnection",
    items:  Array< {
      __typename: "Garment",
      id: string,
      name?: string | null,
      dateAcquired?: string | null,
      brand?: string | null,
      color?: string | null,
      size?: string | null,
      material?: string | null,
      acquisitionType?: AcquisitionType | null,
      source?: string | null,
      image?: string | null,
      garmentType?: GarmentType | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOutfitGarmentQueryVariables = {
  id: string,
};

export type GetOutfitGarmentQuery = {
  getOutfitGarment?:  {
    __typename: "OutfitGarment",
    id: string,
    outfitId: string,
    garmentId: string,
    outfit:  {
      __typename: "Outfit",
      id: string,
      name?: string | null,
      dateWorn?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    garment:  {
      __typename: "Garment",
      id: string,
      name?: string | null,
      dateAcquired?: string | null,
      brand?: string | null,
      color?: string | null,
      size?: string | null,
      material?: string | null,
      acquisitionType?: AcquisitionType | null,
      source?: string | null,
      image?: string | null,
      garmentType?: GarmentType | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListOutfitGarmentsQueryVariables = {
  filter?: ModelOutfitGarmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOutfitGarmentsQuery = {
  listOutfitGarments?:  {
    __typename: "ModelOutfitGarmentConnection",
    items:  Array< {
      __typename: "OutfitGarment",
      id: string,
      outfitId: string,
      garmentId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OutfitGarmentsByOutfitIdQueryVariables = {
  outfitId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOutfitGarmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OutfitGarmentsByOutfitIdQuery = {
  outfitGarmentsByOutfitId?:  {
    __typename: "ModelOutfitGarmentConnection",
    items:  Array< {
      __typename: "OutfitGarment",
      id: string,
      outfitId: string,
      garmentId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OutfitGarmentsByGarmentIdQueryVariables = {
  garmentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOutfitGarmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OutfitGarmentsByGarmentIdQuery = {
  outfitGarmentsByGarmentId?:  {
    __typename: "ModelOutfitGarmentConnection",
    items:  Array< {
      __typename: "OutfitGarment",
      id: string,
      outfitId: string,
      garmentId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateOutfitSubscriptionVariables = {
  filter?: ModelSubscriptionOutfitFilterInput | null,
  owner?: string | null,
};

export type OnCreateOutfitSubscription = {
  onCreateOutfit?:  {
    __typename: "Outfit",
    id: string,
    garments?:  {
      __typename: "ModelOutfitGarmentConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    dateWorn?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateOutfitSubscriptionVariables = {
  filter?: ModelSubscriptionOutfitFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOutfitSubscription = {
  onUpdateOutfit?:  {
    __typename: "Outfit",
    id: string,
    garments?:  {
      __typename: "ModelOutfitGarmentConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    dateWorn?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteOutfitSubscriptionVariables = {
  filter?: ModelSubscriptionOutfitFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOutfitSubscription = {
  onDeleteOutfit?:  {
    __typename: "Outfit",
    id: string,
    garments?:  {
      __typename: "ModelOutfitGarmentConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    dateWorn?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateGarmentSubscriptionVariables = {
  filter?: ModelSubscriptionGarmentFilterInput | null,
  owner?: string | null,
};

export type OnCreateGarmentSubscription = {
  onCreateGarment?:  {
    __typename: "Garment",
    id: string,
    name?: string | null,
    dateAcquired?: string | null,
    brand?: string | null,
    color?: string | null,
    size?: string | null,
    material?: string | null,
    acquisitionType?: AcquisitionType | null,
    source?: string | null,
    image?: string | null,
    garmentType?: GarmentType | null,
    outfits?:  {
      __typename: "ModelOutfitGarmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateGarmentSubscriptionVariables = {
  filter?: ModelSubscriptionGarmentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGarmentSubscription = {
  onUpdateGarment?:  {
    __typename: "Garment",
    id: string,
    name?: string | null,
    dateAcquired?: string | null,
    brand?: string | null,
    color?: string | null,
    size?: string | null,
    material?: string | null,
    acquisitionType?: AcquisitionType | null,
    source?: string | null,
    image?: string | null,
    garmentType?: GarmentType | null,
    outfits?:  {
      __typename: "ModelOutfitGarmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteGarmentSubscriptionVariables = {
  filter?: ModelSubscriptionGarmentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGarmentSubscription = {
  onDeleteGarment?:  {
    __typename: "Garment",
    id: string,
    name?: string | null,
    dateAcquired?: string | null,
    brand?: string | null,
    color?: string | null,
    size?: string | null,
    material?: string | null,
    acquisitionType?: AcquisitionType | null,
    source?: string | null,
    image?: string | null,
    garmentType?: GarmentType | null,
    outfits?:  {
      __typename: "ModelOutfitGarmentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateOutfitGarmentSubscriptionVariables = {
  filter?: ModelSubscriptionOutfitGarmentFilterInput | null,
  owner?: string | null,
};

export type OnCreateOutfitGarmentSubscription = {
  onCreateOutfitGarment?:  {
    __typename: "OutfitGarment",
    id: string,
    outfitId: string,
    garmentId: string,
    outfit:  {
      __typename: "Outfit",
      id: string,
      name?: string | null,
      dateWorn?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    garment:  {
      __typename: "Garment",
      id: string,
      name?: string | null,
      dateAcquired?: string | null,
      brand?: string | null,
      color?: string | null,
      size?: string | null,
      material?: string | null,
      acquisitionType?: AcquisitionType | null,
      source?: string | null,
      image?: string | null,
      garmentType?: GarmentType | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateOutfitGarmentSubscriptionVariables = {
  filter?: ModelSubscriptionOutfitGarmentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOutfitGarmentSubscription = {
  onUpdateOutfitGarment?:  {
    __typename: "OutfitGarment",
    id: string,
    outfitId: string,
    garmentId: string,
    outfit:  {
      __typename: "Outfit",
      id: string,
      name?: string | null,
      dateWorn?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    garment:  {
      __typename: "Garment",
      id: string,
      name?: string | null,
      dateAcquired?: string | null,
      brand?: string | null,
      color?: string | null,
      size?: string | null,
      material?: string | null,
      acquisitionType?: AcquisitionType | null,
      source?: string | null,
      image?: string | null,
      garmentType?: GarmentType | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteOutfitGarmentSubscriptionVariables = {
  filter?: ModelSubscriptionOutfitGarmentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOutfitGarmentSubscription = {
  onDeleteOutfitGarment?:  {
    __typename: "OutfitGarment",
    id: string,
    outfitId: string,
    garmentId: string,
    outfit:  {
      __typename: "Outfit",
      id: string,
      name?: string | null,
      dateWorn?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    garment:  {
      __typename: "Garment",
      id: string,
      name?: string | null,
      dateAcquired?: string | null,
      brand?: string | null,
      color?: string | null,
      size?: string | null,
      material?: string | null,
      acquisitionType?: AcquisitionType | null,
      source?: string | null,
      image?: string | null,
      garmentType?: GarmentType | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

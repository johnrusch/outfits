/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const addGarmentsToOutfit = /* GraphQL */ `mutation AddGarmentsToOutfit($outfitId: ID!, $garmentIds: [ID!]!) {
  addGarmentsToOutfit(outfitId: $outfitId, garmentIds: $garmentIds) {
    id
    garments {
      nextToken
      __typename
    }
    name
    dateWorn
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AddGarmentsToOutfitMutationVariables,
  APITypes.AddGarmentsToOutfitMutation
>;
export const createOutfit = /* GraphQL */ `mutation CreateOutfit(
  $input: CreateOutfitInput!
  $condition: ModelOutfitConditionInput
) {
  createOutfit(input: $input, condition: $condition) {
    id
    garments {
      nextToken
      __typename
    }
    name
    dateWorn
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOutfitMutationVariables,
  APITypes.CreateOutfitMutation
>;
export const updateOutfit = /* GraphQL */ `mutation UpdateOutfit(
  $input: UpdateOutfitInput!
  $condition: ModelOutfitConditionInput
) {
  updateOutfit(input: $input, condition: $condition) {
    id
    garments {
      nextToken
      __typename
    }
    name
    dateWorn
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOutfitMutationVariables,
  APITypes.UpdateOutfitMutation
>;
export const deleteOutfit = /* GraphQL */ `mutation DeleteOutfit(
  $input: DeleteOutfitInput!
  $condition: ModelOutfitConditionInput
) {
  deleteOutfit(input: $input, condition: $condition) {
    id
    garments {
      nextToken
      __typename
    }
    name
    dateWorn
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOutfitMutationVariables,
  APITypes.DeleteOutfitMutation
>;
export const createGarment = /* GraphQL */ `mutation CreateGarment(
  $input: CreateGarmentInput!
  $condition: ModelGarmentConditionInput
) {
  createGarment(input: $input, condition: $condition) {
    id
    name
    dateAcquired
    brand
    color
    size
    material
    acquisitionType
    source
    image
    garmentType
    outfits {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGarmentMutationVariables,
  APITypes.CreateGarmentMutation
>;
export const updateGarment = /* GraphQL */ `mutation UpdateGarment(
  $input: UpdateGarmentInput!
  $condition: ModelGarmentConditionInput
) {
  updateGarment(input: $input, condition: $condition) {
    id
    name
    dateAcquired
    brand
    color
    size
    material
    acquisitionType
    source
    image
    garmentType
    outfits {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGarmentMutationVariables,
  APITypes.UpdateGarmentMutation
>;
export const deleteGarment = /* GraphQL */ `mutation DeleteGarment(
  $input: DeleteGarmentInput!
  $condition: ModelGarmentConditionInput
) {
  deleteGarment(input: $input, condition: $condition) {
    id
    name
    dateAcquired
    brand
    color
    size
    material
    acquisitionType
    source
    image
    garmentType
    outfits {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGarmentMutationVariables,
  APITypes.DeleteGarmentMutation
>;
export const createOutfitGarment = /* GraphQL */ `mutation CreateOutfitGarment(
  $input: CreateOutfitGarmentInput!
  $condition: ModelOutfitGarmentConditionInput
) {
  createOutfitGarment(input: $input, condition: $condition) {
    id
    outfitId
    garmentId
    outfit {
      id
      name
      dateWorn
      createdAt
      updatedAt
      owner
      __typename
    }
    garment {
      id
      name
      dateAcquired
      brand
      color
      size
      material
      acquisitionType
      source
      image
      garmentType
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOutfitGarmentMutationVariables,
  APITypes.CreateOutfitGarmentMutation
>;
export const updateOutfitGarment = /* GraphQL */ `mutation UpdateOutfitGarment(
  $input: UpdateOutfitGarmentInput!
  $condition: ModelOutfitGarmentConditionInput
) {
  updateOutfitGarment(input: $input, condition: $condition) {
    id
    outfitId
    garmentId
    outfit {
      id
      name
      dateWorn
      createdAt
      updatedAt
      owner
      __typename
    }
    garment {
      id
      name
      dateAcquired
      brand
      color
      size
      material
      acquisitionType
      source
      image
      garmentType
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOutfitGarmentMutationVariables,
  APITypes.UpdateOutfitGarmentMutation
>;
export const deleteOutfitGarment = /* GraphQL */ `mutation DeleteOutfitGarment(
  $input: DeleteOutfitGarmentInput!
  $condition: ModelOutfitGarmentConditionInput
) {
  deleteOutfitGarment(input: $input, condition: $condition) {
    id
    outfitId
    garmentId
    outfit {
      id
      name
      dateWorn
      createdAt
      updatedAt
      owner
      __typename
    }
    garment {
      id
      name
      dateAcquired
      brand
      color
      size
      material
      acquisitionType
      source
      image
      garmentType
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOutfitGarmentMutationVariables,
  APITypes.DeleteOutfitGarmentMutation
>;

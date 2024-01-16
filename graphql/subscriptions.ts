/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateOutfit = /* GraphQL */ `subscription OnCreateOutfit(
  $filter: ModelSubscriptionOutfitFilterInput
  $owner: String
) {
  onCreateOutfit(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOutfitSubscriptionVariables,
  APITypes.OnCreateOutfitSubscription
>;
export const onUpdateOutfit = /* GraphQL */ `subscription OnUpdateOutfit(
  $filter: ModelSubscriptionOutfitFilterInput
  $owner: String
) {
  onUpdateOutfit(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOutfitSubscriptionVariables,
  APITypes.OnUpdateOutfitSubscription
>;
export const onDeleteOutfit = /* GraphQL */ `subscription OnDeleteOutfit(
  $filter: ModelSubscriptionOutfitFilterInput
  $owner: String
) {
  onDeleteOutfit(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOutfitSubscriptionVariables,
  APITypes.OnDeleteOutfitSubscription
>;
export const onCreateGarment = /* GraphQL */ `subscription OnCreateGarment(
  $filter: ModelSubscriptionGarmentFilterInput
  $owner: String
) {
  onCreateGarment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGarmentSubscriptionVariables,
  APITypes.OnCreateGarmentSubscription
>;
export const onUpdateGarment = /* GraphQL */ `subscription OnUpdateGarment(
  $filter: ModelSubscriptionGarmentFilterInput
  $owner: String
) {
  onUpdateGarment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGarmentSubscriptionVariables,
  APITypes.OnUpdateGarmentSubscription
>;
export const onDeleteGarment = /* GraphQL */ `subscription OnDeleteGarment(
  $filter: ModelSubscriptionGarmentFilterInput
  $owner: String
) {
  onDeleteGarment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGarmentSubscriptionVariables,
  APITypes.OnDeleteGarmentSubscription
>;
export const onCreateOutfitGarment = /* GraphQL */ `subscription OnCreateOutfitGarment(
  $filter: ModelSubscriptionOutfitGarmentFilterInput
  $owner: String
) {
  onCreateOutfitGarment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOutfitGarmentSubscriptionVariables,
  APITypes.OnCreateOutfitGarmentSubscription
>;
export const onUpdateOutfitGarment = /* GraphQL */ `subscription OnUpdateOutfitGarment(
  $filter: ModelSubscriptionOutfitGarmentFilterInput
  $owner: String
) {
  onUpdateOutfitGarment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOutfitGarmentSubscriptionVariables,
  APITypes.OnUpdateOutfitGarmentSubscription
>;
export const onDeleteOutfitGarment = /* GraphQL */ `subscription OnDeleteOutfitGarment(
  $filter: ModelSubscriptionOutfitGarmentFilterInput
  $owner: String
) {
  onDeleteOutfitGarment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOutfitGarmentSubscriptionVariables,
  APITypes.OnDeleteOutfitGarmentSubscription
>;

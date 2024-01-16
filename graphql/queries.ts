/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getOutfit = /* GraphQL */ `query GetOutfit($id: ID!) {
  getOutfit(id: $id) {
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
` as GeneratedQuery<APITypes.GetOutfitQueryVariables, APITypes.GetOutfitQuery>;
export const listOutfits = /* GraphQL */ `query ListOutfits(
  $filter: ModelOutfitFilterInput
  $limit: Int
  $nextToken: String
) {
  listOutfits(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      dateWorn
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOutfitsQueryVariables,
  APITypes.ListOutfitsQuery
>;
export const getGarment = /* GraphQL */ `query GetGarment($id: ID!) {
  getGarment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetGarmentQueryVariables,
  APITypes.GetGarmentQuery
>;
export const listGarments = /* GraphQL */ `query ListGarments(
  $filter: ModelGarmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listGarments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGarmentsQueryVariables,
  APITypes.ListGarmentsQuery
>;
export const getOutfitGarment = /* GraphQL */ `query GetOutfitGarment($id: ID!) {
  getOutfitGarment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetOutfitGarmentQueryVariables,
  APITypes.GetOutfitGarmentQuery
>;
export const listOutfitGarments = /* GraphQL */ `query ListOutfitGarments(
  $filter: ModelOutfitGarmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listOutfitGarments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      outfitId
      garmentId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOutfitGarmentsQueryVariables,
  APITypes.ListOutfitGarmentsQuery
>;
export const outfitGarmentsByOutfitId = /* GraphQL */ `query OutfitGarmentsByOutfitId(
  $outfitId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOutfitGarmentFilterInput
  $limit: Int
  $nextToken: String
) {
  outfitGarmentsByOutfitId(
    outfitId: $outfitId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      outfitId
      garmentId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OutfitGarmentsByOutfitIdQueryVariables,
  APITypes.OutfitGarmentsByOutfitIdQuery
>;
export const outfitGarmentsByGarmentId = /* GraphQL */ `query OutfitGarmentsByGarmentId(
  $garmentId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOutfitGarmentFilterInput
  $limit: Int
  $nextToken: String
) {
  outfitGarmentsByGarmentId(
    garmentId: $garmentId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      outfitId
      garmentId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OutfitGarmentsByGarmentIdQueryVariables,
  APITypes.OutfitGarmentsByGarmentIdQuery
>;

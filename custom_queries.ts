export const listOutfits = /* GraphQL */ `
  query ListOutfits(
    $filter: ModelOutfitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOutfits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        garments {
          items {
            garment {
              id
              name
              image
              color
              size
              garmentType
              material
            }
          }
        }
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
`;

export const getOutfit = /* GraphQL */ `
  query GetOutfit($id: ID!) {
    getOutfit(id: $id) {
      id
      garments {
        items {
          garment {
            id
            name
            image
            color
            size
            garmentType
            material
          }
        }
      }
      name
      dateWorn
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;

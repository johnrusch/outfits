import { API, graphqlOperation } from 'aws-amplify';
import { listGarments, listOutfits } from '../graphql/queries';
import { useClosetStore } from '../store';
import { CreateGarmentInput, CreateOutfitInput, Garment, Outfit } from '../API';
import { createGarment, createOutfit } from '../graphql/mutations';

jest.mock('aws-amplify');
// Define the mock function
const graphqlMock = API.graphql as jest.MockedFunction<typeof API.graphql>;

describe('useClosetStore - Garment Tests', () => {
  beforeEach(() => {
    useClosetStore.setState({ garments: [] }); // Reset the state before each test
    graphqlMock.mockClear(); // Clear the mock before each test
  });

  const mockGarments: Garment[] = [
    {
      id: '1',
      name: 'Garment 1',
      __typename: 'Garment', // replace this with the actual value for __typename
      createdAt: new Date().toISOString(), // replace this with the actual value for createdAt
      updatedAt: new Date().toISOString(), // replace this with the actual value for updatedAt
    },
    {
      id: '2',
      name: 'Garment 2',
      __typename: 'Garment', // replace this with the actual value for __typename
      createdAt: new Date().toISOString(), // replace this with the actual value for createdAt
      updatedAt: new Date().toISOString(), // replace this with the actual value for updatedAt
    },
  ];

  test('fetchGarments makes the correct API call and updates the state', async () => {
    // Mock the API.graphql function
    graphqlMock.mockResolvedValue({
      data: { listGarments: { items: mockGarments } },
    });

    await useClosetStore.getState().fetchGarments();

    // Check that API.graphql was called with the correct arguments
    expect(API.graphql).toHaveBeenCalledWith(graphqlOperation(listGarments));

    // Check that the state was updated correctly
    expect(useClosetStore.getState().garments).toEqual(mockGarments);
  });

  test('addGarment makes the correct API call and updates the state', async () => {
    const mockGarment: CreateGarmentInput = {
      id: '3',
      name: 'Garment 3',
    };

    // Mock the API.graphql function
    graphqlMock.mockResolvedValue({
      data: { createGarment: mockGarment },
    });

    await useClosetStore.getState().addGarment(mockGarment);

    // Check that API.graphql was called with the correct arguments
    expect(API.graphql).toHaveBeenCalledWith(
      graphqlOperation(createGarment, { input: mockGarment })
    );

    // Check that the state was updated correctly
    const updatedGarments = [mockGarment];
    console.log(
      'updatedGarments: ',
      updatedGarments,
      'useClosetStore.getState().garments: ',
      useClosetStore.getState().garments
    );
    expect(useClosetStore.getState().garments).toEqual(updatedGarments);
  });

  test('getGarment returns the correct garment', () => {
    useClosetStore.setState({ garments: mockGarments });

    const garment = useClosetStore.getState().getGarment('1');

    // Check that the correct garment is returned
    expect(garment).toEqual(mockGarments[0]);
  });

  test('pickGarments updates the state with picked garments', () => {
    const pickedGarments: Garment[] = [
      { id: '3', name: 'Garment 3', __typename: 'Garment', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    ];

    useClosetStore.setState({ garments: mockGarments, pickedGarments: [] });

    useClosetStore.getState().pickGarments(pickedGarments);

    // Check that the state was updated correctly
    expect(useClosetStore.getState().pickedGarments).toEqual([...pickedGarments]);
    expect(useClosetStore.getState().pickableGarments).toEqual([
      ...mockGarments.filter((garment) => !pickedGarments.includes(garment)),
    ]);
  });

  test('removePickedGarment removes the picked garment from the state', () => {
    const pickedGarments: Garment[] = [
      { id: '3', name: 'Garment 3', __typename: 'Garment', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    ];

    useClosetStore.setState({ garments: mockGarments, pickedGarments });

    useClosetStore.getState().removePickedGarment(pickedGarments[0]);

    // Check that the picked garment was removed from the state
    expect(useClosetStore.getState().pickedGarments).toEqual([]);
  });

  test('clearPickedGarments clears the picked garments from the state', () => {
    const pickedGarments: Garment[] = [
      { id: '1', name: 'Garment 1', __typename: 'Garment', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { id: '2', name: 'Garment 2', __typename: 'Garment', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    ];

    useClosetStore.setState({ pickedGarments });

    useClosetStore.getState().clearPickedGarments();

    // Check that the picked garments were cleared from the state
    expect(useClosetStore.getState().pickedGarments).toEqual([]);
  });
});

describe('useClosetStore - Outfit Tests', () => {
  beforeEach(() => {
    useClosetStore.setState({ outfits: [] }); // Reset the state before each test
    graphqlMock.mockClear(); // Clear the mock before each test
  });

  const mockGarments: Garment[] = [
    {
      id: '1',
      name: 'Garment 1',
      __typename: 'Garment', // replace this with the actual value for __typename
      createdAt: new Date().toISOString(), // replace this with the actual value for createdAt
      updatedAt: new Date().toISOString(), // replace this with the actual value for updatedAt
    },
    {
      id: '2',
      name: 'Garment 2',
      __typename: 'Garment', // replace this with the actual value for __typename
      createdAt: new Date().toISOString(), // replace this with the actual value for createdAt
      updatedAt: new Date().toISOString(), // replace this with the actual value for updatedAt
    },
  ];

  const mockOutfits: Outfit[] = [
    {
      name: 'Mock Outfit 2',
      garments: {
        __typename: 'ModelOutfitGarmentConnection',
        items: [
          {
            id: '3',
            __typename: 'OutfitGarment',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            outfitId: '2',
            garmentId: '1',
            outfit: { id: '2', __typename: 'Outfit', createdAt: '', updatedAt: '' },
            garment: { id: '1', __typename: 'Garment', createdAt: '', updatedAt: '' },
          },
          {
            id: '4',
            __typename: 'OutfitGarment',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            outfitId: '2',
            garmentId: '2',
            outfit: { id: '2', __typename: 'Outfit', createdAt: '', updatedAt: '' },
            garment: { id: '2', __typename: 'Garment', createdAt: '', updatedAt: '' },
          },
        ],
        nextToken: null,
      },
      id: '2',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __typename: 'Outfit',
    },
    {
      name: 'Mock Outfit 3',
      garments: {
        __typename: 'ModelOutfitGarmentConnection',
        items: [
          {
            id: '3',
            __typename: 'OutfitGarment',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            outfitId: 'outfitId',
            garmentId: 'garmentId',
            outfit: { id: 'outfitId', __typename: 'Outfit', createdAt: '', updatedAt: '' },
            garment: { id: 'garmentId', __typename: 'Garment', createdAt: '', updatedAt: '' },
          },
          {
            id: '4',
            __typename: 'OutfitGarment',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            outfitId: 'outfitId',
            garmentId: 'garmentId',
            outfit: { id: 'outfitId', __typename: 'Outfit', createdAt: '', updatedAt: '' },
            garment: { id: 'garmentId', __typename: 'Garment', createdAt: '', updatedAt: '' },
          },
        ],
        nextToken: null,
      },
      id: '3',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __typename: 'Outfit',
    },
  ];

  test('fetchOutfits makes the correct API call and updates the state', async () => {
    // Mock the API.graphql function
    graphqlMock.mockResolvedValue({
      data: { listOutfits: { items: mockOutfits } },
    });

    await useClosetStore.getState().fetchOutfits();

    // Check that API.graphql was called with the correct arguments
    expect(API.graphql).toHaveBeenCalledWith(graphqlOperation(listOutfits));

    // Check that the state was updated correctly
    expect(useClosetStore.getState().outfits).toEqual(mockOutfits);
  });

  test('addOutfit makes the correct API call and updates the state', async () => {
    const mockOutfit: CreateOutfitInput = { 
      id: '2',
      name: 'Mock Outfit 2',
    };

    // Mock the API.graphql function
    graphqlMock.mockResolvedValue({
      data: { createOutfit: mockOutfit },
    });

    // Call the pickGarments state function to add garments to pickedGarments
    await useClosetStore.getState().pickGarments(mockGarments);

    await useClosetStore.getState().addOutfit(mockOutfit);

    // Check that API.graphql was called with the correct arguments
    expect(API.graphql).toHaveBeenCalledWith(
      graphqlOperation(createOutfit, { input: mockOutfit })
    );

    // Check that the state was updated correctly
    const updatedOutfits = [mockOutfits[0]];
    console.log("updatedOutfits: ", updatedOutfits, "useClosetStore.getState().outfits: ", useClosetStore.getState().outfits);
    expect(useClosetStore.getState().outfits).toEqual(updatedOutfits);
  });

  test('getOutfit returns the correct outfit', () => {
    useClosetStore.setState({ outfits: mockOutfits });

    const outfit = useClosetStore.getState().getOutfit('1');

    // Check that the correct outfit is returned
    expect(outfit).toEqual(mockOutfits[0]);
  });
});

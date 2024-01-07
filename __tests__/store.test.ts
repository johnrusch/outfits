import { API, graphqlOperation } from 'aws-amplify';
import { listGarments, listOutfits } from '../graphql/queries';
import { useClosetStore } from '../store';
import { CreateGarmentInput, Garment } from '../API';
import { createGarment } from '../graphql/mutations';

jest.mock('aws-amplify');

// Define the mock function
const graphqlMock = API.graphql as jest.MockedFunction<typeof API.graphql>;

describe('useClosetStore', () => {
  beforeEach(() => {
    useClosetStore.setState({ garments: [] }); // Reset the state before each test
    graphqlMock.mockClear(); // Clear the mock before each test
  });

  test('fetchGarments makes the correct API call and updates the state', async () => {
    const mockGarments = [{ id: '1', name: 'Garment 1' }, { id: '2', name: 'Garment 2' }];

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
    console.log("updatedGarments: ", updatedGarments, "useClosetStore.getState().garments: ", useClosetStore.getState().garments);
    expect(useClosetStore.getState().garments).toEqual(updatedGarments);
  });

  test('getGarment returns the correct garment', () => {
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

    // Mock the API.graphql function
    graphqlMock.mockResolvedValue({
      data: { listGarments: { items: mockGarments } },
    });

    useClosetStore.setState({ garments: mockGarments });

    const garment = useClosetStore.getState().getGarment('1');

    // Check that the correct garment is returned
    expect(garment).toEqual(mockGarments[0]);
  });

  test('fetchOutfits makes the correct API call and updates the state', async () => {
    const mockOutfits = [{ id: '1', name: 'Outfit 1' }, { id: '2', name: 'Outfit 2' }];

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

  test('pickGarments updates the state with picked garments', () => {
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




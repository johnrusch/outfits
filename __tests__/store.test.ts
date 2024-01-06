import { API, graphqlOperation } from 'aws-amplify';
import { listGarments } from '../graphql/queries';
import { useClosetStore } from '../store';

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
});
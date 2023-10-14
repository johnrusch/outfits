import { useClosetStore } from "../store";
import { API, graphqlOperation } from "aws-amplify";

jest.mock("../store");
jest.mock("aws-amplify");

describe("useClosetStore", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("fetches garments", async () => {
    const mockFetchGarments = jest.fn();
    jest
      .mocked(useClosetStore.getState)
      .mockReturnValue({ ...useClosetStore.getState(), fetchGarments: mockFetchGarments });
    await mockFetchGarments();
    expect(useClosetStore.getState().garments.length).toBeGreaterThan(0);
  });

  it("adds a garment", async () => {
    const mockAddGarment = jest.fn();
    jest.mocked(useClosetStore.getState).mockReturnValue({
      ...useClosetStore.getState(),
      addGarment: mockAddGarment,
    });
    const newGarment = {
      name: "Test Garment",
      garmentType: "shirt",
      image: "test-image",
      color: "red",
      size: "M",
      material: "cotton",
      brand: "Test Brand",
      source: "Test Source",
    };
    await mockAddGarment(newGarment);
    expect(useClosetStore.getState().garments).toContainEqual(newGarment);
  });
});

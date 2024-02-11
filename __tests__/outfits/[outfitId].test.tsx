import React from "react";
import {
  render,
  waitFor,
  screen,
  act,
} from "@testing-library/react-native";
import OutfitDetails from "../../app/(tabs)/outfits/[outfitId]";

// Create a mock function for getOutfit
const mockGetOutfit = jest.fn();

// Mock the useLocalSearchParams hook
jest.mock("expo-router", () => ({
  useLocalSearchParams: jest.fn().mockReturnValue({ outfitId: "1" }),
}));

jest.mock("../../store", () => ({
  useClosetStore: {
    getState: () => ({
      getOutfit: mockGetOutfit,
    }),
  },
}));

describe("OutfitDetails", () => {
  it("fetches and displays outfit details", async () => {
    await act(async () => {
      mockGetOutfit.mockReturnValue({
        id: "1",
        name: "Outfit 1",
        garments: {
          items: [
            { garment: { id: "1", name: "Garment 1" } },
            { garment: { id: "2", name: "Garment 2" } },
          ],
        },
      });
    });

    render(<OutfitDetails />);

    await waitFor(() => {
      expect(screen.getByTestId("garmentList")).toBeTruthy();
    });
  });

  it("does not display garments if outfit is not found", async () => {
    await act(async () => {
        mockGetOutfit.mockReturnValue(null);
    });

    render(<OutfitDetails />);

    expect(screen.queryByText("Garment 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Garment 2")).not.toBeInTheDocument();
  });
});

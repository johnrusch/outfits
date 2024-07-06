import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import GarmentCard from "../../components/GarmentCard";
import { Garment, GarmentType } from "../../API";

const mockGarment: Garment = {
  id: "1",
  name: "Garment 1",
  garmentType: GarmentType.SHIRT,
  color: "Color 1",
  size: "Size 1",
  material: "Material 1",
  brand: "Brand 1",
  source: "Source 1",
  __typename: "Garment",
  createdAt: "2021-08-10T00:00:00.000Z",
  updatedAt: "2021-08-10T00:00:00.000Z",
};

describe("GarmentCard Tests", () => {
  it("renders without crashing", () => {
    render(<GarmentCard garment={mockGarment} />);
    expect(screen.getByTestId("garmentCard")).toBeTruthy();
  });

  it("displays garment details correctly", () => {
    render(<GarmentCard garment={mockGarment} />);
    expect(screen.getByText(mockGarment.name!)).toBeTruthy();
  });
  
});

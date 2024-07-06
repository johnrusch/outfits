import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import GarmentList from "../../components/GarmentList";
import { Garment, GarmentType } from "../../API";
import { useRouter } from 'expo-router';

jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));


const mockGarments: Garment[] = [
  {
    id: "1",
    name: "Garment 1",
    __typename: "Garment", // replace this with the actual value for __typename
    createdAt: new Date().toISOString(), // replace this with the actual value for createdAt
    updatedAt: new Date().toISOString(), // replace this with the actual value for updatedAt
    garmentType: GarmentType.SHIRT,
  },
  {
    id: "2",
    name: "Garment 2",
    __typename: "Garment", // replace this with the actual value for __typename
    createdAt: new Date().toISOString(), // replace this with the actual value for createdAt
    updatedAt: new Date().toISOString(), // replace this with the actual value for updatedAt
    garmentType: GarmentType.PANTS,
  },
];

describe("GarmentList", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<GarmentList garments={mockGarments} />);
    expect(getByTestId("garmentList")).toBeTruthy();
  });

});

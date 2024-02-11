import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import GarmentList from "../../components/GarmentList";
import GarmentCard from "../../components/GarmentCard";
import { Garment } from "../../API";

const mockGarments: Garment[] = [
  {
    id: "1",
    name: "Garment 1",
    __typename: "Garment", // replace this with the actual value for __typename
    createdAt: new Date().toISOString(), // replace this with the actual value for createdAt
    updatedAt: new Date().toISOString(), // replace this with the actual value for updatedAt
  },
  {
    id: "2",
    name: "Garment 2",
    __typename: "Garment", // replace this with the actual value for __typename
    createdAt: new Date().toISOString(), // replace this with the actual value for createdAt
    updatedAt: new Date().toISOString(), // replace this with the actual value for updatedAt
  },
];

describe("GarmentList", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<GarmentList garments={mockGarments} />);
    expect(getByTestId("garmentList")).toBeTruthy();
  });

});

import { useContext } from "react";
import { ApartmentContext } from "../context/ApartmentContext";

// Define the custom hook
export const useApartment = () => {
  const context = useContext(ApartmentContext);

  if (!context) {
    throw new Error("useApartment must be used within an ApartmentProvider");
  }

  return context;
};

import { useState, createContext, ReactNode } from "react";

// Define the type for the context value
interface ApartmentContextType {
  selectedImageId: string | null;
  setSelectedImageId: (id: string | null) => void;
}

// Create the context with the appropriate type
export const ApartmentContext = createContext<ApartmentContextType | undefined>(
  undefined
);

// Define the provider with a proper type for children
interface ApartmentProviderProps {
  children: ReactNode;
}

export const ApartmentProvider = ({ children }: ApartmentProviderProps) => {
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  return (
    <ApartmentContext.Provider value={{ selectedImageId, setSelectedImageId }}>
      {children}
    </ApartmentContext.Provider>
  );
};

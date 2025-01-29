import { useState, createContext, type ReactNode } from "react";

// Define the type for the context value
interface ApartmentContextType {
  nights: number;
  setNights: (value: number) => void;
  startDate: Date | null; // Allow null
  setStartDate: (date: Date | null) => void; // Allow null
  handleIncrement: () => void;
  handleDecrement: () => void;
  price_per_night: number;
  totalPrice: number;
}

// Create the context with the appropriate type
// eslint-disable-next-line react-refresh/only-export-components
export const ApartmentContext = createContext<ApartmentContextType | undefined>(
  undefined
);

// Define the provider with a proper type for children
interface ApartmentProviderProps {
  children: ReactNode;
}

export const ApartmentProvider = ({ children }: ApartmentProviderProps) => {
  const [nights, setNights] = useState(1);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleIncrement = () => {
    setNights((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (nights > 1) {
      setNights((prev) => prev - 1);
    }
  };
  const price_per_night = 200;
  const totalPrice = price_per_night * nights;
  return (
    <ApartmentContext.Provider
      value={{
        totalPrice,
        price_per_night,
        nights,
        setNights,
        startDate,
        setStartDate,
        handleIncrement,
        handleDecrement,
      }}
    >
      {children}
    </ApartmentContext.Provider>
  );
};

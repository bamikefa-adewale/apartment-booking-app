import { zodResolver } from "@hookform/resolvers/zod";
import { useState, createContext, type ReactNode } from "react";
import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SchemaValidation } from "../schema/SchemaValidation";
import { KitchenLists } from "../components/constants/HousesWithBackYard";
import { KitchenItem } from "../types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the type for the context value

interface ApartmentContextType {
  navigate: (path: string) => void;
  nights: number;
  setNights: (value: number) => void;
  handleIncrement: () => void;
  handleDecrement: () => void;
  price_per_night: number;
  totalPrice: number;
  register: UseFormRegister<BookingFormData>;
  handleSubmit: UseFormHandleSubmit<BookingFormData>;
  onSubmit: SubmitHandler<BookingFormData>;
  errors: FieldErrors<BookingFormData>;
  findKitchenById: (id: string) => KitchenItem | undefined;
  isValid: boolean;
}

interface BookingFormData {
  name: string;
  email: string;
  password: string;
  number: string;
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
  const handleIncrement = () => {
    setNights((prev) => prev + 1);
  };
  const navigate = useNavigate();

  const handleDecrement = () => {
    if (nights > 1) {
      setNights((prev) => prev - 1);
    }
  };
  const price_per_night = 200;
  const totalPrice = price_per_night * nights;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<BookingFormData>({
    resolver: zodResolver(SchemaValidation),
  });
  const onSubmit: SubmitHandler<BookingFormData> = (data) => {
    console.log("formData:", data);
    toast.success("Successfully submitted your details");
    localStorage.setItem("bookingData", JSON.stringify(data));
    console.log("bookingData:", data);
    navigate("/payment-page");
  };

  const findKitchenById = (id: string) =>
    KitchenLists.find((kitchen) => kitchen.id === id);
  return (
    <ApartmentContext.Provider
      value={{
        register,
        handleSubmit,
        onSubmit,
        errors,
        totalPrice,
        navigate,
        price_per_night,
        nights,
        setNights,
        handleIncrement,
        handleDecrement,
        findKitchenById,
        isValid,
      }}
    >
      {children}
    </ApartmentContext.Provider>
  );
};

import React from "react";

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`mt-4 px-4 py-2 w-full sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto flex justify-center items-center cursor-pointer rounded-md ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;

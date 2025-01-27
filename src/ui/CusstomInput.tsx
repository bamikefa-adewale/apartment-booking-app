import React from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  type = "text",
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 mb-1 font-medium">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        {...props}
      />
    </div>
  );
};

export default CustomInput;

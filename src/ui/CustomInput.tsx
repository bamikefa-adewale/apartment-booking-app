import React from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, autoComplete, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="block text-black font-poppins mb-2 text-lg font-[400]">
          {label}
        </label>
        <input
          autoComplete={autoComplete}
          ref={ref}
          className="border p-2 w-full rounded outline-none bg-gray-100"
          {...props}
        />
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput"; // Important for debugging

export default CustomInput;

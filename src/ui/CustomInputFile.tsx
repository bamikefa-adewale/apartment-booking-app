import { FileUp } from "lucide-react";
import React from "react";

interface CustomInputFileProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  accept?: string;
  label: string;
  className?: string;
}

const CustomInputFile: React.FC<CustomInputFileProps> = ({
  accept,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <label className="block text-black font-poppins mb-2 text-lg font-[400]">
        {label}
      </label>
      <div className="relative w-full">
        {" "}
        <input
          type="file"
          accept={accept}
          className={`w-full p-2  border bg-gray-100 rounded focus:outline-none appearance-none file:hidden ${className}`}
          {...props}
        />
        <div className="absolute inset-y-0 right-4 flex items-center text-gray-500 pointer-events-none">
          <FileUp size={25} color="gray" />
        </div>
      </div>
    </div>
  );
};

export default CustomInputFile;

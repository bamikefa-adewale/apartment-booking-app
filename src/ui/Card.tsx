import React from "react";

export const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className || ""}`}>
      {children}
    </div>
  );
};

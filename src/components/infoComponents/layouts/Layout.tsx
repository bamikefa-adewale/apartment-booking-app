import { ReactNode } from "react";
import { steps } from "../../constants/StepArray";
import { useLocation } from "react-router-dom";
import { Check } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Find the index of the current step based on the path
  const currentStepIndex = steps.findIndex(
    (step) => step.path === location.pathname
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <header className="text-xl font-bold text-blue-700 mb-4">
        Staycation.
      </header>

      {/* Steps Navigation */}
      <div className="flex items-center space-x-4 mb-8">
        {steps.map((step, index) => {
          const isActive = index === currentStepIndex;
          const isCompleted = index < currentStepIndex;

          return (
            <div
              key={step.id}
              className="flex items-center text-gray-200 text-2xl font-poppins font-[300]"
            >
              {/* Step Circle */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full 
                  ${isActive ? "border-white border-2" : ""}
                  
                  ${
                    isCompleted
                      ? "bg-[#1ABC9C] border-0 text-white"
                      : "bg-gray-300 "
                  }`}
              >
                {isCompleted ? <Check size={24} /> : step.id}
              </div>

              {/* Step Line (Only between steps) */}
              {index < steps.length - 1 && (
                <div
                  className={`w-10 h-[2px] ${
                    isCompleted ? "bg-[#1ABC9C]" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Page Content */}
      <main className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-md">
        {children}
      </main>
    </div>
  );
};

export default Layout;

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <header className="text-xl font-bold text-blue-700 mb-4">
        Staycation.
      </header>
      <div className="flex space-x-4 items-center mb-8">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-500"
          >
            {step}
          </div>
        ))}
      </div>
      <main className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-md">
        {children}
      </main>
    </div>
  );
};
export default Layout;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/bookingPage/:id" element={<BookingPage />} />
    </Routes>
  );
}

export default App;

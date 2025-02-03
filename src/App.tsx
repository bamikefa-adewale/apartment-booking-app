import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import TransactionCompleted from "./pages/TransactionCompleted";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/booking-page/:id" element={<BookingPage />} />
      <Route path="/payment-page" element={<PaymentPage />} />
      <Route path="/transaction-completed" element={<TransactionCompleted />} />
    </Routes>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/bookingPage/:id" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

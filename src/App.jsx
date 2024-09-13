import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EcomProvider } from "./Context/EcomContext";
import Header from "./component/Header/Header";
import HomePage from "./component/HomePage/HomePage";
import Footer from "./component/Footer/Footer";
import SearchResultsPage from "./component/Pages/SearchResultsPage/SearchResultsPage";
import BookingPage from "./component/Pages/BookingPage/BookingPage";
import UserProfilePage from "./component/Pages/UserProfilePage/UserProfilePage";
import HotelListings from "./component/Pages/HotelListings/HotelListings";
import HotelDetailsPage from "./component/Pages/HotelDetailsPage/HotelDetailsPage";
import SignUpPage from "./component/SignUpPage/SignUp";
import LoginPage from "./component/LoginPage/LoginPage";
import LogoutPage from "./component/LogoutPage/LogoutPage";
import CheckInPage from "./component/Pages/CheckIn/CheckInPage";
import CheckOutPage from "./component/Pages/CheckOut/CheckOutPage";
import BookingConfirmationPage from "./component/BookingConfirm/BookingConfirmPage";
import PaymentPage from "./component/PaymentPage/PaymentPage";
// import PaymentInfoPage from "./component/InfoPage/PaymentPageInfo";



function App() {
  const userId = "123";

  return (
    <Router>
      <EcomProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/hotel/:id" element={<HotelDetailsPage />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/profile" element={<UserProfilePage userId={userId} />} />
            <Route path="/hotels" element={<HotelListings />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/check-in" element={<CheckInPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            {/* <Route path="/payment-info" element={<PaymentInfoPage />} /> */}
            <Route path="/payment" element={<PaymentPage />} />
            {/* <Route path="/payment-info" element={<PaymentInfoPage />} /> */}
            <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
          </Routes>
          <Footer />
        </div>
      </EcomProvider>
    </Router>
  );
}

export default App;
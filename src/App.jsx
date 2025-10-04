import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import RideListPage from "./RideListPage";
import ComplaintFormPage from "./ComplaintFormPage";
import ComplaintSuccessPage from "./ComplaintSuccessPage";
import SafetyLandingPage from "./SafetyLandingPage";

function App() {
  const [selectedRide, setSelectedRide] = useState(null);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/safety-landing" element={<SafetyLandingPage />} />
            <Route
              path="/rides"
              element={<RideListPage onSelectRide={setSelectedRide} />}
            />
            <Route
              path="/complaint/form"
              element={<ComplaintFormPage selectedRide={selectedRide} />}
            />
            <Route
              path="/complaint/success"
              element={<ComplaintSuccessPage />}
            />
            <Route
              path="*"
              element={
                <div className="min-h-screen bg-gray-50 py-12">
                  <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                      <p className="text-gray-600 text-lg">Page not found</p>
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useScrollToTop from "./useScrollToTop";

function ComplaintSuccessPage() {
  useScrollToTop();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-8 sm:mb-16 lg:mb-24">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-black">
            Complaint Section
          </h1>
        </div>

        <div className="w-24 h-24 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-12">
          <img
            src="/assets/Ellipse 149.png"
            alt="Success"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full min-h-[30vh] sm:min-h-[50vh] py-10 sm:py-28 lg:py-36 my-8 sm:my-16 lg:my-24">
          <h1 className="font-bold mb-8 sm:mb-12 md:mb-16 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-[#FCB607] text-center px-4">
            Your complaint has been registered!!
          </h1>
          <p className="text-center text-[#BFBEBE] text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed px-4 max-w-4xl">
            Our team has started working for it, will report back to you soon...
          </p>
        </div>

        <div className="mt-6 sm:mt-12">
          <button
            onClick={() => navigate("/")}
            className="w-full max-w-sm mx-auto bg-primary-500 hover:bg-primary-600 text-black font-bold py-3 sm:py-4 px-6 rounded-xl text-sm sm:text-lg transition-colors duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComplaintSuccessPage;

import React, { useState } from "react";
import { ChevronLeft, User, Star, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import complaintOptionsData from "./complaintOptions.json";
import useScrollToTop from "./useScrollToTop";

function ComplaintFormPage({ selectedRide }) {
  useScrollToTop();
  const navigate = useNavigate();
  const [selectedComplaints, setSelectedComplaints] = useState([]);

  const handleComplaintChange = (complaintId) => {
    setSelectedComplaints((prev) =>
      prev.includes(complaintId)
        ? prev.filter((id) => id !== complaintId)
        : [...prev, complaintId]
    );
  };

  const getIconComponent = (iconName) => {
    const iconMap = {
      AlertCircle,
    };
    return iconMap[iconName] || AlertCircle;
  };
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate("/rides")}
          className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6 transition-colors"
        >
          <ChevronLeft size={20} />
          <span>Back to Rides</span>
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
          Complaint Section
        </h1>

        <div className="bg-primary-25 rounded-xl p-4 sm:p-8 lg:p-16">
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <div className="bg-primary-300 rounded-xl p-6  ">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Driver Information
                </h2>

                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="text-primary-600" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {selectedRide?.driverName || "Driver Name"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedRide?.vehicleType || "E-Auto"} Driver #
                    {selectedRide?.driverId || "N/A"}
                  </p>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    {selectedRide?.driverRating
                      ? Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`${
                              i < Math.floor(selectedRide.driverRating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            size={16}
                            fill={
                              i < Math.floor(selectedRide.driverRating)
                                ? "currentColor"
                                : "none"
                            }
                          />
                        ))
                      : Array.from({ length: 5 }, (_, i) => (
                          <Star key={i} className="text-gray-300" size={16} />
                        ))}
                    <span className="text-sm text-gray-600 ml-1">
                      {selectedRide?.driverRating || "N/A"}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vehicle Type:</span>
                    <span className="text-gray-900">
                      {selectedRide?.vehicleType || "E-Auto"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vehicle Number:</span>
                    <span className="text-gray-900">
                      {selectedRide?.driverId || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fare Paid:</span>
                    <span className="text-gray-900">
                      ₹{selectedRide?.fare || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ride Date:</span>
                    <span className="text-gray-900">
                      {selectedRide?.date || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ride Time:</span>
                    <span className="text-gray-900">
                      {selectedRide?.time || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shared by:</span>
                    <span className="text-gray-900">
                      {selectedRide?.rideShared || "N/A"} users
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-primary-300 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  What went wrong?
                </h2>

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Complaint Types
                  </h3>
                  <div className="space-y-3">
                    {complaintOptionsData.complaintOptions.map((option) => {
                      const IconComponent = getIconComponent(option.icon);
                      return (
                        <label
                          key={option.id}
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedComplaints.includes(option.id)}
                            onChange={() => handleComplaintChange(option.id)}
                            className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500 rounded"
                          />
                          <div className="flex items-center space-x-2">
                            <IconComponent className={option.color} size={20} />
                            <span className="text-gray-900">
                              {option.label}
                            </span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-lg font-medium text-gray-900 mb-3">
                    Additional Details
                  </label>
                  <div className="relative">
                    <textarea
                      placeholder="Type your complaint here..."
                      rows="6"
                      className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none resize-none"
                    ></textarea>
                    <button
                      onClick={() => navigate("/complaint/success")}
                      className="absolute bottom-3 right-3 p-2 text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                    >
                      <img
                        src="/assets/Rectangle 715.png"
                        alt="Send"
                        className="w-6 h-6"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplaintFormPage;

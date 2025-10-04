import React from "react";
import { useNavigate } from "react-router-dom";
import useScrollToTop from "./useScrollToTop";

const rides = [
  {
    id: "ride1",
    driverName: "Gopal Gupta",
    driverRating: 4.8,
    driverId: "UP 65BQ 1462",
    driverAvatar: null,
    fare: 35,
    date: "Friday | 24-09-25",
    time: "12:30 pm",
    dateLabel: "Yesterday",
    from: "Aryabhatta Hostel, IIT BHU, Varanasi",
    to: "Swatantrata Bhawan, BHU, Varanasi",
    rideShared: 3,
    vehicleType: "E-Auto",
  },
  {
    id: "ride2",
    driverName: "Priya Sharma",
    driverRating: 4.6,
    driverId: "QSH047",
    driverAvatar: null,
    fare: 32.0,
    date: "Friday | 24-09-25",
    time: "2:15 PM",
    dateLabel: "Dec 12, 2024",
    from: "Varana Campus",
    to: "BHU Main Gate",
    rideShared: 3,
    vehicleType: "E-Auto",
  },
];

function RideListPage({ onSelectRide }) {
  useScrollToTop();
  const navigate = useNavigate();
  const proceed = (ride) => {
    if (onSelectRide) onSelectRide(ride);
    navigate("/complaint/form");
  };

  return (
    <div className="min-h-screen bg-white py-6 sm:py-10">
      <div className="max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-semibold text-[#3B210A] mb-6 sm:mb-8 lg:mb-10 text-center">
          Raise a complaint
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#3B210A] my-12 sm:my-16 lg:my-20 text-center">
          Rides completed by you today
        </h2>

        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {rides.map((ride) => (
            <div
              key={ride.id}
              className="relative rounded-xl sm:rounded-2xl shadow-lg border bg-primary-25 border-gray-200 flex flex-col lg:flex-row items-stretch overflow-hidden min-h-[24vh] sm:min-h-[28vh] max-w-full sm:max-w-4xl md:max-w-5xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12"
              style={{ boxShadow: "0px 2px 9px 2px #00000040" }}
            >
              <div className="flex-shrink-0 flex flex-col items-center justify-center bg-primary-25 w-full lg:w-64 xl:w-72 py-4 sm:py-6 md:py-8 xl:py-8">
                <div className="relative mb-3 sm:mb-4 md:mb-5">
                  <img
                    src="/assets/Group 729.png"
                    alt="E-Auto"
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain"
                  />
                </div>

                <div className="w-full flex flex-col gap-2 px-2">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 font-bold">
                      Vehicle:
                    </span>
                    <span className="inline-block bg-primary-200 border-2 border-primary-500 rounded-md px-3 sm:px-4 md:px-5 lg:px-6 py-1 text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
                      {ride.vehicleType}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 font-bold">
                      Ride shared by:
                    </span>
                    <span className="text-sm sm:text-base md:text-lg text-[#969696]">
                      {ride.rideShared} users
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-8">
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between xl:gap-10 gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-5 md:mb-6">
                  <div className="w-full xl:w-1/2 mb-2 xl:mb-0">
                    <span className="block text-lg sm:text-xl md:text-2xl text-gray-900 font-bold mb-2">
                      From:
                    </span>
                    <div className="flex items-start gap-2 sm:gap-2.5">
                      <img
                        src="/assets/image 43.png"
                        alt="From location icon"
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain mt-0.5 flex-shrink-0"
                      />
                      <span className="text-base sm:text-lg md:text-xl text-[#969696] break-words leading-relaxed">
                        {ride.from}
                      </span>
                    </div>
                  </div>
                  <div className="w-full xl:w-1/2">
                    <span className="block text-lg sm:text-xl md:text-2xl text-gray-900 font-bold mb-2">
                      To:
                    </span>
                    <div className="flex items-start gap-2 sm:gap-2.5">
                      <img
                        src="/assets/image 77.png"
                        alt="To location icon"
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain mt-0.5 flex-shrink-0"
                      />
                      <span className="text-base sm:text-lg md:text-xl text-[#969696] break-words leading-relaxed">
                        {ride.to}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row xl:flex-row gap-4 sm:gap-5 md:gap-6 mb-5 sm:mb-6">
                  <div className="flex-1">
                    <span className="text-base sm:text-lg md:text-xl text-gray-900 font-bold block mb-1">
                      Driver name:
                    </span>
                    <span className="text-sm sm:text-base md:text-lg text-[#969696]">
                      {ride.driverName}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-base sm:text-lg md:text-xl text-gray-900 font-bold block mb-1">
                      Vehicle number:
                    </span>
                    <span className="text-sm sm:text-base md:text-lg text-[#969696]">
                      {ride.driverId}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-base sm:text-lg md:text-xl text-gray-900 font-bold block mb-1">
                      Fare amount paid:
                    </span>
                    <span className="text-sm sm:text-base text-center md:text-lg text-[#969696]">
                      ₹{ride.fare}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row xl:flex-row md:items-center xl:items-end md:justify-between xl:justify-between gap-4 sm:gap-5 md:gap-6">
                  <div className="font-sans font-medium text-lg sm:text-xl md:text-2xl text-center text-black">
                    {ride.time} | {ride.date}
                  </div>
                  <button
                    onClick={() => proceed(ride)}
                    className="bg-primary-500 hover:bg-primary-600 font-medium py-3 sm:py-3.5 px-8 sm:px-10 md:px-10 rounded-lg transition-colors duration-200 text-l sm:text-l md:text-xl w-full md:w-auto"
                  >
                    Raise a complaint
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white py-4 sm:py-6">
          <div className="bg-white py-4 sm:py-6">
            <div className="bg-white py-4 sm:py-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RideListPage;

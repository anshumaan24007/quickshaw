import React from "react";
import useScrollToTop from "./useScrollToTop";
import FeatureCards from "./FeatureCards";
import featureCardsData from "./featureCardsData.json";

function HomePage() {
  useScrollToTop();
  return (
    <div className="bg-gray-50">
      <section
        className="bg-gradient-to-b from-white to-gray-50 pt-28 pb-32 min-h-[500px] md:min-h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/Frame 51 (1).png')` }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              From IIT BHU to <span className="text-primary-500">Bharat</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the most convenient and safe mode of commute
            </p>
          </div>

          <div className="bg-transparent p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto mb-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-2 md:gap-4 lg:gap-6">
              <div className="relative w-full">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <img
                    src="/assets/image 43.png"
                    alt="Pickup Icon"
                    className="w-6 h-6"
                  />
                </span>
                <input
                  type="text"
                  placeholder="Enter pickup point"
                  className="w-full pl-11 pr-3 sm:pl-12 sm:pr-4 py-3 sm:py-4 text-base sm:text-lg shadow-[0px_2px_15px_0px_#00000040] rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="relative w-full">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <img
                    src="/assets/image 77.png"
                    alt="Drop Icon"
                    className="w-6 h-6"
                  />
                </span>
                <input
                  type="text"
                  placeholder="Enter drop point"
                  className="w-full pl-11 pr-3 sm:pl-12 sm:pr-4 py-3 sm:py-4 text-base sm:text-lg shadow-[0px_2px_15px_0px_#00000040] rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <button className="w-full bg-primary-500 hover:bg-primary-600 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 shadow-[0px_2px_8px_0px_#00000040] rounded-xl text-base sm:text-lg mt-4 sm:mt-6 transition-colors duration-200 flex items-center justify-center space-x-2">
              <span>Ride now</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-6xl font-bold text-gray-900 mb-8 sm:mb-12 px-6 lg:px-0">
            Making journeys comfortable
          </h2>
        </div>

        <div className="w-full pb-32">
          <FeatureCards cardsData={featureCardsData} />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
            <div className="flex flex-col md:flex-row-reverse justify-between w-full mb-12 gap-8 md:gap-12">
              <div className="w-full md:w-2/5 lg:w-2/5 flex justify-center items-center">
                <img
                  src="/assets/Group 759.png"
                  alt="QR code scanning"
                  className="w-full max-w-[400px] md:max-w-[350px] lg:max-w-[420px] object-contain"
                />
              </div>
              <div className="w-full md:w-[45%] lg:w-[45%] flex flex-col justify-center items-start px-6 lg:px-0 ">
                <h3 className="font-archivo font-extrabold text-[24px] sm:text-[32px] md:text-[48px] lg:text-[56px] leading-[40px] sm:leading-[56px] md:leading-[64px] lg:leading-[80px] tracking-[0.05em] text-gray-900 mb-4 sm:mb-6">
                  Scan & Onboard
                </h3>
                <p className="font-archivo font-medium text-[16px] sm:text-[18px] md:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[44px] tracking-[0.05em] mb-6 sm:mb-8">
                  Seeing an auto idle on the road, than no need to book online,
                  just <strong>Scan QR</strong> placed in it and enjoy all
                  benefits of QuickShaw!
                </p>
                <button className="font-archivo font-semibold text-[16px] sm:text-[18px] md:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[28px] md:leading-[34px] lg:leading-[38px] tracking-[0.05em] align-middle bg-primary-500 text-gray-900 rounded-2xl px-6 sm:px-10 py-2 sm:py-4">
                  Coming soon
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between w-full mb-12 gap-8 md:gap-12">
              <div className="w-full md:w-2/5 lg:w-2/5 flex justify-center items-center">
                <img
                  src="/assets/Group 758.png"
                  alt="Safety measures"
                  className="w-full max-w-[400px] md:max-w-[350px] lg:max-w-[420px] object-contain"
                />
              </div>
              <div className="w-full md:w-[45%] lg:w-[45%] flex flex-col justify-center items-start px-6 lg:px-0">
                <h3 className="font-archivo font-extrabold text-[24px] sm:text-[32px] md:text-[48px] lg:text-[56px] leading-[40px] sm:leading-[56px] md:leading-[64px] lg:leading-[80px] tracking-[0.05em] text-gray-900 mb-4 sm:mb-6">
                  Ensuring Safety
                </h3>
                <p className="font-archivo font-medium text-[16px] sm:text-[18px] md:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[44px] tracking-[0.05em] mb-6 sm:mb-8">
                  Full-time access to nearest emergency contact facilities like
                  Police stations, proctor office, ambulance, & post-ride
                  feedback facility for every driver.
                </p>
                <button className="font-archivo font-semibold text-[16px] sm:text-[18px] md:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[28px] md:leading-[34px] lg:leading-[38px] tracking-[0.05em] align-middle bg-primary-500 text-gray-900 rounded-2xl px-6 sm:px-10 py-2 sm:py-4">
                  Know more
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse justify-between w-full gap-8 md:gap-12">
              <div className="w-full md:w-2/5 lg:w-2/5 flex justify-center items-center">
                <img
                  src="/assets/Group 505.png"
                  alt="Reliable drivers"
                  className="w-full max-w-[400px] md:max-w-[350px] lg:max-w-[420px] object-contain"
                />
              </div>
              <div className="w-full md:w-[45%] lg:w-[45%] flex flex-col justify-center items-start px-6 lg:px-0">
                <h3 className="font-archivo font-extrabold text-[24px] sm:text-[32px] md:text-[48px] lg:text-[56px] leading-[40px] sm:leading-[56px] md:leading-[64px] lg:leading-[80px] tracking-[0.05em] text-gray-900 mb-4 sm:mb-6">
                  Driver Reliability
                </h3>
                <p className="font-archivo font-medium text-[16px] sm:text-[18px] md:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[44px] tracking-[0.05em] mb-6 sm:mb-8">
                  Ensuring responsible driver behavior and a smoother ride
                  experience by a solid driver feedback system for quality
                  checks and improvements.
                </p>
                <button className="font-archivo font-semibold text-[16px] sm:text-[18px] md:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[28px] md:leading-[34px] lg:leading-[38px] tracking-[0.05em] align-middle bg-primary-500 text-gray-900 rounded-2xl px-6 sm:px-10 py-2 sm:py-4">
                  Know more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-archivo text-center font-bold md:text-justify text-[24px] sm:text-[32px] md:text-[48px] lg:text-[80px] leading-[36px] sm:leading-[56px] md:leading-[80px] lg:leading-[100px] tracking-[0.05em] text-gray-900 mb-6 sm:mb-16">
            Download the mobile-app
          </h2>

          <div className="flex flex-col sm:flex-row max-w-2xl mx-auto min-h-[18rem] justify-center space-y-8 sm:space-y-0 sm:space-x-12">
            <div className="flex flex-col items-center w-full sm:w-1/2 space-y-6">
              <img
                src="/assets/Group 455.png"
                alt="Google Play"
                className="w-40 sm:w-32 object-contain mb-4"
              />
              <div className="text-base sm:text-[28px] font-medium text-gray-800 mt-2 text-center leading-[1.5]">
                QuickShaw: 3-wheeler ride booking
              </div>
            </div>

            <div className="hidden sm:block h-36 border-l border-gray-300 mx-6" />
            <div className="block sm:hidden w-2/3 my-6">
              <hr className="border-t border-gray-300" />
            </div>

            <div className="flex flex-col items-center w-full sm:w-1/2 space-y-6">
              <img
                src="/assets/Rectangle 600.png"
                alt="App Store"
                className="w-40 sm:w-32 object-contain mb-4"
              />
              <div className="text-base sm:text-[28px] font-medium text-gray-800 mt-2 text-center leading-[1.5]">
                QuickShaw: Driver
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 mb-10">
            Be a part of us!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center bg-primary-50 rounded-2xl shadow-sm p-10 min-h-[370px]">
              <div className="mb-8">
                <img
                  src="/assets/image 3.png"
                  alt="WhatsApp"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                Whatsapp community
              </h3>
              <button className="w-full bg-primary-500 hover:bg-primary-600 text-gray-900 font-semibold py-4 rounded-lg mb-6 transition-colors duration-200">
                Join group
              </button>
              <p className="text-lg text-center text-gray-800">
                Have any product idea in your mind or want to be a part of the
                product-building discussions.
              </p>
            </div>

            <div className="flex flex-col items-center bg-primary-50 rounded-2xl shadow-sm p-10 min-h-[370px]">
              <div className="mb-8">
                <img
                  src="/assets/image 4.png"
                  alt="Instagram"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                Instagram page
              </h3>
              <button className="w-full bg-primary-500 hover:bg-primary-600 text-gray-900 font-semibold py-4 rounded-lg mb-6 transition-colors duration-200">
                Visit page
              </button>
              <p className="text-lg text-center text-gray-800">
                Watch out the new feature releases and some of the cool reels
                and content of QuickShaw.
              </p>
            </div>

            <div className="flex flex-col items-center bg-primary-50 rounded-2xl shadow-sm p-10 min-h-[370px]">
              <div className="mb-8">
                <img
                  src="/assets/image 5.png"
                  alt="LinkedIn"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                LinkedIn page
              </h3>
              <button className="w-full bg-primary-500 hover:bg-primary-600 text-gray-900 font-semibold py-4 rounded-lg mb-6 transition-colors duration-200">
                Visit page
              </button>
              <p className="text-lg text-center text-gray-800">
                Stay updated with the latest releases, offers and how others
                review and use QuickShaw.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-16">
          <h2 className="text-2xl sm:text-7xl font-medium text-gray-900 mb-6 sm:mb-8">
            Got a query or complaint?
          </h2>
          <div className="bg-white rounded-xl">
            <textarea
              placeholder="Happy to listen to you..."
              rows="6"
              className="w-full px-4 py-3 border bg-[#EEEEEE] border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none resize-none placeholder:text-black"
            ></textarea>

            <div className="flex flex-col sm:flex-col space-y-4 mt-6">
              <button className="bg-primary-500 hover:bg-primary-600 w-fit font-bold py-3 px-8 rounded-2xl transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Submit</span>
              </button>
              <div className="text-xl">
                <span className="text-[#6D6D6D]">—— &nbsp;&nbsp;</span> or{" "}
                <span className="text-[#6D6D6D]"> &nbsp;&nbsp;——</span>
              </div>
              <button className="bg-primary-500 hover:bg-primary-600 w-fit text-gray-800 font-bold py-3 px-8 rounded-2xl transition-colors duration-200">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

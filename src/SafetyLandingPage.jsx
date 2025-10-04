import React from "react";
import { useNavigate } from "react-router-dom";
import useScrollToTop from "./useScrollToTop";

function SafetyLandingPage() {
  useScrollToTop();
  const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen">
      <section
        className="bg-gradient-to-b from-white to-gray-50 pt-28 pb-32 min-h-[500px] md:min-h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/Frame 51 (1).png')` }}
      >
        <div className="container mx-auto max-w-6xl px-4 py-6 sm:py-8 text-center">
          <h1 className="font-black text-[42px] leading-[52px] sm:text-[48px] sm:leading-[60px] md:text-[80px] md:leading-[100px] lg:text-[110px] lg:leading-[120px] tracking-[0.08em] text-center text-[#3B210A] drop-shadow-sm">
            A safe mobility
            <br />
            platform is here
          </h1>
          <div className="mt-12">
            <button
              onClick={() => navigate("/rides")}
              className="inline-block bg-primary-500 hover:bg-primary-500 text-xl sm:text-2xl md:text-4xl font-medium px-8 py-4 sm:px-16 sm:py-5 md:px-32 md:py-6 rounded-md shadow transition-colors duration-200"
            >
              Raise a Complaint
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12 sm:py-24">
        <h2 className="text-primary-700 font-serif font-black text-[36px] leading-[48px] md:text-[64px] md:leading-[80px] lg:text-[96px] lg:leading-[110px] text-center mb-12 sm:mb-16">
          YOUR SAFETY IS
          <br />
          OUR PRIORITY
        </h2>
        <p
          className="
            mt-10
            font-sans
            font-medium
            text-[22px] sm:text-[24px] md:text-[28px]
            leading-[32px] sm:leading-[34px] md:leading-[35px]
            tracking-[0.05em]
            text-center
            text-primary-800
            mx-auto
            mb-14 sm:mb-20
          "
        >
          One-tap alert to trusted contacts & QuickShaw team, verified drivers
          for every ride, live trip tracking from start to finish, instant
          support, always on standby.
        </p>
        <h3
          className="
            text-center
            font-sans
            font-bold
            text-[32px] sm:text-[40px] md:text-[48px]
            leading-[60px] sm:leading-[90px] md:leading-[130px]
            tracking-[0.02em]
            text-primary-900
            mt-16
            mb-6
          "
        >
          Ensuring Safety,{" "}
          <span
            className="
              text-black
              font-sans
              font-medium
              text-[28px] sm:text-[32px] md:text-[35px]
              leading-[35px] sm:leading-[40px] md:leading-[48px]
              tracking-[0.05em]
              text-center
              inline-block
            "
          >
            HOW IT WORKS
          </span>
        </h3>
      </section>

      <section className="mx-auto pb-16 space-y-16">
        <div
          className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center relative"
          style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}
        >
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 96,
              height: 96,
              zIndex: 20,
              pointerEvents: "none",
              display: "block",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 20,
                left: 0,
                width: 72,
                height: 1,
                background: "#FCB607",
                borderRadius: 1,
                display: "block",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: 0,
                left: 20,
                width: 1,
                height: 72,
                background: "#FCB607",
                borderRadius: 1,
                display: "block",
              }}
            />
          </span>
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 96,
              height: 96,
              zIndex: 20,
              pointerEvents: "none",
              display: "block",
            }}
          >
            <span
              style={{
                position: "absolute",
                bottom: 20,
                right: 0,
                width: 72,
                height: 1,
                background: "#FCB607",
                borderRadius: 1,
                display: "block",
              }}
            />
            <span
              style={{
                position: "absolute",
                bottom: 0,
                right: 20,
                width: 1,
                height: 72,
                background: "#FCB607",
                borderRadius: 1,
                display: "block",
              }}
            />
          </span>
          <div className="pl-8 pr-8 sm:pl-16 sm:pr-16 md:pl-24 md:pr-24">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 flex items-center">
              Tap safe now
            </h3>
            <div
              className="bg-primary-100 p-4 sm:p-6 md:p-8 rounded-lg mt-6"
              style={{ maxWidth: "32rem" }}
            >
              <p className="text-black text-base sm:text-lg md:text-xl">
                Your ride comes with more than just wheels. It comes with trust
                in verified drivers, care built into every detail, and a
                constant watch over your journey to ensure your safety.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/Group 745.png"
              alt="Tap safe"
              className="w-56 sm:w-72 object-contain"
            />
          </div>
        </div>

        <div className="relative w-full h-80">
          <div
            className="absolute inset-0 w-full h-56 bg-primary-500"
            style={{
              clipPath: "ellipse(50% 95% at 50% 0%)",
              zIndex: 1,
            }}
          ></div>
          <div
            className="absolute inset-0 w-full h-56 bg-white"
            style={{
              background:
                "linear-gradient(179.82deg, #FFFFFF 0.52%, #FFD66F 130.17%)",
              clipPath: "ellipse(50% 85% at 50% -5%)",
              zIndex: 2,
            }}
          ></div>
        </div>

        <div
          className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center relative"
          style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}
        >
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 96,
              height: 96,
              zIndex: 20,
              pointerEvents: "none",
              display: "block",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 20,
                left: 0,
                width: 72,
                height: 1,
                background: "#FCB607",
                borderRadius: 1,
                display: "block",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: 0,
                left: 20,
                width: 1,
                height: 72,
                background: "#FCB607",
                borderRadius: 1,
                display: "block",
              }}
            />
          </span>
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 96,
              height: 96,
              zIndex: 20,
              pointerEvents: "none",
              display: "block",
            }}
          >
            <span
              style={{
                position: "absolute",
                bottom: 20,
                right: 0,
                width: 72,
                height: 1,
                background: "#FCB607",
                borderRadius: 1,
                display: "block",
              }}
            />
            <span
              style={{
                position: "absolute",
                bottom: 0,
                right: 20,
                width: 1,
                height: 72,
                background: "#FCB607",
                borderRadius: 1,
                display: "block",
              }}
            />
          </span>
          <div className="order-2 md:order-1 flex justify-center">
            <img
              src="/assets/Group 652.png"
              alt="Share ride"
              className="w-72 object-contain"
            />
          </div>
          <div className="order-1 md:order-2 pl-8 pr-8 sm:pl-16 sm:pr-16 md:pl-24 md:pr-24">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 flex items-center">
              Share your ride
            </h3>
            <div
              className="bg-primary-100 p-4 sm:p-6 md:p-8 rounded-lg mt-6"
              style={{ maxWidth: "32rem" }}
            >
              <p className="text-black text-base sm:text-lg md:text-xl">
                Before your ride begins, your peace of mind is set. Share your
                trip instantly, let loved ones track your journey, and know
                someone always has an eye out for you.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-80">
          <div
            className="absolute inset-0 w-full h-56 bg-primary-500"
            style={{
              clipPath: "ellipse(50% 95% at 50% 0%)",
              zIndex: 1,
            }}
          ></div>
          <div
            className="absolute inset-0 w-full h-56 bg-white"
            style={{
              background:
                "linear-gradient(179.82deg, #FFFFFF 0.52%, #FFD66F 130.17%)",
              clipPath: "ellipse(50% 85% at 50% -5%)",
              zIndex: 2,
            }}
          ></div>
        </div>

        <div
          className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center relative"
          style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}
        >
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 96,
              height: 96,
              zIndex: 20,
              pointerEvents: "none",
              display: "block",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 20,
                left: 0,
                width: 72,
                height: 1,
                background: "#FCB607",
                borderRadius: 1,
                display: "block",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: 0,
                left: 20,
                width: 1,
                height: 72,
                background: "#FCB607",
                borderRadius: 1,
                display: "block",
              }}
            />
          </span>
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 96,
              height: 96,
              zIndex: 20,
              pointerEvents: "none",
              display: "block",
            }}
          >
            <span
              style={{
                position: "absolute",
                bottom: 20,
                right: 0,
                width: 72,
                height: 1,
                background: "#FCB607",
                borderRadius: 1,
                display: "block",
              }}
            />
            <span
              style={{
                position: "absolute",
                bottom: 0,
                right: 20,
                width: 1,
                height: 72,
                background: "#FCB607",
                borderRadius: 1,
                display: "block",
              }}
            />
          </span>
          <div className="pl-8 pr-8 sm:pl-16 sm:pr-16 md:pl-24 md:pr-24">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 flex items-center">
              Trusted drivers
            </h3>
            <div
              className="bg-primary-100 p-4 sm:p-6 md:p-8 rounded-lg mt-6"
              style={{ maxWidth: "32rem" }}
            >
              <p className="text-black text-base sm:text-lg md:text-xl">
                Your safety is already taken care of with verified profiles,
                live monitoring, and safeguards built to keep every journey
                worry-free.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/Group 651.png"
              alt="Trusted drivers"
              className="w-72 object-contain"
            />
          </div>
        </div>

        <div className="relative w-full h-80">
          <div
            className="absolute inset-0 w-full h-56 bg-primary-500"
            style={{
              clipPath: "ellipse(50% 95% at 50% 0%)",
              zIndex: 1,
            }}
          ></div>
          <div
            className="absolute inset-0 w-full h-56"
            style={{
              background:
                "linear-gradient(179.82deg, #FFFFFF 0.52%, #FFD66F 130.17%)",
              clipPath: "ellipse(50% 85% at 50% -5%)",
              zIndex: 2,
            }}
          ></div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-8">
            feeling safe shouldn't be a luxury.
            <span className="block text-primary-600 mt-3">
              with Quickshaw, it's built in.
            </span>
          </h2>
          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-black font-medium max-w-3xl mx-auto">
            every ride tracked, every detail shared, so you never travel alone,
            <br className="hidden sm:inline" /> especially when you’re by
            yourself.
          </p>
        </div>
      </section>
      <section className="py-52 sm:py-72">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.01] tracking-wide">
            Every trip on <span className="text-primary-600">QuickShaw</span>{" "}
            comes with one extra passenger,
            <span className="block text-primary-600 font-extrabold mt-6">
              your security.
            </span>
          </h2>
        </div>
      </section>
    </div>
  );
}

export default SafetyLandingPage;

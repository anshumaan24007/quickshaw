import React, { useRef, useEffect } from "react";

const FeatureCard = ({ card }) => {
  return (
    <div
      className={`relative rounded-2xl h-80 w-64 flex-shrink-0 flex flex-col justify-between snap-center min-w-64 ${
        card.bgGradient
          ? card.bgGradient
          : "bg-gradient-to-br from-amber-100 to-amber-200"
      }`}
    >
      <div className="p-5">
        <div className="text-left">
          <h3
            className="text-lg font-bold font-serif uppercase tracking-wide mb-2 mix-blend-difference"
            style={{ color: "#ffd4ae" }}
          >
            {card.card_title}
          </h3>
          <p
            className="text-xl font-bold font-serif leading-tight mix-blend-difference"
            style={{ color: "#ffd4ae" }}
          >
            {card.main_text}
          </p>
        </div>

        {card.button_text && (
          <div className="mt-4">
            <button
              className="bg-amber-100 hover:bg-amber-200 font-medium px-4 py-2 rounded-lg border border-amber-300 transition-colors duration-200 text-sm font-serif"
              style={{ color: "#3A2009" }}
            >
              {card.button_text} →
            </button>
          </div>
        )}
      </div>

      <div
        className={`flex-1 flex items-end ${
          card.image_position ? card.image_position : "justify-end"
        }`}
      >
        {card.image && (
          <img
            src={card.image}
            alt={card.card_title}
            className="max-h-32 object-contain rounded-2xl"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

const FeatureCards = ({ cardsData }) => {
  const scrollContainerRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const container = scrollContainerRef.current;
    if (container) {
      let scrollAmount = 0;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        scrollAmount = e.deltaX * 0.8;
      } else {
        scrollAmount = e.deltaY * 0.8;
      }
      container.scrollLeft += scrollAmount;
    }
  };

  const handleClick = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.focus();
    }
  };

  const handleKeyDown = (e) => {
    const container = scrollContainerRef.current;
    if (container) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        container.scrollLeft -= 400;
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        container.scrollLeft += 400;
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        container.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  const gradients = [
    "bg-[radial-gradient(86.49%_73.41%_at_56.35%_64.88%,_#F3F3F3_15.38%,_#FFD15E_100%)]",
    "bg-[linear-gradient(180deg,_#FED776_0%,_#FFF2D0_47.6%)]",
    "bg-[conic-gradient(from_151.87deg_at_12.84%_-18.27%,_#FFEDBE_0deg,_#3A2009_360deg)]",
    "bg-[linear-gradient(180deg,_#FED776_0%,_#FFF2D0_47.6%)]",
    "bg-[linear-gradient(180deg,_#FED776_0%,_#FFF2D0_47.6%)]",
    "bg-[conic-gradient(from_151.87deg_at_12.84%_-18.27%,_#FFEDBE_0deg,_#3A2009_360deg)]",
  ];

  return (
    <div className="relative w-full flex justify-center">
      <div
        ref={scrollContainerRef}
        tabIndex={0}
        className="overflow-x-auto scrollbar-hide max-w-6xl px-4 focus:outline-none"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <div className="inline-flex gap-6 py-4">
          {cardsData.map((card, index) => (
            <FeatureCard
              key={index}
              card={{
                ...card,
                bgGradient: gradients[index % gradients.length],
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;

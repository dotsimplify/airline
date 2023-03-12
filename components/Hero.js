import React from "react";
import Link from "next/link";
import FlightWidget from "./widgets/FlightWidget";
import Widget2 from "./widgets/Widget2";

const Hero = (props) => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/beach.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      onClick={() => props.isOpen && props.setIsOpen(false)}
      className="py-16 pb-16  overflow-hidden   "
    >
      <div className="py-8 sm:px-2 max-w-[2000px] mx-auto lg:relative lg:py-0 lg:pb-8 lg:px-0">
        <div className="grid items-center grid-cols-1 px-4 mx-auto max-w-8xl gap-y-16 gap-x-8 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 mt-12 md:text-center lg:text-left">
            <div className="relative">
              <p className="inline text-3xl leading-tight tracking-tight text-black  md:text-5xl font-display">
                find best flight with us
              </p>
              <p className="mt-3 text-base tracking-tight text-black md:text-slate-700">
                Explore flights & deal like a pro with our expert
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FlightWidget />
    </div>
  );
};

export default Hero;

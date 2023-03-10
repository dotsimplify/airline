import React from "react";
import Link from "next/link";

const Hero = (props) => {
  return (
    <div
      onClick={() => props.isOpen && props.setIsOpen(false)}
      className="py-8 pb-16 mx-auto overflow-hidden max-w-7xl "
    >
      <div className="py-8 sm:px-2 lg:relative lg:py-0 lg:pb-8 lg:px-0">
        <div className="grid items-center grid-cols-1 px-4 mx-auto max-w-8xl gap-y-16 gap-x-8 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative lg:static xl:pl-10">
            <div className="relative">
              <div className="relative rounded-2xl backdrop-blur">
                <div className="absolute h-px -top-px left-20 right-11 " />
                <img alt="plane" className="" src="/images/plane-new.png" />
              </div>
            </div>
          </div>

          <div className="relative z-10 md:text-center lg:text-left">
            <div className="relative">
              <p className="inline text-3xl leading-tight tracking-tight text-black md:text-white md:text-5xl font-display">
                We help to find best and cheap flight deal so that you
                experience the joy of #Travel with Us
              </p>
              <p className="mt-3 text-base tracking-tight text-black md:text-slate-200">
                Explore flights & deal like a pro with our expert
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

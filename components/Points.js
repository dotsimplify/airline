import React, { useState } from "react";
import { TbDiscount2 } from "react-icons/tb";
import { MdCoronavirus, MdFlight } from "react-icons/md";

const Points = () => {
  return (
    <div className="z-10 py-16 overflow-hidden bg-gray-50 ">
      <div className="container px-6 m-auto space-y-8 text-gray-500 md:px-12">
        <div>
          <span className="text-lg font-semibold text-gray-600">Features</span>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 md:text-4xl">
            Perfect place for flight and airline deals
          </h2>
        </div>
        <div className="grid mt-16 overflow-hidden border divide-x divide-y rounded-xl sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-3">
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
              <TbDiscount2 className="text-5xl text-pink-600" />
              <div className="space-y-2">
                <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                  Deals & Discount
                </h5>
                <p className="text-sm text-gray-600">
                  Discover over 1000 deals for booking tickets and gather
                  information about airport locations and travel fares. With
                  numerous options for air travel available
                </p>
              </div>
            </div>
          </div>
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
              <MdFlight className="text-5xl text-indigo-500" />

              <div className="space-y-2">
                <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                  1000 + Airlines Search
                </h5>
                <p className="text-sm text-gray-600 ">
                  Explore a vast selection of flight and airline deals for all
                  destinations and routes, totaling over 1000 options.Compare
                  prices, flight times, and routes to ensure you make an
                  informed decision.
                </p>
              </div>
            </div>
          </div>
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
              <MdCoronavirus className="text-5xl text-green-700" />

              <div className="space-y-2">
                <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                  Covid Guidelines
                </h5>
                <p className="text-sm text-gray-600">
                  Information about the safety measures taken by airlines and
                  destinations to protect passengers and visitors from the
                  spread of the Covid-19.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Points;

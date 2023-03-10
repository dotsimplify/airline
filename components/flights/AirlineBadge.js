import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";

const AirlineBadge = ({ airline }) => {
  return (
    <div className="flex items-center w-full py-1 pl-2 pr-3 m-1 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer hover:underline hover:text-blue-500">
      <GiCommercialAirplane className="mr-2 text-4xl text-blue-500" />
      <span className="text-sm font-semibold">{airline}</span>
    </div>
  );
};

export default AirlineBadge;

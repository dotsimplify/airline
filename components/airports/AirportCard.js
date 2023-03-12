import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiCommercialAirplane } from "react-icons/gi";

const AirportCard = ({ airportName, slug }) => {
  return (
    <Link href={slug}>
      <div className="p-1  group flex items-center border px-4 py-1 rounded-lg bg-white  ">
        <GiCommercialAirplane className="text-2xl mr-2" />
        <h4 className="text-lg capitalize font-semibold hover:underline cursor-pointer text-cyan-900">
          {airportName}
        </h4>
      </div>
    </Link>
  );
};

export default AirportCard;

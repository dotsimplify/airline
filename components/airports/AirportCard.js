import React from "react";
import Image from "next/image";
import Link from "next/link";

const AirportCard = ({ image, airportName, slug }) => {
  return (
    <Link href={slug}>
      <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        <Image
          src={image}
          alt="art cover"
          loading="lazy"
          width={300}
          height={200}
          className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:scale-105 group-hover:rounded-xl"
        />
        <div className="sm:w-7/12 pl-0 p-5">
          <div className="space-y-2">
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold hover:underline cursor-pointer text-cyan-900">
                {airportName}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AirportCard;

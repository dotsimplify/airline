import React from "react";
import Link from "next/link";
import NextImage from "next/image";

const Chips = ({ data, baseURL }) => {
  return (
    <Link href={`/${baseURL}/${data}`}>
      <span className="flex  mx-1.5 my-2 text-sm font-semibold text-gray-500 transition duration-300  cursor-pointer rounded align-center shadow-xl border active:bg-gray-300 ease w-max">
        {/* <NextImage
          height="40"
          width="60"
          alt={data}
          src={`https://countryflagsapi.com/png/brazil`}
          className=" w-9 h-9 max-w-none"
          priority
        /> */}

        <span className="flex items-center px-4 py-2 text-lg font-normal tracking-widest capitalize text-sky-500 lg:text-base hover:underline">
          {data}
        </span>
      </span>
    </Link>
  );
};

export default Chips;

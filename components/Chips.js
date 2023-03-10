import React from "react";
import Link from "next/link";
import NextImage from "next/image";

const Chips = ({ data, baseURL }) => {
  return (
    <Link href={`/${baseURL}/${data}`}>
      <span className="flex mx-1.5 my-2 text-sm font-semibold text-gray-500 transition duration-300 bg-slate-700 rounded-full cursor-pointer align-center border shadow-md border-gray-500 active:bg-gray-300 ease w-max">
        <span className="flex items-center px-4 py-2 text-lg tracking-widest text-gray-300 uppercase lg:text-xl hover:underline">
          {data}
        </span>
      </span>
    </Link>
  );
};

export default Chips;

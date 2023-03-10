import React from "react";
import Link from "next/link";

const DestinationBadge = ({ link, text }) => {
  return (
    <Link href="/">
      <div className="flex items-center px-4 py-3 text-gray-800 capitalize bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer hover:underline hover:text-blue-500">
        <span className="font-semibold ">hello airlines</span>
      </div>
    </Link>
  );
};

export default DestinationBadge;

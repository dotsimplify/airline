import React from "react";
import Link from "next/link";

export const AirlineToast = ({ icon, link, text }) => {
  return (
    <Link href={link}>
      <div
        id="toast-simple"
        className="flex items-center w-full p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow cursor-pointer hover:divide-gray-300 group hover:bg-sky-800 "
        role="alert"
      >
        {icon}
        <div className="pl-4 text-sm font-normal capitalize group-hover:text-white">
          {text}
        </div>
      </div>
    </Link>
  );
};

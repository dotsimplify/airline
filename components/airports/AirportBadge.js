import React from "react";
import Link from "next/link";
import styles from "./AirportBadge.module.css";

const AirportBadge = ({ name, icon, slug }) => {
  return (
    <Link href={`/flight-to/${slug}`}>
      <div
        className={`flex justify-center border px-4 items-center border-gray-400  hover:border-sky-300 py-3 rounded-lg  cursor-pointer hover:text-sky-700 group ${styles.animateFly}`}
      >
        <div className={`${styles.airportIcon}`}>{icon}</div>
        <div className="font-medium capitalize group-hover:underline ">
          {name}
        </div>
      </div>
    </Link>
  );
};

export default AirportBadge;

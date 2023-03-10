import React from "react";

const CheckIn = ({ airlineName }) => {
  return (
    <>
      <h1 className="py-4 text-base font-extrabold text-center text-gray-900 capitalize dark:text-white md:text-5xl lg:text-xl">
        {airlineName} Airlines Check-in information
      </h1>
      <div className="pb-8 airportDetails">
        <p>
          You Must Be Reach Before 4 Hours of Departure time And Its Depend Also
          city and destination) and receive a printed boarding pass Web Check in{" "}
          {airlineName}.
        </p>
        <p className="py-4">Three Way Check-in Airlines</p>
        <h2>(1) {airlineName} Mobile (Web Check-in)</h2>
        <h3>(2) {airlineName} Counter Check-in with Kiosk Machine check-in</h3>
        <h3>
          (3) {airlineName} Counter Check Direct on Ticket counter check-in at
          the Airport.
        </h3>
      </div>
    </>
  );
};

export default CheckIn;

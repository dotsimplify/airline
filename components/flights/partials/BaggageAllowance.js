import React from "react";

const BaggageAllowance = ({ airlineName }) => {
  return (
    <>
      <h1 className="py-4 text-base font-extrabold text-center text-gray-900 capitalize dark:text-white md:text-5xl lg:text-xl">
        {airlineName} Airline Baggage Information and Fees{" "}
      </h1>
      <div className="airportDetails">
        <p>
          There is only one large carry-on bag, plus one item no larger than 9
          by 14 by 22 inches (22 by 35 by 56 centimetres) and one smaller{" "}
          {airlineName} Airlines baggage no larger than 9 by 10 by 17 inches (22
          cm x 25 cm x 43 cm). For passengers with Basic Economy tickets, only
          one personal item is allowed on board. Unless you are a Premier member
          or the principal card member of a MileagePlus credit card that meets
          the requirements, you will be limited to one personal item when
          travelling in Basic Economy. If your bag weighs more than the allowed
          amount, {airlineName} will have you check it on the {airlineName}{" "}
          Airlines online check-in policy and charge you $25 for gate handling
          in addition to the {airlineName} Airlines checked baggage fee. Know
          the {airlineName} Airlines baggage policy beforehand. Special meals on{" "}
          {airlineName} Airlines
        </p>
        <p className="pb-8">
          For specific routes that are scheduled to have breakfast, lunch, or
          dinner, we provide individualised meals. You can make a special dinner
          request when you book or later on in the reservation process. If the
          airline you're flying with allows passengers to request special meals,
          you'll be able to do so after signing into your MileagePlus account
          during the ticket purchase process.
        </p>
      </div>
    </>
  );
};

export default BaggageAllowance;

import React from "react";

const NameChange = ({ airlineName }) => {
  return (
    <>
      <h1 className="py-4 text-base font-extrabold text-center text-gray-900 capitalize md:text-5xl lg:text-xl">
        {airlineName} Airlines Name Change Policy Of International & Domestic
        Travel
      </h1>
      <div className="airportDetails">
        <p>
          Changing a passenger's name on a ticket reservation: why airlines
          charge such exorbitant prices Due to the inability to transfer
          tickets, you must cancel your original reservation and make a new one.
          There may be a fee associated with cancellation.
        </p>
        <h2>Take care of the name issue before final submission</h2>
        <p>
          When you purchased your travel online, did you inadvertently input the
          incorrect name? Not unusual. Is it possible to edit it? Or, is it
          feasible to transfer your reservation to another passenger if you are
          unable to take the flight that you have booked? The answer to both of
          your questions is "possible," but it will probably cost you money. The
          price will vary based on whether the {airlineName} airlines flight is
          domestic or international, the travel class, and where the ticket was
          purchased. If you plan to travel internationally, however, you must
          book your trip using the name that will appear on your passport.
        </p>
        <h2>Check the pricing carefully</h2>
        <p>
          {airlineName} airlines' price to change a passenger's name for
          domestic tickets is $88; however, this fee is not levied for their
          more inexpensive "Getaway" fares. If you have purchased a ticket with
          a Getaway fare, your only alternatives are to cancel the reservation,
          request a refund, and make a new reservation, or upgrade to an
          "Elevate" fare, which will allow you to change the passenger's name.
        </p>
        <p className="py-4">
          A domestic economy class name change on {airlineName} airlines costs
          $99, although this service is only available for flights purchased
          with the Flex upgrade option. Tickets purchased through the Red e-Deal
          campaign do not accept name changes, so unfortunately your luck has
          run out. Bottom Line
        </p>
        <p>
          If you are planning to change your name around the time at
          Airlinesexplore.com you will be arranging travel, use the name that
          will appear on the identification that you will use. Consequently, if
          you do not have a passport or if your passport has expired, you may be
          compelled to apply for a passport using the name you had before you
          changed it, even if you plan to travel after a wedding or other event
          at the time of which you adopted a new name.
        </p>
        <p>
          If this is the case, it is probable that, with the exception of your
          {airlineName} airlines passport, all of your invoices, records, and
          identity documents will reflect your new name.
        </p>
        <p>
          {airlineName} Airlines name change Fee and Policy for the passenger,
          we need To Correct name with match of Govt Id Proof and passport. We
          are not providing name Change policy Not allow another person and
          unmatched Flight Ticket name. So pls correct misspelled name on
          Tickets Before Departure. Name Change Fee on {airlineName} Airlines
          Request on call and via mail {airlineName} Airlines we are Charge
          200USD Before 2 Hours Departure and applicable fare deference.
        </p>
      </div>
    </>
  );
};

export default NameChange;

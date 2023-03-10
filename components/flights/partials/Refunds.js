import React from "react";

const Refunds = ({ airlineName }) => {
  return (
    <>
      <h1 className="py-4 text-base font-extrabold text-center text-gray-900 capitalize dark:text-white md:text-5xl lg:text-xl">
        {airlineName} Airlines Flight Cancellation and Refund Policy
        Reimbursement
      </h1>
      <div className="airportDetails">
        <h3>Guide to know the Refunds & Cancellation policy</h3>
        <p>
          Please contact the Customer Service department if you wish to obtain a
          refund. If you are entitled for a refund, the amount of the return
          will be equal to the full price of the ticket if it was never used.
        </p>
        <h3>Understand the rules properly</h3>
        <p>
          If just a portion of the ticket was used, the refund amount will be
          equal to the difference between the amount paid and the amount that
          would have been required if the trip had been purchased in advance.
        </p>
        <p>
          As a result of the current circumstance, {airlineName} airlines has
          received a large number of refund requests in a relatively short
          period of time.
          {airlineName} airlines is continuing to process the refund requests
          made by the clients, and they are doing so in the order in which they
          were received. There have been numerous requests on
          Airlinesexplore.com, and they are working as quickly as possible to
          process them all.
        </p>

        <h3>
          Ticket Reservations or Purchases Cancelled Within the First
          Twenty-Four Hours of the Booking
        </h3>

        <p>
          When airline tickets happen to be bought at least seven days before to
          a flight's scheduled departure time and date, airlines must either:
          Allow clients to cancel their reservation and earn a full refund
          without incurring any penalties for up to twenty-four hours; or Allow
          clients to reserve (place on hold) a ticket at the indicated price for
          a period of twenty-four hours without having to pay for the ticket.
          The law does not require airlines to offer customers the option of
          holding or refunding their tickets. Before purchasing a ticket,
          familiarise yourself with the policies of your {airlineName} airlines.
          Check the all aspects of cancellation If, however, an airline accepts
          a ticket without requiring payment, it must allow the customer to
          cancel the reservation without penalty during the first twenty-four
          hours. When an airline requires a payment to make a reservation, the
          operator must allow the consumer to cancel both the payment and the
          reservation within the first twenty-four hours for a full refund. In
          some instances, seeking a refund for the ticket and then rebooking may
          be more cost-effective than paying a change fee and any potential
          price difference between the original ticket price and the current
          ticket price. Nevertheless, please keep in mind that {airlineName}
          airlines ticket prices are subject to quick change.
        </p>
      </div>
    </>
  );
};

export default Refunds;

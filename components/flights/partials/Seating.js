import React from "react";

const Seating = ({ airlineName }) => {
  return (
    <>
      <h1 className="pb-4 text-base font-extrabold text-center text-gray-900 capitalize dark:text-white md:text-5xl lg:text-xl">
        {airlineName} Airline Seating of Economy Business class & First class
      </h1>
      <div className="airportDetails">
        <h2>{airlineName} Airline Classes</h2>
        <p>
          {airlineName} Airline offers business or first class, premium economy,
          and coach as its tiers of service. However, there is no consistent
          method by which reservation systems label reservations. The charges
          for individual
          {airlineName} Airline flight booking codes might vary greatly, and so
          can the costs for the nine different fare classes for mileage tickets.
          Get the details on the specifications of the classes here at{" "}
          <a href="https://airlinesexperts.com">www.airlinesexperts.com</a>.
        </p>
        <h2>Economy Class</h2>
        <p>
          Coffee, tea, soft drinks, juice, and water are all available to
          passengers for free at any time during their flight. Ask the flight
          attendant for one of these drinks on any flight that covers less than
          500 kilometres (300 miles). On flights that are less than 500
          kilometres in length, we will not be serving free refreshments.
          However, you are welcome to bring your own food on board flights{" "}
          {airlineName} at any time.
        </p>

        <h2>The Economy Premium Class</h2>
        <p>
          Mileage {airlineName} Airline flight bookings are more expensive, but
          they include benefits such as extra seat space, free drinks, better
          food, and no fees for checked bags. Booking flights on airlines that
          offer this type of service might be challenging as well. Some
          customers may have bad reactions to products because they contain
          allergens like milk, sesame, shellfish, soy, tree nuts, or wheat.
        </p>

        <h2>Business Class</h2>
        <p>
          Business class passengers on {airlineName} Airline can choose between
          two and three entrees. In business class, full-course dinners and
          gourmet meals are served in addition to our signature meals and
          gourmet meals. You can choose from various appetisers, breakfast
          foods, lunch dishes, dinner entrees, and desserts. Business class
          passengers need to know that during {airlineName} Airline flight
          booking, they happen to be less likely to get hungry than first class
          passengers.
        </p>

        <h2>First Class</h2>
        <p className="pb-8">
          Water, juice, soft drinks, freshly brewed coffee, tea, and your choice
          of alcoholic beverages like wines, beers, and spirits are all
          available to you at no cost throughout your flight.
        </p>
      </div>
    </>
  );
};

export default Seating;

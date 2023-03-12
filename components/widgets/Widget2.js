import { useState } from "react";

const FlightSearchWidget = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [adultPassengers, setAdultPassengers] = useState(1);
  const [childPassengers, setChildPassengers] = useState(0);
  const [isBusinessClass, setIsBusinessClass] = useState(false);

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handleArrivalDateChange = (event) => {
    setArrivalDate(event.target.value);
  };

  const handleAdultPassengersChange = (event) => {
    setAdultPassengers(Number(event.target.value));
  };

  const handleChildPassengersChange = (event) => {
    setChildPassengers(Number(event.target.value));
  };

  const handleBusinessClassChange = (event) => {
    setIsBusinessClass(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      origin,
      destination,
      departureDate,
      arrivalDate,
      adultPassengers,
      childPassengers,
      isBusinessClass,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-xl font-medium mb-4">Flight Search</h2>
      <div className="mb-4">
        <label htmlFor="origin" className="block mb-2 font-medium">
          Origin
        </label>
        <input
          type="text"
          id="origin"
          value={origin}
          onChange={handleOriginChange}
          className="w-full border-gray-300 border-solid border py-2 px-4 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="destination" className="block mb-2 font-medium">
          Destination
        </label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={handleDestinationChange}
          className="w-full border-gray-300 border-solid border py-2 px-4 rounded-lg"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="departureDate" className="block mb-2 font-medium">
            Departure Date
          </label>
          <input
            type="date"
            id="departureDate"
            value={departureDate}
            onChange={handleDepartureDateChange}
            className="w-full border-gray-300 border-solid border py-2 px-4 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="arrivalDate" className="block mb-2 font-medium">
            Arrival Date
          </label>
          <input
            type="date"
            id="arrivalDate"
            value={arrivalDate}
            onChange={handleArrivalDateChange}
            className="w-full border-gray-300 border-solid border py-2 px-4 rounded-lg"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="adultPassengers" className="block mb-2 font-medium">
          Passengers
        </label>
        <div className="flex items-center">
          <label htmlFor="adultPassengers" className="mr-2">
            Adults:
          </label>
          <select
            id="adultPassengers"
            value={adultPassengers}
            onChange={handleAdultPassengersChange}
            className="w-20 border-gray-300 border-solid border py-2 px-4 rounded-lg mr-4"
          >
            {[...Array(10)].map((i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <label htmlFor="childPassengers" className="mr-2">
            Children:
          </label>
          <select
            id="childPassengers"
            value={childPassengers}
            onChange={handleChildPassengersChange}
            className="w-20 border-gray-300 border-solid border py-2 px-4 rounded-lg mr-4"
          >
            {[...Array(10)].map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <input
          type="checkbox"
          id="businessClass"
          checked={isBusinessClass}
          onChange={handleBusinessClassChange}
          className="mr-2"
        />
        <label htmlFor="businessClass" className="font-medium">
          Business Class
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
      >
        Search
      </button>
    </form>
  );
};

export default FlightSearchWidget;

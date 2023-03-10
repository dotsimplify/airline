import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const airports = [
  { label: "New York (JFK)", value: "JFK" },
  { label: "Los Angeles (LAX)", value: "LAX" },
  { label: "Chicago (ORD)", value: "ORD" },
  { label: "San Francisco (SFO)", value: "SFO" },
  { label: "Miami (MIA)", value: "MIA" },
  { label: "Dallas (DFW)", value: "DFW" },
  { label: "Las Vegas (LAS)", value: "LAS" },
];

const passengers = [
  { label: "1 passenger", value: "1" },
  { label: "2 passengers", value: "2" },
  { label: "3 passengers", value: "3" },
  { label: "4 passengers", value: "4" },
];

const FlightSearch = (props) => {
  const today = new Date().toISOString().split("T")[0];
  const [origin, setOrigin] = useState("LAX");
  const [originName, setOriginName] = useState("Los Angeles");
  const [destination, setDestination] = useState("LON");
  const [destinationName, setDestinationName] = useState("London");
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [passengerCount, setPassengerCount] = useState("1");

  const handleSearch = () => {
    console.log({
      origin: origin?.value,
      destination: destination?.value,
      departDate,
      returnDate,
      passengerCount: passengerCount?.value,
    });
  };

  return (
    <div
      onClick={() => props.isOpen && props.setIsOpen(false)}
      className="absolute z-40 flex flex-col items-center px-4 py-4 mx-auto mt-8 bg-white border rounded-lg shadow-lg md:py-12 md:flex-row max-w-7xl left-6 right-6 2xl:bottom-32 md:-bottom-7 md:left-6 md:right-6 justify-evenly"
    >
      <div className="w-full px-1 md:w-auto">
        <label
          className="block mb-2 text-sm font-semibold text-gray-700"
          htmlFor="origin"
        >
          Origin
        </label>
        <Select
          className="text-sm"
          instanceId="origin"
          options={airports}
          value={origin}
          onChange={setOrigin}
          placeholder="Select origin airport"
        />
      </div>
      <div className="w-full px-1 md:w-auto">
        <label
          className="block mb-2 text-sm font-semibold text-gray-700"
          htmlFor="destination"
        >
          Destination
        </label>
        <Select
          className="text-sm"
          instanceId="destination"
          options={airports}
          value={destination}
          onChange={setDestination}
          placeholder="Select destination airport"
        />
      </div>
      <div className="w-full px-1 md:w-auto">
        <label
          className="block mb-2 text-sm font-semibold text-gray-700"
          htmlFor="departDate"
        >
          Depart Date
        </label>
        <DatePicker
          id="departDate"
          selected={departDate}
          onChange={(date) => setDepartDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select depart date"
          className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md "
        />
      </div>
      <div className="w-full px-1 md:w-auto">
        <label
          className="block mb-2 text-sm font-semibold text-gray-700"
          htmlFor="returnDate"
        >
          Return Date
        </label>
        <DatePicker
          id="returnDate"
          selected={returnDate}
          onChange={(date) => setReturnDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select return date"
          className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md"
        />
      </div>
      <div className="w-full px-1 md:w-auto">
        <label
          className="mb-2 font-bold text-gray-700 "
          htmlFor="passengerCount"
        >
          Passengers
        </label>
        <Select
          className="text-sm"
          instanceId="passengerCount"
          options={passengers}
          value={passengerCount}
          onChange={setPassengerCount}
          placeholder="Select Passengers"
        />
      </div>
      <button
        onClick={handleSearch}
        className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm text-white rounded-lg md:w-auto md:mt-0 bg-sky-500 lg:mt-5 hover:bg-sky-600 focus:bg-sky-600 focus:outline-none"
      >
        <FaSearch className="mr-2" />
        Search Flights
      </button>
    </div>
  );
};

export default FlightSearch;

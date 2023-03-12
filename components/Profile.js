import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="px-4 py-16 bg-gray-50 sm:px-6 lg:py-16 lg:px-8">
      <div className="mx-auto max-w-[2000px]">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Our Mission
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Explore the World, Fly in sky with Airlines Experts
          </p>
          <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
            Welcome to our website, your one-stop destination for all your
            travel needs. We specialize in providing comprehensive travel
            solutions, including flight bookings, hotel reservations, and
            airport information, to make your travel experience seamless and
            hassle-free.
          </p>
        </div>

        <div className="mt-10 lg:text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Flight Booking
          </h2>
          <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
            Our flight booking platform offers a wide range of airlines and
            routes, giving you the flexibility to choose the one that suits your
            needs and budget. Our user-friendly interface and advanced search
            options make it easy for you to find the best deals and book your
            tickets with just a few clicks.
          </p>
        </div>

        <div className="mt-10 lg:text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Hotel Booking
          </h2>
          <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
            Finding the perfect accommodation for your trip has never been
            easier. Our hotel booking platform features a vast selection of
            hotels, from budget-friendly options to luxurious resorts, in every
            corner of the world. With our competitive prices and easy-to-use
            booking system, you can find the perfect hotel to suit your
            preferences and budget.
          </p>
        </div>

        <div className="mt-10 lg:text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Airport Information
          </h2>
          <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
            Our website also provides up-to-date information about airports
            around the world, including flight schedules, airport maps, and
            transportation options. Whether you're a seasoned traveler or a
            first-time flyer, our airport information section has everything you
            need to navigate the airport with ease.
          </p>
        </div>
        <div className="mt-10 lg:text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Our Mission
          </h2>

          <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
            At our website, we are dedicated to providing our customers with the
            best travel experience possible. We are committed to offering
            competitive prices, excellent customer service, and the latest
            travel information to ensure that our customers have a stress-free
            and enjoyable trip.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

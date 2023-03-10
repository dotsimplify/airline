import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaWikipediaW,
} from "react-icons/fa";
import { AiFillPhone, AiOutlineGlobal } from "react-icons/ai";

const AirportCompleteCard = ({ airport }) => {
  return (
    <div>
      <h1 className="pt-8 text-2xl font-semibold tracking-wider text-center text-white capitalize bg-sky-800 md:text-3xl">
        Information about {airport?.title?.rendered}
      </h1>
      <section className="py-10 overflow-hidden bg-sky-800">
        <div className="container px-4 mx-auto">
          <div className="px-8 py-16 bg-white md:px-16 rounded-xl">
            <div className="flex flex-wrap -m-8">
              <div className="w-full p-8 md:w-1/2">
                <img
                  className="mx-auto  max-h-[30rem] md:ml-0 rounded-3xl"
                  src={airport?.acf?.airport_image}
                  alt=""
                />
              </div>
              <div className="w-full p-8 md:w-1/2">
                <div className="md:max-w-md">
                  <span className="inline-block mb-5 text-sm font-bold tracking-widest uppercase text-sky-800">
                    Airports
                  </span>
                  <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900 capitalize font-heading">
                    <span className="text-sky-800">
                      {airport?.title?.rendered}
                    </span>
                  </h2>
                  {airport.acf.phone && (
                    <div className="flex items-center mb-4 group">
                      <AiFillPhone
                        className="mr-2 group-hover:text-sky-600"
                        size={20}
                      />
                      <a href={`tel:${airport.acf.phone}`}>
                        <p className="mr-4 text-sm hover:underline hover:text-sky-700">
                          {airport.acf.phone}
                        </p>
                      </a>
                    </div>
                  )}
                  {airport.acf.phone && (
                    <div className="flex items-center mb-4 group">
                      <AiOutlineGlobal
                        className="mr-2 group-hover:text-sky-600 "
                        size={20}
                      />
                      <a
                        rel="no-follow noreferrer"
                        className="text-sm hover:underline group-hover:text-sky-600 "
                        href={airport.acf.website}
                      >
                        {airport.acf.website}
                      </a>
                    </div>
                  )}
                  <div className="flex flex-wrap pb-8 -m-2">
                    <div className="w-auto p-2">
                      <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                        <div className="w-auto pt-1 mr-2">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                              fill="#3B82F6"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900">
                            ZIP CODE : {airport.acf.zip_code}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                        <div className="w-auto pt-1 mr-2">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                              fill="#3B82F6"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900">
                            Status : {airport.acf.status}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                        <div className="w-auto pt-1 mr-2">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                              fill="#3B82F6"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900">
                            IATA : {airport.acf.iata}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                        <div className="w-auto pt-1 mr-2">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                              fill="#3B82F6"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900">
                            City : {airport.acf.city}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                        <div className="w-auto pt-1 mr-2">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                              fill="#3B82F6"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900">
                            COUNTRY : {airport.acf.country}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                        <div className="w-auto pt-1 mr-2">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                              fill="#3B82F6"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900">
                            Longitude : {airport.acf.longitute}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <div className="flex flex-wrap px-3 py-2 bg-gray-100 rounded-full">
                        <div className="w-auto pt-1 mr-2">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                              fill="#3B82F6"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900">
                            Lattitude : {airport.acf.lattitude}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className="pb-6 text-gray-600"> {airport.acf.address}</h6>
                  <div className="flex items-center justify-start cursor-pointer">
                    {airport.acf.facebook_url && (
                      <a target="_blank" href={airport.acf.facebook_url}>
                        <FaFacebook
                          className="mr-2 hover:text-sky-700"
                          size={28}
                        />
                      </a>
                    )}
                    {airport.acf.instagram_url && (
                      <a target="_blank" href={airport.acf.instagram_url}>
                        <FaInstagram
                          className="mx-6 hover:text-pink-700"
                          size={28}
                        />
                      </a>
                    )}
                    {airport.acf.linkedin_url && (
                      <a target="_blank" href={airport.acf.linkedin_url}>
                        <FaLinkedin className=" hover:text-sky-600" size={28} />
                      </a>
                    )}
                    {airport.acf.twitter_url && (
                      <a target="_blank" href={airport.acf.twitter_url}>
                        <FaTwitter
                          className="mx-6 hover:text-sky-600"
                          size={28}
                        />
                      </a>
                    )}
                    {airport.acf.wikipedia_url && (
                      <a target="_blank" href={airport.acf.wikipedia_url}>
                        <FaWikipediaW
                          className="hover:text-sky-600"
                          size={28}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* https://www.aviasales.com/search?=&adults=1&children=0&ct_guests=1+passenger&ct_rooms=1&currency=usd&depart_date=2023-03-17&destination_iata=LON&destination_name=London&infants=0&locale=en&marker=372773.Zzff3186d85343467985f4e00-372773&one_way=false&origin_iata=LAX&origin_name=Los+Angeles&return_date=2023-03-24&trip_class=0&with_request=true */}
          <div className=" rounded-lg p-12 bg-white my-8 airportDetails">
            <h1> Searching Flight Deals of</h1>
            <p>
              Searching Great Deals Of last-minute flights Tickets & On way
              Flight Deals and Round-trip flights To . Looking Cheapest Airfare
              Deals on https://airlinesexperts.com World’s Best Fare Compare
              Portal.
            </p>
            <h1>Cheap Fly to</h1>
            <p>
              Planning Travel First Find Flexible Travel and Cheapest Month of
              Flight to , Best time to Fly & best way to fly to.
            </p>
            <h1>
              Flights to {airport?.title?.rendered} (
              {airport?.acf.iata && airport?.acf.iata})
            </h1>
            <p>
              Millions of people pass through the terminals at{" "}
              {airport?.acf.iata}, commonly known as {airport?.title?.rendered},
              every year. The airport is a major transit point for passengers
              flying to and from all over the world-wide, and other regions of
              the globe. This airport is largely responsible for servicing the
              Greater {airport?.title?.rendered} Area, the second most populous
              metropolitan area in the All Over World. One could argue that it
              is the world's busiest airport because of its location in the
              Airport city. This airport consistently happens to rank as one of
              the busiest in the Honiara International Airport area.
            </p>
            <h1>
              {airport?.title?.rendered} Terminal ({airport?.acf?.iata})
            </h1>
            <p>
              {airport?.title?.rendered} 10 + Terminals include the Terminal
              TBIT (Tom Bradley International Terminal), as well as Terminals 1
              to 8. The terminals are arranged in a U shape, making a trip
              between them a four-minute walk if the buildings are near to one
              another. Central Terminal Area consists of a U-shaped cluster of
              terminals, with Tom Bradley Terminal (also known as Terminal B) as
              its hub (CTA). The term "Central Terminal Area" is often used to
              describe this part of town. The North Terminals 1, 2, and 3 may be
              accessed from the right side, while the South Terminals 4, 5, 6,
              7, and 8 can be accessed from the left.
            </p>
            <h1>
              Get About {airport?.title?.rendered} {airport?.acf?.iata}
            </h1>
            <p>
              To move around {airport?.title?.rendered}, having access to one's
              own vehicle is essential. {airport?.title?.rendered} is spread out
              over an area of roughly 500 square miles, so although there is a
              public transit system, the routes it offers are limited in
              contrast to those found in other large cities. Since the area is
              crossed by several major freeways, some of which get congested
              during rush hours, it is suggested that drivers avoid making trips
              in the wee hours of the morning or late at night. A map or GPS
              device will come in handy if you want to get around the area
              without getting lost on
              {airport?.acf?.iata} Airport.
            </p>
            <h1>{airport?.title?.rendered} Departure</h1>
            <p>
              Visit the Qantas {airport?.title?.rendered}{" "}
              {airport?.acf.iata && airport?.acf.iata} Airport Departures
              https://airlinesexperts.com to get the latest information on your
              flight leaving from {airport?.title?.rendered}. You can check the
              flight's delay status, as well as the flight's scheduled departure
              and arrival times, terminal, and gate, on this page. You can
              locate every flight that departs from {airport?.title?.rendered}{" "}
              on this page dedicated to {airport?.acf?.iata} Departures .
            </p>
            <h1>{airport?.title?.rendered} Arrival</h1>
            <p>
              Each customer must claim their bags and travel through customs and
              immigration upon arrival in {airport?.title?.rendered}, regardless
              of their final destination. If you change the "By Airport"
              search's toggle to the "Arrivals" setting, you'll be able to see
              every flight that has landed at any airport. Leave your bags at
              that location.
            </p>
            <h1>Direct Flight to {airport?.title?.rendered}</h1>
            <p>
              Pick your flight configuration (round trip, one way, or
              multi-city) and use the flexible filters to specify your
              preferences (such as direct flights and flexible refund policies).
              Additionally, round-trip and multi-city flights are available. You
              have the option of refining your search results to see just the
              airlines and cabin classes that fit your needs. This is a really
              simple task.
            </p>

            <p>
              {airport?.title?.rendered} Check-in Time, checked baggage, Get
              boarding Airport Counter The check-in time for your international
              flight will vary depending on the airline you are taking. On some
              flights, check-in closes 90 minutes prior to the planned departure
              time. Others are permitted to arrive one hundred twenty minutes
              early. If you are travelling internationally, you should check in
              in advance and allow plenty time for security screenings and
              immigration processes. Please keep in mind that unplanned delays
              can occur at any time, but especially during peak travel hours,
              when planning your travel. After this period, check-in and the bag
              drop will no longer be possible. Allow yourself ample time to
              arrive well before the appointed time.
            </p>
            <p>
              <a href="https://airlinesexperts.com">
                https://airlinesexperts.com
              </a>{" "}
              Best Option for Choice Flight Travel Planning Online All
              Destination Routs World Wide. It Is the Best Way to Compare
              Cheapest Flight Tickets from {airport?.title?.rendered}
              Use{" "}
              <a href="https://airlinesexperts.com">
                https://airlinesexperts.com
              </a>
              , Find Cheapest Airfare International Airport and Domestic
              Airport.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirportCompleteCard;

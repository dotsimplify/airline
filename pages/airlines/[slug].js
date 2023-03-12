import React from "react";
import axios from "axios";
import Head from "next/head";
import { FaChair, FaDollarSign, FaBan } from "react-icons/fa";
import { MdFlightTakeoff, MdShoppingBag, MdChangeCircle } from "react-icons/md";
import FaqComp from "../../components/Faq";
import { useRouter } from "next/router";
import { faqData } from "../../app/helper/helper";
import BlogThumbnail from "../../components/blog/BlogThumbnail";
import { AirlineToast } from "../../components/flights/AirlineToast";
import DestinationBadge from "../../components/flights/DestinationBadge";
import AirlineDetailCard from "../../components/airports/AirlineDetailCard";

const AirlineDetail = (props) => {
  const router = useRouter();
  if (!router.isFallback && !props.airline) {
    return "Loading Article ...";
  }

  const allFaqs = faqData(props.airline?.title?.rendered);
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="description"
          content=" Find the best deals on flights and get all the information you need about airports and airlines at airlinesexperts.com. Compare prices, schedules, and routes to make your travel plans a breeze."
        />
        <link
          rel="canonical"
          href={`https://airlinesexperts.com/flight-to/${props.airline.slug}`}
        />
        <meta
          name="keywords"
          content="airlinesexperts , travel , unexplored places , travel after covid , beach , tourist places , flights , book cheap hotel , travel guide , world's every city "
        />

        <title>
          Book Cheap Flights, Get Airports & Airlines Information | Airline
          Experts
        </title>
        <meta
          property="og:title"
          content="Book Cheap Flights, Get Airports & Airlines Information | Airlines Experts"
        />
        <meta property="og:site_name" content="Airline Experts Info" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://airlinesexperts.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Find the best deals on flights and get all the information you need about airports and airlines at airlinesexperts.com. Compare prices, schedules, and routes to make your travel plans a breeze."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://airlinesexperts.com/logo.png"
        />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Find the best deals on flights and get all the information you need about airports and airlines at airlinesexperts.com. Compare prices, schedules, and routes to make your travel plans a breeze."
        />
        <meta
          name="twitter:description"
          content="Find the best deals on flights and get all the information you need about airports and airlines at airlinesexperts.com. Compare prices, schedules, and routes to make your travel plans a breeze."
        />
        <meta name="twitter:site" content="@airlinesexperts" />
        <meta
          name="twitter:image"
          content="http://www.airlinesexperts.com/logo.png"
        />
        <meta name="twitter:creator" content="@airlinesexperts" />
      </Head>

      <div className="container px-6 m-auto text-gray-600 bg-gray-50 md:px-12 xl:px-6">
        <div className="pb-12 space-y-2 text-center">
          <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-sky-100 text-sky-600">
            Airline
          </span>
          <h1 className="text-2xl font-bold capitalize text-cyan-900 md:text-2xl">
            {props.airline?.title?.rendered} Reservations & Flight Deals
          </h1>
          <p className="text-2xl text-cyan-900 md:text-base">
            Find {props.airline?.title?.rendered} flights Information. Know
            about United Airlines reservations, flight status, web check-in,
            schedule, and baggage policy
          </p>
        </div>
      </div>
      <div className="bg-white">
        <AirlineDetailCard
          airlineLogo={props.airline?.acf?.airline_image}
          airlineAddress={props.airline?.acf?.address}
          airlineStatus="Active"
          airlineIATA={props.airline?.acf?.iata}
          airlineCallSign={props.airline?.acf?.airline_call_sign}
          phoneNumber={props.airline?.acf?.phone}
          websiteUrl={props.airline?.acf?.website}
        />
      </div>
      <div className="px-12 pt-8 bg-white">
        <h1 className="text-2xl font-bold capitalize text-sky-600 md:text-2xl">
          Reasons to choose {props.airline?.title?.rendered}
        </h1>
      </div>
      <div
        className="px-12 py-2 bg-white airportDetails"
        dangerouslySetInnerHTML={{
          __html: props.airline?.acf?.reasons_to_choose_airline,
        }}
      />

      <div className="px-12 pt-4 bg-white">
        <h1 className="text-2xl font-bold capitalize text-sky-600 md:text-2xl">
          An Overview of {props.airline?.title?.rendered}
        </h1>
      </div>
      <div
        className="px-12 pt-4 pb-4 bg-white airportDetails"
        dangerouslySetInnerHTML={{
          __html: props.airline?.acf?.airline_overview,
        }}
      />

      <div className="px-12 pt-2 bg-white">
        <h1 className="text-2xl font-bold capitalize text-sky-600 md:text-2xl">
          The History of {props.airline?.title?.rendered}
        </h1>
      </div>
      <div
        className="px-12 pt-4 pb-8 bg-white airportDetails"
        dangerouslySetInnerHTML={{
          __html: props.airline?.acf?.airline_history,
        }}
      />

      <div className="px-12 pt-2 bg-white">
        <h1 className="text-2xl font-bold capitalize text-sky-600 md:text-2xl">
          {props.airline?.title?.rendered} Destinations and Hubs
        </h1>
      </div>
      <div
        className="px-12 pt-4 pb-8 bg-white airportDetails"
        dangerouslySetInnerHTML={{
          __html: props.airline?.acf?.destination_hubs,
        }}
      />

      <div className="px-12 pt-2 bg-white">
        <h1 className="text-2xl font-bold capitalize text-sky-600 md:text-2xl">
          How to do {props.airline?.title?.rendered} Flight Reservations
        </h1>
      </div>
      <div
        className="px-12 pt-4 pb-8 bg-white airportDetails"
        dangerouslySetInnerHTML={{
          __html: props.airline?.acf?.airline_flight_reservations,
        }}
      />

      <div className="px-12 pt-2 bg-white">
        <h1 className="text-2xl font-bold capitalize text-sky-600 md:text-2xl">
          {props.airline?.title?.rendered} international flight booking
        </h1>
      </div>
      <div
        className="px-12 pt-4 pb-8 bg-white airportDetails"
        dangerouslySetInnerHTML={{
          __html: props.airline?.acf?.international_flight_booking,
        }}
      />

      <div className="grid grid-flow-row grid-cols-3 gap-4 p-12 bg-gray-100">
        <AirlineToast
          icon={<MdFlightTakeoff className="group-hover:text-gray-300" />}
          link={`/flights/check-in-details-for/${props.airline.slug}`}
          text={`${props.airline?.title?.rendered} Check in Progress`}
        />
        <AirlineToast
          icon={<MdShoppingBag className="group-hover:text-gray-300" />}
          link={`/flights/baggage-allowance-details-for/${props.airline.slug}`}
          text={`${props.airline?.title?.rendered} Baggage Allowance`}
        />
        <AirlineToast
          icon={<FaChair className="group-hover:text-gray-300" />}
          link={`/flights/seating-details-for/${props.airline.slug}`}
          text={`${props.airline?.title?.rendered} Seating`}
        />
        <AirlineToast
          icon={<FaDollarSign className="group-hover:text-gray-300" />}
          link={`/flights/booking-fee-details-for/${props.airline.slug}`}
          text={`${props.airline?.title?.rendered} Booking Fee`}
        />
        <AirlineToast
          icon={<FaBan className="group-hover:text-gray-300" />}
          link={`/flights/flight-cancellation-and-refund-for/${props.airline.slug}`}
          text={`${props.airline?.title?.rendered} Refunds & Cancellation`}
        />
        <AirlineToast
          icon={<MdChangeCircle className="group-hover:text-gray-300" />}
          link={`/flights/flight-ticket-name-change-fee/${props.airline.slug}`}
          text={`${props.airline?.title?.rendered} Name Change fee`}
        />
      </div>

      <div className="px-12 py-6 bg-white">
        <h1 className="text-2xl font-bold capitalize text-sky-600 md:text-2xl">
          {props.airline?.title?.rendered} Fly At These Destinations
        </h1>
      </div>

      <div className="flex flex-wrap items-center gap-4 p-8 px-12 bg-gray-100">
        <DestinationBadge />
        <DestinationBadge />
        <DestinationBadge />
        <DestinationBadge />
        <DestinationBadge />
        <DestinationBadge />
      </div>

      {props.airline && props.airline.length > 0 && (
        <div className="grid grid-cols-1 gap-4 px-8 py-2 md:grid-cols-2 lg:grid-cols-3 ">
          {props.airline.map((i) => {
            return <BlogThumbnail data={i} key={i} />;
          })}
        </div>
      )}

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[2000px]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-transparent bg-gradient-to-r from-cyan-700 via-sky-400 to-indigo-500 bg-clip-text sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16 ">
            {allFaqs &&
              allFaqs.length > 0 &&
              allFaqs.map((one) => {
                return <FaqComp key={one.question} data={one} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AirlineDetail;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/airlines`);
  const posts = await res.data;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/airlines?slug=${params.slug}`
    );
    const data = await res.data;
    return {
      props: { airline: data[0] },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

import React from "react";
import axios from "axios";
import BlogThumbnail from "../components/blog/BlogThumbnail";
import Head from "next/head";
import { indexPageSchema, aToZ } from "../app/helper/helper";
import Points from "../components/Points";
import AirlineBadgeForPage from "../components/flights/AirlineBadgeForPage";
import BoardingPass from "../components/boardingPass/BoardingPass";
import AirportCard from "../components/airports/AirportCard";

const Index = (props) => {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="description"
          content="Explore the hidden gems and unexplored places of the world's cities with Airline Experts Info. Our comprehensive city guides offer complete information and honest reviews, including must-visit attractions, off-the-beaten-path locations, and secret places to discover. Get insider tips and travel details to help you plan your next adventure and experience the world like never before."
        />
        <link rel="canonical" href="https://airlinesexperts.com" />
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
        <script type="application/ld+json">
          {indexPageSchema([
            "about",
            "contact",
            "airlines",
            "blogs",
            "airports",
            "legal/privacy-policy",
            "legal/terms-and-conditions",
          ])}
        </script>
      </Head>

      <div className="mx-auto bg-white max-w-7xl">
        <Points />
        <div className="flex items-center justify-between pt-6 bg-white lg:px-12">
          <h2 className="mt-4 text-2xl font-bold text-gray-900 md:text-4xl">
            Choose from 1000+ Airlines
          </h2>
          <button className="text-base text-sky-600 hover:underline">
            View All
          </button>
        </div>
        <div className="flex flex-wrap px-12 py-8 bg-white">
          {props.airlines &&
            props.airlines &&
            props.airlines.slice(0, 10).map((one) => {
              return (
                <AirlineBadgeForPage
                  image={one?.acf?.airline_image}
                  name={one?.title?.rendered}
                  key={one.id}
                />
              );
            })}
        </div>
        <BoardingPass />
        <div className="py-16 bg-gradient-to-br from-cyan-50 to-sky-100">
          <div className="container px-6 m-auto text-gray-600 md:px-12 xl:px-6">
            <div className="mb-12 space-y-2 text-center">
              <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">
                Airports
              </span>
              <h2 className="text-2xl font-bold text-cyan-900 md:text-4xl">
                World's Major Airports
              </h2>
              <p className="lg:w-6/12 lg:mx-auto">
                All the information you need to navigate your way through the
                airport, location, including flight schedules.
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-2">
              {props.airports &&
                props.airports &&
                props.airports.map((one) => {
                  return (
                    <AirportCard
                      image={one.acf.airport_image}
                      airportName={one.title.rendered}
                      slug={`/flight-to/${one.slug}`}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <div className="relative hidden px-6 py-4 bg-white lg:px-12 md:block">
          <h1 className="text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-3xl">
            Articles
          </h1>
        </div>
        {props.articles && props.articles.length > 0 && (
          <div className="grid grid-cols-1 gap-4 px-12 py-2 bg-white md:grid-cols-2 lg:grid-cols-3 ">
            {props.articles.map((one) => {
              return <BlogThumbnail data={one} key={one.id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const allAirlines = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/airlines`);
  const allAirports = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/airports`);
  const articles = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts?_embed`);

  const responses = await Promise.all([allAirlines, allAirports, articles]);

  return {
    props: {
      airlines: responses[0].data,
      airports: responses[1].data,
      articles: responses[2].data,
    },
    revalidate: 30,
  };
}

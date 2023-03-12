import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import Pagination from "../components/Pagination";
import AirlineBadgeForPage from "../components/flights/AirlineBadgeForPage";

const Airlines = ({ airlines }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(100);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentResultsToMap =
    airlines &&
    airlines.length > 0 &&
    airlines.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {}, [postsPerPage]);
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="description"
          content="Explore the hidden gems and unexplored places of the world's cities with Airline Experts Info. Our comprehensive city guides offer complete information and honest reviews, including must-visit attractions, off-the-beaten-path locations, and secret places to discover. Get insider tips and travel details to help you plan your next adventure and experience the world like never before."
        />
        <link rel="canonical" href="https://airlinesexperts.com/airlines" />
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
      <section className="py-12 bg-gray-50 sm:pb-16">
        <div className="px-6 mx-auto max-w-[2000px] lg:px-8">
          <h2 className="text-lg font-semibold leading-8 text-center text-gray-900">
            Book your Flight with World's 600+ Airlines
          </h2>
          <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {currentResultsToMap &&
              currentResultsToMap.length > 0 &&
              currentResultsToMap.map((one) => {
                return (
                  <AirlineBadgeForPage
                    image={one?.acf?.airline_image}
                    name={one?.title?.rendered}
                    key={one.id}
                    slug={one.slug}
                  />
                );
              })}
          </div>
          <div className="py-4">
            <Pagination
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              totalPosts={airlines && airlines.length}
              paginate={paginate}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Airlines;

export async function getStaticProps() {
  const allAirlines = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/airlines`);

  const responses = await Promise.all([allAirlines]);

  return {
    props: {
      airlines: responses[0].data,
    },
    revalidate: 10,
  };
}

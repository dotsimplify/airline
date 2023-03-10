import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import TermsTemplate from "../../components/TermsTemplate";
import Head from "next/head";

const AllTerms = (props) => {
  const router = useRouter();
  if (!router.isFallback && !props.data) {
    return "Loading Term ...";
  }

  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="description"
          content="Explore the hidden gems and unexplored places of the world's cities with Airline Experts Info. Our comprehensive city guides offer complete information and honest reviews, including must-visit attractions, off-the-beaten-path locations, and secret places to discover. Get insider tips and travel details to help you plan your next adventure and experience the world like never before."
        />
        <link
          rel="canonical"
          href={`https://airlinesexperts.com/legal/${props.data.slug}`}
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
      <TermsTemplate data={props.data[0]} />
    </>
  );
};

export default AllTerms;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/legal`);
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
      `${process.env.NEXT_PUBLIC_API_URL}/legal?slug=${params.slug}`
    );
    const data = await res.data;
    return {
      props: { data },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

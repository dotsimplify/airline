import React from "react";
import axios from "axios";
import Post from "../../components/blog/Post";
import { useRouter } from "next/router";
import Head from "next/head";
import { schemaGenerator, stringClip } from "../../app/helper/helper";

const Slug = ({ data }) => {
  const router = useRouter();
  if (!router.isFallback && !data) {
    return "Loading Article ...";
  }
  const article = data[0];

  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link
          rel="canonical"
          href={`https://airlinesexperts.com/travel-comprehensive-guide/${article.slug}`}
        />
        <title>{article.title?.rendered}</title>
        <meta
          property="og:title"
          content={JSON.stringify(article.title?.rendered)}
        />
        <meta property="og:site_name" content="Airlines Experts" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:url"
          content={`https://airlinesexperts.com/travel-comprehensive-guide/${article.slug}`}
        />
        <meta
          property="og:description"
          content={stringClip(article.content?.rendered, 200)}
        />
        <meta property="og:type" content="website" />,
        <meta
          property="og:image"
          content="https://airlinesexperts.com/logo.png"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title?.rendered} />
        <meta
          name="twitter:description"
          content={`https://airlinesexperts.com/${article.slug}`}
        />
        <meta name="twitter:site" content="@airlinesexperts" />
        <meta
          name="twitter:image"
          content="https://airlinesexperts.com/logo.png"
        />
        <meta name="twitter:creator" content="@airlinesexperts" />
        <script type="application/ld+json">{schemaGenerator(article)}</script>
      </Head>

      <Post data={article} />
    </>
  );
};

export default Slug;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
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
      `${process.env.NEXT_PUBLIC_API_URL}/posts?slug=${params.slug}&_embed`
    );
    const data = await res.data;
    return {
      props: { data },
      revalidate: 30,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

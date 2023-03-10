export const formatDate = (date) => {
  const dateStr = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return dateStr;
};

export const copied = async (text, setCopy) => {
  await navigator.clipboard.writeText(text);
  setCopy(true);
};

export const stringClip = (str, length) => {
  if (str.length > length) {
    return str.slice(str, length).concat("...");
  }
  return str;
};

export const schemaGenerator = (data) => {
  let dynamicUrl =
    process.env.NEXT_PUBLIC_CLIENT_URL +
    "/travel-comprehensive-guide/" +
    data.slug;
  return `{
      "@context": "https://schema.org/",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": ${JSON.stringify(dynamicUrl)}
      },
      "headline": ${JSON.stringify(data.title.rendered)},
      "description": ${JSON.stringify(data.content.rendered)},
      "image": {
        "@type": "ImageObject",
        "url": ${JSON.stringify(
          data._embedded["wp:featuredmedia"]?.[0].source_url
        )},
        "width": "1280",
        "height": "720"
      },
      "author": {
        "@type": "Person",
        "name": "Admin"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Airlines Experts",
        "logo": {
          "@type": "ImageObject",
          "url": "https://airlinesexperts.com/logo.png",
          "width": "400",
          "height": "10"
        }
      },
      "datePublished": ${JSON.stringify(data.modified)},
      "dateModified": ${JSON.stringify(data.modified)}
    }`;
};

const urlGenratorForSchema = (arr, baseUrl) => {
  return (
    arr &&
    arr.length > 0 &&
    arr.map((one) => [JSON.stringify(baseUrl + "/" + one)])
  );
};

export const indexPageSchema = (categoryArray) => {
  return ` {
    "@context":"http://schema.org",
    "@type":"SiteNavigationElement",
    "name":${JSON.stringify(categoryArray)},
    "url": [${urlGenratorForSchema(
      categoryArray,
      process.env.NEXT_PUBLIC_CLIENT_URL
    )}]
    }`;
};

export const singleBlogSchemaGenerator = (data) => {
  return `  {
    "@context":"https://schema.org",
    "@type": "BlogPosting",
    "headline": ${JSON.stringify(data.title)},
    "image": ${JSON.stringify(data.images?.url)},
    "editor": ${JSON.stringify(process.env.NEXT_PUBLIC_BLOG_EDITOR_NAME)}, 
    "genre": ${JSON.stringify(process.env.NEXT_PUBLIC_BLOG_GENRE)}, 
    "keywords": ${JSON.stringify(data.tags)}, 
    "wordcount": ${JSON.stringify(data.description.length)},
    "publisher": ${JSON.stringify(
      process.env.NEXT_PUBLIC_ORGANISATION_NAME_FOR_SEO + "Admin"
    )},
    "url": ${JSON.stringify(
      process.env.NEXT_PUBLIC_CLIENT_URL + "/" + data.slug
    )},
    "datePublished": ${JSON.stringify(data.createdAt)},
    "dateCreated": ${JSON.stringify(data.createdAt)},
    "dateModified":${JSON.stringify(data.updatedAt)},
    "description": ${JSON.stringify(data.description)},
    "articleBody": ${JSON.stringify(data.description)},
    "inLanguage": "en-US",
		"isFamilyFriendly": "true"    
  }`;
};

export const aToZ = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const readingTime = (text) => {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
};

export const faqData = (name) => {
  const arr = [
    {
      question: `Does ${name}'s Flights currently affected by COVID-19 (coronavirus)?`,
      answer:
        "Check our live global travel map to see if there are any restrictions on travel outside of United States right now.",
    },
    {
      question: `How many destinations does ${name} fly to?`,
      answer: `Airlines Experts in the world-Wide ${name} flies to more than 210 destinations in the U.S. and more than 120 destinations internationally.`,
    },
    {
      question: `Why use AirlinesExperts to book ${name} flights?`,
      answer: `We compare every price from over 1,200 airlines and travel agents to find you the best. There are no hidden fees, just the lowest fares and best value options for your trip. Want to make sure you have the best experience with ${name}. We rate each airline and travel agent on the service they provide, and remove those who aren't doing the right thing for our Airlines.`,
    },

    {
      question: `when are flight with ${name} cheaper ?`,
      answer: `Most Airlines According to Data Cheapest month To Fly with ${name} is Cheaper November Month.`,
    },
  ];
  return arr;
};

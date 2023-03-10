const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = "https://airlinesexperts.com";
  const paths = [
    "privacy-policy",
    "contact",
    "index",
    "airlines",
    "airports",
    "blogs",
    "about",
    "terms-and-conditions",
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${paths
        .map((url) => {
          const route = url.replace("index", "");
          const staticPath = `${baseUrl}/${route}`;
          return `
            <url>
              <loc>${staticPath}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}         
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;

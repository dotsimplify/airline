import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { formatDate, readingTime } from "../../app/helper/helper";

const BlogThumbnail = ({ data }) => {
  return (
    <div className="flex justify-center max-w-sm mb-6 border border-black rounded-md ">
      <div className="max-w-sm bg-white rounded-md shadow-lg">
        {data.featured_media > 0 && (
          <Link href={`/travel-comprehensive-guide/${data.slug}`}>
            <a>
              <NextImage
                className="cursor-pointer rounded-t-md"
                src={data?._embedded["wp:featuredmedia"]["0"]?.source_url}
                alt={`Thumbnail for ${data.title.rendered}`}
                height="300"
                width="400"
              />
            </a>
          </Link>
        )}
        {!data.featured_media > 0 && (
          <Link href={`/travel-comprehensive-guide/${data.slug}`}>
            <a>
              <NextImage
                className="cursor-pointer rounded-t-md"
                src="/images/article_image.png"
                alt={`Thumbnail for ${data.title.rendered}`}
                height="300"
                width="400"
              />
            </a>
          </Link>
        )}
        <div className="p-4">
          <Link href={`/travel-comprehensive-guide/${data.slug}`}>
            <h1 className="my-2 text-xl font-bold text-gray-600 capitalize cursor-pointer hover:underline">
              <span className="text-transparent text-bold bg-gradient-to-r to-emerald-600 from-sky-400 bg-clip-text">
                {data.title.rendered}
              </span>
            </h1>
          </Link>
          <div className="flex items-center justify-between">
            <h3 className="py-4 text-xs text-gray-400">
              {formatDate(data.modified_gmt)}
            </h3>
            <h3 className="py-4 text-xs text-gray-400">
              ◉ {readingTime(data.content.rendered)} min read
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogThumbnail;

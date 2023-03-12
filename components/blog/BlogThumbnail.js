import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { formatDate, readingTime } from "../../app/helper/helper";

const BlogThumbnail = ({ data }) => {
  return (
    <div className="flex  w-full mb-6  rounded-md md:max-w-sm ">
      <div className="bg-white rounded-md shadow-lg md:max-w-sm">
        {data.featured_media > 0 && (
          <Link href={`/travel-comprehensive-guide/${data.slug}`}>
            <a>
              <NextImage
                className="cursor-pointer rounded-t-md"
                src={data?._embedded["wp:featuredmedia"]["0"]?.source_url}
                alt={`Thumbnail for ${data.title.rendered}`}
                height="200"
                width="300"
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
                height="200"
                width="300"
              />
            </a>
          </Link>
        )}
        <div className="p-4">
          <Link href={`/travel-comprehensive-guide/${data.slug}`}>
            <h1 className="my-2 text-xl font-bold text-gray-600 capitalize cursor-pointer hover:underline">
              <span className="text-bold ">{data.title.rendered}</span>
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

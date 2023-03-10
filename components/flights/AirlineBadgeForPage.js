import Link from "next/link";
export default function AirlineBadgeForPage({ image, name, slug }) {
  return (
    <Link href={`/airlines/${slug}`}>
      <div className="flex border border-transparent hover:border-gray-300 rounded-lg  cursor-pointer px-2 py-3 group shadow-none hover:shadow-lg flex-col justify-center items-center">
        {image && (
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={image}
            alt="Transistor"
          />
        )}

        {!image && (
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/images/no-img.webp"
            alt="Airline"
          />
        )}
        <h1 className="pt-2 capitalize text-sky-600 group-hover:underline ">
          {name}
        </h1>
      </div>
    </Link>
  );
}

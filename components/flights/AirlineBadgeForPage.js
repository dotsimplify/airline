import Link from "next/link";
export default function AirlineBadgeForPage({ image, name, slug }) {
  return (
    <Link href={`/airlines/${slug}`}>
      <div className=" border mr-4 hover:border-gray-300 rounded-lg  cursor-pointer  group  shadow-lg">
        {image && (
          <img
            className=" max-h-36 w-full object-fill "
            src={image}
            alt="Transistor"
          />
        )}

        {!image && (
          <img
            className="max-h-36 w-full object-fill lg:col-span-1"
            src="/images/no-img.webp"
            alt="Airline"
          />
        )}
        <h1 className="py-2 text-center font-medium border-t capitalize text-sm group-hover:underline hover:text-blue-700 ">
          {name}
        </h1>
      </div>
    </Link>
  );
}

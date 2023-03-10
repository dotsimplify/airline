import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { AiFillPhone, AiOutlineGlobal } from "react-icons/ai";

const AirlineDetailCard = ({
  airlineLogo,
  airlineAddress,
  airlineStatus,
  airlineIATA,
  airlineCallSign,
  phoneNumber,
  websiteUrl,
}) => {
  return (
    <div className="flex items-start justify-between px-8 py-8 shadow-md mx-12 bg-sky-100 ">
      <div>
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 mr-4 "
            src={airlineLogo}
            alt="Airline Logo"
          />
          <h2 className="text-lg font-medium">Airline Name</h2>
        </div>
        <div className="flex items-center mb-4">
          <p className="mr-2">{airlineAddress}</p>
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-1">Status : </span>
          <span
            className={`text-sm font-semibold ${
              airlineStatus === "Active" ? "text-green-500" : "text-red-500"
            }`}
          >
            {airlineStatus}
          </span>
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-4 text-sm">
            <span className="font-semibold">IATA:</span> {airlineIATA}
          </span>
          <span className="text-sm">
            <span className="font-semibold">Call Sign:</span> {airlineCallSign}
          </span>
        </div>
      </div>

      <div>
        <div className="flex items-center mb-4 group">
          <AiFillPhone className="mr-2 group-hover:text-blue-600" size={20} />
          <a href={`tel:${phoneNumber}`}>
            <p className="mr-4 text-sm hover:underline hover:text-blue-700">
              {phoneNumber}
            </p>
          </a>
        </div>
        <div className="flex items-center mb-4 group">
          <AiOutlineGlobal
            className="mr-2 group-hover:text-blue-600 "
            size={20}
          />
          <a
            className="text-sm hover:underline group-hover:text-blue-600"
            href={websiteUrl}
          >
            {websiteUrl}
          </a>
        </div>
        <div className="flex items-center justify-around cursor-pointer">
          <FaFacebook className="mr-2 hover:text-blue-700" size={28} />
          <FaInstagram className="mr-2 hover:text-pink-700" size={28} />
          <FaLinkedin className="mr-2 hover:text-sky-600" size={28} />
          <FaTelegram className="hover:text-blue-600" size={28} />
        </div>
      </div>
    </div>
  );
};

export default AirlineDetailCard;

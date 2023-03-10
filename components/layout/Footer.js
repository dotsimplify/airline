import React from "react";
import Link from "next/link";
import { TbPhoneCall } from "react-icons/tb";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="p-4 mx-auto border-t bg-sky-900 max-w-7xl sm:p-6 dark:bg-gray-900 border-t-gray-300">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link href="/">
            <a className="flex items-center text-xl font-bold text-white">
              Airlines Experts
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase ">
              Follow us
            </h2>
            <ul className="text-gray-200">
              <li className="mb-4">
                <Link href="/contact">
                  <a className="hover:underline hover:text-gray-50 ">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:underline hover:text-gray-50">About</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase ">
              Legal
            </h2>
            <ul className="text-gray-200">
              <li className="mb-4">
                <Link href="/legal/privacy-policy">
                  <a className="hover:underline hover:text-gray-50">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/legal/terms-and-conditions">
                  <a className="hover:underline hover:text-gray-50">
                    Terms &amp; Conditions
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">
          © {year} Airlines Experts™. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://instagram.com/airlinesexperts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-700 "
          >
            <TbPhoneCall className="inline mr-2 text-2xl text-white" />
            <span className="text-xl text-white"> 800-315-0953</span>
            <span className="sr-only">Help Desk Phone Number</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

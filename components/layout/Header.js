import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const toggleNavbar = () => {
    props.setIsOpen(!props.isOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full border border-transparent z-50 ${
        scrollPosition > 450 ? "bg-white border-b-gray-200" : ""
      }`}
    >
      <div className="px-4 mx-auto max-w-[2000px] sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/logo.svg"
                  className="w-1/2 cursor-pointer"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link href="/">
                <a className="px-3 py-2 text-lg font-medium text-black rounded-md hover:underline">
                  Home
                </a>
              </Link>
              <Link href="/airlines">
                <a className="px-3 py-2 text-lg font-medium text-black rounded-md hover:underline">
                  Airlines
                </a>
              </Link>
              <Link href="/airports">
                <a className="px-3 py-2 text-lg font-medium text-black rounded-md hover:underline">
                  Airports
                </a>
              </Link>
              <Link href="/blogs">
                <a className="px-3 py-2 text-lg font-medium text-black rounded-md hover:underline">
                  Blogs
                </a>
              </Link>
              <Link href="/contact">
                <a className="px-3 py-2 text-lg font-medium text-black rounded-md hover:underline">
                  Contact
                </a>
              </Link>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 text-gray-100 rounded-md hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {props.isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -250 }}
        animate={{ opacity: props.isOpen ? 1 : 0, y: props.isOpen ? 0 : -2000 }}
        className="absolute z-30 w-full md:hidden top-16 bg-sky-900"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <a
              onClick={() => props.setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white"
            >
              Home
            </a>
          </Link>
          <Link href="/airlines">
            <a
              onClick={() => props.setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white"
            >
              Airlines
            </a>
          </Link>
          <Link href="/airports">
            <a
              onClick={() => props.setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white"
            >
              Airports
            </a>
          </Link>
          <Link href="/blogs">
            <a
              onClick={() => props.setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white"
            >
              Blogs
            </a>
          </Link>
          <Link href="/contact">
            <a
              onClick={() => props.setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white"
            >
              Contact
            </a>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

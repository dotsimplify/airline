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
      className={`sticky top-0 z-50 ${
        scrollPosition > 430 ? "bg-sky-800" : ""
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1
                  className={`text-xl font-bold ${
                    scrollPosition > 430 ? "text-gray-100" : "text-sky-800"
                  } cursor-pointer `}
                >
                  Airlines Experts
                </h1>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link href="/">
                <a className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white">
                  Home
                </a>
              </Link>
              <Link href="/airlines">
                <a className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white">
                  Airlines
                </a>
              </Link>
              <Link href="/airports">
                <a className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white">
                  Airports
                </a>
              </Link>
              <Link href="/blogs">
                <a className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white">
                  Blogs
                </a>
              </Link>
              <Link href="/contact">
                <a className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white">
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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: props.isOpen ? 1 : 0, y: props.isOpen ? 0 : -20 }}
        className="absolute z-30 w-full md:hidden top-16 bg-sky-900"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <a className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white">
              Home
            </a>
          </Link>
          <Link href="/airlines">
            <a className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white">
              Airlines
            </a>
          </Link>
          <Link href="/airports">
            <a className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white">
              Airports
            </a>
          </Link>
          <Link href="/contact">
            <a className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white">
              Contact
            </a>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

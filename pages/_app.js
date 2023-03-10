import React, { useState } from "react";
import "../styles/global.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/Hero";
import FlightSearch from "../components/widgets/FlightWidget";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState("");

  return (
    <>
      <section className=" bg-gradient-to-br from-green-50 via-sky-700 to-cyan-300">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
        <FlightSearch isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-full py-56 mx-auto md:py-16 max-w-7xl bg-gray-50"></div>

        <Component isOpen={isOpen} setIsOpen={setIsOpen} {...pageProps} />
        <Footer />
      </section>
    </>
  );
}

export default MyApp;

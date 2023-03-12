import React, { useState } from "react";
import "../styles/global.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/Hero";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState("");

  return (
    <>
      <section>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        {(router.pathname !== "/blogs" ||
          router.pathname !== "/legal/privacy-policy" ||
          router.pathname !== "/legal/terms-and-conditions") && (
          <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
        <Component isOpen={isOpen} setIsOpen={setIsOpen} {...pageProps} />
        <Footer />
      </section>
    </>
  );
}

export default MyApp;

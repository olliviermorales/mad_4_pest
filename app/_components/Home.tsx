"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full flex ">
      <Image
        src="/assets/images/home-image.png"
        alt="Mad4Pest"
        className="absolute inset-0 h-full w-full object-cover blur-sm"
        width={1000}
        height={1000}
      />
      <div
        className={`relative z-10 flex flex-col justify-center items-start h-full w-full md:w-1/2 p-4 md:pl-6 lg:pl-32 bg-gradient-to-r from-black to-transparent transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="px-8 py-4 rounded-lg">
          <h1
            className={`font-bold text-4xl mb-2 text-white transition-opacity duration-1000 uppercase ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            Pest Control Solutions
          </h1>
          <p
            className={`text-lg text-white mb-4 transition-opacity duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            Pests and viruses don’t wait. Neither should you.
          </p>
          <a
            href="#about-us"
            className={`w-max relative inline-block group text-lg text-white py-3 px-6 rounded-lg bg-gradient-to-r from-[#00A2D8] to-[#007BAF] bg-opacity-70 border-2 border-white shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

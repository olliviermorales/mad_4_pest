"use client";
import React, { useState } from "react";
import SplashScreen from "./_components/SplashScreen";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Home from "./_components/Home";
import AboutUs from "./_components/AboutUs";
import Services from "./_components/Services";

const RootPage = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  const handleContinue = () => {
    setShowSplashScreen(false);
  };

  return (
    <div className="App">
      {showSplashScreen ? (
        <SplashScreen onContinue={handleContinue} />
      ) : (
        <>
          <Navbar />
          <div
            id="home"
            className="w-full relative flex items-center justify-center h-screen "
          >
            <Home />
          </div>
          <div
            id="about-us"
            className="flex items-center justify-center  min-h-screen  bg-[#525252] px-4  xl:px-64"
          >
            <AboutUs />
          </div>
          <div
            id="services"
            className="flex items-center justify-center  min-h-screen bg-gray-800  px-4  xl:px-64"
          >
            <Services />
          </div>
          <div
            id="reviews"
            className="flex items-center justify-center min-h-screen  bg-[#525252] px-4  xl:px-64"
          >
            <h1 className="text-white text-4xl">Reviews Section</h1>
          </div>
          <div
            id="contact-us"
            className="flex items-center justify-center h-screen bg-gray-600"
          >
            <h1 className="text-white text-4xl">Contact Us Section</h1>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default RootPage;

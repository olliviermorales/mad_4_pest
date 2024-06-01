"use client";
import React, { useState } from "react";
import SplashScreen from "./_components/SplashScreen";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Home from "./_components/Home";

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
            className="flex items-center justify-center h-screen bg-gray-800"
          >
            <h1 className="text-white text-4xl">About Us Section</h1>
          </div>
          <div
            id="services"
            className="flex items-center justify-center h-screen bg-gray-800"
          >
            <h1 className="text-white text-4xl">Services Section</h1>
          </div>
          <div
            id="reviews"
            className="flex items-center justify-center h-screen bg-gray-800"
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

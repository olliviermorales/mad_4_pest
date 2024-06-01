import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Envelope,
  Phone,
  HouseLine,
  SimCard,
  TiktokLogo,
  FacebookLogo,
} from "@phosphor-icons/react/dist/ssr";

const ContactUs = () => {
  const contactUsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleMessengerClick = () => {
    window.open("https://m.me/mad4pest", "_blank");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (contactUsRef.current) {
      observer.observe(contactUsRef.current);
    }

    return () => {
      if (contactUsRef.current) {
        observer.unobserve(contactUsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={contactUsRef}
      className="relative flex items-center justify-center min-h-screen w-full bg-gray-800"
    >
      <Image
        src="/assets/images/logo-white.svg"
        alt="Background"
        className="absolute bottom-0 right-0 z-0 w-2/3 h-2/3 opacity-10 object-fit"
        width={2000}
        height={2000}
      />
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full p-8 gap-0 md:gap-8 lg:gap-0">
        <motion.div
          className="flex flex-col gap-4 text-white w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#00A2D8]">
            Contact Us
          </h2>
          <div className="flex items-center gap-2">
            <FacebookLogo size={32} weight="fill" />
            <p>www.facebook.com/mad4pest</p>
          </div>
          <div className="flex items-center gap-2">
            <TiktokLogo size={32} weight="fill" />
            <p>https://www.tiktok.com/@Mad4pest</p>
          </div>
          <div className="flex items-center gap-2">
            <Envelope size={32} weight="fill" />
            <p>mad4pestphilippines@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <SimCard size={32} weight="fill" />
            <p>(SMART) +63 9608664869</p>
          </div>
          <div className="flex items-center gap-2">
            <SimCard size={32} weight="fill" />
            <p>(GLOBE) +63 9174358884</p>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={32} weight="fill" />
            <p>(LANDLINE) 0282941952</p>
          </div>
          <div className="flex items-center gap-2">
            <HouseLine size={32} weight="fill" />
            <p>Sampaloc, Manila, Philippines</p>
          </div>
        </motion.div>
        <motion.div
          className="mt-8 md:mt-0  w-full lg:w-1/2 flex flex-col mb-auto items-start justify-start"
          initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg md:text-xl font-semibold text-white mb-4">
            Ensure your home and loved ones are safe from harmful pests. Act now
            to secure a pest-free environment for peace of mind.
          </p>
          <button
            onClick={handleMessengerClick}
            className="uppercase inline-block bg-gradient-to-r from-[#E02A20] to-[#c12b1a] text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Book Now For A Free Inspection!
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;

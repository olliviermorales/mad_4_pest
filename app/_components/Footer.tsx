import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  Envelope,
  FacebookLogo,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  return (
    <footer className="bg-[#E02A20] py-6 px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center ">
      <div className="flex items-center justify-center gap-2">
        <Link href="/" className="flex items-center gap-1 mb-4 sm:mb-0">
          <Image
            src="/assets/icons/logo-white.png"
            width={2000}
            height={2000}
            alt="Mad4Pest"
            className="w-16 h-16 object-contain"
          />
        </Link>
        <span className="text-white text-lg font-bold">Expect the best.</span>
      </div>
      <div className="flex flex-col items-center mb-4 sm:mb-0">
        <p className="text-white text-center text-[12px]">
          © 2024 Mad4Pest. All rights reserved.
        </p>
      </div>
      <div className="flex flex-col items-center sm:items-end">
        <span className="text-white text-lg font-bold">
          Follow our socials:
        </span>
        <div className="flex items-center  mr-auto gap-4 mt-2">
          <a
            href="https://www.facebook.com/mad4pest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black transition-colors duration-300"
          >
            <FacebookLogo className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://www.tiktok.com/@Mad4pest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black transition-colors duration-300"
          >
            <TiktokLogo className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="mailto:mad4pestphilippines@gmail.com"
            className="text-white hover:text-black transition-colors duration-300"
          >
            <Envelope className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

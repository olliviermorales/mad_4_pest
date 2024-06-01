import Link from "next/link";
import Image from "next/image";
import React from "react";
import MobileNav from "./MobileNav";

const sections = [
  { id: "home", label: "Home" },
  { id: "about-us", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "reviews", label: "Reviews" },
  { id: "contact-us", label: "Contact Us" },
];

const Navbar = () => {
  return (
    <nav className="flex fixed top-0 bg-white z-50 w-full gap-5 py-6 px-6 lg:px-12 justify-between items-center rounded-b-2xl drop-shadow-xl">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/icons/logo.png"
          width={2000}
          height={2000}
          alt="Mad4Pest"
          className="w-16 h-16  object-contain"
        />
        <p className="font-bold text-black text-2xl hidden sm:block uppercase">
          Mad<span className="text-[#E02A20]">4</span>Pest
        </p>
      </Link>
      <div className="hidden sm:flex gap-2 lg:gap-8 items-center justify-center">
        {sections.map((s) => (
          <a
            href={`#${s.id}`}
            key={s.id}
            className="relative group text-black text-base lg:text-lg xl:text-xl hover:text-[#00A2D8] transition-colors duration-300"
          >
            {s.label}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00A2D8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        ))}
      </div>
      <div className="sm:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { id: "home", label: "Home" },
  { id: "about-us", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "reviews", label: "Reviews" },
  { id: "contact-us", label: "Contact Us" },
];

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sections.map((item) => {
        const isActive =
          (pathname.includes(item.id) && item.id.length > 1) ||
          pathname === `/${item.id}`;
        return (
          <SheetClose asChild key={item.id}>
            <a
              href={`#${item.id}`}
              key={item.id}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </a>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="sm:hidden "
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.png"
            width={100}
            height={100}
            alt="Mad4Pest"
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
          />
          <p className="font-bold text-black text-2xl hidden sm:block uppercase">
            Mad<span className="text-[#E02A20]">4</span>Pest
          </p>
        </Link>
        <NavContent />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

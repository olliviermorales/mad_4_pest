import { Check } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const Services = () => {
  const scopeRef = useRef(null);
  const whereRef = useRef(null);
  const setsUsApartRef = useRef(null);
  const [isScopeVisible, setIsScopeVisible] = useState(false);
  const [isWhereVisible, setIsWhereVisible] = useState(false);
  const [isSetsUsApartVisible, setIsSetsUsApartVisible] = useState(false);

  useEffect(() => {
    const scopeObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsScopeVisible(true);
          scopeObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const whereObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsWhereVisible(true);
          whereObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const setsUsApartObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsSetsUsApartVisible(true);
          setsUsApartObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (scopeRef.current) {
      scopeObserver.observe(scopeRef.current);
    }

    if (whereRef.current) {
      whereObserver.observe(whereRef.current);
    }

    if (setsUsApartRef.current) {
      setsUsApartObserver.observe(setsUsApartRef.current);
    }

    return () => {
      if (scopeRef.current) {
        scopeObserver.unobserve(scopeRef.current);
      }
      if (whereRef.current) {
        whereObserver.unobserve(whereRef.current);
      }
      if (setsUsApartRef.current) {
        setsUsApartObserver.unobserve(setsUsApartRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center py-16 text-white">
      <div
        ref={scopeRef}
        className={`flex flex-col items-center w-full max-w-7xl p-4 md:p-8 ${
          isScopeVisible ? "animate-fade-in-services" : ""
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#00A2D8] mb-8 text-center">
          Scope of Service
        </h2>
        <p className="text-center mb-8">
          Our modern and unique approach to controlling harmful insects and
          pests is set to be the new trend in the pest control industry. Our
          methodology and advanced propriety blend of anti-pest chemicals are
          proven to be the most effective, yet have low toxicity to humans.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#00A2D8] rounded-full flex items-center justify-center mb-4">
              <Image
                src="/assets/icons/services.svg"
                alt="General Pest Control"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold">
              General Pest Control
            </h3>
            <ul className="list-disc text-xs w-full items-start text-start flex flex-col md:text-sm mt-2 gap-1">
              <li>Cockroaches</li>
              <li>Ants/crawling insects</li>
              <li>Rodents/mice</li>
              <li>Flying insects ULV Control</li>
              <li>Larvicides Treatment</li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#00A2D8] rounded-full flex items-center justify-center mb-4">
              <Image
                src="/assets/icons/services.svg"
                alt="Termite Control"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold flex">
              Termite Control
            </h3>
            <ul className="list-disc text-xs w-full items-start text-start flex flex-col md:text-sm mt-2 gap-1">
              <li>Non-repellant & Repellant Soil Poisoning</li>
              <li>Reticulation Piping System</li>
              <li>Termite interception & Baiting System</li>
              <li>Termite Advances Transfer Effect (Dust Bait)</li>
              <li>Wood Protection</li>
              <li>Soil Poisoning +Termite Transfer</li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#00A2D8] rounded-full flex items-center justify-center mb-4">
              <Image
                src="/assets/icons/services.svg"
                alt="Treatment"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold">Treatment</h3>
            <ul className="list-disc w-full items-start text-start flex flex-col   text-xs md:text-sm mt-2 gap-1">
              <li>Baiting System</li>
              <li>Bed Bugs</li>
              <li>Colony Elimination</li>
              <li>Trap</li>
              <li>Tracking</li>
              <li>Misting/Fogging/Spray (ULV)</li>
              <li>Slow Acting Rodenticides</li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#00A2D8] rounded-full flex items-center justify-center mb-4">
              <Image
                src="/assets/icons/services.svg"
                alt="Other Services"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold">Other Services</h3>
            <ul className="list-disc w-full items-start text-start flex flex-col text-xs md:text-sm mt-2 gap-1">
              <li>Begbugs Treatment</li>
              <li>Car Pest Elimination</li>
              <li>Cleaning + Pest Control Package</li>
              <li>
                Cleaning + Pest Control Package + Hospital Grade Disinfection
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        ref={whereRef}
        className={`flex flex-col items-center w-full max-w-7xl p-4 md:p-8 mt-16 ${
          isWhereVisible ? "animate-fade-in" : ""
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#00A2D8] mb-8 text-center">
          Where we Service
        </h2>
        <p className="text-center mb-8">
          We can cater to all types of clients, in and outside the metro.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/icons/residential-homes-icon.svg"
              alt="Residential Homes"
              width={48}
              height={48}
            />
            <h3 className="text-lg md:text-xl font-bold mt-4">
              Residential Homes
            </h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/icons/industrial-establishments-icon.svg"
              alt="Industrial Establishments"
              width={48}
              height={48}
            />
            <h3 className="text-lg md:text-xl font-bold mt-4">
              Industrial Establishments
            </h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/icons/restaurants-bars-icon.svg"
              alt="Restaurants & Bars"
              width={48}
              height={48}
            />
            <h3 className="text-lg md:text-xl font-bold mt-4">
              Restaurants & Bars
            </h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/icons/hospitals-clinics-icon.svg"
              alt="Hospitals & Clinics"
              width={48}
              height={48}
            />
            <h3 className="text-lg md:text-xl font-bold mt-4">
              Hospitals & Clinics
            </h3>
          </div>
        </div>
      </div>
      <div
        ref={setsUsApartRef}
        className={`flex flex-col items-center w-full max-w-7xl p-4 md:p-8 mt-16 ${
          isSetsUsApartVisible ? "animate-fade-in-services" : ""
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#00A2D8] mb-8 text-center">
          What Sets Us Apart?
        </h2>
        <ul className="list-none space-y-4">
          <li className="flex items-start space-x-2">
            <div className="bg-[#00A2D8] rounded-full w-6 h-6 text-center justify-center items-center flex">
              <span className="text-white text-sm font-bold">
                <Check weight="bold" size={20} />
              </span>
            </div>
            <span>We can cater to all types of clients.</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="bg-[#00A2D8] rounded-full w-6 h-6 text-center justify-center items-center flex">
              <span className="text-white text-sm font-bold">
                <Check weight="bold" size={20} />
              </span>
            </div>
            <span>Specialty in Resistant Strain.</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="bg-[#00A2D8] rounded-full w-6 h-6 text-center justify-center items-center flex">
              <span className="text-white text-sm font-bold">
                <Check weight="bold" size={20} />
              </span>
            </div>
            <span>
              Can work on delicate machines,{" "}
              <span className="text-[#00A2D8] font-bold">
                no need for BALOT SYSTEM
              </span>
              .
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="bg-[#00A2D8] rounded-full w-6 h-6 text-center justify-center items-center flex">
              <span className="text-white text-sm font-bold">
                <Check weight="bold" size={20} />
              </span>
            </div>
            <span>Can work during operational hours.</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="bg-[#00A2D8] rounded-full w-6 h-6 text-center justify-center items-center flex">
              <span className="text-white text-sm font-bold">
                <Check weight="bold" size={20} />
              </span>
            </div>
            <span>99% Kill Rate Guarantee.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;

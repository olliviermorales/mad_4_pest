import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const AboutUs = () => {
  const aboutUsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current);
    }

    return () => {
      if (aboutUsRef.current) {
        observer.unobserve(aboutUsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={aboutUsRef}
      className="h-full flex flex-col items-center py-16  text-white"
    >
      {/* About Us */}
      <div
        className={`flex flex-col lg:flex-row gap-4 px-4 md:px-8 w-full max-w-7xl ${
          isVisible ? "animate-slide-right" : ""
        }`}
      >
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/images/about-us.png"
            alt="Mad4Pest"
            className="h-full w-full object-cover rounded-lg"
            width={2000}
            height={2000}
          />
        </div>
        <div
          className={`flex flex-col gap-4 w-full lg:w-1/2 ${
            isVisible ? "animate-slide-left" : ""
          }`}
        >
          <h1 className="font-black text-[#00A2D8] text-3xl md:text-4xl">
            About Us
          </h1>
          <p className="text-sm md:text-base">
            <span className="font-bold">Mad4Pest</span> is a professional pest
            control company in Metro Manila, Philippines{" "}
            <span className="font-bold">established in 2013</span>. We service
            hundreds of residential, commercial, and industrial properties
            around and outside Metro Manila cities. If you require termite
            treatment, general pest control, and disinfection services, Mad4Pest
            is the company you can trust. We provide the highest level of
            customer care and great value of a small company as well as the
            reliability and responsiveness of a large company.
          </p>
          <p className="text-sm md:text-base">
            Founded by Progressive-Minded Young Entrepreneurs,{" "}
            <span className="font-bold">Mad4Pest</span> is led by an expert
            management team and our Technical Support Specialists are
            professionally trained by some of the pioneers in the pest control
            industry.
          </p>
        </div>
      </div>
      {/* Our Core Values */}
      <div
        className={`flex  flex-col h-full w-full max-w-7xl mt-16 px-4 md:px-8 ${
          isVisible ? "animate-fade-in" : ""
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#E02A20] mb-8 text-center">
          Our Core Values
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#00A2D8] rounded-full flex items-center justify-center mb-4">
              <Image
                src="/assets/icons/safety.svg"
                alt="Safety"
                className="w-8 h-8"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold uppercase">Safety</h3>
            <p className="text-xs md:text-sm">
              We only use FDA approved products that are{" "}
              <span className="font-bold">colorless and odorless</span> and safe
              for adults, children and pets so no one needs to go out of their
              homes.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#00A2D8] rounded-full flex items-center justify-center mb-4">
              <Image
                src="/assets/icons/integrity.svg"
                alt="Integrity"
                className="w-8 h-8"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold uppercase">
              Integrity
            </h3>
            <p className="text-xs md:text-sm">
              We operate with{" "}
              <span className="font-bold">honesty and fairness</span> to build
              goodwill and lasting relationship with our clients.
            </p>
          </div>
          <div className="flex flex-col items-center text-center ">
            <div className="w-16 h-16 bg-[#00A2D8] rounded-full flex items-center justify-center mb-4">
              <Image
                src="/assets/icons/knowledge.svg"
                alt="Knowledge"
                className="w-8 h-8"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold uppercase">
              Knowledge
            </h3>
            <p className="text-xs md:text-sm">
              We are at the forefront of{" "}
              <span className="font-bold">advanced technology</span>, techniques
              and products to deliver a first-rate service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

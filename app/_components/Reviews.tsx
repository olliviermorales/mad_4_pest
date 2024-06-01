import React, { useRef, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  DotButton,
  PrevButton,
  NextButton,
  NextButtonVideo,
  PrevButtonVideo,
} from "./CarouselButtons";

const reviews = [
  {
    name: "Vivian Margin",
    statement:
      "Ang galing ng pest control na to,...andaming patay na ipis...d gaya sa ibang pest control na nasubukan nmin, wa epek...nung kau na ang nag pest control sa min nawala na mga peste....tsaka da best ung panghuli nyo sa daga...mad4pest ur da best",
    image: "/assets/images/video1-image.png",
  },
  {
    name: "Jane Smith",
    statement:
      "Great customer service and effective pest control solutions. Our go-to company for pest issues.",
    image: "/assets/images/video2-image.png",
  },
  {
    name: "ACME Corp",
    statement:
      "Professional and reliable. Mad4Pest has kept our office pest-free for years.",
    image: "/assets/images/video2-image.png",
  },
  // Add more reviews as needed
];

const videoReviews = [
  {
    src: "/assets/videos/video1.mp4",
    poster: "/assets/images/video1-image.png",
  },
  {
    src: "/assets/videos/video2.mp4",
    poster: "/assets/images/video2-image.png",
  },
  // Add more video reviews as needed
];

const Reviews = () => {
  const reviewsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaVideoRef, emblaVideoApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList() as any);
    emblaApi.on("select", onSelect);
  }, [emblaApi]);

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

    if (reviewsRef.current) {
      observer.observe(reviewsRef.current);
    }

    return () => {
      if (reviewsRef.current) {
        observer.unobserve(reviewsRef.current);
      }
    };
  }, []);

  return (
    <div ref={reviewsRef} className="relative w-full flex flex-col py-16 gap-8">
      <Image
        src="/assets/images/logo-white.svg"
        alt="Background"
        className="absolute top-0 left-0 z-0 w-2/3 h-2/3 opacity-10 object-fit"
        width={2000}
        height={2000}
      />
      <h1 className="relative font-black text-white text-center text-3xl md:text-4xl uppercase">
        Reviews
      </h1>
      <div
        className={`flex flex-col w-full ${
          isVisible ? "animate-slide-right" : ""
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00A2D8] mb-8">
          Customer Statements
        </h2>
        <div className="relative">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {reviews.map((review, index) => (
                <div className="embla__slide" key={index}>
                  <div className="flex flex-col items-center text-center p-4 text-white">
                    <Image
                      src={review.image}
                      alt={review.name}
                      className="w-24 h-24 rounded-full mb-4"
                      width={1000}
                      height={1000}
                    />
                    <p className="text-lg font-semibold mb-2">{review.name}</p>
                    <p className="text-sm mb-4">{review.statement}</p>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((star, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="yellow"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 17.25l-6.2 3.25 1.2-6.9-5-4.75 6.9-1 3-6 3 6 6.9 1-5 4.75 1.2 6.9z"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <PrevButton
            onClick={() => emblaApi?.scrollPrev()}
            enabled={emblaApi && emblaApi.canScrollPrev()}
          />
          <NextButton
            onClick={() => emblaApi?.scrollNext()}
            enabled={emblaApi && emblaApi.canScrollNext()}
          />
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col w-full ${
          isVisible ? "animate-slide-left" : ""
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00A2D8] mb-8">
          Video Reviews
        </h2>
        <div className="relative">
          <div className="embla" ref={emblaVideoRef}>
            <div className="embla__container">
              {videoReviews.map((video, index) => (
                <div className="embla__slide" key={index}>
                  <div className="flex flex-col items-center text-center p-4 text-white">
                    <video
                      src={video.src}
                      poster={video.poster}
                      controls
                      className="w-full bg-black  min-h-[640px] md:max-h-[640px] h-auto rounded-lg mb-4"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <PrevButtonVideo
            onClick={() => emblaVideoApi?.scrollPrev()}
            enabled={emblaVideoApi && emblaVideoApi.canScrollPrev()}
          />
          <NextButtonVideo
            onClick={() => emblaVideoApi?.scrollNext()}
            enabled={emblaVideoApi && emblaVideoApi.canScrollNext()}
          />
          <div className="embla__dots">
            {[...Array(2)].map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => emblaVideoApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

"use client";
import React, { useState, useEffect } from "react";
import Cockroach from "./Cockroach";
import localFont from "next/font/local";

const jersey = localFont({
  src: [
    {
      path: "../../public/fonts/Jersey10-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-jersey",
});

const generateRandomPosition = () => {
  if (typeof window !== "undefined") {
    return {
      top: Math.random() * (window.innerHeight - 50),
      left: Math.random() * (window.innerWidth - 50),
    };
  }
  return { top: 0, left: 0 };
};
const generateRandomDirection = () => {
  const angle = Math.random() * 2 * Math.PI;
  return {
    x: Math.cos(angle),
    y: Math.sin(angle),
  };
};
const generateRandomRotation = () => {
  return Math.floor(Math.random() * 360);
};

const SplashScreen = ({ onContinue }: any) => {
  const initialCockroaches = Array.from({ length: 5 }, (_, id) => ({
    id,
    position: generateRandomPosition(),
    direction: generateRandomDirection(),
    rotation: generateRandomRotation(),
    isSquashed: false,
  }));

  const [cockroaches, setCockroaches] = useState(initialCockroaches);

  useEffect(() => {
    if (cockroaches.every((cockroach) => cockroach.isSquashed)) {
      onContinue();
    }
  }, [cockroaches, onContinue]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCockroaches((cockroaches) =>
        cockroaches.map((cockroach) => {
          if (cockroach.isSquashed) return cockroach;

          let { top, left } = cockroach.position;
          let { x, y } = cockroach.direction;

          top += y * 5;
          left += x * 5;

          if (top <= 0 || top >= window.innerHeight - 50) y = -y;
          if (left <= 0 || left >= window.innerWidth - 50) x = -x;

          return {
            ...cockroach,
            position: { top, left },
            direction: { x, y },
          };
        })
      );
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = (id: any, event: any) => {
    const { clientX, clientY } = event;
    setCockroaches((cockroaches) =>
      cockroaches.map((cockroach) =>
        cockroach.id === id
          ? {
              ...cockroach,
              isSquashed: true,
              position: { left: clientX, top: clientY },
            }
          : cockroach
      )
    );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black relative splash-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {cockroaches.map(({ id, isSquashed, position, rotation }) => (
          <Cockroach
            key={id}
            id={id}
            isSquashed={isSquashed}
            position={position}
            handleClick={handleClick}
            rotation={rotation}
          />
        ))}
      </div>
      <div className="text-center text-white z-10 flex flex-col gap-4">
        <p
          className={`text-5xl md:text-9xl mb-4 jersey-10-charted-regular ${jersey.variable} font-sans`}
        >
          Welcome to Mad4Pest!
        </p>
        <p
          className={`text-2xl sm:text-3xl md:text-5xl jersey-10-charted-regular ${jersey.variable} font-sans`}
        >
          Squash all the cockroaches to continue!
        </p>
        <div className="flex justify-center items-center flex-col ">
          <p className={`text-xs `}>or just click</p>
          <button
            onClick={onContinue}
            className={`bg-red-500 px-4 py-2 rounded ${jersey.variable} font-sans`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

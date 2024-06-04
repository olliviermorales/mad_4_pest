import Image from "next/image";
import { useEffect } from "react";

const LoadingScreen = ({ setLoading }: any) => {
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [setLoading]);

  return (
    <div className="relative flex space-x-8 justify-center items-center bg-black h-screen ">
      <Image
        src="/assets/images/logo-white.svg"
        alt="Background"
        className="absolute bottom-0 right-0 z-0 w-2/3 h-2/3 opacity-30 object-fit"
        width={1000}
        height={1000}
      />
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-[#00A2D8] drop-shadow-md rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-[#00A2D8] drop-shadow-md rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-[#00A2D8] drop-shadow-md rounded-full animate-bounce"></div>
    </div>
  );
};

export default LoadingScreen;

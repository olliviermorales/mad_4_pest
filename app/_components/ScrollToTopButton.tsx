import { useState, useEffect } from "react";
import { ArrowUp } from "@phosphor-icons/react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-bounce">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="drop-shadow-lg p-3 rounded-full bg-[#00A2D8] text-white shadow-lg hover:bg-[#00A2D8]/30 transition duration-300"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;

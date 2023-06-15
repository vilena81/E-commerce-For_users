
import React, { useState, useEffect, useRef } from "react";
import "./carousel.css";

const images = [
  "https://www.thaqfny.com/wp-content/uploads/2022/09/%D8%A3%D9%8A%D9%81%D9%88%D9%86-14.jpg",
  "https://avatars.dzeninfra.ru/get-zen_brief/6578950/pub_62a7000a51bab32d0f690120_62a7007c9bc8c10169754289/scale_1200",
  "https://pbs.twimg.com/media/FcEmsunagAEXfWs?format=jpg&name=large",
  "https://pbs.twimg.com/media/FBbfByvXIAQvAZh.jpg",
  "https://mac77.ru/wp-content/uploads/apple-27-inch-led-cinema-displayq-3.jpg",
  "https://superplanshet.ru/images/iPhone_14_G19888R.jpg"
];
const delay = 4000;

function Carousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, idx) => (
          <img className="slide" key={idx} src={image} alt={`Slide ${idx}`} />
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

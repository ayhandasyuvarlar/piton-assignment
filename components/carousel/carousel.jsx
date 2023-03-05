import React from "react";

const carouselData = [
  {
    title: "25% discount all   Paulo Coelho books!",
    img: " /carousel.jpeg",
    aria_label: "Slide 1",
    aria_current: true,
  },
];
const Carousel = () => {
  return (
    <div
      id="animation-carousel"
      className="relative mt-10"
      data-carousel="static"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {carouselData.map((item, idx) => (
          <div
            key={idx}
            className="duration-200 ease-linear"
            data-carousel-item="active"
          >
            <img
              src={item.img}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="hello"
            />
            <div className="relative bg-black z-40 h-56 w-screen md:h-96">
              <p className=" pt-20 ml-20 text-6xl w-1/3 text-yellow font-bold">
                {item.title.substring(0, 16)}
                <span className="text-white">
                  {item.title.substring(17, 100)}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" relative item-center justify-center flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {carouselData.map((item, idx) => (
          <button
            type="button"
            className={`w-3 h-3 ${
              item.aria_current ? "bg-primaryTwo" : "bg-black"
            } mt-12 rounded-full`}
            aria-current={item.aria_current}
            aria-label={item.aria_label}
            data-carousel-slide-to={idx}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

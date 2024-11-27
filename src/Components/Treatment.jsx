import React from "react";
import treatment from "../assets/images/treatment.png";

const Treatment = () => {
  return (
    <section className="mt-20">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-10">
          {/* Image Section */}
          <figure className="lg:w-1/4 h-2/3 hidden md:block lg:block">
            <img
              src={treatment}
              alt="Exceptional dental care service"
              className="rounded-lg shadow-2xl w-full h-full object-cover"
              loading="lazy"
            />
          </figure>

          {/* Text Section */}
          <div className="lg:w-1/3">
            <h1
              className="text-3xl md:text-4xl lg:text-4xl font-bold font-sans text-info"
              id="treatment-heading"
            >
              Exceptional Dental Care, on Your Terms
            </h1>
            <p
              className="py-6 text-base  text-gray-600 font-sans"
              id="treatment-description"
              role="contentinfo"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web pages use it.
            </p>
            <div className="flex justify-center w-full lg:justify-start">
              <button className="btn btn-outline btn-info">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatment;

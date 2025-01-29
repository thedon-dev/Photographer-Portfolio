import React from "react";
import img from "../assets/Dream.jpg";
import { BsQuote } from "react-icons/bs";

const Testimonial = () => {
  return (
    <div id="testimonial" className="py-10">
      <h1 className="text-5xl lg:text-7xl headerFont">
        HEAR FROM* <br /> HAPPY CLIENT
      </h1>
      <div className="flex flex-col lg:flex-row mt-8 gap-8">
        <div
          className="hidden lg:block lg:w-3/5 h-[35rem]"
          style={{ backgroundImage: `url(${img})` }}
        />
        <div
          className="lg:hidden lg:w-3/5 h-[35rem]"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "top",
          }}
        />
        <div className="lg:w-2/5">
          <h1 className="text-6xl headerFont">Drmchsr</h1>
          <p className="smallFont mt-10 lg:mt-20 text-xl">
            <BsQuote size={25} />
            Working with Prince was an absolute pleasure. His talent and passion
            for photography truly shines through in every image he captures.
            From the initial consultation to the final product, his
            professionalism and attention to detail were evident`at every step
            of the process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

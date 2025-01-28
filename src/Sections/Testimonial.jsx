import React from "react";
import img from "../assets/Dream.jpg";
import { BsQuote } from "react-icons/bs";

const Testimonial = () => {
  return (
    <div className="my-10">
      <h1 className="text-7xl headerFont">
        HEAR FROM* <br /> HAPPY CLIENT
      </h1>
      <div className="flex mt-8 gap-8">
        <div
          className="w-3/5 h-[35rem]"
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className="w-2/5">
          <h1 className="text-6xl headerFont">Drmchsr</h1>
          <p className="smallFont mt-20 text-xl">
            <BsQuote size={25} />
            Working with Prince was an absolute pleasure. His talent and passion
            for photography truly shines through in every image he captures.
            From the initial consultation to the final product, his
            proffesionalism and attention to detail were evident`at every step
            of the process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

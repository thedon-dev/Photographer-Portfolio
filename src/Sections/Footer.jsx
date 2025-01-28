import React from "react";
import map from "../assets/map.png";
import { CgCopyright } from "react-icons/cg";
import { FaLocationPin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact" className="px-[5%]  bg-black text-white">
      <div className="2xl:container justify-between mx-auto py-14 flex flex-col lg:flex-row">
        <div className="">
          <h1 className="headerFont text-6xl lg:text-7xl">
            Where can you <br /> find me
          </h1>
          <p className="smallFont mt-5 flex gap-2">
            <FaLocationPin /> 41 Uniport
          </p>
          <div className="flex gap-5 mt-5">
            <div className="smallFont text-sm">
              <p>Email</p>
              <p>jpegbyprince@gmail.com</p>
            </div>
            <div className="smallFont text-sm">
              <p>Phone Number</p>
              <p>(+234)9057696490</p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="w-[15rem] lg:w-[25rem]">
            <img src={map} alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center smallFont py-5">
        <p className="text-sm lg:text-base flex items-center text-white">
          jpegbyprince
          <CgCopyright />
          2021-2025, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="px-[5%]  bg-black text-white">
      <div className="2xl:container mx-auto py-10">
        <div className="">
          <h1 className="headerFont text-6xl">Where can you find us</h1>
          <p className="smallFont mt-3">Uniport</p>
          <div className="flex gap-5 mt-5">
            <div className="smallFont text-sm">
              <p>Email</p>
              <p>viktoh7351@gmail.com</p>
            </div>
            <div className="smallFont text-sm">
              <p>Phone Number</p>
              <p>(+234)9057696490</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

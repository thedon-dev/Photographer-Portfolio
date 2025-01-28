import React from "react";
import img1 from "../assets/IMG_7218.jpeg";
import img2 from "../assets/IMG_7224.jpeg";
import img3 from "../assets/IMG_7227.jpeg";
import img4 from "../assets/IMG_7232.jpeg";

const Showcase = ({ img, detail, name }) => {
  return (
    <div className="">
      <div
        className="h-[35rem] lg:h-[50rem] mb-5"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <span className="smallFont">{detail}</span>
      <p className="text-5xl lg:text-6xl headerFont">{name}</p>
    </div>
  );
};

const Portfolio = () => {
  const showcases = [
    {
      pic: img1,
      detail: "Portrait / Photogrpahy",
      name: "concert",
    },
    {
      pic: img2,
      detail: "Portrait / Photogrpahy",
      name: "model",
    },
    {
      pic: img3,
      detail: "Portrait / Photogrpahy",
      name: "concert",
    },
    {
      pic: img4,
      detail: "Portrait / Photogrpahy",
      name: "vibes",
    },
  ];
  return (
    <>
      <div className="relative py-20" id="portfolio">
        <span className="headerFont text-6xl absolute top-20 right-0">*</span>
        <div className="">
          <h1 className="headerFont text-5xl lg:text-6xl">
            PORTFOLIO SHOWCASE
          </h1>
          <p className="smallFont my-5 lg:w-1/2">
            Each Photograph in this collection has been carefully curated to
            tell a story , evoke emotions, and capture the beauty of the world
            around us.
          </p>
        </div>
        <div className="mt-10 grid lg:grid-cols-2 gap-5 gap-y-20">
          {showcases.map((showcase, index) => (
            <Showcase
              key={index}
              img={showcase.pic}
              detail={showcase.detail}
              name={showcase.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;

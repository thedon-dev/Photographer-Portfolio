import React from "react";
import img1 from "./assets/IMG_7241.jpeg";
import Portfolio from "./Sections/Portfolio";
import Footer from "./Sections/Footer";
import Testimonial from "./Sections/Testimonial";

const MainPage = () => {
  const navLinks = [
    {
      name: "Explore",
      link: "#explore",
    },
    {
      name: "Portfolio",
      link: "#portfolio",
    },
    {
      name: "Testimonial",
      link: "#testimonial",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <>
      <div className="px-[5%] pt-8 py-3">
        <nav className="flex flex-col-reverse lg:flex-row gap-y-5 justify-between 2xl:container mx-auto">
          <div className="flex gap-3 lg:gap-5 items-center justify-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="text-sm lg:text-base p-2 secondFont"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="text-xs lg:text-base secondFont justify-center flex items-center gap-3">
            <span className="">jpegbyprince@gmail.com</span>
            <a href="" className="border px-4 py-2 rounded-full">
              Let's Connect
            </a>
          </div>
        </nav>
      </div>

      <main className="px-[5%]" id="explore">
        <div className="2xl:container mx-auto">
          <div className="flex justify-center">
            <h1 className="headerFont w-fit text-center flex text-[2rem] lg:text-[7rem] tracking-[.5rem] lg:tracking-[2.5rem]">
              {/* <span>Prince</span>
            <span>Rufus</span> */}
              <p>JPEGBYPRINCE</p>
            </h1>
          </div>

          <div
            className="relative h-[35rem] lg:h-[45rem] w-full rounded-md"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <span className="absolute text-white text-4xl thirdFont right-5 top-5">
              {/* @ 2023 */}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 my-10 mt-20">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold lg:w-2/3 headerFont">
                * IT'S ABOUT ME AND HOW I WORK
              </h1>
            </div>
            <div className="mt-10 lg:mt-0 smallFont text-lg">
              <p className="">
                Hi, I am Prince Rufus, a proffesional photographer based in Port
                Harcourt city , <br /> I have been captivated by the power of
                visual story telling, and photography allows me to freeze
                moments in time and convey emotions through images.
              </p>
              <p className="mt-7">
                With a background in fine art and a keen eye for detail, <br />{" "}
                I appraoch each photography session as an opportunity to create
                art. Whether I'm capturing the joy and connection of a family,
                the raw emotions of a wedding day, my goal is to evokea sense of
                wonder and create images that resonate with viewers.
              </p>
              <p className="mt-7">
                I specialize in Phtography, Through my lens, I strive to capture
                the essence of my subjects, whether it's their unique
                personalit, the ambiance of a specific location, or the
                interplay of light and shadow.
              </p>
            </div>
          </div>

          {/* Portfolio Showcase */}
          <Portfolio />
          <Testimonial />
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainPage;

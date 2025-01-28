import React from "react";
import img1 from "./assets/IMG_7211.jpeg";
import Portfolio from "./Sections/Portfolio";

const MainPage = () => {
  const navLinks = [
    {
      name: "Explore",
      link: "#explore",
    },
    {
      name: "Portfolio",
      link: "#explore",
    },
    {
      name: "Learn",
      link: "#explore",
    },
    {
      name: "Contact",
      link: "#explore",
    },
  ];
  return (
    <>
      <div className="px-[5%] py-8">
        <nav className="flex justify-between 2xl:container mx-auto">
          <div className="flex gap-5 items-center">
            {navLinks.map((link, index) => (
              <a key={index} href={link.link} className=" p-2 secondFont">
                {link.name}
              </a>
            ))}
          </div>
          <div className=" secondFont flex items-center gap-3">
            <span className="">viktoh7351@gmail.com</span>
            <button className="border px-4 py-2 rounded-full">
              Let's Connect
            </button>
          </div>
        </nav>
      </div>

      <main className="px-[5%]">
        <div className="2xl:container mx-auto">
          <h1 className="headerFont flex justify-between text-[8rem] tracking-[2rem]">
            <span>Prince</span>
            <span>Rufus</span>
          </h1>
          <div
            className="relative h-[45rem] w-full rounded-md"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <span className="absolute text-white text-4xl thirdFont right-5 top-5">
              @ 2023
            </span>
          </div>

          <div className="grid grid-cols-2 my-10 mt-20">
            <div>
              <h1 className="text-6xl font-bold lg:w-2/3 headerFont">
                * IT'S ABOUT ME AND HOW I WORK
              </h1>
            </div>
            <div className="smallFont text-lg">
              <p className="">
                Hi, I am Prince Rufus, a proffesional photographer based in Port
                Harcourt city , I have been captivated by the power of visual
                story telling, and photography allows me to freeze moments in
                time and convey emotions through images.
              </p>
              <p className="mt-7">
                With a background in fine art and a keen eye for detail, I
                appraoch each photography session as an opportunity to create
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
        </div>
      </main>
    </>
  );
};

export default MainPage;

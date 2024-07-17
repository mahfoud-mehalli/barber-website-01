import React from "react";
import others1Img from "../imgs/others-1.jpg";
import others2Img from "../imgs/others-2.jpg";

const About = () => {
  return (
    <div id="about">
      <section className="flex items-center justify-center w-full my-20">
          <div className="flex items-center justify-center lg:flex-row flex-col gap-20">
            <div className="flex md:items-center items-start md:flex-row flex-col">
              <img src={others1Img} alt="" className="rounded m-3" />
              <img src={others2Img} alt="" className="rounded m-3 h-1/2" />
            </div>
            <div className="lg:w-2/5 w-4/6">
              <h3 className="text-4xl text-gold font-semibold font-RobotoCondensed">ABOUT US</h3>
              <p className="font-medium mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur imperdiet hendrerit volutpat. Sed in nunc nec ligula
                consectetur mollis in vel justo.
              </p>
              <small className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur imperdiet hendrerit volutpat. Sed in nunc nec ligula
                consectetur mollis in vel justo.
              </small>
              <div className="mt-3">
                <span className="inline-block">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="3em"  height="3em"  viewBox="0 0 24 24"  className="fill-current text-black">  <path    fill="currentColor"    d="M16.372 11.621c1.57 0 2.628 1.092 2.628 2.71C19 15.787 17.784 17 16.137 17C14.333 17 13 15.544 13 13.32c0-5.055 3.686-7.077 6-7.32v2.224c-1.569.283-3.333 1.86-3.412 3.6c.079-.04.392-.203.784-.203Zm-7.999 0c1.568 0 2.627 1.092 2.627 2.71C11 15.787 9.784 17 8.137 17C6.333 17 5 15.544 5 13.32C5 8.265 8.686 6.243 11 6v2.224c-1.569.283-3.333 1.86-3.412 3.6c.079-.04.392-.203.785-.203Z"  /></svg>
                </span>
              </div>
              <div className="pl-12">
                <p>
                  Lorem ipsum dolor sit amet, consetetur adipiscing elit massa.
                </p>
                <p className="font-RobotoCondensed text-3xl font-medium">John Dey</p>
              </div>
            </div>
          </div>
      </section>

      <section className="w-full hero2-image h-[400px] flex justify-center items-center flex-col text-white-200 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="7em" height="7em" viewBox="0 0 24 24" className="fill-current text-white">
            <path fill="#fff" d="M16.372 11.621c1.57 0 2.628 1.092 2.628 2.71C19 15.787 17.784 17 16.137 17C14.333 17 13 15.544 13 13.32c0-5.055 3.686-7.077 6-7.32v2.224c-1.569.283-3.333 1.86-3.412 3.6c.079-.04.392-.203.784-.203Zm-7.999 0c1.568 0 2.627 1.092 2.627 2.71C11 15.787 9.784 17 8.137 17C6.333 17 5 15.544 5 13.32C5 8.265 8.686 6.243 11 6v2.224c-1.569.283-3.333 1.86-3.412 3.6c.079-.04.392-.203.785-.203Z"/>
          </svg>
          <h3 className="md:text-2xl text-xl mt-2 font-bold">
            “ Lorem ipsum dolor sit amet, <br /> consetetur adipiscing elit.
            Phasellus blandit massa. ”
          </h3>
          <small className="mt-4 text-2xl font-RobotoCondensed">- Josh Doe -</small>
      </section>
    </div>
  );
};

export default About;

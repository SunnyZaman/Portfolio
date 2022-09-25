import Link from "next/link";
import React from "react";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="h-screen flex flex-col space-r-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://cdn.sanity.io/images/u7223sxg/production/c6c23e8c434cf24678da0d7b77b06f91aaa2aa88-500x750.jpg"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 uppercase">
          Sunny Zaman
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

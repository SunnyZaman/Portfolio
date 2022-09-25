import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[500px] xl:w-[900px] snap-center bg-[#ffffff] p-10 
    hover:opacity-40 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://cdn.sanity.io/images/u7223sxg/production/c6c23e8c434cf24678da0d7b77b06f91aaa2aa88-500x750.jpg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-dark">Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">Apple</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/u7223sxg/production/c6c23e8c434cf24678da0d7b77b06f91aaa2aa88-500x750.jpg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/u7223sxg/production/c6c23e8c434cf24678da0d7b77b06f91aaa2aa88-500x750.jpg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/u7223sxg/production/c6c23e8c434cf24678da0d7b77b06f91aaa2aa88-500x750.jpg"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-700"> Started... - Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Point </li>
          <li>Point </li>
          <li>Point </li>
          <li>Point </li>
          <li>Point </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;

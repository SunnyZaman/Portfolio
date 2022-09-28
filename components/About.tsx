import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo?: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center mt-8"
      
    >
      {/* Remove absolute and relative and snaps - ruining mobile experience */}
      {/* <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3> */}
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        // viewport={{once:true}}
        className="mb-8 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        // src="https://cdn.sanity.io/images/u7223sxg/production/c6c23e8c434cf24678da0d7b77b06f91aaa2aa88-500x750.jpg"
        src={urlFor(pageInfo?.profilePic).url()}
        alt={`${pageInfo?.name}'s hero image`}

      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">My background</h4>
        <p className="text-base">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default About;

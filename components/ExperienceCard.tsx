import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
  directionLeft: boolean;
};

function ExperienceCard({ experience, directionLeft }: Props) {
  return (
    // <article
    //   className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    // w-[500px] md:w-[500px] xl:w-[900px] snap-center bg-[#ffffff] p-10
    // hover:opacity-40 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    // >
    //   <motion.img
    //     initial={{
    //       y: -100,
    //       opacity: 0,
    //     }}
    //     transition={{ duration: 1.2 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     viewport={{ once: true }}
    //     className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
    //     // src="https://cdn.sanity.io/images/u7223sxg/production/c6c23e8c434cf24678da0d7b77b06f91aaa2aa88-500x750.jpg"
    //     src={urlFor(experience?.companyImage).url()}
    //     alt={`${experience?.company} image`}
    //   />
    //   <div className="px-0 md:px-10">
    //     <h4 className="text-4xl font-dark">{experience?.jobTitle}</h4>
    //     <p className="font-bold text-2xl mt-1">{experience?.company}</p>
    //     <div className="flex space-x-2 my-2">
    //       {experience?.technologies.map((technology) => (
    //         <img
    //           key={technology._id}
    //           className="h-10 w-10 rounded-full"
    //           src={urlFor(technology?.image).url()}
    //           alt={`${technology?.title} logo`}
    //         />
    //       ))}
    //     </div>
    //     <p className="uppercase py-5 text-gray-700">
    //       {
    //         new Date(experience.dateStarted).toDateString()} -{" "}
    //         {experience.isCurrentlyWorkingHere ? "Present": new Date(experience.dateEnded).toDateString()}
    //       </p>
    //     <ul className="list-disc space-y-4 ml-5 text-lg">
    //       {
    //         experience?.points.map((point,i)=>(
    //           <li key={i}>{point}</li>
    //         ))
    //       }
    //     </ul>
    //   </div>
    // </article>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-10"
    >
      <img
        src={urlFor(experience?.companyImage).url()}
        alt={`${experience?.company} image`}
        className="timeline-img"
      />
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={`timeline-container ${
          directionLeft ? "timeline-container-left" : ""
        }`}
      >
        <div
          className={`timeline-pointer ${
            directionLeft ? "timeline-pointer-left" : ""
          }`}
          aria-hidden="true"
        ></div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <span className="font-bold text-[#b17a06] text-sm tracking-wide">
            {new Date(experience.dateStarted).toDateString()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </span>
          <h4 className="text-2xl font-bold pt-1">{experience?.jobTitle}</h4>
          {/* <p className="pt-1"> */}
          <ul className="list-disc space-y-4 ml-5 mt-3">
            {experience?.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          {/* </p> */}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ExperienceCard;

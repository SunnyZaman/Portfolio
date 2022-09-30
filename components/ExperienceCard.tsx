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

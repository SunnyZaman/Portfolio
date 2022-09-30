import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences?: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center mt-8 "
    >
      <div className="relative container mx-auto px-6 flex flex-col space-y-8 max-w-[75rem]">
        <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        <>
          {experiences?.map((experience, i) => (
            <ExperienceCard
              key={experience._id}
              experience={experience}
              directionLeft={i % 2 === 0}
            />
          ))}
        </>
      </div>
    </motion.div>
  );
}

export default WorkExperience;

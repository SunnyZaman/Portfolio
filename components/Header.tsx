import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-50 bg-[#f4f4f4] xl:items-center ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social icons */}
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            className="my-social-icon"
            url={social.url}
            fgColor={social.fgColor}
            bgColor="transparent"
            target="_blank"
            rel="noreferrer"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer justify-center"
      >
        <SocialIcon
          className="cursor-pointer my-social-icon"
          network="email"
          fgColor="#e4aa12"
          bgColor="transparent"
          onClick={() => window.location.assign("mailto:sunnyzaman@live.com")}
        />
      </motion.div>
    </header>
  );
}

import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
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
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="https://cdn.sanity.io/images/u7223sxg/production/c6c23e8c434cf24678da0d7b77b06f91aaa2aa88-500x750.jpg"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">My background</h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum neque purus, id ultrices dui maximus nec. Maecenas neque
          dui, aliquam id commodo vel, finibus semper turpis. Morbi non tortor
          porttitor nisi viverra viverra. Nunc tincidunt velit at massa aliquet,
          a tristique lectus commodo. Ut rutrum magna ut est dapibus fringilla.
          Ut interdum venenatis magna nec pellentesque. Quisque sed blandit
          enim. Etiam ornare id arcu a eleifend. Duis consectetur ligula nec mi
          maximus porttitor. Aliquam porta, nunc ac finibus malesuada, eros nisi
          malesuada magna, in tincidunt arcu lacus ut quam. Nullam nibh nisi,
          fringilla sed tempus ut, porta ac ligula. Proin leo massa, tempor in
          urna quis, facilisis suscipit leo. Nullam porttitor quam lectus, vitae
          dapibus sem faucibus eu.
        </p>
      </div>
    </motion.div>
  );
}

export default About;

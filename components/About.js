import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";

const About = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="about"
    >
      <div className="pb-12 pt-12">
        <motion.div className="flex flex-col items-center justify-center ml-auto w-full p-2" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            About
          </h3>
          <p className="my-2 text-black-500 text-center">
            Kenali kami lebih dekat.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
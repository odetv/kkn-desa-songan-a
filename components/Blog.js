import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";

const Blog = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl pt-3 pb-6 sm:pt-14 sm:pb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="blog"
    >
      <div className="pb-12 pt-12">
        <motion.div className="flex flex-col items-center justify-center ml-auto w-full p-2" variants={scrollAnimation}>
          <h3 className="text-center text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Blog & Galery
          </h3>
          <p className="text-black-500 text-center mt-4 mb-4">
            Temukan berita dan album dokumentasi selama kegiatan KKNT berlangsung.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;

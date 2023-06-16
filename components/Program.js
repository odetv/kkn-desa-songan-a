import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const programs = [
  "Tanggap Bencana/Pengurangan Resiko Bencana (PRB)",
  "Sanitasi Lingkungan dan Kesehatan",
  "Pengelolaan Sampah berbasis Sumber",
  "Penguatan Kelembagaan Desa/SDM",
  "Pengembangan Pariwisata",
  "Ekonomi dan Kewirausahaan",
  "Konversi/Penguatan Sosial-Budaya",
  "Program Keluarga Asuh"
]

const Program = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl pt-3 pb-6 sm:pt-14 sm:pb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="program"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p y-8 my-12">
        <motion.div className="flex flex-col items-center justify-center ml-auto w-full lg:w-5/6 p-2 lg:items-start xl:items-start" variants={scrollAnimation}>
          <h3 className="text-center lg:text-left xl:text-left text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Program Kerja KKNT
          </h3>
          <p className="text-center lg:text-left xl:text-left text-black-500 mt-4 mb-4">
            Terdapat Proker Wajib, Pilihan, dan Khusus yang dapat diambil baik kelompok dan individu.
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            {programs.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
        </motion.div>
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/program.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Program;

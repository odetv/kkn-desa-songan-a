import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";


const Desaku = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl pt-3 pb-6 sm:pt-14 sm:pb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="desaku"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-1 p y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/desaku.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="text-center flex flex-col items-center justify-center ml-auto w-full lg:w-5/6 p-2  lg:items-start xl:items-start lg:text-left xl:text-left" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Informasi Desa
          </h3>
          <p className="text-black-500 mt-4 mb-4">
            Sejarah Desa Songan berakar dari cerita turun-temurun. Penduduk asli, keturunan manusia pra-Bali Mula, terpencar setelah serangan Kerajaan Panji Sakti. Beberapa menetap di banjar Songan. Suatu hari, tiga orang meninggal, dan tempat penguburan dinamai Saman Tiga. Penduduk Kayu Selem mulai bertani di sekitar Saman Tiga dan berinteraksi dengan penduduk Tampurhyang. Mereka sepakat menata wilayah sekitar Goa Song. Ada juga yang mengatakan Songan berasal dari kata "Sung An," yang berarti manusia. Wilayah Songan terletak di sekitar lubang besar, seperti Goa, Gunung Batur, Abang, dan Bukit Gede. Peninggalan dinasti Sung juga ditemukan di sekitar sana.
          </p>
          <a href="https://songana.desa.id/artikel/2021/6/23/sejarah-desa-songan-a" target="blank"><ButtonPrimary>Info Selengkapnya</ButtonPrimary></a>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Desaku;

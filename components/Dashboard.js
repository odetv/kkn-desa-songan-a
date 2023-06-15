import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Dashboard = ({
  listUser = [
    {
      name: "Jumlah Tim",
      desc: "25",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Lokasi",
      desc: "Desa Songan A, Bangli",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Perguruan Tinggi",
      desc: "Universitas Pendidikan Ganesha",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="dashboard"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-6 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-xl lg:text-2xl xl:text-3xl font-medium text-black-600 leading-normal">
              Selamat Datang di Website Resmi KKNT
              </h1>
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-black-600 leading-normal mt-1">
                <strong>Desa Songan A, Kab.Bangli, Bali</strong>
              </h1>
              <p className="text-black-500 mt-4 mb-6">
              Platform informasi resmi untuk program Kuliah Kerja Nyata. Program ini merupakan bagian penting dari pengalaman kuliah yang bertujuan untuk mengaplikasikan ilmu pengetahuan dan keterampilan mahasiswa dalam melayani masyarakat.
              </p>
              <a href="#" target=""><ButtonPrimary>Kenali kami lebih lanjut</ButtonPrimary></a>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/Illustration1.png"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-0 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="flex-none lg:flex xl:flex w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 lg:ml-4 xl:ml-4 rounded-full mb-2 lg:mb-0 xl:mb-0">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.desc}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
  );
};

export default Dashboard;

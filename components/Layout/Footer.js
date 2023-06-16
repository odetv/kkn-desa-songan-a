import React from "react";
import Logo from "../../public/assets/logo.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-16 pb-16">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 lg:grid xl:grid sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Logo className="h-32 w-auto" />
          <p className="mb-4">
            <strong className="font-medium">KKN Desa Songan A Bangli</strong>
            <p>Website informasi resmi untuk program Kuliah Kerja Nyata Universitas Pendidikan Ganesha di Desa Songan A Kec. Kintamani, Kab. Bangli</p>
          </p>
          <div className="flex items-center w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://instagram.com/kknt.desasongana2023" target="blank"><Instagram className="h-6 w-6" /></a>
            </div>
            <a href="https://instagram.com/kknt.desasongana2023" target="blank"><p className="font-medium">Instagram</p></a>
          </div>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mt-4 lg:mt-0 xl:mt-0 lg:mb-4 xl:mb-4 font-medium text-lg">Profil Desa</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Sejarah Desa{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Profil Wilayah Desa{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Profil Potensi Desa{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mt-4 lg:mt-0 xl:mt-0 lg:mb-4 xl:mb-4 font-medium text-lg">Program KKN</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Proker Wajib ?{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Proker Pilihan{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Proker Khusus{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mt-4 lg:mt-0 xl:mt-0 lg:mb-4 xl:mb-4 font-medium text-lg">Blog</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Berita{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Galery Dokumentasi Kegiatan{" "}
            </li>
          </ul>
        </div>
      </div>
      <p className="pt-12 pb-4 lg:pt-0 lg:pb-0 xl:pt-0 xl:pb-0 text-center text-xs text-gray-400">©{new Date().getFullYear()} - MOMENTKITA BALI</p>
    </div>
  );
};

export default Footer;

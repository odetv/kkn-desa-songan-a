import React from "react";
import Logo from "../../public/assets/logo.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-16 pb-16">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Logo className="h-14 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">KKN Desa Songan A Bangli</strong>
            <p>Platform informasi resmi untuk program Kuliah Kerja Nyata</p>
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - MOMENTKITA BALI</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Profil Desa</p>
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
          <p className="text-black-600 mb-4 font-medium text-lg">Program KKN</p>
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
          <p className="text-black-600 mb-4 font-medium text-lg">Blog</p>
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
    </div>
  );
};

export default Footer;

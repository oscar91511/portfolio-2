import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineAppstore,
  AiOutlineUser,
  AiOutlineTranslation,
} from "react-icons/ai";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden text-4xl transition-transform  "
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 font-bold">
          <Link
            onClick={handleNav}
            to="/"
            className="w-[75%] flex justify-center  items-center rounded-full shadow-lg hover:bg-blue-600/60
             hover:text-white bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">{t("Home")}</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/Work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg  hover:bg-blue-600/60 hover:text-white bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineAppstore size={20} />
            <span className="pl-4">{t("Work")}</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/Projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg  hover:bg-blue-600/60 hover:text-white bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">{t("Projects")}</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/Resume"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg  hover:bg-blue-600/60 hover:text-white bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineUser size={20} />
            <span className="pl-4">{t("Resume")}</span>
          </Link>
          <Link
            onClick={handleNav}
            to="/Contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg  hover:bg-blue-600/60 hover:text-white bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">{t("Contact")}</span>
          </Link>
          <a
            className="w-[75%]  flex justify-center items-center rounded-full shadow-lg  hover:bg-blue-600/60 hover:text-white bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={() => {
              handleNav();
              handleLanguageChange();
            }}
            id="languageButton"
          >
            {t("languageButton")}
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] transition-transform z-10 font-bold ">
        <div className="flex flex-col">
          <Link
            to="/"
            className="rounded-full shadow-lg  hover:text-blue-600 bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </Link>
          <Link
            to="/Work"
            className="rounded-full shadow-lg  hover:text-blue-600 bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineAppstore size={20} />
          </Link>
          <Link
            to="/Projects"
            className="rounded-full shadow-lg  hover:text-blue-600 bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </Link>
          <Link
            to="/Resume"
            className="rounded-full shadow-lg  hover:text-blue-600 bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineUser size={20} />
          </Link>
          <Link
            to="/Contact"
            className="rounded-full shadow-lg  hover:text-blue-600 bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </Link>
          <AiOutlineTranslation
            size={20}
            className="rounded-full w-[75%] h-[100%] shadow-lg hover:text-blue-600 bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            onClick={() => handleLanguageChange("es")}
            id="languageButton"
          >
            {t("languageButton")}
          </AiOutlineTranslation>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

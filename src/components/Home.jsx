import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [animationKey, setAnimationKey] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("language") || i18n.language
  );

  useEffect(() => {
    setCurrentLanguage(i18n.language);

    setAnimationKey(animationKey + 1);
  }, [i18n.language]);

  const animationSequences = {
    en: ["Developer", "Coder", "Full Stack", "from Colombia"],
    es: ["Desarrollador", "Programador", "Full Stack", "de Colombia"],
  };

  return (
    <div link="/">
      <img
        className="w-full h-screen object-cover object-left "
        src="https://images.unsplash.com/photo-1587614295999-6c1c13675117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20 ">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            {t("wellcome")}
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            {t("Present")}{" "}
            <TypeAnimation
              key={animationKey}
              sequence={animationSequences[currentLanguage]}
              wrapper="span"
              speed={0}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaGithub className="cursor-pointer" size={20} />
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

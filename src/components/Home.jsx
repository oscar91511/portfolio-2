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

  const handleGithubClick = () => {
    window.open(
      "https://github.com/oscar91511",
      "_blank",
      "noopener noreferrer"
    );
  };

  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/oscar-eduardo-lopez-restrepo-968a91265/",
      "_blank",
      "noopener noreferrer"
    );
  };

  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/gamingsofware_pereira/",
      "_blank",
      "noopener noreferrer"
    );
  };

  const handleFacebookClick = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100087667838427",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <div link="/">
      <img
        className="w-full h-screen object-cover object-left "
        src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      />
      <img
        src="/images/programer.PNG"
        alt="Imagen adicional"
        style={{
          position: "absolute",
          top: "21%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "350px",
        }}
      />
      <div className="w-full h-screen absolute top-0 left-0  bg-white/60 ">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">
            {t("wellcome")}
          </h1>
          <h2 className="flex sm:text-4xl text-2xl pt-4 text-gray-800 ">
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
          <div className="flex justify-between pt-6 max-w-[250px] w-full ">
            <FaGithub
              onClick={handleGithubClick}
              className="cursor-pointer hover:text-yellow-300 to-blue-400/20"
              size={40}
            />
            <FaFacebookF
              onClick={handleFacebookClick}
              className="cursor-pointer hover:text-blue-700 to-blue-400/20"
              size={40}
            />
            <FaInstagram
              onClick={handleInstagramClick}
              className="cursor-pointer hover:text-red-700 to-blue-400/20"
              size={40}
            />
            <FaLinkedinIn
              onClick={handleLinkedinClick}
              className="cursor-pointer hover:text-lime-400 to-blue-400/20"
              size={40}
            />
          </div>
        </div>
      </div>
      <footer className="flex gap-2 p-4 justify-center text-white "></footer>

      {/* Footer */}
      <span className="font-bold  pb-2 flex items-center justify-center">
        {t("CopyRight")}
      </span>
    </div>
  );
};

export default Home;

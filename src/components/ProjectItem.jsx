import React from "react";
import { useTranslation } from "react-i18next";

const projectItem = ({ img, title }) => {
  const { t } = useTranslation();

  return (
    <div
      className="relative flex items-center justify-center h-auto w-full shadow-gray-400 rounded-xl group
    hover:bg-gradient-to-r from-gray-200 to-[#001b5e] hover:animate-pulse"
    >
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">
          {t("descriptionProjectItem")}
        </p>
        <a href="/">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg ">
            {t("DescriptionProjectItem2")}{" "}
          </p>
        </a>
      </div>
    </div>
  );
};

export default projectItem;

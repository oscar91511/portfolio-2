import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
  // Cambio aquí: recibe la prop project
  const { t } = useTranslation();

  return (
    <div
      className="relative flex items-center justify-center h-auto w-full shadow-gray-400 rounded-xl group
    hover:bg-gradient-to-r from-gray-200 to-[#001b5e] hover:animate-pulse"
    >
      <img
        src={project.img}
        alt="/"
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {project.title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">
          {t("descriptionProjectItem")}
        </p>

        {/* Utiliza el componente Link */}
        <button
          Link
          to={`/project-details/${project.id}`}
          className="text-center p-3 rounded-lg bg-white text-gray-700 hover:bg-blue-700 hover:text-white font-bold cursor-pointer text-lg "
        >
          {t("DescriptionProjectItem2")}
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;

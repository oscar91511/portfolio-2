import React from "react";
import ProjectItem from "./ProjectItem";
import Academlo_StoreImg from "../assets/Academlo_Store.jpg";
import AmazingImg from "../assets/amazing-2.png";
import Card_StatsImg from "../assets/Card_stats.jpg";
import climateImg from "../assets/climate.jpg";
import crudImg from "../assets/crud.png";
import EteriumImg from "../assets/Eterium_Card.jpg";
import galaxyImg from "../assets/galaxy.jpg";
import pokedexImg from "../assets/pokedex.png";
import rick_and_mortyImg from "../assets/rick_and_morty.jpg";
import storeImg from "../assets/store.jpg";
import portfolio from "../assets/portfolio.png";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div link="Projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-20">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] ">
        {t("Projects")}
      </h1>
      <div className="py-4">
        <p className="text-center py-10 text-xl font-normal text-stone-600 ">
          {t("Description")}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-12 ">
        <ProjectItem img={Academlo_StoreImg} title={t("Store1 App")} />
        <ProjectItem img={AmazingImg} title={t("Store2 App")} />
        <ProjectItem img={Card_StatsImg} title={t("Card1 App")} />
        <ProjectItem img={climateImg} title={t("Clim App")} />
        <ProjectItem img={crudImg} title={t("Crud App")} />
        <ProjectItem img={EteriumImg} title={t("Card2 App")} />
        <ProjectItem img={galaxyImg} title={t("Galax App")} />
        <ProjectItem img={pokedexImg} title={t("Poke App")} />
        <ProjectItem img={rick_and_mortyImg} title={t("Rick App")} />
        <ProjectItem img={storeImg} title={t("Store3 App")} />
        <ProjectItem img={portfolio} title={t("Portf App")} />
      </div>
    </div>
  );
};

export default Projects;

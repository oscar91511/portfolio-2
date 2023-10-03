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

const Projects = () => {
  return (
    <div link="Projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] ">
        projects
      </h1>
      <div className="py-4">
      <p className="text-center py-10 text-xl font-normal text-stone-600 ">
        In my learning journey at the Academia boot camp, I have had the
        opportunity to work on several exciting projects that have allowed me to
        apply my knowledge and skills in the development of software. Below, I
        present some of my most recent projects. highlights:
      </p></div>
      <div className="grid sm:grid-cols-2 gap-12 ">
        <ProjectItem img={Academlo_StoreImg} title="Store1 App" />
        <ProjectItem img={AmazingImg} title="Store2 App" />
        <ProjectItem img={Card_StatsImg} title="Card1 App" />
        <ProjectItem img={climateImg} title="Clim App" />
        <ProjectItem img={crudImg} title="Crud App" />
        <ProjectItem img={EteriumImg} title="Card2 App" />
        <ProjectItem img={galaxyImg} title="Galax App" />
        <ProjectItem img={pokedexImg} title="Poke App" />
        <ProjectItem img={rick_and_mortyImg} title="Rick App" />
        <ProjectItem img={storeImg} title="Store3 App" />
        <ProjectItem img={portfolio} title="Portf App" />
      </div>
    </div>
  );
};

export default Projects;

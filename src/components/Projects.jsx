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

const Projects = () => {
  return (
    <div link="Projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus incidunt
        rerum, saepe reprehenderit, unde nesciunt voluptates autem assumenda aut
        beatae pariatur perspiciatis reiciendis cupiditate alias facilis
        maiores! Inventore, omnis nesciunt?
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem  img={Academlo_StoreImg} title='Academlo App' />
        <ProjectItem  img={AmazingImg} title='Amazing App' />
        <ProjectItem  img={Card_StatsImg} title='Card_Stats App' />
        <ProjectItem  img={climateImg} title='Climate App' />
        <ProjectItem  img={crudImg} title='Crud App' />
        <ProjectItem  img={EteriumImg} title='Eterium App' />
        <ProjectItem  img={galaxyImg} title='Galaxy App' />
        <ProjectItem  img={pokedexImg} title='Pokedex App' />
        <ProjectItem  img={rick_and_mortyImg} title='Rick_And_Morty App' />
        <ProjectItem  img={storeImg } title='Store App' />
        <ProjectItem  img={pokedexImg} title='Pokedex App' />
      </div>
    </div>
  );
};

export default Projects;

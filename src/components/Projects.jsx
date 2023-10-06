import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

const projects = [
  {
    id: 1,
    img: portfolio,
    title: "Portf App",
    url: "https://portafolio-netlify.netlify.app/",
  },
  {
    id: 2,
    img: Academlo_StoreImg,
    title: "Store1",
    url: "https://store-academlo-shop.netlify.app/",
  },
  {
    id: 3,
    img: AmazingImg,
    title: "Store2",
    url: "https://ecommerce-store-proyect6.netlify.app/",
  },
  {
    id: 4,
    img: storeImg,
    title: "Store3",
    url: "https://tienda-virtual-1.netlify.app/",
  },
  {
    id: 5,
    img: Card_StatsImg,
    title: "Card1",
    url: "https://taildwind-vite-and-react.netlify.app/",
  },
  {
    id: 6,
    img: EteriumImg,
    title: "Card2",
    url: "https://tarjet-eth-equilibrium.netlify.app/",
  },
  {
    id: 7,
    img: climateImg,
    title: "Climate",
    url: "https://climate-api.netlify.app/",
  },
  {
    id: 8,
    img: crudImg,
    title: "Crud",
    url: "https://crud-data-base.netlify.app/",
  },
  {
    id: 9,
    img: galaxyImg,
    title: "Galaxy",
    url: "https://into-spaceship.netlify.app/",
  },
  {
    id: 10,
    img: pokedexImg,
    title: "PokeApi",
    url: "https://poke-dex-world.netlify.app/",
  },
  {
    id: 11,
    img: rick_and_mortyImg,
    title: "RickApi",
    url: "https://rick-and-morty-world.netlify.app/",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-20 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]  ">
        {t("Projects")}
      </h1>
      <div className="py-4 ">
        <p className="font-semibold py-10 text-xl  text-stone-600 ">
          {t("Description")}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-12 ">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem img={project.img} title={project.title} project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;

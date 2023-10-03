import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2011,
    title: "Seasonal commercial",
    duration: "3 mounths",
    details:
      "Seasonal commercial advisor at Catalina Duke footwear warehouse Located in the Herradura Tuluá Valle shopping center. Admin Carolina Davalos",
  },
  {
    year: 2015,
    title: "Commercial Advisor",
    duration: "3 Years",
    details:
      "Seasonal commercial advisor at Catalina Duke footwear warehouse Located in the Herradura Tuluá Valle shopping center. Admin Carolina",
  },
  {
    year: 2018,
    title: "Commercial Advisor",
    duration: "2 Years",
    details:
      "Manager of Matimba nightclub for more than 1 year, owner Juan Sebastián López Restrepo located in the sector of Circumvalar Avenue #10-18 next to Juan Valdez. Pereira",
  },
  {
    year: 2020,
    title: "own computer company",
    duration: "",
    details:
      "Assembly, sale and installation of software for technological equipment. Knowledge of computers, assembly of technological equipment and installation of operating systems and experience in Word, Excel, etc. programs.More than 100 computers assembled and sold among other products.Experience managing work teams 4 and 6 collaborators",
  },
  {
    year: 2023,
    title: "my own projects",
    duration: "∞",
    details:
      "Currently working on my own programming projects, and practicing at a bootcamp called Academlo.",
  },
];

const Work = () => {
  return (
    <div link="/Work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] py-16"> Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;

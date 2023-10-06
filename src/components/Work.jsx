import React from "react";
import WorkItem from "./WorkItem";
import { useTranslation } from "react-i18next";

const data = [
  {
    year: 2011,
    title: "workItem1",
    duration: "3 months",
    details: "detailItem1",
  },
  {
    year: 2015,
    title: "workItem2",
    duration: "3 Years",
    details: "detailItem2",
  },
  {
    year: 2018,
    title: "workItem3",
    duration: "2 Years",
    details: "detailItem3",
  },
  {
    year: 2020,
    title: "workItem4",
    duration: "",
    details: "detailItem4",
  },
  {
    year: 2023,
    title: "workItem5",
    duration: "∞",
    details: "detailItem5",
  },
];

const Work = () => {
  const { t } = useTranslation();
  return (
    <div link={"Work"} className="max-w-[1040px] m-auto md:pl-20 p-4 py-8 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] py-16">
        {t("Exp Work")}
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={t(item.title)}
          duration={t(item.duration)}
          details={t(item.details)}
        />
      ))}
    </div>
  );
};

export default Work;

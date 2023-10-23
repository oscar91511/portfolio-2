import React from "react";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const resumePaths = {
    en: "https://drive.google.com/file/d/1D-pQJrdeN41GvBzanhiUX4smAb6kSyu5/preview",
    es: "https://drive.google.com/file/d/1juWH2SpSNcfbPfXmByzB8eLt-qRZABdD/preview",
  };

  const resumeURL = resumePaths[currentLanguage] || resumePaths.en;

  return (
    <div>
      <h2 className="py-12 text-4xl font-bold text-center text-[#001b5e]">
        {t("Resume")}
      </h2>
      <h1 className="font-semibold px-4 py-4 text-stone-600 text-xl">
        {t("bioDescription")}
      </h1>
      <div>
        <p className="flex justify-left text-xl text-stone-600 font-bold px-4 pb-6">
          {t("DescriptionCv")}
        </p>
        <div style={{ width: "100%", height: "900px" }}>
          <iframe
            src={resumeURL}
            title="Resume"
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </div>
        <p>
          <a
            className="flex py-2 text-xl font-bold justify-center items-center text-center text-[#001b5e]"
            href={resumeURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#001b5e] text-gray-100 mt-4 w-[40%] p-4 rounded-lg hover:animate-pulse">
              {t("BottonPdf")}
            </button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Resume;

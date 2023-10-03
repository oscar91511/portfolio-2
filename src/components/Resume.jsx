import React from "react";

const Resume = () => {
  const resumeURL =
    "https://drive.google.com/file/d/1v5zvvKrnzwzRNQhaLqODzoG1snDTmGVw/preview";

  return (
    <div link={"Resume"}>
      <h2 className="py-16 text-4xl font-bold text-center text-[#001b5e]">
        Resume
      </h2>
      <div>
        <p className="flex justify-center items-center text-xl text-stone-600 font-normal">
          You can preview my CV and also download it:
        </p>
        <div style={{ width: "100%", height: "900px" }}>
          <embed
            src={resumeURL}
            type="application/pdf"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <p>
          <a
            className="flex py-2 text-xl font-bold justify-center items-center text-center text-[#001b5e]"
            href={resumeURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#001b5e] text-gray-100 mt-4 w-[40%] p-4 rounded-lg hover:animate-pulse">
              Download PDF
            </button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Resume;

"use client";

import { useState } from "react";
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function Skills() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    {skillsImage(skill)?.src ? (
                      <Image
                        src={skillsImage(skill).src}
                        alt={skill}
                        width={40}
                        height={40}
                        className="!h-full !w-auto rounded-lg"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center rounded-lg bg-[#161b36] text-xs text-slate-300">
                        {skill.charAt(0)}
                      </div>
                    )}
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="flex justify-center my-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 text-[#16f2b3] bg-[#1a1443] border border-[#25213b] hover:bg-[#231d4b] hover:border-violet-500 transition-all duration-300 px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer shadow-lg"
        >
          <span>{showAll ? "Hide All Skills" : "Show All Skills"}</span>
          {showAll ? <BsChevronUp size={16} /> : <BsChevronDown size={16} />}
        </button>
      </div>

      {showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-8 transition-all duration-500 ease-in-out">
          {skillsData.map((skill, id) => (
            <div
              className="flex flex-col items-center justify-center p-5 rounded-lg border border-[#1f223c] bg-[#11152c] hover:border-violet-500 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
              key={id}
            >
              <div className="h-10 w-10 flex items-center justify-center mb-3">
                {skillsImage(skill)?.src ? (
                  <Image
                    src={skillsImage(skill).src}
                    alt={skill}
                    width={40}
                    height={40}
                    className="h-full w-auto object-contain"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-[#161b36] text-sm text-slate-300">
                    {skill.charAt(0)}
                  </div>
                )}
              </div>
              <p className="text-white text-sm text-center font-medium">{skill}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
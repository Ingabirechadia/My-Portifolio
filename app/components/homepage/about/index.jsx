// @flow strict

import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:gap-16">
        <div>
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg leading-8">
            {personalData.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-[#1b2c68] bg-[#0b112f] p-6">
            <h3 className="text-lg text-white font-semibold mb-3">Core Strengths</h3>
            <ul className="space-y-3 text-sm text-[#b1b9d9]">
              <li>Backend systems with Express, Spring Boot, and Flask</li>
              <li>Data-driven apps with PostgreSQL, MongoDB, and Redis</li>
              <li>AI workflows, automation, and cloud-native deployment</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#1b2c68] bg-[#0b112f] p-6">
            <h3 className="text-lg text-white font-semibold mb-3">What I bring</h3>
            <ul className="space-y-3 text-sm text-[#b1b9d9]">
              <li>Practical development experience from idea to deployment</li>
              <li>Strong communication in English, Kinyarwanda, and French</li>
              <li>Team-first mindset with a focus on real business outcomes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
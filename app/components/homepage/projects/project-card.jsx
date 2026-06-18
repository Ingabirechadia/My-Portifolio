// @flow strict

import Image from 'next/image';

function ProjectCard({ project }) {
  return (
    <div className="border border-[#1d293a] bg-[#1b203e] rounded-lg overflow-hidden transition-all duration-500 group hover:border-slate-300/40">
      <div className="flex flex-col gap-4 p-4 sm:p-5">
        <div className="h-44 w-full overflow-hidden rounded-md border border-[#2f3251] bg-[#11152c]">
          <Image
            src={project.cover_image || '/png/placeholder.png'}
            width={720}
            height={420}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between text-[#16f2b3] text-sm">
            <span>{project.category}</span>
            <span>{project.duration}</span>
          </div>
          <p className="mt-3 text-lg sm:text-xl font-semibold text-white transition-colors duration-300 group-hover:text-slate-100">
            {project.name}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 sm:px-5 sm:pb-5">
        <p className="mt-1 text-sm text-[#d3d8e8] line-clamp-4">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.map((tag, index) => (
            <span key={index} className="rounded-full border border-[#2f3251] bg-[#12162b] px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-[#bfc7f2]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

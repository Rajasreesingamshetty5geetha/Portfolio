'use client'

import { workExperience } from "@/data";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h1 className="heading text-center mb-10">
        Work <span className="text-purple">Experience</span>
      </h1>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto px-4">
        {workExperience.map((exp) => (
          <div
            key={exp.id}
            className="rounded-2xl border border-white/[0.2] p-6 flex flex-col gap-2"
            style={{
              background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div>
                <h3 className="text-white font-bold text-lg">{exp.title}</h3>
                <p className="text-purple font-semibold">{exp.company}</p>
              </div>
              <span className="text-[#c1c2d3] text-sm italic">{exp.duration}</span>
            </div>
            <p className="text-[#c1c2d3] text-sm mt-1">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

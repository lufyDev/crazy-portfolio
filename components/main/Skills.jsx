import {
    Backend_skill,
    Frontend_skill,
    Full_stack,
    Other_skill,
    Skill_data,
  } from "@/constants";
  import React from "react";
  import SkillDataProvider from "../sub/SkillDataProvider";
  import SkillText from "../sub/SkillTest";
  
  const Skills = () => {
    const SkillSection = ({ title, skills, bgColor = "bg-[#0300145e]" }) => (
      <div className="w-full max-w-6xl mx-auto mb-8 px-4">
        <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-6 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-[#7042f861]">
          {title}
        </h3>
        <div className="flex flex-row justify-center flex-wrap gap-4 md:gap-6 items-center p-4 rounded-xl border border-[#7042f861] bg-[#0300145e] backdrop-blur-sm">
          {skills.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>
    );

    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-8 relative overflow-hidden pb-20 py-20 px-4"
      >
        <SkillText />

        <div className="w-full flex flex-col items-center gap-8">
          <SkillSection title="Core Technologies" skills={Skill_data} />
          <SkillSection title="Frontend Development" skills={Frontend_skill} />
          <SkillSection title="Backend Development" skills={Backend_skill} />
          <SkillSection title="Full Stack & Tools" skills={Full_stack} />
          <SkillSection title="Additional Skills" skills={Other_skill} />
        </div>
  
        {/* <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            {/* <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            /> */}
          {/* </div>
        </div> */} 
      </section>
    );
  };
  
  export default Skills;
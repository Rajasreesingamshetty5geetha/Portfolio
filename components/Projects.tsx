import React from "react";
import { ProjectCard } from "@/components/ui/card";

export function ProjectsPage() {
  return (
    < section >
      <div className="py-20" id="Projects" >
        <h1 className='heading'>
          My{' '}
          <span className='text-purple relative inline-block'>
            Projects
            <div className='absolute -bottom-3 left-3 w-[120%] -ml-[10%]'>
              <div className='h-2 bg-gradient-to-r from-[#fe019a] to-[#3e51c9] transform [clip-path:polygon(0_0,100%_0,90%_100%,10%_10%)]'></div>
            </div>
          </span>
        </h1>
        <div className=" grid md:grid-cols-2 lg:grid-rows-2 items-center justify-center ">
          <ProjectCard
            title="Vision-Based Teleoperation System for Robotic Arm"
            description="Created a vision-based system enabling a robotic arm to mimic human hand movements in real-time using MediaPipe, OpenCV, and kinematics for precise motion mapping."
            imageUrl="https://rajasreesingamshetty5geetha.github.io/Assests-web/demon.png"
            projectLink="https://github.com/Rajasreesingamshetty5geetha/AI-Based-Approach-in-Teleoperation-of-Robotic-Arms"
          />
          <ProjectCard
            title="Captionific."
            description="Built an innovative web application for image analysis, caption generation, hashtag suggestions, and photo editing."
            imageUrl="https://rajasreesingamshetty5geetha.github.io/Assests-web/project.png"
            projectLink="https://github.com/Rajasreesingamshetty5geetha/Captionific."
          />
          <ProjectCard
            title="Start-To-doing"
            description="Built a dynamic task management system with persistent updates and integrated Kanban for task organization."
            imageUrl="https://rajasreesingamshetty5geetha.github.io/Assests-web/todo.png"
            projectLink="https://github.com/Rajasreesingamshetty5geetha/Start-To-Doing"
          />
          <ProjectCard
            title="Obstacle avoidance using Neural Networks and Q Learning Algorithm"
            description="Developed a neural network-based project using reinforcement learning and Q-algorithm."
            imageUrl="https://rajasreesingamshetty5geetha.github.io/Assests-web/robo.png"
            projectLink=""
          />
        </div>
      </div>

    </section>

  );
}

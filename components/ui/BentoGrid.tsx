'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./Gradientbg";
import { div } from "framer-motion/client";
import MagicButton from "./MagicButton";
import { FaDownload, FaLocationArrow } from "react-icons/fa";
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie";
import { ReactNode, useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-8 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode | ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?:number;
  img?:string;
  imgClassName?:string;
  titleClassName?:string;
  spareImg?:string;
}) => {
  const [download,setDownload] = useState(false);
  const handleDown = () => {
    const pdfUrl = "https://drive.google.com/file/d/1goEKBj6wqa3DRS6M84nUDWQLf7B9Qq6Y/view?usp=sharing";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownload(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  bg-white  justify-between flex flex-col space-y-4  border border-white/[0.2]",
        className
      )}
      style={{
        background:'rgb(2,0,36)',
        backgroundColor:'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className= {`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt = {img}
              className= {cn(imgClassName, 'object-cover,object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 1 && 'w-full opacity-80'}`}
        >
          {spareImg && (
            <img
            src={spareImg}
            alt = {spareImg}
            className= {'object-cover,object-center w-full h-full'}
          />
          )
          }
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute flex  items-center justify-center text-white font-bold z-50 px-4 text-3xl text-center md:text-4xl lg:text-7xl"/>
          </BackgroundGradientAnimation>
        )}
        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 '
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 dark:text-neutral-200 mb-2 mt-2" >
            {description}
          </div>
          <div className="font-sans font-bold  text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        
          {id === 3 && (
            <div className="flex gap-1 lg:gap-6 w-fit absolute -right-1  lg:-right-2 "
            >
              <a
                href="#tech"
                className="mt-20 mx-5 z-10 cursor-pointer sm:mt-16 sm:mx-4 md:mt-20 md:mx-5 lg:mt-32 
                    lg:-mx-10
                    xl:mt-32
                    2xl:mt-32
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                              >
                {<FaLocationArrow />}
              </a>

              <div className="flex flex-col gap-5 md:gap-3 lg:gap-8  ">
                {['HTML','CSS','JavaScript'].map
                ((item)=>(
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base rounded-lg text-center bg-[#10132E] hover:bg-gradient-to-tr from-[#3e51c9] to-[#fe019a]  opacity-50">
                      {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-5 lg:gap-8 md:gap-3  ">
                {['React.Js','Next.js','Tailwind CSS'].map
                ((item)=>(
                  <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base rounded-lg text-center bg-[#10132E] hover:bg-gradient-to-tr from-[#3e51c9] to-[#fe019a] ">
                      {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-9 relative">
              <div className= {`absolute -bottom-5 lg:-right-14 -right-5 `}>
                <Lottie options = {{
                  loop:download,
                  autoplay:download,
                  animationData,
                  rendererSettings:{
                    preserveAspectRatio:'xMidYMid slice'
                  }
                }}  />
                <MagicButton
                    title={download ? 'Downloaded': 'Download'}
                    icon={<FaDownload/>}
                    position="right"
                    otherClasses="!bg-[#161a31]"
                    handleClick={handleDown}
                />
              </div>
            </div>
          )}
       </div>
     </div>
   </div>
  );
};

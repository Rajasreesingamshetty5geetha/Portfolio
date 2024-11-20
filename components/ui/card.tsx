import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
  signUpLink?: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  projectLink,
}: ProjectCardProps) {
  return (
    <CardContainer className="inter-var" >
      <CardBody className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#10132E] dark:border-white/[0.3] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl}
            height={1000}
            width={1000}
            className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={projectLink}
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            aria-label = "Visit Github"
          >
            <FaGithub className="text-3xl"/>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

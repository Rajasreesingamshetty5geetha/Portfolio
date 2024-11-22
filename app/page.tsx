import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { ProjectsPage } from "@/components/Projects";
import Techstack from "@/components/Techstack";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaCode, FaHome, FaProjectDiagram } from "react-icons/fa";
import {MdAccountCircle, MdContactPage, MdDock, MdOutlineDock} from 'react-icons/md';
import { Analytics } from "@vercel/analytics/react"


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full ">
        <FloatingNav
          navItems={[
            {name:'Home',link:'/',icon:<FaHome/>
            },{name:'About',link:'#about',icon:<MdAccountCircle/>},{name:'TechStack',link:'#tech',icon:<FaCode/>},{name:'Projects',link:'#Projects',icon:<MdOutlineDock/>},{name:'Contact',link:'#contact',icon:<MdContactPage/>}]}
        />
       <Hero/>
       <Grid/>
       <Techstack/>
       <ProjectsPage/>
       <Footer/>
      </div>
    </main>
  );
}

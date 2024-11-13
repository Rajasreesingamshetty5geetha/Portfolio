'use client'
import React, { useEffect,useRef,useState } from 'react'
import {motion} from 'framer-motion' ;   
import gsap from 'gsap' ;                      
import "./globals.css";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const page = () => {
  const textRef = useRef()
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const para = textRef.current;
    const tlText = gsap.timeline({
      scrollTrigger:{
        trigger:para,
        start:"left 0%",
        end:"right 90%",
        scrub:0.8,
      }
    })
    tlText.fromTo(
      para,
      {opacity:0, x:-600},
      {opacity:1, x:0, duration:5, ease:'Power1.easeOut',delay:2}
    ) 
  }, []);
  const[mousePos, setMousePos] = useState({
    x:0,
    y:0,      
  })
  const [cursorVariant, setCursorVariant] = useState("default");
 

  useEffect(()=>{
    const handleMouseMove = (e)=>{
      setMousePos({
        x:e.clientX,
        y:e.clientY
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return ()=>{
      window.removeEventListener("mousemove", handleMouseMove)
    }
  },[]);          
  useEffect(()=>{
    const handleScroll = () => {
      document.body.style.setProperty(
        "--scroll",
        window.scrollY / (document.body.offsetHeight - window.innerHeight)
      );
    };
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = {
    default:{
      x:mousePos.x-16,
      y:mousePos.y-16,
    },
    text:{
      height:60,
      width:60,
      x:mousePos.x-80,
      y:mousePos.y-80,
      background: "linear-gradient(45deg, #A98BE3, #FF91AF)",
      mixBlendMode:"screen" ,
      opacity: 1, 
    },
    text2:{
      height:60,
      width:60,
      x:mousePos.x-40,
      y:mousePos.y-40,
      backgroundColor: "rgba(114, 74, 128,0.8)",
      mixBlendMode:"blend" ,
      opacity: 1,
    },
  } 
  const textEnter = () => setCursorVariant("text");
  const textEnter2 = () => setCursorVariant("text2");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <title>Singamsetty Rajasree</title>
       <motion.div className='cursor'
        variants={variants}
        animate = {cursorVariant}  
        />
      <header className='z-50 fixed  block w-full shadow-sm  backdrop-filter backdrop-blur-md bg-opacity-20 rounded-b-md py-0.25  border-slate-900/10 mx-auto '>
        <div className='relative flex items-start  '>
          <img src='https://rajasreesingamshetty5geetha.github.io/Assests-web/favicon.jpg'
          className='rounded-full w-14 h-14 overflow-hidden m-3 mx-12 shadow '/>
          <nav className='block text-white '>
            <ul className='flex gap-4 m-7 '>
              <li className='texts'><a href='#A'>About</a></li>
              <li className='texts'><a href='#C'>ContactMe</a></li>
            </ul>
          </nav> 
        </div> 
      </header>
      <div className='block relative  m-auto  w-[1220px] top-48 items-start'>
        <div className='flex gap-7 '>
          <div>
            <div className="circle "></div>
            <div className="rect"></div>
            <div className='flex flex-row gap-1 mt-2.5 -ml-1.5'>
            < div className='arrow2'></div>
              <div className='arrow1'></div>
            </div>
          </div>
          <h1 className='text-[45px] mt-16 text-white texts2 ' onMouseEnter={textEnter} onMouseLeave={textLeave} >Singamsetty Rajasree</h1>
          <div className='flex gap-1'>
            <img src='https://rajasreesingamshetty5geetha.github.io/Assests-web/Group%201.svg' className='-mt-11   w-[200px] h-[200px]'/>
            <img src='https://rajasreesingamshetty5geetha.github.io/Assests-web/Group%205%20(1).svg' className='-mt-32 -ml-32 w-[630px] h-[630px]'/>
          </div>
         
        </div>
        <h3 className='text-white text-2xl -mt-[350px] ml-11 cursor-pointer  texts2 '>Web Developer & Ui/Ux Designer </h3>
        <div className='scroll'></div>
      </div>
      <section ref = {textRef} className='pt-[650px] slide '>
        <div className=' block relative h-full px-32  '>
            <h3 className='text-6xl text-white'><span className='bg-gradient-to-r from-violet-400 to-fav  text-transparent bg-clip-text text-6xl font-semibold ' id='A' >About</span>
            <span className='bg-gradient-to-r from-violet-400 to-fav  text-transparent bg-clip-text'>"</span><span className='backdrop-filter backdrop-blur-sm bg-opacity-10 texts3'>Me</span><span className='bg-gradient-to-r from-violet-400 to-fav  text-transparent bg-clip-text'>"</span></h3>
              <div className='flex '>
                <p className='text-white text-xl my-5 text-justify  '><span className='text-5xl text-fav font-mono font-semibold '>H</span>ello! I am Singamsetty Rajasree, recently got graduated in <span className='text-2xl text-fav' onMouseEnter={textEnter2} onMouseLeave={textLeave}>VIT,Vellore</span>.<br/>I'm passionate about building scalable web solutions and have hands-on<br/> experience in frontend technologies, including <span>React</span> and <span>NextJs</span>. I've <br/>worked on collaborative projects, like developing responsive websites,<br/>where I focused on user-centered design.
                I learn quickly, adapt to<br/> new systems, and I'm comfortable diving into large codebases.I believe<br/>my blend of technical skills, problem-solving, and eagerness to learn.</p>
                <button className='bg-transparent border-2 border-fav hover:border-transparent hover:bg-gradient-to-r from-fav to-lav hover:p-3 hover:shadow-md hover:shadow-gray-200  text-white p-2 w-60  rounded-full mt-32 ml-20 m-auto '>Download Now</button>
              </div>
        </div>
      </section>
      <section>

      </section>
      
    </>
  )
}

export default page

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#Projects" },
  { name: "TechStack", link: "#tech" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "About Me",
    description: " I recently got graduated from VIT,Vellore. I'm passionate to explore various domains, and today, I am focused on building scalable web solutions and diving into the AI technologies.I have hands-on experience in frontend development. I am a quick learner, adapt seamlessly to new systems, and thrive when working on collaborative projects or large codebases. My enthusiasm for problem-solving and innovation drives me to constantly expand my skill set and deliver impactful solutions.",
    className: "lg:col-span-3  md:col-span-5 md:row-span-3 lg:min-h-[60vh]",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-80",
    titleClassName: "justify-start md:justify-start lg:justify-start",
    img: "https://rajasreesingamshetty5geetha.github.io/Assests-web/b5.svg",
    spareImg: "https://rajasreesingamshetty5geetha.github.io/Assests-web/grid.svg",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-2 md:row-span-2  lg:max-h-[80vh] cursor-pointer",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
    link:"#tech",
  },
  {
    id: 6,
    title: "Resume",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-1 justify-items-center",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },

  
];

export const projects = [
  {
    id: 1,
    title: "Vision-Based Teleoperation System for Robotic Arm",
    des: "Created a vision-based system enabling a robotic arm to mimic human hand movements in real-time using MediaPipe, OpenCV, and kinematics for precise motion mapping.",
    img: "https://rajasreesingamshetty5geetha.github.io/Assests-web/demon.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/Rajasreesingamshetty5geetha/AI-Based-Approach-in-Teleoperation-of-Robotic-Arms",
  },
  {
    id: 2,
    title: "Captionific.",
    des: "Built an innovative web application for image analysis, caption generation, hashtag suggestions, and photo editing.",
    img: "https://rajasreesingamshetty5geetha.github.io/Assests-web/project.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/Rajasreesingamshetty5geetha/Captionific.",
  },
  {
    id: 3,
    title: "Start-To-doing",
    des: "Built a dynamic task management system with persistent updates and integrated Kanban for task organization.",
    img: "https://rajasreesingamshetty5geetha.github.io/Assests-web/todo.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/Rajasreesingamshetty5geetha/Start-To-Doing",
  },
  {
    id: 4,
    title: "Obstacle avoidance using Neural Networks and Q Learning Algorithm",
    des: "Created a neural network-based project using reinforcement learning and Q-algorithm.",
    img: "https://rajasreesingamshetty5geetha.github.io/Assests-web/robo.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "https://rajasreesingamshetty5geetha.github.io/Assests-web/git.svg",
    link:'https://github.com/Rajasreesingamshetty5geetha'
  },
  {
    id: 2,
    img: "https://rajasreesingamshetty5geetha.github.io/Assests-web/link.svg",
    link:'https://www.linkedin.com/in/rajasree-s-411019220/',
  },
  {
    id: 3,
    img: "https://rajasreesingamshetty5geetha.github.io/Assests-web/insta.png",
    link:'https://www.instagram.com/_rajasreesingamshetty_5/',
  },
];
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
    description: "I'm a Java Backend Developer currently working at TripGain, building scalable microservices for a travel booking platform. I reduced flight search response time by 85% (13s → 2s) and achieved 1250x DB query optimization in production systems. I enjoy solving complex backend problems — from Redis caching strategies to query optimization and distributed system design. I also have frontend experience in React.js and Next.js, and I'm passionate about writing clean, high-performance code.",
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

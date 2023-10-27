import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    acharya,
    simplileap,
    geekyants,
    shoppy,
    newsmonkey,
    tripguide,
    bootstrap,
    canva,
    vscode,
    atom,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Illustrator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "canva",
      icon: canva,
    },
    {
      name: "vscode",
      icon: vscode,
    },
    {
      name: "atom",
      icon: atom,
    },
    
  ];
  
  const experiences = [
    {
      title: "Bachelor of Engineering",
      company_name: "Acharya Institute of Technology",
      icon: acharya,
      iconBg: "#E6DEDD",
      date: "August 2019 - July 2023",
      points: [
        "CGPA: 7.5",
        "Branch: Computer Science and Engineering",
        "Location: Bengaluru, India",
        "University: Visvesvaraya Technological University (VTU)",
        
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Simplileap",
      icon: simplileap,
      iconBg: "#383E56",
      date: "Jul 2022 - Sep 2022",
      points: [
        "Created engaging UI/UX designs in Figma.",
        "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
        "Enhanced site functionality with Node.js.",
        "Worked on various client projects in a collaborative team.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "GeekyAnts",
      icon: geekyants,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Sep 2023",
      points: [
        "Developed and maintained web applications using React, including creating reusable components to improve code efficiency.",
        "Incorporated Tailwind CSS to streamline the styling process, ensuring consistent and visually appealing designs.",
        "Customized Tailwind CSS classes to match project-specific design requirements.",
        "Achieved improved development speed and code maintainability with Tailwind CSS.",
        "Utilized HTML, CSS, and JavaScript to create and maintain responsive and user-friendly web applications.",
        "Implemented dynamic features and interactions, enhancing the user experience.",
        "Collaborated with the design team to ensure pixel-perfect implementation of UI/UX designs.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Shoppy",
      description:
        "Created a responsive e-commerce dashboard using React.js with dynamic data visualizations, productivity apps, Tailwind CSS styling, and customization options, including light/dark mode, for an enhanced user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "syncfusion",
          color: "pink-text-gradient",
        },
      ],
      image: shoppy,
      source_code_link: "https://github.com/iamsakshigupta/shoppy.git",
    },
    {
      name: "News Monkey",
      description:
        "Designed and developed News Monkey, a modern news website with a responsive user interface, real-time updates, and a user-friendly dark mode, all powered by Tailwind CSS for customizable styling.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "newapi",
          color: "pink-text-gradient",
        },
      ],
      image: newsmonkey,
      source_code_link: "https://github.com/iamsakshigupta/news-app.git",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    p5,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    material,
    meta,
    starbucks,
    cristal,
    lottery,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    minecraft,
    pega,
    creative
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
        title: "Front End Developer",
        icon: web,
    },
    {
        title: "React  Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Creative Coding",
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
        name: "P5.Js",
        icon: p5,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "material",
        icon: material,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Cristal Waters",
        icon: cristal,
        iconBg: "#383E56",
        date: "Feb 2023 - Jul 2023",
        points: [
            "Developed a comprehensive user security management system with role-based access control.",
            "Implemented stock control system with automatic adjustments based on registered movements.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Developed an intuitive administration interface enabling easy management of additions, deletions, and modifications in applied categories and filters.",
        ],
    },
    {
        title: "Front End Developer",
        company_name: "Lottery Numbers",
        icon: lottery,
        iconBg: "#383E56",
        date: "Oct 2023 - Feb 2024",
        points: [
            "Developed visualization cards and implemented web scraping techniques to extract relevant numerical data for display.",
            "Designed and structured web pages and tabs, focusing on intuitive user interfaces and visually appealing layouts to optimize user experience.",
            "Established connections between local systems and a database.",
            "Compiled and organized information into Excel files to facilitate readability and analysis.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
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
        name: "Minecraft Helper",
        description:
            "Using front-end technologies like React, CSS, Material-UI, Konva, and among other tools, I have developed a platform that will allow you to create portal links quickly and easily.But that's not all. I've also included a special feature: a circle blueprint generator.",
        tags: [
            {
                name: "react",
                color: "pink-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "blue-text-gradient",
            },
        ],
        image: minecraft,
        source_code_link: "https://github.com/ManuCasanueva/Minecraft-Helper",
        source_deploy_link: "https://minecraft-helper.vercel.app/?vercelToolbarCode=TD-bcRBAqZK9yu7",
    },
    {
        name: "Pega 3",
        description:
            "Employing cutting-edge front-end technologies such as React, CSS, Material-UI, Konva, and more, I've engineered a platform dedicated to web scraping lottery numbers and presenting them seamlessly in a single interface.",
        tags: [
            {
                name: "react",
                color: "pink-text-gradient",
            },
            {
                name: "Web-Scraping",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "blue-text-gradient",
            },
        ],
        image: pega,
        source_code_link: "https://github.com/Schmitz0/Erick-Guerrero-Front",
        source_deploy_link: "https://www.pegatres.app/",

    },
    {
        name: "Art Whit Code",
        description:
            "Diving into the realm of creative coding with p5.js at the helm, I've sculpted a digital playground where imagination knows no bounds. Through the fusion of code and creativity, I craft immersive experiences that push the boundaries of possibility. ",
        tags: [
            // {
            //     name: "nextjs",
            //     color: "blue-text-gradient",
            // },
            {
                name: "P5.js",
                color: "pink-text-gradient",
            },
            {
                name: "Javascript",
                color: "orange-text-gradient",
            },
        ],
        image: creative,
        source_code_link: "https://editor.p5js.org/ManuCasanueva/sketches/g5Z57PJbA",
        source_deploy_link: "https://editor.p5js.org/ManuCasanueva/sketches/z1DIqIJTG",
        
    },
   
];

export { services, technologies, experiences, testimonials, projects };
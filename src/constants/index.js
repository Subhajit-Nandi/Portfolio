import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    bootstrap,
    html,
    css,
    reactjs,
    susanta,
    samik,
    Sam,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    Cplusplus,
    BEE,
    Todura,
    threejs,
    python,
    CyberViON,
    NewsBEE,
    TrendZy,
} from "../assets";

const navLinks = [
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
        title: "Algorithm Architect",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
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
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
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
        name: "C/C++",
        icon: Cplusplus,
    },
    {
        name: "Python",
        icon: python,
    }
];

const experiences = [
    {
        title: "Full stack Developer",
        company_name: "BEE",
        icon: BEE,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "PRIME MOVER",
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "A good leader with a great vision, a great team player and a good mentor. He can be a great asset to any team.",
        name: "Susanta Das",
        designation: "CFO",
        company: "BEE",
        image: susanta,
    },
    {
        testimonial:
            "A fantastic professional who is always willing to go the extra mile to get the job done. I am endorsing him for his credibility and sheer determination to succeed.",
        name: "Samik Pandit",
        designation: "COO",
        company: "CyberViON",
        image: samik,
    },
    {
        testimonial:
            "I highly recommend Xavier as a candidate for employment. He is a team player and would make a great asset to any organization.",
        name: "Sam",
        designation: "SDE",
        company: "BEE",
        image: Sam,
    },
];

const projects = [
    {
        name: "NewsBEE",
        description:
            "NewsBEE is a personalized news aggregator that organizes and highlights what's happening in the world so you can discover more about the stories that matter to you.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "newsapi",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: NewsBEE,
        source_code_link: "https://github.com/Subhajit-Nandi/NewsBEE",
    },
    {
        name: "TrendZy",
        description:
            "An E-commerce platform with functionalities used like sorting, categorically diversing products. Techs used Vite, SCSS, javascript, Strapi, and Stripe",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Strapi",
                color: "green-text-gradient",
            },
            {
                name: "Stripe",
                color: "pink-text-gradient",
            },
            {
                name: "Redux-Toolkit",
                color: "blue-text-gradient",
            },
        ],
        image: TrendZy,
        source_code_link: "https://subhajit-nandi.github.io/TrendZy/",
    },
    {
        name: "TODURA",
        description:
            "Web-based platform that gives you a quick and simple notepad editing experience when you write notes, memo, email, message, shopping list and to do list.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: Todura,
        source_code_link: "https://github.com/Subhajit-Nandi/TODURA",
    },
    // {
    //     name: "CyberViON",
    //     description:
    //         "CyberViON is a tech blog website built using bootstrap.The blog's primary focus usually centers on the technologies you use most in your daily life. ",
    //     tags: [
    //         {
    //             name: "Html",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "Bootstrap",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: CyberViON,
    //     source_code_link: "https://subhajit-nandi.github.io/CyberViON/",
    // },
    
];

export { services, technologies, experiences, testimonials, projects, navLinks };
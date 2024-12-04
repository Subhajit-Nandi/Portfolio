import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    pandas,
    tensorflow,
    numpy,
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
    VECC,
    Todura,
    threejs,
    python,
    CyberViON,
    NewsBEE,
    TrendZy,
    ProfitPulse,
    MediScan,
    Netflix_2
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
        title: "Web/Android Developer",
        icon: web,
    },
    {
        title: "Ai Tools",
        icon: mobile,
    },
    {
        title: "Desktop Applications",
        icon: backend,
    },
    {
        title: "DS/Algorithms",
        icon: creator,
    },
];

const technologies = [
    {
        name: "PANDAS",
        icon: pandas,
    },
    {
        name: "NUMPY",
        icon: numpy,
    },
    {
        name: "TensorFlow",
        icon: tensorflow,
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
        name: "JAVA",
        icon: java,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "C++",
        icon: Cplusplus,
    },
    {
        name: "Python",
        icon: python,
    }
];

const experiences = [
    {
        title: "Research & Development Intern",
        company_name: "VECC",
        icon: VECC,
        iconBg: "#E6DEDD",
        date: "March 2024 - May 2024",
        points: [
            "Migrated web applications to Bootstrap within Django, improving load speed by 30% and responsiveness by 25%.",
            "Developed a Python-based desktop security module with 40% higher efficiency, enabling real-time threat monitoring and dynamic device detection.",
            "Integrated MariaDB for USB device registration, enabling real-time detection, ejection, and data security through USB tethering and dynamic network routing.",
            "Automated startup processes using NSSM commands and system-level scheduling for seamless Windows service deployment.",
        ],
    },
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
        name: "ProfitPulse",
        description:
            "Developed a stock price prediction web-app leveraging machine learning techniques to forecast future stock prices based on historical data.",
        tags: [
            {
                name: "TensorFlow",
                color: "blue-text-gradient",
            },
            {
                name: "Scikit-Learn",
                color: "green-text-gradient",
            },
            {
                name: "Pandas",
                color: "pink-text-gradient",
            },
            {
                name: "Numpy",
                color: "blue-text-gradient",
            },
            {
                name: "MatplotLib",
                color: "green-text-gradient",
            },
        ],
        image: ProfitPulse,
        source_code_link: "https://github.com/Subhajit-Nandi/Stock-Price-Prediction-using-ML",
    },
    {
        name: "MediScan",
        description:
            "A healthcare application leveraging machine learning algorithms [𝐒𝐕𝐌, 𝐋𝐨𝐠𝐢𝐬𝐭𝐢𝐜 𝐑𝐞𝐠𝐫𝐞𝐬𝐬𝐢𝐨𝐧] to predict 𝐏𝐚𝐫𝐤𝐢𝐧𝐬𝐨𝐧'𝐬, 𝐝𝐢𝐚𝐛𝐞𝐭𝐞𝐬, 𝐚𝐧𝐝 𝐡𝐞𝐚𝐫𝐭 𝐝𝐢𝐬𝐞𝐚𝐬𝐞. ",
        tags: [
            {
                name: "Scikit-Learn",
                color: "green-text-gradient",
            },
            {
                name: "Pandas",
                color: "pink-text-gradient",
            },
            {
                name: "Numpy",
                color: "blue-text-gradient",
            },
            {
                name: "StreamLit",
                color: "green-text-gradient",
            },
        ],
        image: MediScan,
        source_code_link: "https://github.com/Subhajit-Nandi/Multiple-Disease-Prediction_App_Using-ML",
    },
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
        name: "NETFLIX 2.0",
        description:
            "A complete 𝐜𝐥𝐨𝐧𝐞 version of 𝗡𝗘𝗧𝗙𝗟𝗜𝗫 built using 𝐓𝐌𝐃𝐁 𝐀𝐩𝐢 | 𝐅𝐢𝐫𝐞𝐛𝐚𝐬𝐞 (auth and firestore database functionality implemented) | 𝐓𝐚𝐢𝐥𝐰𝐢𝐧𝐝 𝐂𝐒𝐒 | 𝐑𝐞𝐚𝐜𝐭",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "green-text-gradient",
            },
            {
                name: "FireBase",
                color: "pink-text-gradient",
            },
            {
                name: "TMDB - Api",
                color: "blue-text-gradient",
            },
        ],
        image: Netflix_2,
        source_code_link: "https://github.com/Subhajit-Nandi/Netflix-2.0",
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
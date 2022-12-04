import iconDev from "../assets/icon-dev.svg";
import iconDesign from "../assets/icon-design.svg";
import database from "../assets/database.svg";
import git from "../assets/git.svg";

const resumeData = {
    about: 'Junior Software Engineer with fundamental knowledge of software design, development and testing. Seeking to utilize broad educational background at the right place, for further growth.',
    education: {
        root: {
            title: 'Education',
            icon: 'book-outline'
        },
        list: [
            {
                title:"Computer Science and Engineering",
                period: "2016-2021",
                description: 'University of Ioannina'
            },
            {
                title:"High School",
                period: "Graduated Class of 2016",
                description:'Makryhori, Larissa'
            }
        ]
    },
    experience: {
            root: {
                title: 'Experience',
                icon: 'briefcase-outline'
            },
            list: [
                {
                    title: "RCS Technologies Greece",
                    period: "August 2022 — Present",
                    description: "Java Developer"
                },
                {
                    title: "Terracom S.A.",
                    period: "April-May 2021",
                    description: "Created a gamification mobile app, that was part of Voeska Project, using Flutter/Dart framework."
                }
            ],
        },
    skills:[
        {
            icon: iconDev,
            title:'Front End',
            description:['Html/CSS', 'React', 'Flutter/ Dart']
        },
        {
            icon: iconDesign,
            title:'Back End',
            description:['Java', 'Python', 'NodeJS']
        },
        {
            icon: database,
            title:'Databases',
            description:['MySQL', 'MongoDB']
        },
        {
            icon: git,
            title:'Source Control',
            description:['Git', 'GitHub']
        }
    ]
}

export default resumeData;
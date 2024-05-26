import iconDev from "../assets/icon-dev.svg";
import iconDesign from "../assets/icon-design.svg";
import database from "../assets/database.svg";
import git from "../assets/git.svg";
import iac from "../assets/iac.png";

const resumeData = {
    about: 'Passionate Java Developer with 2 years of hands-on experience in building and maintaining high-quality software solutions.' +
        ' I possess deep knowledge of object-oriented programming and excel in developing applications with a strong focus on concurrency' +
        ' and performance optimization. I have a solid understanding of software design patterns, data structures, and algorithms.',
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
                    description: "I work on a distributed streaming server, leveraging Java with Spring and" +
                        " Netty frameworks to develop a high-resilience and low-latency system." +
                        " Additionally, I contribute to deployment processes, enhancing my expertise in" +
                        " Infrastructure as Code (IaC) tools like Ansible and Terraform."
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
        },
        {
            icon: iac,
            title:'Infrastructure as Code (IaC)',
            description:['Ansible', 'Terraform']
        }
    ]
}

export default resumeData;
"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Tag from "../ui/Tag";

// Déclaration des types pour les données des projets
type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    tag: string[];
    link?: string;
    codeLink?: string;
};

const projectsData: Project[] = [
    {
        id: 7,
        title: "Parcours expert et Middle office d'un expert",
        description: "Production en entreprise, maintien du parcours expert et aide à la création du middle office (dashboard d'un compte expert) en React et Next.js avec des tests Cypress.",
        image: "/images/projects/7.PNG",
        tag: ["Front-End", "Test"],
        link: "https://app.matchers.fr",
    },
    {
        id: 1,
        title: "Monde de Dév",
        description: "Projet d'étude fullstack avec front en Angular, back en Java Spring Boot et Spring Data JDBC avec MySql.",
        image: "/images/projects/1.PNG",
        tag: ["Front-End", "Back-End"],
        codeLink: "https://github.com/ESrebuff/P-6-Developpez-une-application-full-stack-complete",
    },
    {
        id: 2,
        title: "BobApp",
        description: "Projet d'étude de CI/CD pour vérification des tests, construction du projet, création d'images Docker et déploiement sur Docker Hub.",
        image: "/images/projects/2.png",
        tag: ["Test"],
        codeLink: "https://github.com/ESrebuff/Gerez-un-projet-collaboratif-en-int-grant-une-demarche-CI-CD",
    },
    {
        id: 3,
        title: "Yoga app",
        description: "Projet d'étude pour l'apprentissage des tests avec Cypress, Jest, JUnit et Jacoco.",
        image: "/images/projects/3.png",
        tag: ["Test"],
        codeLink: "https://github.com/ESrebuff/oc-testing-java-cours",
    },
    {
        id: 4,
        title: "ChâTop",
        description: "API REST développée en Java avec Spring Boot.",
        image: "/images/projects/4.PNG",
        tag: ["Back-End"],
        codeLink: "https://github.com/ESrebuff/ChaTop-api-rest",
    },
    {
        id: 5,
        title: "Olympic games app",
        description: "Application Angular pour visualiser des données sur les Jeux Olympiques.",
        image: "/images/projects/5.PNG",
        tag: ["Front-End"],
        link: "https://olympic-games-app.vercel.app/",
        codeLink: "https://github.com/ESrebuff/Olympic-games-app",
    },
    {
        id: 6,
        title: "WebAgency",
        description: "Intégration d'une page web responsive en HTML et CSS.",
        image: "/images/projects/6.PNG",
        tag: ["Front-End"],
        link: "https://esrebuff.github.io/Esrebuff-wa.github.io",
        codeLink: "https://github.com/ESrebuff/Esrebuff-wa.github.io",
    },
];

const ProjectsSection = () => {
    const [selectedTag, setSelectedTag] = useState<string>("Tout");

    const filteredProjects = selectedTag === "Tout"
        ? projectsData
        : projectsData.filter((project) => project.tag.includes(selectedTag));

    const handleTagChange = (newTag: string) => {
        setSelectedTag(newTag);
    };

    const tags = ["Tout", "Front-End", "Back-End", "Test"];

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-foreground mt-4 mb-8 md:mb-12">
                Mes Projets
            </h2>
            <div className="flex flex-row justify-center items-center gap-2 text-foreground my-6">
                {tags.map((tag) => (
                    <Tag
                        key={tag}
                        name={tag}
                        onClick={handleTagChange}
                        isSelected={selectedTag === tag}
                    />
                ))}
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        link={project.link}
                        codeLink={project.codeLink}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;

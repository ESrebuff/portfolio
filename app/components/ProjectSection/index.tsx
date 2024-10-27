"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/images/projects/1.jpg",
        tag: ["All", "Web"],
        link: undefined,
        codeLink: "https://github.com/ESrebuff/poc-chat"
    },
    {
        id: 2,
        title: "Potography Portfolio Website",
        description: "Project 2 description",
        image: "/images/projects/1.jpg",
        tag: ["All", "Web"],
        link: undefined,
        codeLink: "https://github.com/ESrebuff/Gerez-un-projet-collaboratif-en-int-grant-une-demarche-CI-CD"
    },
    {
        id: 3,
        title: "E-commerce Application",
        description: "Project 3 description",
        image: "/images/projects/1.jpg",
        tag: ["All", "Web"],
        link: undefined,
        codeLink: "https://github.com/ESrebuff/P-8-R-alisez-un-cahier-des-charges-fonctionnel-et-technique-pour-une-application"
    },
    {
        id: 4,
        title: "Food Ordering Application",
        description: "Project 4 description",
        image: "/images/projects/1.jpg",
        tag: ["All", "Mobile"],
        link: undefined,
        codeLink: "https://github.com/ESrebuff/P-6-Developpez-une-application-full-stack-complete"
    },
    {
        id: 5,
        title: "React Firebase Template",
        description: "Authentication and CRUD operations",
        image: "/images/projects/1.jpg",
        tag: ["All", "Web"],
        link: undefined,
        codeLink: "https://github.com/ESrebuff/P5-Full-Stack-testing"
    },
    {
        id: 6,
        title: "Full-stack Roadmap",
        description: "Project 5 description",
        image: "/images/projects/1.jpg",
        tag: ["All", "Web"],
        link: undefined,
        codeLink: "https://github.com/ESrebuff/ChaTop-api-rest"
    },
];
const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const handleTagChange = (newTag: any) => {
        setTag(newTag);
    };

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
                <ProjectTag
                    name="All"
                    onClick={handleTagChange}
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    name="Web"
                    onClick={handleTagChange}
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    name="Mobile"
                    onClick={handleTagChange}
                    isSelected={tag == "Mobile"}
                />
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
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
        </>
    );
};

export default ProjectsSection;
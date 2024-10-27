import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, link, codeLink }: { imgUrl: string, title: string, description: string, link: string | undefined, codeLink: string | undefined }) => {
    return (
        <div className="md:mx-2">
            <div
                className="group rounded-t-xl h-52 bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
            >
                <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">

                    {link &&
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="h-14 w-14 border-2 relative rounded-full border-muted hover:border-white mr-4 group/link"
                        >
                            <EyeIcon className="h-10 w-10 text-muted group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        </a>
                    }
                    {codeLink &&
                        <a
                            href={codeLink}
                            target="_blank"
                            rel="noreferrer"
                            className="h-14 w-14 border-2 relative rounded-full border-muted hover:border-white group/link"
                        >
                            <CodeBracketIcon className="h-10 w-10 text-muted group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        </a>
                    }
                </div>
            </div>
            <div className="bg-darkBg rounded-b-xl py-6 px-4 text-foreground">
                <h5 className="font-lg font-semibold">{title}</h5>
                <p className="text-muted">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
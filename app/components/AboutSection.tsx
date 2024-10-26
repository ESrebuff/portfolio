"use client"
import Image from 'next/image';
import { useState, useTransition } from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSql</li>
                <li>Sequelize</li>
                <li>Javascript</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Fullstack academy</li>
                <li>University of digital stuff</li>
                <li>Another super good thing for academy</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Fullstack academy</li>
                <li>Web développeur</li>
                <li>COncepteur développeur</li>
            </ul>
        )
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    }

    const currentTab = TAB_DATA.find((t) => t.id === tab);

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/hero.jpg"
                    alt="about image"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ab nihil eaque perspiciatis id tenetur consequatur debitis molestiae beatae, doloremque est reiciendis eos. Voluptates, quo esse. Animi, aut qui! Laborum modi illo dolores? Dolores laboriosam ad eius voluptates libero reprehenderit fugiat velit id delectus ipsum. Perspiciatis nulla in quam optio.</p>
                    <div className="flex f:ex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {currentTab ? currentTab.content : null}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
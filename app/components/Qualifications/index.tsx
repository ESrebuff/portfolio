"use client";
import { useState } from "react";
import TabNavigation from "./TabNavigation";
import QualificationList from "./QualificationList";

const Qualifications = () => {
    const [toggleState, setToggleState] = useState<number>(1);

    const educationData = [
        { title: "Développeur Full-Stack Java et Angular (bac +5)", subtitle: "OpenClassrooms, Montpellier", calendar: "2023 - 2024" },
        { title: "Formation en Cybersécurité (6 mois)", subtitle: "3WA, Montpellier", calendar: "2022 - 2023" },
        { title: "Concepteur Développeur d'Application Web et Mobile (bac +3)", subtitle: "Diginamic, Montpellier", calendar: "2021 - 2022" },
        { title: "Développeur Web (bac +2)", subtitle: "OpenClassrooms, Saint-Nazaire", calendar: "2018 - 2020" },
    ];

    const experienceData = [
        { title: "Développeur Front-End (Freelance)", subtitle: "Matchers, Montpellier", calendar: "2024 - 2025" },
        { title: "Développeur Front End (Alternant)", subtitle: "Matchers, Montpellier", calendar: "2021 - 2024" },
        { title: "Monteur Vidéo (stage 3 mois)", subtitle: "MC Adventure, Malte", calendar: "2019" },
    ];

    return (
        <section className="flex flex-col items-center bg-background text-foreground pt-24" id="qualifications">
            <h2 className="text-center text-4xl font-bold text-foreground mt-4">
                Qualifications
            </h2>
            <span className="text-md italic text-muted mb-8 md:mb-12">Mon parcours professionnel</span>
            <div className="max-w-xl mx-auto">
                <TabNavigation toggleState={toggleState} setToggleState={setToggleState} />
                <div className="grid justify-center">
                    {toggleState === 1 && <QualificationList data={educationData} condition={true} />}
                    {toggleState === 2 && <QualificationList data={experienceData} condition={false} />}
                </div>
            </div>
        </section>

    );
};

export default Qualifications;

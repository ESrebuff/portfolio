"use client";
import { useState } from "react";

interface Qualification {
    title: string;
    subtitle: string;
    calendar: string;
}

const Qualifications = () => {
    const [toggleState, setToggleState] = useState<number>(1);

    const toggleTab = (index: number) => {
        setToggleState(index);
    };

    const educationData: Qualification[] = [
        { title: "Web Design", subtitle: "Spain - Institute", calendar: "2021 - Present" },
        { title: "Art Director", subtitle: "Spain - Institute", calendar: "2023 - Present" },
        { title: "Web Development", subtitle: "Spain - Institute", calendar: "2022 - 2023" },
        { title: "UX Expert", subtitle: "Spain - Institute", calendar: "2021 - 2022" },
    ];

    const experienceData: Qualification[] = [
        { title: "Project Designer", subtitle: "Spain - Institute", calendar: "2021 - Present" },
        { title: "UX Designer", subtitle: "Spain - Institute", calendar: "2023 - Present" },
        { title: "Art Director", subtitle: "Spain - Institute", calendar: "2023 - Present" },
        { title: "UI/UX Expert", subtitle: "Spain - Institute", calendar: "2021 - 2022" },
    ];

    const renderQualificationData = (data: Qualification[], condition: boolean) =>
        data.map((item, index) => (
            <div className="grid grid-cols-[1fr_max-content_1fr] gap-6" key={index}>
                {condition && index % 2 === 0 ? (
                    <>
                        <div>
                            <h3 className="text-xl font-normal">{item.title}</h3>
                            <span className="inline-block text-lg mb-4">{item.subtitle}</span>
                            <div className="text-lg">
                                <i className="uil uil-calendar-alt"></i> {item.calendar}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="w-[13px] h-[13px] bg-red-500 rounded-full"></span>
                            <span className="w-px h-full bg-red-500 transform translate-x-[6px]"></span>
                        </div>
                    </>
                ) : condition && index % 2 !== 0 ? (
                    <>
                        <div></div>
                        <div className="flex flex-col justify-center">
                            <span className="w-[13px] h-[13px] bg-red-500 rounded-full"></span>
                            <span className="w-px h-full bg-red-500 transform translate-x-[6px]"></span>
                        </div>
                        <div>
                            <h3 className="text-xl font-normal">{item.title}</h3>
                            <span className="inline-block text-lg mb-4">{item.subtitle}</span>
                            <div className="text-lg">
                                <i className="uil uil-calendar-alt"></i> {item.calendar}
                            </div>
                        </div>
                    </>
                ) : !condition && index % 2 !== 0 ? (
                    <>
                        <div>
                            <h3 className="text-xl font-normal">{item.title}</h3>
                            <span className="inline-block text-lg mb-4">{item.subtitle}</span>
                            <div className="text-lg">
                                <i className="uil uil-calendar-alt"></i> {item.calendar}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="w-[13px] h-[13px] bg-red-500 rounded-full"></span>
                            <span className="w-px h-full bg-red-500 transform translate-x-[6px]"></span>
                        </div>
                    </>
                ) : (
                    <>
                        <div></div>
                        <div className="flex flex-col justify-center">
                            <span className="w-[13px] h-[13px] bg-red-500 rounded-full"></span>
                            <span className="w-px h-full bg-red-500 transform translate-x-[6px]"></span>
                        </div>
                        <div>
                            <h3 className="text-xl font-normal">{item.title}</h3>
                            <span className="inline-block text-lg mb-4">{item.subtitle}</span>
                            <div className="text-lg">
                                <i className="uil uil-calendar-alt"></i> {item.calendar}
                            </div>
                        </div>
                    </>
                )}
            </div>
        ));

    return (
        <section className="flex flex-col items-center">
            <h2 className="text-3xl font-bold">Qualifications</h2>
            <span className="text-lg text-gray-600">My personal journey</span>

            <div className="max-w-lg mx-auto">
                <div className="flex justify-center mb-8">
                    <div
                        className={`cursor-pointer text-xl font-normal mx-2 ${toggleState === 1 ? "text-blue-500" : ""}`}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap mr-2"></i> Education
                    </div>
                    <div
                        className={`cursor-pointer text-xl font-normal mx-2 ${toggleState === 2 ? "text-blue-500" : ""}`}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt mr-2"></i> Experience
                    </div>
                </div>

                <div className="grid justify-center">
                    <div className={toggleState === 1 ? "block" : "hidden"}>
                        {renderQualificationData(educationData, true)}
                    </div>

                    <div className={toggleState === 2 ? "block" : "hidden"}>
                        {renderQualificationData(experienceData, false)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualifications;

"use client"
import { useState } from "react";
import "./qualifications.css"

const Qualifications = () => {

    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index: number) => {
        setToggleState(index)
    }

    return (
        <section className="qualificatoion section flex flex-col items-center">
            <h2 className="section_title">Qualifications</h2>
            <span className="section_subtitle">My personail journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
                        onClick={() => toggleTab(1)}  >
                        <i className="uil uil-graduation-cap qualification_ison"></i>{" "}
                        Education
                    </div>
                    <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_ison"></i>{" "}
                        Experience
                    </div>
                </div>

                <div className="qualification_sections">
                    <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web design</h3>
                                <span className="qualification_subtitle">Spain - Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder">
                                </span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder">
                                </span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">rt director</h3>
                                <span className="qualification_subtitle">Spain - Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - Present
                                </div>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web design</h3>
                                <span className="qualification_subtitle">Spain - Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder">
                                </span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder">
                                </span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">rt director</h3>
                                <span className="qualification_subtitle">Spain - Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web developpement</h3>
                                <span className="qualification_subtitle">Spain - Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder">
                                </span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder">
                                </span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Ux expert</h3>
                                <span className="qualification_subtitle">Spain - Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - 2022
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Project Designer</h3>
                                <span className="qualification_subtitle">Spain - Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder">
                                </span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder">
                                </span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">UX Designer</h3>
                                <span className="qualification_subtitle">Spain - Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Project Designer</h3>
                                <span className="qualification_subtitle">Spain - Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder">
                                </span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder">
                                </span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">UX Designer</h3>
                                <span className="qualification_subtitle">Spain - Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - Present
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualifications;

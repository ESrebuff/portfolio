"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 my-4">
                <div className="col-span-8 place-self-center placd-items-center grid lg:place-items-start text-center sm:text-left justify-self-start">
                    <h1 className="text-foreground max-w-2xl mb-4 text-4xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Bonjour je suis {" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Esteban',
                                3000,
                                'développeur web',
                                3000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-muted text-base text-lg mb-6 lg:text-xl">
                        Salut ! Je suis Esteban, développeur web passionné par le développement d'applications modernes et intuitives.
                        Mon expertise en front-end et back-end me permet de créer des projets qui allient performance et design.
                        Curieux et toujours en quête de nouvelles technologies, je suis prêt à transformer vos idées en réalité digitale.
                    </p>
                    <div>
                        <button className="px-6 py-3 rounded-full w-full sm:w-fit sm:mr-4 bg-gradient-to-br from-blue-500 via-primary to-secondary hober:bg-slate-200 text-white">Contact</button>
                        <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-primary to-secondary hover:bg-slate-800 text-foreground mt-3">
                            <span className="block bg-background hober:bg-state rounded-full px-5 py-2">Télécharger mon CV</span>
                        </button>
                    </div>
                </div>
                <div className="flex col-span-4 place-self-center mt-4 w-full justify-center max-lg:mt-20 lg:mt-0">
                    <div className="w-[250px] h-[250px] lg:w-[360px] lg:h-[360px] relative">
                        <div className="rounded bg-darkBg w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] absolute max-md:top-[150px] max-md:left-[60%] top-[190px] lg:top-[260px] left-[75%] transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
                        <Image
                            className="absolute rounded transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            src="/images/hero-image.jpg"
                            alt="hero image"
                            width={350}
                            height={350}
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
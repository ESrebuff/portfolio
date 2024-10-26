"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
            <div className="col-span-7 place-self-center placd-items-center grid lg:place-items-start text-center sm:text-left">
                <h1 className="text-white max-w-2xl mb-4 text-4xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Hello i'm {" "}
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            'Esteban',
                            5000,
                            'Web developper',
                            5000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base text-lg mb-6 lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perspiciatis deleniti doloribus eius ratione amet fugiat aliquid, accusamus fugit modi!
                </p>
                <div>
                    <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hober:bg-slate-200 text-white">Hire me</button>
                    <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                        <span className="block bg-[#121212] hober:bg-state rounded-full px-5 py-2">Download CV</span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        src="/images/hero.jpg"
                        alt="hero image"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
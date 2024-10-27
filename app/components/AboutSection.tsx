import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className="pt-24" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    className="sm:self-center rounded"
                    src="/images/about-image.jpg"
                    alt="about image"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col justify-center h-full">
                    <h2 className="text-4xl font-bold text-foreground mb-4">À propos de moi</h2>
                    <p className="text-base md:text-lg text-foreground">
                        Depuis trois ans, je me consacre au développement web, en particulier avec des frameworks modernes comme Vue.js, React, et Node.js. Mon parcours m'a permis de maîtriser l'art de créer des interfaces intuitives et performantes tout en garantissant une architecture backend fiable et optimisée. En plus de mes compétences techniques, j'apporte une approche collaborative et orientée qualité, pour des projets qui répondent aux besoins des utilisateurs.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
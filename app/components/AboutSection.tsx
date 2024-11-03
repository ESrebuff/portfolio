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
                    <p className="text-base md:text-md text-foreground">
                        Avec quatre ans d'expérience professionnelle et huit ans d'expérience personnelle dans l'univers du web, j'ai commencé mon parcours avec HTML et CSS grâce au cours de Matthieu Nebra sur OpenClassrooms. Cette première immersion m'a permis de découvrir ma passion pour le développement et la créativité que l'on peut exprimer à travers le code.
                        <br /><br />
                        Curieux et avide de nouvelles connaissances, j'apprécie particulièrement le travail en équipe, où je peux collaborer et échanger des idées pour créer des projets innovants. Je crois fermement que la communication et les interactions sociales sont essentielles dans notre domaine, car elles enrichissent notre travail et renforcent la dynamique de groupe.
                        <br /><br />
                        En dehors du développement, j'aime voyager – j'ai eu la chance de passer trois mois à Malte, ce qui m'a ouvert à de nouvelles cultures. Je suis également passionné de cuisine, de jeux vidéo et d'activités sportives. Rire et partager des moments conviviaux sont des éléments importants de ma vie, que ce soit au travail ou dans mes loisirs.
                        <br /><br />
                        Je suis impatient de continuer à évoluer dans ce secteur qui me passionne et d'apporter ma contribution à des projets stimulants.


                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
"use client";
import Hero from "@/components/Hero.jsx";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

const page = () => {
    const slideItems = [
        {
            title: "Buen comportamiento",
            subtitle: "Trabajamos con compromiso ético y social",
            text: "Actuamos con ética y responsabilidad social, creando valor sostenible para nuestros grupos de interés y respetando nuestro entorno y ambiente.",
        },
        {
            title: "Buen clima laboral",
            subtitle: "Impulsamos el bienestar y crecimiento de nuestra gente",
            text: "Nos preocupamos por el bienestar de nuestro equipo, trabajando de manera conjunta e implementando buenas prácticas para su desarrollo continuo, siendo conscientes de su importancia y valor para la organización.",
        },
        {
            title: "Esfuerzo",
            subtitle: "Brindamos lo mejor de nuestra energía",
            text: "Demostramos excelencia en nuestras acciones, gestionando de manera proactiva, perseverante y planificada cada una de nuestras actividades en beneficio de nuestros clientes.​",
        },
        {
            title: "Enfoque en resultados ",
            subtitle: "Promovemos el desarrollo de nuestros stakeholders",
            text: "Somos un aliado del desarrollo y bienestar de nuestras áreas de operación, llevamos energía que permite satisfacer necesidades y actividades económicas, fomentando así el crecimiento de nuestros clientes, proveedores, accionistas y demás stakeholders.",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        nextArrow: <ChevronRight className="slick-next text-custom-cream" />,
    };

    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Personal de la empresa en planta"
                src="/images/cultura/cultura.jpg"
                title="Nuestra cultura CVC"
            />
            <section className="w-full flex lg:flex-row flex-col">
                <div className="lg:w-1/2 flex flex-col bg-custom-cream p-20 lg:p-32 justify-center items-center">
                    <motion.h1
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.6,
                                delay: 0.2,
                            },
                        }}
                        className="text-custom-blue font-normal lg:font-medium text-4xl lg:text-5xl pb-12 lg:pb-28"
                    >
                        Aspiración
                    </motion.h1>
                    <p className="text-custom-grey font-extralight text-xl lg:hidden block text-center">
                        Ser líder en el sector energético, generando valor de
                        manera sostenible para nuestros grupos de interés.
                    </p>
                    <p className="text-custom-grey font-extralight text-xl lg:block hidden">
                        Ser líder en el sector
                    </p>
                    <p className="text-custom-grey font-extralight text-xl lg:block hidden">
                        energético, generando valor
                    </p>
                    <p className="text-custom-grey font-extralight text-xl lg:block hidden">
                        de manera sostenible para
                    </p>
                    <p className="text-custom-grey font-extralight text-xl lg:block hidden">
                        nuestros grupos de interés.
                    </p>
                </div>
                <div className="lg:w-1/2 flex flex-col bg-custom-cream p-20 lg:p-36 justify-center items-center">
                    <motion.h1
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.6,
                                delay: 0.2,
                            },
                        }}
                        className="text-custom-blue font-normal lg:font-medium text-4xl lg:text-5xl pb-12 lg:pb-28"
                    >
                        Propósito
                    </motion.h1>
                    <p className="text-custom-grey font-extralight text-xl lg:hidden block text-center">
                        Brindamos soluciones energéticas, innovadoras y
                        sostenibles de manera eficiente para la contribución del
                        desarrollo de nuestros clientes y del país.
                    </p>
                    <p className="text-custom-grey font-extralight text-xl lg:block hidden">
                        Brindamos soluciones energéticas,
                    </p>
                    <p className="text-custom-grey font-extralight text-xl lg:block hidden">
                        innovadoras y sostenibles de manera
                    </p>
                    <p className="text-custom-grey font-extralight text-xl lg:block hidden">
                        eficiente para la contribución del
                    </p>
                    <p className="text-custom-grey font-extralight text-xl lg:block hidden">
                        desarrollo de nuestros clientes y del país.
                    </p>
                </div>
            </section>
            <section className="w-full flex lg:flex-row flex-col lg:h-[90vh]">
                <div className="relative w-full lg:h-auto h-72 lg:w-1/2">
                    <Image
                        className="object-cover"
                        fill
                        src="/images/cultura/cultura4.jpg"
                        alt="Ingeniero de obra con brazos cruzados"
                    />
                </div>
                <div className="px-10 py-16 bg-custom-blue flex lg:hidden flex-col w-full relative justify-between gap-4">
                    <h1 className="text-custom-cream font-normal w-3/4 text-5xl mb-16">
                        Conoce nuestros principios
                    </h1>
                    <div>
                        <h1 className="text-custom-cream text-2xl">Esfuerzo</h1>
                        <p className="text-custom-cream/40 text-sm font-light">
                            Brindamos lo mejor de nuestra energía
                        </p>
                    </div>
                    <div>
                        <h1 className="text-custom-cream text-2xl">
                            Buen comportamiento
                        </h1>
                        <p className="text-custom-cream/40 text-sm font-light">
                            Trabajamos con compromiso ético y social
                        </p>
                    </div>
                    <div>
                        <h1 className="text-custom-cream text-2xl">
                            Enfoque en resultados
                        </h1>
                        <p className="text-custom-cream/40 text-sm font-light">
                            Promovemos el desarrollo de nuestros stakeholders
                        </p>
                    </div>
                    <div>
                        <h1 className="text-custom-cream text-2xl">
                            Buen clima laboral
                        </h1>
                        <p className="text-custom-cream/40 text-sm font-light">
                            Impulsamos el bienestar y creciemiento de nuestra
                            gente
                        </p>
                    </div>
                </div>
                <div className="px-24 py-20 bg-custom-blue hidden lg:flex lg:flex-col w-1/2 relative justify-between">
                    <motion.h1
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.6,
                                delay: 0.2,
                            },
                        }}
                        className="text-custom-cream font-normal w-3/4 text-6xl"
                    >
                        Conoce nuestros principios
                    </motion.h1>
                    <Slider {...settings}>
                        {slideItems.map((item, index) => (
                            <div key={index}>
                                <h1 className="text-2xl text-custom-cream font-normal">
                                    {item.title}
                                </h1>
                                <h3 className="text-lg text-custom-cream font-normal">
                                    {item.subtitle}
                                </h3>
                                <p className="text-lg text-custom-cream/90 font-thin pt-4 leading-tight">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
            <section className="w-full flex lg:flex-row flex-col lg:h-[90vh]">
                <div className="px-24 py-20 bg-custom-sky hidden lg:flex lg:flex-col w-1/2 relative justify-between">
                    <motion.h1
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.6,
                                delay: 0.2,
                            },
                        }}
                        className="text-custom-cream font-normal w-3/4 text-6xl"
                    >
                        Todo empieza por nuestro equipo
                    </motion.h1>
                    <motion.p
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.6,
                                delay: 0.2,
                            },
                        }}
                        className="text-lg text-custom-cream/90 font-thin pt-4 leading-tight text-justify w-3/4"
                    >
                        En CVC energía creemos firmemente que el elemento
                        central para alcanzar el éxito de la organización reside
                        en el equipo humano que la conforma. Es por ello que nos
                        enorgullecemos de ser una empresa comprometida con el
                        desarrollo y bienestar de cada persona que forma parte
                        de nuestro equipo.
                    </motion.p>
                </div>
                <div className="relative w-full lg:h-auto h-72 lg:w-1/2">
                    <Image
                        className="object-cover"
                        fill
                        src="/images/cultura/cultura3.jpg"
                        alt="Ingeniero de obra con brazos cruzados"
                    />
                </div>
                <div className="px-10 py-16 bg-custom-sky flex lg:hidden flex-col w-full relative justify-between gap-4">
                    <h1 className="text-custom-cream font-normal w-full lg:w-3/4 text-5xl mb-16">
                        Todo empieza por nuestro equipo
                    </h1>
                    <p className="text-custom-cream text-xl font-thin">
                        En CVC energía creemos firmemente que el elemento
                        central para alcanzar el éxito de la organización reside
                        en el equipo humano que la conforma. Es por ello que nos
                        enorgullecemos de ser una empresa comprometida con el
                        desarrollo y bienestar de cada persona que forma parte
                        de nuestro equipo.
                    </p>
                </div>
            </section>
            <section className="w-full flex lg:flex-row flex-col lg:h-[90vh]">
                <div className="relative w-full lg:h-auto h-72 lg:w-1/2">
                    <Image
                        className="object-cover"
                        fill
                        src="/images/cultura/cultura2.jpg"
                        alt="Ingeniero de obra con brazos cruzados"
                    />
                </div>
                <div className="px-10 lg:px-24 py-16 lg:py-20 bg-custom-red flex flex-col w-full lg:w-1/2 relative justify-between">
                    <motion.h1
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.6,
                                delay: 0.2,
                            },
                        }}
                        className="text-custom-cream font-normal w-full lg:w-3/4 text-5xl lg:text-6xl mb-16 lg:mb-0 leading-tight"
                    >
                        Programa CRECVC
                    </motion.h1>
                    <motion.p
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.6,
                                delay: 0.2,
                            },
                        }}
                        className="text-xl lg:text-lg text-custom-cream lg:text-custom-cream/90 font-thin lg:pt-4 lg:leading-tight lg:text-justify w-full  lg:w-3/4"
                    >
                        Nació con el objetivo de contar con un sólido modelo de
                        evaluación de desempeño el cual busca fomentar la
                        atracción, retención, planificación de sucesión y
                        desarrollo del talento en CVC energía, impulsando así el
                        crecimiento de nuestros colaboradores y la cultura de
                        alto desempeño.
                    </motion.p>
                </div>
            </section>
            <section className="w-full flex lg:flex-row flex-col gap-16 lg:gap-0 p-16 lg:p-32 bg-custom-yellow justify-center lg:justify-between items-center">
                <motion.h1
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.6,
                            delay: 0.2,
                        },
                    }}
                    className="text-5xl lg:text-7xl text-custom-grey w-full lg:w-1/2 text-center lg:text-left lg:leading-tight font-medium"
                >
                    ¡Se parte de nuestro equipo!
                </motion.h1>
                <Link
                    href="https://www.bumeran.com.pe/perfiles/empresa_consorcio-electrico-de-villacuri-cvc-energia_13228415.html"
                    target="blank"
                    className="text-2xl lg:text-4xl lg:font-medium rounded-[30px] lg:rounded-[40px] bg-custom-cream text-custom-grey px-8 lg:px-16 h-fit py-6 lg:py-8 lg:mr-24 hover:scale-105 hover:shadow-lg transition-all"
                >
                    Postula aquí
                </Link>
            </section>
        </div>
    );
};

export default page;

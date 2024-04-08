"use client";
import Hero from "@/components/Hero.jsx";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
    const distribucion = [
        "Concesión de Villacurí - Ica",
        "Concesión de Tierras Nuevas - Olmos - Lambayeque",
        "Concesión de Andahuasi - Lima",
        "Concesión de Hospicio - Tacna",
        "Concesión de Pasto Grande - Moquegua",
        "Concesión de La Huaca 2 - Piura",
    ];

    const transmision = [
        "LT Independencia – Coelvisac 1",
        "LT Felam – Tierras Nuevas",
        "LT Tierras Nuevas - Pampa Pañala",
        "SE Coelvisac 1 - Ica",
        "SE Tierras Nuevas - Lambayeque",
        "SE Félam - Lambayeque",
        "SE Lomas - Ica",
        "SE Huarango - Ica",
    ];

    const generacion = [
        "CH Coelvihidro 1 - Andahuasi",
        "CT Villacurí - Ica",
        "CT Salas - Ica",
        "CS Villacurí (en desarrollo)",
    ];

    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Planchas de carga solar"
                src="/images/activos/activos.jpg"
                title="Nuestros activos eléctricos"
            />
            <section className="w-full flex lg:flex-row flex-col">
                <div className="relative lg:w-[52%] h-[360px] lg:h-auto">
                    <Image
                        className="object-cover"
                        fill
                        src="/images/activos/distribucion.png"
                        alt="Activos CVC Energía - Planta eléctrica"
                    />
                    <h1 className="absolute top-1/2 text-custom-cream text-5xl lg:text-6xl left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Distribución
                    </h1>
                </div>
                <div className="px-12 lg:px-24 py-12 lg:py-20 bg-custom-blue flex flex-col lg:w-[48%] relative justify-between">
                    <ul className="text-custom-cream font-light gap-6 lg:gap-12 text-lg lg:text-4xl flex flex-col w-[90%] lg:w-full">
                        {distribucion.map((item, index) => {
                            let delay = index * 0.1;
                            return (
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.2,
                                            delay: delay,
                                        },
                                    }}
                                    key={index}
                                >
                                    {item}
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </section>
            <section className="w-full flex lg:flex-row flex-col">
                <div className="relative lg:w-[52%] h-[360px] lg:h-auto">
                    <Image
                        className="object-cover"
                        fill
                        src="/images/activos/transmision.jpg"
                        alt="Activos CVC Energía - Planta eléctrica"
                    />
                    <h1 className="absolute top-1/2 text-custom-cream text-5xl lg:text-6xl left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Transmisión
                    </h1>
                </div>
                <div className="px-12 lg:px-24 py-12 lg:py-20 bg-custom-sky flex flex-col lg:w-[48%] relative justify-between">
                    <ul className="text-custom-cream font-light gap-6 lg:gap-12 text-lg lg:text-4xl flex flex-col w-[90%] lg:w-full">
                        {transmision.map((item, index) => {
                            let delay = index * 0.1;
                            return (
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.2,
                                            delay: delay,
                                        },
                                    }}
                                    key={index}
                                >
                                    {item}
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </section>
            <section className="w-full flex lg:flex-row flex-col">
                <div className="relative lg:w-[52%] h-[360px] lg:h-auto">
                    <Image
                        className="object-cover"
                        fill
                        src="/images/activos/generacion.jpg"
                        alt="Activos CVC Energía - Planta eléctrica"
                    />
                    <h1 className="absolute top-1/2 text-custom-cream text-5xl lg:text-6xl left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Generación
                    </h1>
                </div>
                <div className="px-12 lg:px-24 py-12 lg:py-20 bg-custom-green flex flex-col lg:w-[48%] relative justify-between">
                    <ul className="text-custom-cream font-light gap-6 lg:gap-12 text-lg lg:text-4xl flex flex-col w-[90%] lg:w-full">
                        {generacion.map((item, index) => {
                            let delay = index * 0.1;
                            return (
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.2,
                                            delay: delay,
                                        },
                                    }}
                                    key={index}
                                >
                                    {item}
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default page;

"use client";
import Hero from "@/components/Hero.jsx";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Page = () => {
    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Balones de gas"
                src="/images/beneficiarios-fise/beneficiarios-fise.jpg"
                title="Beneficiarios FISE"
            />
            <section className="w-full flex flex-col bg-custom-cream gap-16 px-12 lg:px-28 py-16 lg:py-32">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.8 },
                    }}
                    className="text-3xl lg:text-6xl font-medium w-[50%] lg:w-auto"
                >
                    ¿Sábes qué es el FISE?
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.6 },
                    }}
                    className="text-lg lg:text-4xl font-light w-[90%] leading-tight"
                >
                    Es el fondo de inclusión Social Energético (FISE) creado por
                    la ley Nº 29852, que asignara recursos para la compensación
                    social y promoción para el acceso al GLP de los sectores
                    vulnerables. Lo cual significa que a través de este Fondo se
                    entregara mensualmente vales a los ciudadanos de las
                    regiones con mayor nivel de pobreza, para que compren{" "}
                    <strong className="font-semibold">
                        un balón de GLP de 10 kg con S/. 20.00 de descuento.
                    </strong>
                </motion.p>
            </section>
            {/* <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/BcuaXzBUfno?si=OrvY0TgsZjai6ln9&amp;controls=0"
                title="CVC Intro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            /> */}
            <section className="w-full flex lg:flex-row flex-col lg:h-[640px] relative overflow-hidden">
                <div className="lg:w-1/2 flex justify-start items-end lg:h-full">
                    <div className="flex justify-start items-end bg-custom-green h-full px-12 lg:px-24 pt-16 lg:pt-24 pb-8 lg:pb-24 w-full">
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.3 },
                            }}
                            className="text-3xl lg:text-6xl text-custom-cream w-1/2"
                        >
                            ¿Quiénes serán los beneficiados?
                        </motion.h1>
                    </div>
                </div>
                <div className="lg:w-1/2 flex lg:h-full justify-center p-12 bg-custom-green">
                    <ul className="flex flex-col justify-evenly items-center w-3/4 m-0 gap-8 lg:gap-0">
                        <motion.li
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.5 },
                            }}
                            className="list-disc font-light leading-tight text-lg lg:text-4xl text-custom-cream"
                        >
                            Los usuarios residenciales de electricidad con
                            consumo promedio anual menor o igual a 70 KWh y que
                            cuenten con cocina a GLP.
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.5 },
                            }}
                            className="list-disc font-light leading-tight text-lg lg:text-4xl text-custom-cream"
                        >
                            Las personas que no cuentan con el servicio
                            residencial de electricidad pero si cuentan con una
                            cocina a GLP.
                        </motion.li>
                    </ul>
                </div>
            </section>
            <section className="w-full flex flex-col gap-16 relative overflow-hidden bg-custom-sky px-12 lg:px-28 py-16 lg:py-32">
                <h1 className="text-3xl lg:text-6xl font-normal lg:font-medium text-custom-cream w-[60%] lg:w-auto">
                    Requisitos para acceder
                </h1>
                <p className="text-lg lg:text-4xl font-light w-[90%] leading-tight text-custom-cream">
                    El nuevo procedimiento de identificación de beneficiarios
                    del FISE permite que más viviendas en todo el país puedan
                    acceder a una energía menos contaminante y de manera
                    económica, para lo cual se debe cumplir con los siguientes
                    requisitos.
                </p>
                <ul className="self-center text-center flex flex-col gap-2 lg:gap-4 w-full">
                    <li className="px-4 lg:px-32 py-4 lg:py-8 text-[10px] lg:text-2xl bg-custom-cream text-custom-grey rounded-full w-full text-center self-center">
                        Criterio socioeconómico y geográfico (distritos más
                        pobres)
                    </li>
                    <li className="px-4 lg:px-32 py-4 lg:py-8 text-[10px] lg:text-2xl bg-custom-cream text-custom-grey rounded-full w-[90%] text-center self-center">
                        No contar con gas natural residencial en su distrito
                    </li>
                    <li className="px-4 lg:px-32 py-4 lg:py-8 text-[10px] lg:text-2xl bg-custom-cream text-custom-grey rounded-full w-[80%] text-center self-center">
                        Consumo de electricidad: ≤ 70 Kwh mes{" "}
                    </li>
                    <li className="px-4 lg:px-32 py-4 lg:py-8 text-[10px] lg:text-2xl bg-custom-cream text-custom-grey rounded-full w-[70%] text-center self-center">
                        Debidamente identificado en RENIEC
                    </li>
                    <li className="px-4 lg:px-32 py-4 lg:py-8 text-[10px] lg:text-2xl bg-custom-cream text-custom-grey rounded-full w-[60%] text-center self-center">
                        Ingreso anual: S/.19.000 (SUNAT)
                    </li>
                    <li className="px-4 lg:px-32 py-2 lg:py-8 text-[10px] lg:text-2xl bg-custom-cream text-custom-grey rounded-full w-[50%] text-center self-center">
                        Un solo beneficiario por familia
                    </li>
                    <li className="px-4 lg:px-32 py-2 lg:py-8 text-[10px] lg:text-2xl bg-custom-cream text-custom-grey rounded-full w-[40%] text-center self-center">
                        Precariedad de vivienda
                    </li>
                    <li className="px-4 lg:px-32 py-2 lg:py-8 text-[10px] lg:text-2xl bg-custom-cream text-custom-grey rounded-full w-[30%] text-center self-center">
                        Contar con cocina a gas
                    </li>
                    <li className="px-2 lg:px-32 py-4 lg:py-8 text-[10px] lg:text-2xl bg-custom-cream text-custom-grey rounded-full w-[22%] text-center self-center">
                        Beneficiario
                    </li>
                </ul>
            </section>
            <section className="w-full lg:flex flex-col h-[800px] relative overflow-hidden px-20 py-32 hidden ">
                <Image
                    fill
                    className="object-cover"
                    src="/images/beneficiarios-fise/vales.jpg"
                    alt="Imagen de vales FISE"
                />
                <div className="z-20 flex justify-between h-1/2">
                    <h1 className="text-custom-grey z-20 text-6xl font-medium leading-tight w-96">
                        El Vale GLP ahora en tu celular
                    </h1>
                    <Image
                        className="w-auto h-52 -mt-20 -mr-2"
                        width={80}
                        height={80}
                        src="/images/beneficiarios-fise/fise-logo.png"
                        alt="Imagen de logo  FISE"
                    />
                </div>
                <div className="h-1/2 z-20 items-end flex">
                    <h2 className="text-custom-grey z-20 text-4xl font-normal w-96 leading-snug">
                        Envía gratis la palabra{" "}
                        <span className="font-bold">VALE al 38383</span> ¡y
                        recibe tu código al instante!
                    </h2>
                </div>
            </section>
            <section className="w-full flex flex-col h-[480px] relative overflow-hidden px-12 py-12 lg:hidden">
                <Image
                    fill
                    className="object-cover"
                    src="/images/beneficiarios-fise/vales.jpg"
                    alt="Imagen de vales FISE"
                />
                <div className="z-20 flex items-center justify-between">
                    <h2 className="text-custom-grey z-20 text-sm font-normal leading-snug w-[50%]">
                        Envía gratis la palabra{" "}
                        <span className="font-bold">VALE al 38383</span> ¡y
                        recibe tu código al instante!
                    </h2>
                    <Image
                        className="w-auto h-20"
                        width={40}
                        height={40}
                        src="/images/beneficiarios-fise/fise-logo.png"
                        alt="Imagen de logo  FISE"
                    />
                </div>
            </section>
            <section className="w-full lg:flex h-[500px] relative overflow-hidden hidden">
                <div className="w-1/2 flex justify-start items-end h-full">
                    <div className="flex justify-start items-end bg-custom-red h-full p-20 w-full">
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.3 },
                            }}
                            className="text-6xl text-custom-cream"
                        >
                            Conoce más
                        </motion.h1>
                    </div>
                </div>
                <div className="w-1/2 flex h-full justify-start p-20 bg-custom-cream">
                    <ul className="flex flex-col justify-end gap-8 m-0 text-custom-red">
                        <Link
                            target="_blank"
                            href="/pdf/beneficiarios.pdf"
                            className="font-light leading-tight text-4xl"
                        >
                            Beneficiarios del programa
                        </Link>
                        <Link
                            target="_blank"
                            href="/pdf/fise.pdf"
                            className="font-light leading-tight text-4xl"
                        >
                            Tríptico informativo del FISE
                        </Link>
                        <Link
                            target="_blank"
                            href="https://www.youtube.com/watch?v=j1bxL38e8SY"
                            className="font-light leading-tight text-4xl"
                        >
                            Video informativo FISE
                        </Link>
                    </ul>
                </div>
            </section>
            <section className="w-full flex flex-col lg:hidden bg-custom-red text-custom-cream px-12 py-16">
                <div className="flex justify-start items-end h-full w-full">
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.3 },
                        }}
                        className="text-3xl "
                    >
                        Conoce más
                    </motion.h1>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col gap-4">
                        <Link
                            target="_blank"
                            href="/pdf/beneficiarios.pdf"
                            className="font-light leading-tight text-lg"
                        >
                            Beneficiarios del programa
                        </Link>
                        <Link
                            target="_blank"
                            href="/pdf/fise.pdf"
                            className="font-light leading-tight text-lg"
                        >
                            Tríptico informativo del FISE
                        </Link>
                        <Link
                            target="_blank"
                            href="https://www.youtube.com/watch?v=j1bxL38e8SY"
                            className="font-light leading-tight text-lg"
                        >
                            Video informativo FISE
                        </Link>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Page;

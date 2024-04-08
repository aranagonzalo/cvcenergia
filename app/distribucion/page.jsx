"use client";
import { useState } from "react";
import Hero from "@/components/Hero.jsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, Minus, Plus } from "lucide-react";

const dots = [
    {
        title: "Lambayeque",
        subtitle: "Tierras Nuevas - Olmos",
        area: "+150,000 Ha",
        inversion: "US$ +6,8 M",
        demanda: "30 MW",
        redes: "+550 km",
        trabajo: "+125K",
        left: "84px",
        top: "194px",
        url: "/images/zonas-de-concesion/2.jpg",
        enproyecto: false,
    },
    {
        title: "Lima",
        subtitle: "Andahuasi",
        area: "+21,000 Ha",
        inversion: "US$ +1,2 M",
        demanda: "2 MW",
        redes: "+69 km",
        trabajo: "+30K",
        left: "175px",
        top: "347px",
        url: "/images/zonas-de-concesion/3.png",
        enproyecto: false,
    },
    {
        title: "Ica",
        subtitle: "Villacurí",
        area: "+102,000 Ha",
        inversion: "US$ +9,2 M",
        demanda: "43 MW",
        redes: "+570 km",
        trabajo: "+200K",
        left: "215px",
        top: "448px",
        url: "/images/zonas-de-concesion/4.png",
        enproyecto: false,
    },
    {
        title: "Tacna",
        subtitle: "Hospicio",
        area: "+74,000 Ha",
        inversion: "US$ 13 M",
        demanda: "420 MW",
        redes: "28 km",
        trabajo: "",
        left: "392px",
        top: "568px",
        url: "/images/zonas-de-concesion/5.jpg",
        enproyecto: true,
    },
    {
        title: "Piura",
        subtitle: "La Huaca 2",
        area: "+77,000 Ha",
        inversion: "US$ 15 M",
        demanda: "+ 1 MW",
        redes: "32 km",
        trabajo: "",
        left: "70px",
        top: "153px",
        url: "/images/zonas-de-concesion/6.jpg",
        enproyecto: true,
    },
    {
        title: "Moquegua",
        subtitle: "Pasto Grande",
        area: "+215,000 Ha",
        inversion: "US$ 11 M",
        demanda: "160 MW",
        redes: "75 km",
        trabajo: "",
        left: "374px",
        top: "539px",
        url: "/images/zonas-de-concesion/7.jpg",
        enproyecto: true,
    },
];

const Page = () => {
    const [isHovered, setIsHovered] = useState(false);

    const [dotData, setDotData] = useState({
        title: "",
        subtitle: "",
        area: "",
        inversion: "",
        demanda: "",
        redes: "",
        trabajo: "",
        url: "",
        enproyecto: false,
    });

    const handleHover = (d) => {
        setIsHovered(true);
        setDotData({
            title: d.title,
            subtitle: d.subtitle,
            area: d.area,
            inversion: d.inversion,
            demanda: d.demanda,
            redes: d.redes,
            trabajo: d.trabajo,
            url: d.url,
            enproyecto: d.enproyecto,
        });
    };

    const handleExit = () => {
        setIsHovered(false);
    };

    const [activeIndex, setActiveIndex] = useState(null);

    const openMobile = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Torre eléctrica con cielo despejado"
                src="/images/zonas-de-concesion/zonas-de-concesion.jpg"
                title="Distribución Eléctrica"
            />
            <section className="w-full lg:flex h-[1000px] relative overflow-hidden hidden">
                <div
                    className={`w-[84%] flex justify-start items-end z-0 absolute top-0 h-full transition-all duration-[800ms] ease-out ${
                        isHovered ? "-left-[42%]" : "left-0"
                    }`}
                >
                    <div className="w-1/2 flex justify-start items-start bg-custom-blue h-full p-24">
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.3 },
                            }}
                            className="text-5xl text-custom-cream w-[60 %]"
                        >
                            Brindamos desarrollo a nuestras zonas de concesión
                        </motion.h1>
                    </div>
                    <div className="w-1/2 flex flex-col justify-start items-end bg-custom-yellow">
                        <div className="w-full h-[640px] bg-custom-yellow px-20 flex items-center">
                            <div className="w-full flex flex-col gap-4">
                                <h1 className="text-5xl font-medium">
                                    {dotData.title}
                                </h1>
                                <h3 className="text-xl font-light">
                                    {dotData.subtitle}
                                </h3>
                                <ul className="flex flex-col w-full gap-8 pt-8">
                                    <li className="flex gap-4 items-center">
                                        <p className="text-3xl font-medium w-1/2 justify-end flex">
                                            {dotData.area}
                                        </p>
                                        <p className="text-xl font-light w-1/4 leading-none">
                                            área de concesión
                                        </p>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <p className="text-3xl font-medium w-1/2 justify-end flex">
                                            {dotData.inversion}
                                        </p>
                                        <p className="text-xl font-light w-1/4 leading-none">
                                            {dotData.title === "Piura" ||
                                            dotData.title === "Moquegua" ||
                                            dotData.title === "Tacna"
                                                ? "inversión proyectada en activos"
                                                : "inversión en activos"}
                                        </p>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <p className="text-3xl font-medium w-1/2 justify-end flex">
                                            {dotData.demanda}
                                        </p>
                                        <p className="text-xl font-light w-1/4 leading-none">
                                            {dotData.title === "Piura" ||
                                            dotData.title === "Moquegua" ||
                                            dotData.title === "Tacna"
                                                ? "demanda proyectada"
                                                : "demanda actual"}
                                        </p>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <p className="text-3xl font-medium w-1/2 justify-end flex">
                                            {dotData.redes}
                                        </p>
                                        <p className="text-xl font-light w-1/4 leading-none">
                                            redes de media tensión
                                        </p>
                                    </li>
                                    {dotData.trabajo.length !== 0 && (
                                        <li className="flex gap-4 items-center">
                                            <p className="text-3xl font-medium w-1/2 justify-end flex">
                                                {dotData.trabajo}
                                            </p>
                                            <p className="text-xl font-light w-1/4 leading-none">
                                                puestos de trabajo generados
                                            </p>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="w-full h-[360px] relative">
                            {dotData.url && (
                                <Image
                                    fill
                                    alt={dotData.title}
                                    src={dotData.url}
                                />
                            )}
                            {dotData.enproyecto && (
                                <div className="z-50 bg-custom-grey text-xl h-16 flex absolute rotate-90 top-[148px] -right-[150px] p-2 w-[360px] items-center justify-center text-custom-cream uppercase">
                                    En proyecto
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-[58%] bg-custom-cream flex justify-center items-center absolute right-0 top-0 h-full z-10">
                    <div className="w-[500px] h-[600px] relative">
                        <Image
                            fill
                            alt="Mapa político del Perú"
                            src="/images/zonas-de-concesion/mapa.svg"
                        />
                        <ChevronLeft
                            className="top-0 -left-16 cursor-pointer z-20 text-lg text-custom-blue absolute hover:scale-125 transition-all"
                            onClick={handleExit}
                            size={32}
                        />
                        {dots.map((d, i) => (
                            <div
                                key={i}
                                onClick={() => handleHover(d)}
                                className="cursor-pointer bg-custom-yellow rounded-full w-[16px] h-[16px] absolute before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:pointer-events-none hover:before:h-20 hover:before:w-20 before:transition-all before:-translate-y-1/2 before:flex before:rounded-full before:bg-custom-yellow/40 before:w-0 before:h-0"
                                style={{ top: d.top, left: d.left }}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="lg:hidden">
                <div className="pt-16 px-16 font-normal text-4xl text-custom-grey bg-custom-cream">
                    <p className="w-[75%]">
                        Brindamos desarrollo a nuestras zonas de concesión
                    </p>
                </div>
                <div className="relative h-[580px] bg-custom-cream">
                    <Image
                        fill
                        alt="Mapa político del Perú"
                        src="/images/zonas-de-concesion/mapa2.svg"
                        className="px-16 py-0"
                    />
                </div>
            </section>
            <section className="lg:hidden">
                {dots.map((linea, index) => (
                    <div key={linea.title}>
                        <div
                            className="flex justify-between p-8 bg-custom-yellow text-custom-grey border-b border-custom-grey"
                            onClick={() => openMobile(index)}
                        >
                            {linea.title}
                            {activeIndex === index ? <Minus /> : <Plus />}
                        </div>
                        {activeIndex === index && (
                            <div className="bg-custom-cream text-custom-grey">
                                <div
                                    className="relative"
                                    style={{ height: "320px" }}
                                >
                                    <Image
                                        src={linea.url}
                                        alt={linea.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="p-8 flex flex-col gap-10">
                                    <div className="flex justify-end">
                                        {linea.subtitle}
                                    </div>
                                    <div>
                                        <p className="text-sm font-light pb-2">
                                            Área de concesión
                                        </p>{" "}
                                        <strong className="text-lg font-medium">
                                            {linea.area}
                                        </strong>
                                    </div>
                                    <div>
                                        <p className="text-sm font-light pb-2">
                                            Inversión en activos
                                        </p>{" "}
                                        <strong className="text-lg font-medium">
                                            {linea.inversion}
                                        </strong>
                                    </div>
                                    <div>
                                        <p className="text-sm font-light pb-2">
                                            Demanda actual
                                        </p>{" "}
                                        <strong className="text-lg font-medium leading-tight">
                                            {linea.demanda}
                                        </strong>
                                    </div>
                                    <div>
                                        <p className="text-sm font-light pb-2">
                                            Redes en media tensión
                                        </p>{" "}
                                        <strong className="text-lg font-medium leading-tight">
                                            {linea.redes}
                                        </strong>
                                    </div>
                                    {linea.trabajo !== "" && (
                                        <div>
                                            <p className="text-sm font-light pb-2">
                                                Puestos de trabajo generados
                                            </p>{" "}
                                            <strong className="text-lg font-medium leading-tight">
                                                {linea.trabajo}
                                            </strong>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Page;

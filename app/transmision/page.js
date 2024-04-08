"use client";
import { useState } from "react";
import Hero from "@/components/Hero.jsx";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const lineasDeTransmision = [
    {
        title: "LT Independencia - Coelvisac 1",
        topLeftTitle: "Distancia",
        topRightTitle: "Voltaje",
        bottomLeftTitle: "SE de origen",
        bottomRightTitle: "SE de destino",
        topLeftData: "31 km",
        topRightData: "60 kV",
        bottomLeftData: "SE Independencia",
        bottomRightData: "SE Coelvisac",
        url: "/images/transmision/1.jpg",
    },
    {
        title: "LT Felam - Tierras Nuevas",
        topLeftTitle: "Distancia",
        topRightTitle: "Voltaje",
        bottomLeftTitle: "SE de origen",
        bottomRightTitle: "SE de destino",
        topLeftData: "28 km",
        topRightData: "220 kV",
        bottomLeftData: "SE Félam",
        bottomRightData: "SE Tierras Nuevas",
        url: "/images/transmision/2.jpg",
    },
    {
        title: "LT Tierras Nuevas - Pampa Pañala",
        topLeftTitle: "Distancia",
        topRightTitle: "Voltaje",
        bottomLeftTitle: "SE de origen",
        bottomRightTitle: "SE de destino",
        topLeftData: "33.861 km",
        topRightData: "60 kV",
        bottomLeftData: "SE Tierras Nuevas",
        bottomRightData: "SE Pampa Pañala",
        url: "/images/transmision/8.jpg",
    },
    {
        title: "SE Coelvisac 1",
        topLeftTitle: "Potencia",
        topRightTitle: "Voltaje",
        bottomLeftTitle: "# de trafos",
        bottomRightTitle: "SE de destino",
        topLeftData: "40 + 20 MVA",
        topRightData: "60 kV",
        bottomLeftData: "2",
        bottomRightData: "Villacurí, Ica",
        url: "/images/transmision/3.jpg",
    },
    {
        title: "SE Tierras Nuevas",
        topLeftTitle: "Potencia",
        topRightTitle: "Voltaje",
        bottomLeftTitle: "# de trafos",
        bottomRightTitle: "SE de destino",
        topLeftData: "60 MVA",
        topRightData: "220 kV",
        bottomLeftData: "1",
        bottomRightData: "Olmos, Lambayeque",
        url: "/images/transmision/4.jpg",
    },
    {
        title: "SE Félam",
        topLeftTitle: "Potencia",
        topRightTitle: "Voltaje",
        bottomLeftTitle: "# de trafos",
        bottomRightTitle: "Ubicación",
        topLeftData: "50 MVA",
        topRightData: "220 kV",
        bottomLeftData: "0",
        bottomRightData: "Olmos, Lambayeque",
        url: "/images/transmision/5.jpg",
    },
    {
        title: "SE Lomas",
        topLeftTitle: "Capacidad",
        topRightTitle: "Voltaje",
        bottomLeftTitle: "# de trafos",
        bottomRightTitle: "SE de destino",
        topLeftData: "50 MVA",
        topRightData: "60/22.9 kV",
        bottomLeftData: "1",
        bottomRightData: "Villacurí, Ica",
        url: "/images/transmision/6.jpg",
    },
    {
        title: "SE Huarango",
        topLeftTitle: "Capacidad",
        topRightTitle: "Voltaje",
        bottomLeftTitle: "# de trafos",
        bottomRightTitle: "SE de destino",
        topLeftData: "50 MVA",
        topRightData: "60/22.9 kV",
        bottomLeftData: "1",
        bottomRightData: "Villacurí, Ica",
        url: "/images/transmision/7.jpg",
    },
];

const Page = () => {
    const [activeData, setActiveData] = useState({
        title: "L.T. Independencia Coelvisac 1",
        topLeftTitle: "Distancia",
        topRightTitle: "Voltaje",
        bottomLeftTitle: "SE de origen",
        bottomRightTitle: "SE de destino",
        topLeftData: "31 km",
        topRightData: "60 kV",
        bottomLeftData: "SE Independencia",
        bottomRightData: "SE Coelvisac",
        url: "/images/transmision/1.jpg",
    });

    const handleClick = (d) => {
        setActiveData({
            title: d.title,
            topLeftTitle: d.topLeftTitle,
            topRightTitle: d.topRightTitle,
            bottomLeftTitle: d.bottomLeftTitle,
            bottomRightTitle: d.bottomRightTitle,
            topLeftData: d.topLeftData,
            topRightData: d.topRightData,
            bottomLeftData: d.bottomLeftData,
            bottomRightData: d.bottomRightData,
            url: d.url,
        });
    };

    const [activeIndex, setActiveIndex] = useState(null);

    const openMobile = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Torre eléctrica con cielo despejado"
                src="/images/transmision/transmision.jpg"
                title="Transmisión Eléctrica"
            />
            <section className="w-full p-12 lg:p-28 bg-custom-cream text-custom-grey flex flex-col gap-12">
                <p className="text-2xl lg:text-4xl font-light lg:font-normal leading-normal">
                    Hemos desarrollado nuestras propias líneas de transmisión
                    para alimentar eléctricamente nuestras zonas de concesión en
                    Villacurí y Olmos. Además, hemos construido nuestras
                    subestaciones de transformación eléctrica.
                </p>
            </section>
            <section className="w-full lg:flex h-[95vh] relative overflow-hidden hidden">
                <div className="w-[42%] bg-custom-sky flex flex-col p-20 justify-between">
                    {lineasDeTransmision.map((l, i) => (
                        <h1
                            onClick={() => handleClick(l)}
                            className={`text-3xl cursor-pointer transition-all w-full        ${
                                activeData.title === l.title
                                    ? "font-semibold text-custom-cream"
                                    : "font-light text-custom-cream/90"
                            }`}
                            key={i}
                        >
                            {l.title}
                        </h1>
                    ))}
                </div>
                <div className="w-[58%] bg-custom-cream flex flex-col justify-center items-center">
                    <div className="h-[64%] w-full relative">
                        <Image
                            className="transition-all"
                            alt={activeData.title}
                            src={activeData.url}
                            fill
                        />
                    </div>
                    <div className="h-[36%] w-full relative grid grid-rows-2 grid-cols-2 pl-20 py-12 gap-x-28">
                        {/* <p className="absolute right-3 top-1 font-medium text-xs">
                            Información general Nov - 2023
                        </p> */}
                        <div className="flex flex-col justify-center">
                            <h3 className="font-light text-2xl">
                                {activeData.topLeftTitle}
                            </h3>
                            <p className="font-medium text-3xl">
                                {activeData.topLeftData}
                            </p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className="font-light text-2xl">
                                {activeData.topRightTitle}
                            </h3>
                            <p className="font-medium text-3xl">
                                {activeData.topRightData}
                            </p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className="font-light text-2xl">
                                {activeData.bottomLeftTitle}
                            </h3>
                            <p className="font-medium text-3xl">
                                {activeData.bottomLeftData}
                            </p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className="font-light text-2xl">
                                {activeData.bottomRightTitle}
                            </h3>
                            <p className="font-medium text-3xl">
                                {activeData.bottomRightData}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col lg:flex-row lg:hidden">
                {lineasDeTransmision.map((linea, index) => (
                    <div key={linea.title}>
                        <div
                            className="flex justify-between p-8 bg-custom-sky text-custom-cream border-b border-sky-200"
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
                                    <div>
                                        <p className="text-sm font-light pb-2">
                                            {linea.topLeftTitle}
                                        </p>{" "}
                                        <strong className="text-lg font-medium">
                                            {linea.topLeftData}
                                        </strong>
                                    </div>
                                    <div>
                                        <p className="text-sm font-light pb-2">
                                            {linea.topRightTitle}
                                        </p>{" "}
                                        <strong className="text-lg font-medium">
                                            {linea.topRightData}
                                        </strong>
                                    </div>
                                    <div>
                                        <p className="text-sm font-light pb-2">
                                            {linea.bottomLeftTitle}
                                        </p>{" "}
                                        <strong className="text-lg font-medium leading-tight">
                                            {linea.bottomLeftData}
                                        </strong>
                                    </div>
                                    <div>
                                        <p className="text-sm font-light pb-2">
                                            {linea.bottomRightTitle}
                                        </p>{" "}
                                        <strong className="text-lg font-medium leading-tight">
                                            {linea.bottomRightData}
                                        </strong>
                                    </div>
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

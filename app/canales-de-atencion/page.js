"use client";
import Hero from "@/components/Hero.jsx";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

const items = [
    {
        src: "/images/canales-de-atencion/telefono.svg",
        alt: "Icono de Teléfono CVC",
        label: "CVC Fono | 24h",
        color: "red",
    },
    {
        src: "/images/canales-de-atencion/whatsapp.svg",
        alt: "Icono WhastApp",
        label: "WhatsApp",
        color: "green",
    },
    {
        src: "/images/canales-de-atencion/direcciones.svg",
        alt: "Icono de edificio",
        label: "Centros de atención",
        color: "sky",
    },
    {
        src: "/images/canales-de-atencion/medios-de-pago.svg",
        alt: "Icono de billetes",
        label: "Medios de pago",
        color: "blue",
    },
];

const Page = () => {
    const [showDetail, setShowDetail] = useState(false);

    const [detail, setDetail] = useState({});

    const handleClick = (item) => {
        setShowDetail(true);
        item.label == "CVC Fono | 24h"
            ? setDetail({
                  color: item.color,
                  src: "/images/canales-de-atencion/telefono.svg",
                  alt: "Icono de Teléfono CVC",
                  label: "CVC Fono | 24h",
              })
            : item.label == "WhatsApp"
            ? setDetail({
                  color: item.color,
                  src: "/images/canales-de-atencion/whatsapp.svg",
                  alt: "Icono WhastApp",
                  label: "WhatsApp",
              })
            : item.label == "Centros de atención"
            ? setDetail({
                  color: item.color,
                  src: "/images/canales-de-atencion/direcciones.svg",
                  alt: "Icono de edificio",
                  label: "Centros de atención",
              })
            : item.label == "Medios de pago"
            ? setDetail({
                  color: item.color,
                  src: "/images/canales-de-atencion/medios-de-pago.svg",
                  alt: "Icono de billetes",
                  label: "Medios de pago",
              })
            : null;
    };

    const [openItem, setOpenItem] = useState(null);

    const handleOpen = (label) => {
        setOpenItem(openItem === label ? null : label);
    };

    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Trabajador de CVC Energía saludando"
                src="/images/canales-de-atencion/canales-de-atencion.jpg"
                title="Comunícate con nosotros"
            />
            <section className="w-full hidden lg:flex h-[700px] relative overflow-hidden">
                <div className="w-1/2 flex justify-start items-end h-full bg-custom-cream p-24">
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.3 },
                        }}
                        className="text-6xl text-custom-grey font-medium w-1/2"
                    >
                        Conoce nuestros canales
                    </motion.h1>
                </div>
                {showDetail ? (
                    <div className={`bg-custom-${detail.color} w-1/2 p-12`}>
                        <div
                            className="flex w-fit items-center cursor-pointer pb-2 gap-4"
                            onClick={() => setShowDetail(false)}
                        >
                            <Image
                                alt="Boton de regreso"
                                src="/images/canales-de-atencion/back.svg"
                                width={22}
                                height={22}
                            />
                            <p className="text-2xl font-semibold text-custom-cream -translate-y-[2px]">
                                regresa
                            </p>
                        </div>
                        <div className="flex flex-col items-center h-full relative text-center">
                            <Image
                                width={60}
                                height={60}
                                src={detail.src}
                                alt={detail.alt}
                            />
                            <h1 className="text-xl text-custom-cream pt-2 pb-16">
                                {detail.label}
                            </h1>
                            {detail.label === "CVC Fono | 24h" ? (
                                <>
                                    <p className="text-lg font-semibold text-custom-cream pt-12">
                                        Lima
                                    </p>
                                    <p className="text-base font-light text-custom-cream pb-8">
                                        (01) 640-0770
                                    </p>
                                    <p className="text-lg font-semibold text-custom-cream">
                                        Ica
                                    </p>
                                    <p className="text-base font-light text-custom-cream pb-8">
                                        (056) 640-001
                                    </p>
                                    <p className="text-lg font-semibold text-custom-cream">
                                        Lambayeque
                                    </p>
                                    <p className="text-base font-light text-custom-cream">
                                        (074) 640-771
                                    </p>
                                </>
                            ) : detail.label === "WhatsApp" ? (
                                <>
                                    <Link
                                        target="_blank"
                                        href="https://api.whatsapp.com/send/?phone=51998166703"
                                        className="text-lg font-semibold text-custom-cream pt-12"
                                    >
                                        Escríbenos al
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href="https://api.whatsapp.com/send/?phone=51998166703"
                                        className="text-lg font-semibold text-custom-cream"
                                    >
                                        +51 998 166 703
                                    </Link>
                                    <p className="text-lg font-semibold text-custom-cream pt-16">
                                        Horario de
                                    </p>
                                    <p className="text-lg font-semibold text-custom-cream">
                                        atención
                                    </p>
                                    <p className="text-lg font-light text-custom-cream pt-4">
                                        Lunes a viernes
                                    </p>
                                    <p className="text-lg font-light text-custom-cream">
                                        8:30am a 6pm
                                    </p>
                                    <p className="flex self-center text-sm font-light pt-20 text-custom-cream">
                                        Este es un canal exclusivo de
                                        mensajería. <br />
                                        No se atenderán llamadas.
                                    </p>
                                </>
                            ) : detail.label === "Centros de atención" ? (
                                <div className="flex h-full gap-12">
                                    <div className="flex flex-col h-full pt-12 text-center gap-[6px]">
                                        <p className="text-lg font-semibold text-custom-cream">
                                            Lima
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Av. Victor Andrés Belaunde N°147
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Torre 1 - Piso 8, Lima
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream pb-[102px]">
                                            Atención al público | 8:30am a
                                            4:30pm
                                        </p>
                                        {/* <p className="text-base font-light leading-none text-custom-cream pb-20">
                                            Recepción de documentos | 9am a
                                            4:30pm
                                        </p> */}
                                        <p className="text-lg font-semibold text-custom-cream">
                                            Villacuri
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Carretera Panamericana Sur Km.274
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Salas de Guadalupe - Ica
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Atención al publico | 8am a 4pm
                                        </p>
                                    </div>
                                    <div className="flex flex-col h-full pt-12 text-center gap-[6px]">
                                        <p className="text-lg font-semibold text-custom-cream">
                                            Andahuasi
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Las Alhelíe Mz.P Lote 6 Sector 4
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Sayán - Huaura - Lima
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream pb-[102px]">
                                            Atención al publico | 8am a 4pm
                                        </p>
                                        <p className="text-lg font-semibold text-custom-cream">
                                            Lambayeque
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Calle Las Mercedes 466
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Pacora - Lambayeque
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Atención al publico | 8am a 4pm
                                        </p>
                                    </div>
                                </div>
                            ) : detail.label === "Medios de pago" ? (
                                <div className="flex flex-col text-custom-cream items-center">
                                    <h3 className="text-lg font-semibold pb-6">
                                        Pago presencial
                                    </h3>
                                    <p className="text-base font-light w-3/4">
                                        Puedes realizar tus pagos presenciales
                                        en cualquiera de nuestros centros de
                                        atención.
                                    </p>

                                    <h3 className="text-lg font-semibold pb-6 pt-12">
                                        Pago digital
                                    </h3>
                                    <p className="text-base font-light">
                                        Puedes realizar tus pagos digitales en
                                        dólares o soles.
                                    </p>
                                    <p className="text-base font-light pb-12">
                                        Para ver nuestra{" "}
                                        <strong className="font-semibold">
                                            Guía de Pagos Digitales,{" "}
                                            <Link
                                                target="_blank"
                                                href="/pdf/Guia de pago - CVC energía ULTIMO.pdf"
                                                className="underline"
                                            >
                                                haz click aquí.
                                            </Link>
                                        </strong>
                                    </p>
                                    <Link
                                        target="_blank"
                                        href="https://pagolink.niubiz.com.pe/pagoseguro/CVCenergia/1603339"
                                        className="bg-custom-cream text-custom-grey p-4 rounded-full hover:shadow-lg hover:scale-110 transition-all"
                                    >
                                        Realiza tu pago aquí
                                    </Link>
                                </div>
                            ) : null}
                        </div>
                    </div>
                ) : (
                    <div className="w-1/2 bg-custom-cream grid grid-cols-2 overflow-hidden aspect-[2/1]">
                        {items.map((item, index) => (
                            <div
                                onClick={() => handleClick(item)}
                                key={index}
                                className={`bg-custom-${item.color} col-span-1 row-span-1 flex flex-col justify-evenly items-center transition-transform transform scale-100 hover:scale-105 cursor-pointer overflow-hidden`}
                            >
                                <Image
                                    width={120}
                                    height={120}
                                    alt={item.alt}
                                    src={item.src}
                                />
                                <p className="text-custom-cream text-2xl font-normal">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <section className="w-full flex flex-col lg:hidden">
                {items.map((item, i) => (
                    <button key={i} onClick={() => handleOpen(item.label)}>
                        <div
                            key={i}
                            className={`px-12 py-10 relative flex items-center justify-between text-custom-cream font-normal text-xl bg-custom-${item.color}`}
                        >
                            <Image
                                alt={item.label}
                                width={40}
                                height={40}
                                src={item.src}
                            />
                            <p>{item.label}</p>

                            {openItem === item.label ? <Minus /> : <Plus />}
                        </div>
                        {openItem === item.label && (
                            <div
                                className={`px-10 py-16 bg-custom-${item.color} text-custom-cream flex flex-col justify-center items-center`}
                            >
                                {/* Render additional information for the current item */}
                                {item.label === "CVC Fono | 24h" ? (
                                    <>
                                        <p className="text-lg font-semibold text-custom-cream">
                                            Lima
                                        </p>
                                        <p className="text-base font-light text-custom-cream pb-8">
                                            (01) 640-0770
                                        </p>
                                        <p className="text-lg font-semibold text-custom-cream">
                                            Ica
                                        </p>
                                        <p className="text-base font-light text-custom-cream pb-8">
                                            (056) 640-001
                                        </p>
                                        <p className="text-lg font-semibold text-custom-cream">
                                            Lambayeque
                                        </p>
                                        <p className="text-base font-light text-custom-cream">
                                            (074) 640-771
                                        </p>
                                    </>
                                ) : item.label === "WhatsApp" ? (
                                    <div className="text-center flex flex-col items-center gap-0">
                                        <p className="text-lg font-semibold text-custom-cream ">
                                            Horario de atención
                                        </p>

                                        <p className="text-lg font-light text-custom-cream pt-4">
                                            Lunes a viernes
                                        </p>
                                        <p className="text-lg font-light text-custom-cream">
                                            8:30am a 6pm
                                        </p>
                                        <Link
                                            target="_blank"
                                            href="https://api.whatsapp.com/send/?phone=51998166703"
                                            className="text-lg font-semibold text-custom-grey w-fit my-8 flex flex-col rounded-xl p-4 bg-custom-cream"
                                        >
                                            <div>Escríbenos al</div>
                                            <div>+51 998 166 703</div>
                                        </Link>
                                        <p className="flex self-center text-sm font-light text-custom-cream">
                                            Este es un canal exclusivo de
                                            mensajería.
                                        </p>
                                        <p className="flex self-center text-sm font-light text-custom-cream">
                                            No se atenderán llamadas.
                                        </p>
                                    </div>
                                ) : item.label === "Centros de atención" ? (
                                    <div className="flex flex-col h-full gap-2 text-center">
                                        <p className="text-lg font-semibold text-custom-cream">
                                            Lima
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Av. Victor Andrés Belaunde N°147
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Torre 1 - Piso 8, Lima
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream pb-12">
                                            Atención al público | 8:30am a
                                            4:30pm
                                        </p>
                                        <p className="text-lg font-semibold text-custom-cream">
                                            Villacuri
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Carretera Panamericana Sur Km.274
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Salas de Guadalupe - Ica
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream pb-12">
                                            Atención al publico | 8am a 4pm
                                        </p>

                                        <p className="text-lg font-semibold text-custom-cream">
                                            Andahuasi
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Las Alhelíe Mz.P Lote 6 Sector 4
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Sayán - Huaura - Lima
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream pb-12">
                                            Atención al publico | 8am a 4pm
                                        </p>
                                        <p className="text-lg font-semibold text-custom-cream">
                                            Lambayeque
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Calle Las Mercedes 466
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Pacora - Lambayeque
                                        </p>
                                        <p className="text-base font-light leading-none text-custom-cream">
                                            Atención al publico | 8am a 4pm
                                        </p>
                                    </div>
                                ) : item.label === "Medios de pago" ? (
                                    <div className="flex flex-col text-custom-cream items-center text-center">
                                        <h3 className="text-lg font-semibold pb-6">
                                            Pago presencial
                                        </h3>
                                        <p className="text-base font-light w-3/4">
                                            Puedes realizar tus pagos
                                            presenciales en cualquiera de
                                            nuestros centros de atención.
                                        </p>

                                        <h3 className="text-lg font-semibold pb-6 pt-12">
                                            Pago digital
                                        </h3>
                                        <p className="text-base font-light w-[80%]">
                                            Puedes realizar tus pagos digitales
                                            en dólares o soles.
                                        </p>
                                        <p className="text-base font-light pb-12 w-[80%]">
                                            Para ver nuestra{" "}
                                            <strong className="font-semibold">
                                                Guía de Pagos Digitales,{" "}
                                                <Link
                                                    target="_blank"
                                                    href="/pdf/Guia de pago - CVC energía ULTIMO.pdf"
                                                    className="underline"
                                                >
                                                    haz click aquí.
                                                </Link>
                                            </strong>
                                        </p>
                                        <Link
                                            target="_blank"
                                            href="https://pagolink.niubiz.com.pe/pagoseguro/CVCenergia/1603339"
                                            className="bg-custom-cream text-custom-grey p-4 rounded-full hover:shadow-lg hover:scale-110 transition-all"
                                        >
                                            Realiza tu pago aquí
                                        </Link>
                                    </div>
                                ) : null}
                                {/* You can add more details here */}
                            </div>
                        )}
                    </button>
                ))}
            </section>
        </div>
    );
};

export default Page;

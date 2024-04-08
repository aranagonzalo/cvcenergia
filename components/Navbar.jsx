"use client";

import React, { Component, useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { User2, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const pathname = usePathname();
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredSection, setHoveredSection] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleHoverSection = (section) => {
        setHoveredSection(section);
    };

    const isActive = (section) => hoveredSection === section;

    const navbarRef = useRef(null);

    useEffect(() => {
        console.log(`Route changed to: ${pathname}`);
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const showNav = gsap
            .fromTo(navbarRef.current, { y: -100 }, { y: 0, duration: 0.3 })
            .progress(1);
        ScrollTrigger.create({
            start: "top top",
            end: "max",
            onUpdate: (self) => {
                self.direction === -1 ? showNav.play() : showNav.reverse();
            },
        });
    }, []);

    return (
        <>
            {/*VERSION DESKTOP*/}
            <motion.header
                ref={navbarRef}
                className={`transition-[padding] fixed z-50 w-full items-center hidden lg:flex lg:flex-col ${
                    isHovered ? "px-0" : "px-5"
                }`}
            >
                <motion.nav
                    onMouseEnter={() =>
                        setTimeout(() => setIsHovered(true), 200)
                    }
                    onMouseLeave={() =>
                        setTimeout(() => setIsHovered(false), 150)
                    }
                    className={`transition-all flex w-full text-custom-cream bg-custom-grey/[.95] backdrop-blur text-sm font-normal px-16 py-3 rounded-b-2xl ${
                        isHovered ? "items-start" : "items-center"
                    }`}
                >
                    <Link href="/" className="w-[14%] flex items-center">
                        <Image
                            src="/images/logo/logo.png"
                            alt="Logo CVC Energía"
                            width={132}
                            height={128}
                        />
                    </Link>
                    <ul
                        className={`flex justify-evenly w-[61%] ${
                            isHovered
                                ? "pt-[9px] items-start"
                                : "pt-0 items-center"
                        }`}
                    >
                        <li>
                            <div
                                className={`w-20 transition-all ${
                                    !isActive("nosotros")
                                        ? "text-custom-grey-300"
                                        : "text-custom-cream"
                                }`}
                                onMouseEnter={() =>
                                    handleHoverSection("nosotros")
                                }
                                onMouseLeave={() => handleHoverSection(null)}
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className={`${
                                        isHovered
                                            ? "pb-8"
                                            : "pb-0 text-custom-cream"
                                    }`}
                                >
                                    Nosotros
                                </motion.p>
                                <motion.ul
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className={`font-light text-sm ${
                                        isHovered
                                            ? "flex flex-col pb-4"
                                            : "hidden"
                                    }`}
                                >
                                    <motion.li
                                        className="flex"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            className="pb-2 w-full"
                                            href="/historia"
                                        >
                                            Historia
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        className="flex"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            className="py-2 w-full"
                                            href="/cultura"
                                        >
                                            Cultura CVC
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        className="flex"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            className="pt-2 w-full"
                                            href="/activos"
                                        >
                                            Nuestros activos
                                        </Link>
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </li>
                        <li>
                            <div
                                className={`w-20 transition-all ${
                                    !isActive("soluciones")
                                        ? "text-custom-grey-300"
                                        : "text-custom-cream"
                                }`}
                                onMouseEnter={() =>
                                    handleHoverSection("soluciones")
                                }
                                onMouseLeave={() => handleHoverSection(null)}
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className={`${
                                        isHovered
                                            ? "pb-8"
                                            : "pb-0 text-custom-cream"
                                    }`}
                                >
                                    Actividades
                                </motion.p>
                                <motion.ul
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className={`font-light text-sm ${
                                        isHovered
                                            ? "flex flex-col pb-4"
                                            : "hidden"
                                    }`}
                                >
                                    <motion.li
                                        className="flex"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            className="pb-2 w-full"
                                            href="/distribucion"
                                        >
                                            Distribución
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        className="flex"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            className="py-2 w-full"
                                            href="/transmision"
                                        >
                                            Transmisión
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        className="flex"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            className="py-2 w-full"
                                            href="/generacion"
                                        >
                                            Generación
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        className="flex"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            className="py-2 w-full"
                                            href="/elaboracion-de-proyectos"
                                        >
                                            Diseño y construcción de proyectos
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        className="flex"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            className="pt-2 w-full"
                                            href="/ahorra-energia"
                                        >
                                            Comercialización de energía
                                        </Link>
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </li>
                        <li>
                            <div
                                className={`w-20 transition-all ${
                                    !isActive("zona-cliente")
                                        ? "text-custom-grey-300"
                                        : "text-custom-cream"
                                }`}
                                onMouseEnter={() =>
                                    handleHoverSection("zona-cliente")
                                }
                                onMouseLeave={() => handleHoverSection(null)}
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className={`${
                                        isHovered
                                            ? "pb-8"
                                            : "pb-0 text-custom-cream"
                                    }`}
                                >
                                    Zona Cliente
                                </motion.p>
                                <motion.ul
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className={`font-light text-sm ${
                                        isHovered
                                            ? "flex flex-col pb-4"
                                            : "hidden"
                                    }`}
                                >
                                    <motion.li
                                        className="flex"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            className="pb-2 w-full"
                                            href="/canales-de-atencion"
                                        >
                                            Canales de Atención
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        className="flex"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            className="py-2 w-full"
                                            href="/beneficiarios-fise"
                                        >
                                            Beneficiarios FISE
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        className="flex"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            className="py-2 w-full"
                                            href="/guia-de-reclamos"
                                        >
                                            Reclamos
                                        </Link>
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </li>
                        <li>
                            <div
                                className={`w-20 transition-all ${
                                    !isActive("mi-cuenta")
                                        ? "text-custom-grey-300"
                                        : "text-custom-cream"
                                }`}
                                onMouseEnter={() =>
                                    handleHoverSection("mi-cuenta")
                                }
                                onMouseLeave={() => handleHoverSection(null)}
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className={`${
                                        isHovered
                                            ? "pb-8"
                                            : "pb-0 text-custom-cream"
                                    }`}
                                >
                                    <Link
                                        href="http://190.187.233.82/iscon/Login.aspx"
                                        target="_blank"
                                    >
                                        Mi Cuenta
                                    </Link>
                                </motion.p>
                            </div>
                        </li>
                        <li>
                            <div
                                className={`w-20 transition-all ${
                                    !isActive("canal-etico")
                                        ? "text-custom-grey-300"
                                        : "text-custom-cream"
                                }`}
                                onMouseEnter={() =>
                                    handleHoverSection("canal-etico")
                                }
                                onMouseLeave={() => handleHoverSection(null)}
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className={`${
                                        isHovered
                                            ? "pb-8"
                                            : "pb-0 text-custom-cream"
                                    }`}
                                >
                                    Canal ético
                                </motion.p>
                                <motion.ul
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className={`font-light text-sm ${
                                        isHovered
                                            ? "flex flex-col pb-4"
                                            : "hidden"
                                    }`}
                                >
                                    <motion.li
                                        className="flex"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            className="pb-2 w-full"
                                            href="http://190.187.233.86:83/LINEA_ETICA_FORM/Otherfiles/CodigoDeEtica.pdf"
                                            target="_blank"
                                        >
                                            Código de ética
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        className="flex"
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link
                                            className="py-2 w-full"
                                            href="http://190.187.233.86:83/LINEA_ETICA_FORM"
                                            target="_blank"
                                        >
                                            Linea ética
                                        </Link>
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </li>
                    </ul>
                    <ul
                        className={`flex justify-end gap-4 items-center w-3/12 ${
                            isHovered && "pt-1"
                        }`}
                    >
                        <li>
                            <Link
                                target="_blank"
                                href="https://pagolink.niubiz.com.pe/pagoseguro/CVCenergia/1603339"
                                className="flex items-center bg-custom-cream text-custom-grey text-xs rounded-full px-4 py-[7px] font-medium"
                            >
                                Paga tu recibo aquí
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="http://190.187.233.82/iscon/Login.aspx"
                                target="_blank"
                            >
                                <User2
                                    fill="#fefdf4"
                                    color={"#1d1d1d"}
                                    size={20}
                                />
                            </Link>
                        </li>
                        <li>
                            <Search size={16} />
                        </li>
                        <li>
                            <select className="bg-transparent focus:outline-none text-xs">
                                <option>ES</option>
                                <option>EN</option>
                            </select>
                        </li>
                    </ul>
                </motion.nav>
            </motion.header>
            {/*VERSION MOBILE*/}
            <header
                className="text-custom-cream text-lg bg-custom-grey/[.95] backdrop-blur font-normal px-6 py-4 lg:hidden flex flex-col"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 999,
                }}
            >
                <div
                    className="flex justify-between items-center"
                    onClick={toggleMenu}
                >
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo/logo.png"
                            alt="Logo CVC Energía"
                            width={132}
                            height={128}
                        />
                    </Link>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
                {isOpen && (
                    <nav className="mobile-nav mt-4">
                        <ul className="flex flex-col gap-4">
                            <li className="mb-2">
                                Nosotros
                                <ul className="flex flex-col gap-4 mt-1">
                                    <li className="ml-4 font-extralight text-sm">
                                        <Link href="/historia">Historia</Link>
                                    </li>
                                    <li className="ml-4 font-extralight text-sm">
                                        <Link href="/cultura">Cultura CVC</Link>
                                    </li>
                                    <li className="ml-4 font-extralight text-sm">
                                        <Link href="/activos">Activos</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="my-2">
                                Actividades
                                <ul className="flex flex-col gap-4 mt-1">
                                    <li className="ml-4 font-extralight text-sm">
                                        <Link href="/distribucion">
                                            Distribución
                                        </Link>
                                    </li>
                                    <li className="ml-4 font-extralight text-sm">
                                        <Link href="/transmision">
                                            Transmisión
                                        </Link>
                                    </li>
                                    <li className="ml-4 font-extralight text-sm">
                                        <Link href="/generacion">
                                            Generación
                                        </Link>
                                    </li>
                                    <li className="ml-4 font-extralight text-sm">
                                        <Link href="/elaboracion-de-proyectos">
                                            Diseño y construcción de proyectos
                                        </Link>
                                    </li>
                                    <li className="ml-4 font-extralight text-sm">
                                        <Link href="/ahorra-energia">
                                            Comercialización de energía
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="my-2">
                                Zona Cliente
                                <ul className="flex flex-col gap-4 mt-1">
                                    <li className="ml-4 font-extralight text-sm">
                                        <Link href="/canales-de-atencion">
                                            Canales de atención
                                        </Link>
                                    </li>
                                    <li className="ml-4 font-extralight text-sm">
                                        <Link href="/beneficiarios-fise">
                                            Beneficiarios FISE
                                        </Link>
                                    </li>
                                    <li className="ml-4 font-extralight text-sm">
                                        <Link href="/guia-de-reclamos">
                                            Reclamos
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="my-2">
                                <Link
                                    target="_blank"
                                    href="http://190.187.233.82/iscon/Login.aspx"
                                >
                                    Mi Cuenta
                                </Link>
                            </li>
                            <li className="my-2">
                                Canal ético
                                <ul className="flex flex-col gap-4 mt-1">
                                    <li className="ml-4 font-extralight text-sm">
                                        <Link
                                            target="_blank"
                                            href="http://190.187.233.86:83/LINEA_ETICA_FORM/Otherfiles/CodigoDeEtica.pdf"
                                        >
                                            Código de ética
                                        </Link>
                                    </li>
                                    <li className="ml-4 font-extralight text-sm">
                                        <Link
                                            target="_blank"
                                            href="http://190.187.233.86:83/LINEA_ETICA_FORM"
                                        >
                                            Línea ética
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                )}
            </header>
        </>
    );
};

export default Navbar;

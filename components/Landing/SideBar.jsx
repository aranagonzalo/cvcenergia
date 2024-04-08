"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SideBar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    return (
        <div className="fixed right-0 top-1/2 z-40">
            <motion.div className="overflow-hidden flex flex-col z-20 shadow-lg bg-custom-blue text-custom-cream gap-4 py-3 px-2 items-center rounded-l-lg relative">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="cursor-pointer"
                >
                    <Image
                        src="/images/landing/whatsapp.svg"
                        alt="Icono de contacto"
                        width={28}
                        height={28}
                    />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                    className="cursor-pointer mb-40"
                >
                    <Image
                        src="/images/landing/contact.svg"
                        alt="Icono de contacto"
                        width={28}
                        height={28}
                    />
                </motion.div>

                <Link
                    href="/canales-de-atencion"
                    className=" absolute text-lg font-light -rotate-90 bottom-0 -translate-y-[60px]"
                >
                    Contáctanos
                </Link>
            </motion.div>

            {/* Phone number */}
            <Link
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=51998166703"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`shadow cursor-pointer transition-all flex absolute top-2 z-0 p-2 pr-6 ${
                    isHovered ? "right-8" : "-right-28"
                } bg-custom-cream text-custom-blue rounded-lg`}
            >
                +51998166703
            </Link>

            {/* Contáctanos */}
            <div
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
                className={` flex flex-col w-60 shadow cursor-pointer transition-all absolute top-12 z-0 p-2 pr-6 ${
                    isHovered2 ? "right-6" : "-right-52"
                } bg-custom-cream text-custom-blue rounded-lg`}
            >
                <Link href="tel:+51016400770">
                    <span className="font-semibold pr-1">Lima:</span> (01)
                    640-0770
                </Link>
                <Link href="tel:+51056640001">
                    <span className="font-semibold pr-1">Ica:</span> (056)
                    640-001
                </Link>
                <Link href="tel:+51074640771">
                    <span className="font-semibold pr-1">Lambayeque:</span>{" "}
                    (074) 640-771
                </Link>
            </div>
        </div>
    );
};

export default SideBar;

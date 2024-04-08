"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero2 = ({ alt, src, title }) => {
    return (
        <div className="w-full relative h-[90vh] lg:hidden">
            <Image
                fill
                className="object-cover bg-center"
                src={src}
                alt={alt}
            />
            <motion.h1
                initial={{ opacity: 0.4 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 0.8,
                        delay: 0.2,
                    },
                }}
                style={{ minWidth: "80%" }}
                className="absolute drop-shadow-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-custom-cream font-medium text-[52px] leading-tight  text-center"
            >
                {title}
            </motion.h1>
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute z-[60] top-[70%] left-1/2 -translate-x-1/2 text-custom-grey bg-custom-cream py-3 px-5 mb-32 w-fit rounded-full hover:scale-110 hover:shadow-lg transition-all"
            >
                <Link href="ahorra-energia">Descubre los beneficios</Link>
            </motion.button>
        </div>
    );
};

export default Hero2;

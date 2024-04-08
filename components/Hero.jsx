"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = ({ alt, src, title }) => {
    return (
        <div className="w-full relative h-[90vh]">
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
                className="absolute drop-shadow-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] text-custom-cream font-medium text-[52px] leading-snug lg:text-[66px] text-center lg:whitespace-nowrap"
            >
                {title}
            </motion.h1>
        </div>
    );
};

export default Hero;

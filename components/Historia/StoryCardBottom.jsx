"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const StoryCardBottom = ({ text, date, title, first, last }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleExit = () => {
        setIsHovered(false);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center text-center p-8 relative">
            <h3 className="font-extralight text-xl text-custom-blue">{date}</h3>
            <h1 className="font-light text-3xl text-custom-blue leading-tight">
                {title}
            </h1>
            <motion.div
                initial={{ scaleY: 0.5, opacity: 0, height: 0.5 }}
                whileInView={{
                    scaleY: 1,
                    opacity: 1,
                    height: "fit-content",
                    transition: {
                        duration: 0.5,
                        delay: 0.2,
                    },
                }}
                className="text-lg leading-tight font-extralight px-5 my-8"
            >
                {text}
            </motion.div>
            {!last && (
                <div className="absolute w-[2px] h-10 bottom-0 left-1/2 bg-black"></div>
            )}
        </div>
    );
};

export default StoryCardBottom;

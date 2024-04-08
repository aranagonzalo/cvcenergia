import React, { useState } from "react";
import { cn } from "@/app/utils";

const CustomFileInput = ({ color, reclamo, denuncia }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };
    const getHoverStyles = () => {
        if (reclamo) {
            return "hover:text-custom-red hover:bg-custom-cream";
        } else if (denuncia) {
            return "hover:text-custom-green hover:bg-custom-cream";
        } else {
            return "hover:text-custom-sky hover:bg-custom-cream";
        }
    };
    return (
        <div className="flex flex-col w-max gap-2">
            {color === "blue" ? (
                <label
                    htmlFor="fileInput"
                    className={`text-custom-blue px-5 py-2 cursor-pointer font-medium hover:text-custom-cream hover:bg-custom-blue border-[2px] lg:border-[2.5px] border-custom-blue rounded-full mb-6 lg:mb-0 text-lg lg:text-xl w-max`}
                >
                    Adjuntar archivo
                </label>
            ) : color === "grey" ? (
                <label
                    htmlFor="fileInput"
                    className={`text-custom-grey px-5 py-2 cursor-pointer font-medium hover:text-custom-cream hover:bg-custom-grey border-[2.5px] border-custom-grey rounded-full text-xl w-max`}
                >
                    Adjuntar archivo
                </label>
            ) : color === "cream" ? (
                <label
                    htmlFor="fileInput"
                    className={`text-custom-cream px-5 py-2 cursor-pointer font-medium border-[2.5px] border-custom-cream rounded-full text-xl w-max ${getHoverStyles()}`}
                >
                    Adjuntar archivo
                </label>
            ) : color === "green" ? (
                <label
                    htmlFor="fileInput"
                    className={`text-custom-green px-5 py-2 cursor-pointer font-medium h-12 bg-custom-cream rounded-full text-xl w-max ${getHoverStyles()}`}
                >
                    Adjuntar archivo
                </label>
            ) : color === "red" ? (
                <label
                    htmlFor="fileInput"
                    className={`text-custom-red px-5 py-2 cursor-pointer font-medium h-12 bg-custom-cream rounded-full text-xl w-max ${getHoverStyles()}`}
                >
                    Adjuntar archivo
                </label>
            ) : color === "sky" ? (
                <label
                    htmlFor="fileInput"
                    className={`text-custom-sky px-5 py-2 cursor-pointer font-medium h-12 bg-custom-cream rounded-full text-xl w-max ${getHoverStyles()}`}
                >
                    Adjuntar archivo
                </label>
            ) : null}

            <span className={`text-custom-${color}`}>
                {selectedFile ? selectedFile.name : ""}
            </span>
            <input
                accept=".pdf, .doc, .docx"
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );
};

export default CustomFileInput;

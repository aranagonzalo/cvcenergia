"use client";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

import Input from "@/components/Form/Input";
import Select from "@/components/Form/Select";
import CustomFileInput from "./CustomFileInput";
import { Checkbox } from "@/components/ui/checkbox";

const LandingForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        location: "",
        projectType: "",
        file: null,
        message: "",
    });

    const [focused, setFocused] = useState({
        name: false,
        number: false,
        email: false,
    });

    const onBlur = ({ target }) => {
        setFocused({ ...focused, [target.name]: false });
    };
    const onFocus = ({ target }) => {
        setFocused({ ...focused, [target.name]: true });
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = new FormData();
        data.set("data", JSON.stringify(formData));
        try {
            await axios.post("/api/contact", data);
            setIsLoading(false);
            toast.success("Mensaje enviado exitosamente");
            setFocused({});
            setFormData({
                name: "",
                number: "",
                email: "",
                location: "",
                projectType: "",
                file: null,
                message: "",
            });
        } catch (error) {
            setIsLoading(false);
            toast.error("Hubo un error al enviar el mensaje");
            console.error("Error submitting form:", error.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col lg:flex-row pb-20 lg:pb-36">
                <div className="flex flex-col lg:w-1/2 gap-12">
                    <Input
                        backgroundColor="cream"
                        color="blue"
                        name="name"
                        required
                        type="text"
                        fieldName="Nombre Completo"
                        handleChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    />
                    <Input
                        backgroundColor="cream"
                        color="blue"
                        name="number"
                        required
                        type="number"
                        fieldName="Teléfono"
                        handleChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    />
                    <Input
                        backgroundColor="cream"
                        color="blue"
                        name="email"
                        required
                        type="email"
                        fieldName="Correo Electrónico"
                        handleChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    />
                    <Input
                        backgroundColor="cream"
                        color="blue"
                        name="location"
                        required
                        type="text"
                        fieldName="Ubicación del proyecto"
                        handleChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    />
                    <Select
                        backgroundColor="cream"
                        color="blue"
                        name="projectType"
                        required
                        fieldName="Tipo de proyecto"
                        handleChange={handleChange}
                        options={["Energía", "Obra", "Otros"]}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    />
                    <CustomFileInput color="blue" />
                </div>
                <div className="flex flex-col lg:w-1/2 gap-4">
                    <textarea
                        required
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                        className="h-full placeholder:text-custom-blue/60 border-[2px] min-h-[280px] lg:border-[2.5px] w-full bg-custom-cream border-custom-blue text-custom-blue p-4 text-lg lg:text-2xl font-medium focus:outline-none rounded-lg"
                        placeholder="Escríbenos los detalles aquí"
                    ></textarea>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-8">
                <div className="flex items-start lg:w-1/2 gap-4 text-custom-blue font-normal">
                    <Checkbox className="border-[2px] mt-2 border-custom-blue data-[state=checked]:bg-custom-blue data-[state=checked]:text-custom-cream" />
                    <p className="text-base lg:text-lg lg:w-3/5 leading-tight ml-4">
                        Acepto el uso de mis datos personales conforme a la{" "}
                        <Link href="/" className="underline">
                            Política de Protección de Datos Personales
                        </Link>{" "}
                        de CVC Energía
                    </p>
                </div>
                <div className="flex flex-col w-1/2 gap-4">
                    <button
                        disabled={
                            isLoading ||
                            !formData.name ||
                            !formData.email ||
                            !formData.number ||
                            !formData.projectType ||
                            !formData.location
                        }
                        type="submit"
                        className={`flex items-center justify-center text-lg lg:text-2xl py-3 px-8 font-normal text-custom-cream bg-custom-blue rounded-full max-w-max ${
                            !formData.email && "bg-zinc-500 cursor-not-allowed"
                        } ${
                            !formData.name && "bg-zinc-500 cursor-not-allowed"
                        }`}
                    >
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="20"
                                visible={true}
                            />
                        ) : (
                            "Enviar"
                        )}
                        <Toaster richColors />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default LandingForm;

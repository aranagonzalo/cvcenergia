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

const AhorroEnergiaForm = ({ color }) => {
    const initialFormData = {
        name: "",
        number: "",
        empresa: "",
        email: "",
        //location: "",
        file: null,
        message: "",
    };

    const [formData, setFormData] = useState(initialFormData);

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
            setFormData(initialFormData);
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
            <div className="flex pb-24">
                <div className="flex flex-col gap-12 w-full">
                    <Input
                        color="grey"
                        backgroundColor={`${color}`}
                        name="empresa"
                        type="text"
                        fieldName="Empresa"
                        handleChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    />
                    <Input
                        color="grey"
                        backgroundColor={`${color}`}
                        name="name"
                        type="text"
                        fieldName="Nombres y apellidos"
                        handleChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    />
                    <Input
                        color="grey"
                        backgroundColor={`${color}`}
                        name="number"
                        type="number"
                        fieldName="Celular"
                        handleChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    />
                    <Input
                        color="grey"
                        backgroundColor={`${color}`}
                        name="email"
                        type="email"
                        fieldName="Correo"
                        handleChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    />
                    {/* <Input
                        color="grey"
                        backgroundColor={`${color}`}
                        name="location"
                        type="text"
                        fieldName="Ubicación del proyecto"
                        handleChange={handleChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        formData={formData}
                        focused={focused}
                    /> */}
                    <CustomFileInput color="grey" />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-start w-full gap-4 text-custom-grey font-normal">
                    <Checkbox className="border-[2px] mt-2 border-custom-grey data-[state=checked]:bg-custom-grey data-[state=checked]:text-custom-cream" />
                    <p className="text-lg w-3/5 leading-tight ml-4">
                        Acepto el uso de mis datos personales conforme a la{" "}
                        <Link href="/" className="underline">
                            Política de Protección de Datos Personales
                        </Link>{" "}
                        de CVC Energía
                    </p>
                </div>
                <div className="flex flex-col gap-4 pt-12">
                    <button
                        disabled={
                            isLoading ||
                            !formData.name ||
                            !formData.email ||
                            !formData.number
                        }
                        type="submit"
                        className={`flex items-center justify-center text-2xl py-3 px-8 font-normal text-custom-grey bg-custom-cream border-[2.5px] border-custom-grey rounded-full max-w-max ${
                            !formData.email && "cursor-not-allowed"
                        } ${!formData.name && "cursor-not-allowed"}`}
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

export default AhorroEnergiaForm;

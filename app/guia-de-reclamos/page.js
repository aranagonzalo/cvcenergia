"use client";
import { useState } from "react";
import Hero from "@/components/Hero.jsx";
import Image from "next/image";
import Link from "next/link";
import ExtraForm from "@/components/Form/ExtraForm";

const Page = () => {
    const [openMenu, setOpenMenu] = useState({
        quejas: false,
        reclamos: false,
        denuncias: false,
    });

    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Personal atendiendo consultas"
                src="/images/guia-de-reclamos/foto-general.jpg"
                title="Guía de reclamos"
            />
            <section className="w-full flex flex-col bg-custom-sky">
                <div
                    onClick={() =>
                        setOpenMenu({
                            quejas: !openMenu.quejas,
                            reclamos: false,
                            denuncias: false,
                        })
                    }
                    className={`cursor-pointer flex justify-between items-center p-12 lg:p-24 ${
                        openMenu.quejas ? "pb-12" : "pb-12 lg:pb-24"
                    }`}
                >
                    <h1 className="font-normal lg:font-medium text-custom-cream text-2xl lg:text-5xl">
                        Quejas
                    </h1>
                    <Image
                        alt="Simbolo +"
                        src={`/images/guia-de-reclamos/${
                            openMenu.quejas ? "minus" : "plus"
                        }.png`}
                        height={68}
                        width={68}
                        className="h-[32px] w-[32px] lg:w-[68px] lg:h-[68px]"
                    />
                </div>
                {openMenu.quejas && (
                    <>
                        <div className="px-12 pb-12 lg:px-24 lg:pb-24">
                            <p className="font-light text-custom-cream lg:w-[60%] leading-snug lg:leading-normal text-lg lg:text-2xl">
                                Si experimentas alguna insatisfacción que no
                                esté vinculada con el servicio de electricidad,
                                sino más bien con nuestro servicio de atención
                                al cliente, por favor, comparte tus comentarios.
                                Nos comprometemos a responder a la mayor
                                brevedad posible.
                            </p>
                            <h2 className="pt-24 pb-16 font-medium text-2xl lg:text-3xl text-custom-cream">
                                Formulario
                            </h2>
                            <ExtraForm
                                reclamo={false}
                                denuncia={false}
                                color="sky"
                            />
                        </div>
                        <div className="p-24 lg:flex hidden bg-custom-cream">
                            <div className="lg:w-2/5 flex flex-col gap-24">
                                <h1 className="text-2xl lg:text-4xl">
                                    Formatos
                                </h1>
                                <h1 className="text-4xl">
                                    ¿Tienes alguna duda?
                                </h1>
                            </div>
                            <div className="w-3/5 flex flex-col gap-24">
                                <div>
                                    <Link
                                        href="public/pdf/formato-de-reclamo.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Formato de Quejas
                                    </Link>
                                </div>
                                <div>
                                    <p className="text-2xl font-normal pb-6">
                                        Llámanos
                                    </p>
                                    <ul>
                                        <li className="text-xl font-light">
                                            (01) 640-0770
                                        </li>
                                        <li className="text-xl font-light">
                                            (056) 640-001
                                        </li>
                                        <li className="text-xl font-light">
                                            (074) 640-771
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="p-12 flex flex-col gap-4 lg:hidden bg-custom-cream">
                            <h1 className="text-2xl lg:text-4xl font-semibold">
                                Formatos
                            </h1>
                            <div className="pb-8">
                                <Link
                                    href="public/pdf/formato-de-reclamo.pdf"
                                    className="text-xl font-light"
                                >
                                    Formato de Quejas
                                </Link>
                            </div>
                            <h1 className="text-2xl font-semibold">
                                ¿Tienes alguna duda?
                            </h1>

                            <div>
                                <p className="text-xl font-semibold pb-2">
                                    Llámanos
                                </p>
                                <ul className="gap-1 flex flex-col">
                                    <li className="text-xl font-light">
                                        (01) 640-0770
                                    </li>
                                    <li className="text-xl font-light">
                                        (056) 640-001
                                    </li>
                                    <li className="text-xl font-light">
                                        (074) 640-771
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </section>
            <section className="w-full flex flex-col bg-custom-red ">
                <div
                    onClick={() =>
                        setOpenMenu({
                            quejas: false,
                            reclamos: !openMenu.reclamos,
                            denuncias: false,
                        })
                    }
                    className={`cursor-pointer flex justify-between items-center p-12 lg:p-24 ${
                        openMenu.quejas ? "pb-12" : "pb-12 lg:pb-24"
                    }`}
                >
                    <h1 className="font-normal lg:font-medium text-custom-cream text-2xl lg:text-5xl">
                        Reclamos
                    </h1>
                    <Image
                        alt="Simbolo +"
                        src={`/images/guia-de-reclamos/${
                            openMenu.reclamos ? "minus" : "plus"
                        }.png`}
                        height={68}
                        width={68}
                        className="h-[32px] w-[32px] lg:w-[68px] lg:h-[68px]"
                    />
                </div>
                {openMenu.reclamos && (
                    <>
                        <div className="px-12 pb-12 lg:px-24 lg:pb-24">
                            <p className="font-light text-custom-cream lg:w-[60%] leading-snug lg:leading-normal text-lg lg:text-2xl">
                                Si tienes alguna insatisfacción referente a
                                nuestro servicio, compártenos tus comentarios.
                                Nos comprometemos a responder a la mayor
                                brevedad posible.
                            </p>
                            <h2 className="pt-24 pb-16 font-medium text-2xl lg:text-3xl text-custom-cream">
                                Formulario
                            </h2>
                            <ExtraForm
                                reclamo={true}
                                denuncia={false}
                                color="red"
                            />
                        </div>
                        <div className="p-24 hidden lg:flex bg-custom-cream">
                            <div className="w-2/5 flex flex-col gap-[214px]">
                                <h1 className="text-4xl">Guía y formatos</h1>
                                <h1 className="text-4xl">Recursos legales</h1>
                                <h1 className="text-4xl">
                                    ¿Tienes alguna duda?
                                </h1>
                            </div>
                            <div className="w-3/5 flex flex-col gap-24">
                                <div className="flex flex-col">
                                    <Link
                                        href="/pdf/guia-de-reclamos.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Guía de Reclamos
                                    </Link>
                                    <Link
                                        href="/pdf/formato-de-reclamo.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Formato de Reclamo
                                    </Link>
                                    <Link
                                        href="/pdf/solicitud-de-medida-cautelar.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Solicitud de Medida Cautelar
                                    </Link>
                                    <Link
                                        href="/pdf/recursos-administrativos.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Formato de Recurso Administrativo
                                    </Link>
                                </div>
                                <div className="flex flex-col">
                                    <Link
                                        href="/pdf/precedente-de-observancia.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Precedente de Observancia
                                    </Link>
                                    <Link
                                        href="/pdf/lineamientos-resolutivos-jaru-001-2011.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Lineamientos Resolutivos - JARU 001-2011
                                    </Link>
                                    <Link
                                        href="/pdf/lineamientos-resolutivos-jaru-001-2009.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Lineamientos Resolutivos - JARU 001-2009
                                    </Link>
                                    <Link
                                        href="/pdf/lineamientos-resolutivos-jaru-001-2006.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Lineamientos Resolutivos - JARU 001-2006
                                    </Link>
                                    <Link
                                        href="/pdf/osinergmin-269-2014-os-cd.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Osinergmin No.269-2014-OS-CD
                                    </Link>
                                </div>
                                <div>
                                    <p className="text-2xl font-normal pb-6">
                                        Llámanos
                                    </p>
                                    <ul>
                                        <li className="text-xl font-light">
                                            (01) 640-0770
                                        </li>
                                        <li className="text-xl font-light">
                                            (056) 640-001
                                        </li>
                                        <li className="text-xl font-light">
                                            (074) 640-771
                                        </li>
                                    </ul>
                                    <p className="text-2xl font-normal pb-6 pt-10">
                                        Escríbenos
                                    </p>
                                    <ul>
                                        <li className="text-xl font-light">
                                            reclamos@cvcenergia.com.pe
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="p-12 lg:hidden flex flex-col bg-custom-cream">
                            <h1 className="text-2xl pb-4 font-semibold">
                                Guía y formatos
                            </h1>
                            <Link
                                href="/pdf/guia-de-reclamos.pdf"
                                className="text-lg font-light"
                            >
                                Guía de Reclamos
                            </Link>
                            <Link
                                href="/pdf/formato-de-reclamo.pdf"
                                className="text-lg font-light"
                            >
                                Formato de Reclamo
                            </Link>
                            <Link
                                href="/pdf/solicitud-de-medida-cautelar.pdf"
                                className="text-lg font-light"
                            >
                                Solicitud de Medida Cautelar
                            </Link>
                            <Link
                                href="/pdf/recursos-administrativos.pdf"
                                className="text-lg font-light"
                            >
                                Formato de Recurso Administrativo
                            </Link>
                            <h1 className="text-2xl pt-8 pb-4 font-semibold">
                                Recursos legales
                            </h1>
                            <Link
                                href="/pdf/precedente-de-observancia.pdf"
                                className="text-lg font-light"
                            >
                                Precedente de Observancia
                            </Link>
                            <Link
                                href="/pdf/lineamientos-resolutivos-jaru-001-2011.pdf"
                                className="text-lg font-light"
                            >
                                Lineamientos Resolutivos - JARU 001-2011
                            </Link>
                            <Link
                                href="/pdf/lineamientos-resolutivos-jaru-001-2009.pdf"
                                className="text-lg font-light"
                            >
                                Lineamientos Resolutivos - JARU 001-2009
                            </Link>
                            <Link
                                href="/pdf/lineamientos-resolutivos-jaru-001-2006.pdf"
                                className="text-lg font-light"
                            >
                                Lineamientos Resolutivos - JARU 001-2006
                            </Link>
                            <Link
                                href="/pdf/osinergmin-269-2014-os-cd.pdf"
                                className="text-lg font-light"
                            >
                                Osinergmin No.269-2014-OS-CD
                            </Link>
                            <h1 className="text-2xl pt-8 pb-4 font-semibold">
                                ¿Tienes alguna duda?
                            </h1>

                            <div className="flex flex-col">
                                <p className="text-xl font-semibold pb-2">
                                    Llámanos
                                </p>
                                <ul>
                                    <li className="text-xl font-light">
                                        (01) 640-0770
                                    </li>
                                    <li className="text-xl font-light">
                                        (056) 640-001
                                    </li>
                                    <li className="text-xl font-light">
                                        (074) 640-771
                                    </li>
                                </ul>
                                <p className="text-xl font-semibold pb-2 pt-8">
                                    Escríbenos
                                </p>
                                <ul>
                                    <li className="text-xl font-light">
                                        reclamos@cvcenergia.com.pe
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </section>
            <section className="w-full flex flex-col bg-custom-green ">
                <div
                    onClick={() =>
                        setOpenMenu({
                            quejas: false,
                            reclamos: false,
                            denuncias: !openMenu.denuncias,
                        })
                    }
                    className={`cursor-pointer flex justify-between items-center p-12 lg:p-24 ${
                        openMenu.quejas ? "pb-12" : "pb-12 lg:pb-24"
                    }`}
                >
                    <h1 className="font-normal lg:font-medium text-custom-cream text-2xl lg:text-5xl">
                        Denuncias
                    </h1>
                    <Image
                        alt="Simbolo +"
                        src={`/images/guia-de-reclamos/${
                            openMenu.denuncias ? "minus" : "plus"
                        }.png`}
                        height={68}
                        width={68}
                        className="h-[32px] w-[32px] lg:w-[68px] lg:h-[68px]"
                    />
                </div>
                {openMenu.denuncias && (
                    <>
                        <div className="px-12 pb-12 lg:px-24 lg:pb-24">
                            <p className="font-light text-custom-cream lg:w-[60%] leading-snug lg:leading-normal text-lg lg:text-2xl">
                                Para denunciar deficiencias en la prestación del
                                servicio eléctrico, originadas por fallas en el
                                sistema eléctrico o por procesos de facturación
                                irregular bajo responsabilidad de la
                                distribuidora, completa el formulario y te
                                responderemos tan pronto sea posible.
                            </p>
                            <h2 className="pt-24 pb-16 font-medium text-2xl lg:text-3xl text-custom-cream">
                                Formulario
                            </h2>
                            <ExtraForm
                                reclamo={false}
                                denuncia={true}
                                color="green"
                            />
                        </div>
                        <div className="p-24 hidden lg:flex bg-custom-cream">
                            <div className="w-2/5 flex flex-col gap-[88px]">
                                <h1 className="text-4xl">Guías</h1>
                                <h1 className="text-4xl">Recursos legales</h1>
                                <h1 className="text-4xl">
                                    ¿Tienes alguna duda?
                                </h1>
                            </div>
                            <div className="w-3/5 flex flex-col gap-24">
                                <div className="flex flex-col">
                                    <Link
                                        href="/pdf/guia-de-denuncias.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Guía de Denuncias
                                    </Link>
                                </div>
                                <div className="flex flex-col">
                                    <Link
                                        href="/pdf/procedimiento-de-denuncias.pdf"
                                        className="text-2xl font-light"
                                    >
                                        Resolución de Procedimientos de
                                        Denuncias
                                    </Link>
                                </div>
                                <div>
                                    <p className="text-2xl font-normal pb-6">
                                        Llámanos
                                    </p>
                                    <ul>
                                        <li className="text-xl font-light">
                                            (01) 640-0770
                                        </li>
                                        <li className="text-xl font-light">
                                            (056) 640-001
                                        </li>
                                        <li className="text-xl font-light">
                                            (074) 640-771
                                        </li>
                                    </ul>
                                    <p className="text-2xl font-normal pb-6 pt-10">
                                        Escríbenos
                                    </p>
                                    <ul>
                                        <li className="text-xl font-light">
                                            atencion_denuncias@cvcenergia.com.pe
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="p-12 lg:hidden flex flex-col bg-custom-cream">
                            <h1 className="text-2xl font-semibold">Guías</h1>
                            <Link
                                href="/pdf/guia-de-denuncias.pdf"
                                className="text-lg font-light pt-4 pb-8"
                            >
                                Guía de Denuncias
                            </Link>
                            <h1 className="text-2xl font-semibold">
                                Recursos legales
                            </h1>
                            <Link
                                href="/pdf/procedimiento-de-denuncias.pdf"
                                className="text-lg font-light pt-4 pb-8"
                            >
                                Resolución de Procedimientos de Denuncias
                            </Link>
                            <h1 className="text-2xl font-semibold pb-4">
                                ¿Tienes alguna duda?
                            </h1>

                            <div>
                                <p className="text-xl font-semibold pb-6">
                                    Llámanos
                                </p>
                                <ul>
                                    <li className="text-xl font-light">
                                        (01) 640-0770
                                    </li>
                                    <li className="text-xl font-light">
                                        (056) 640-001
                                    </li>
                                    <li className="text-xl font-light">
                                        (074) 640-771
                                    </li>
                                </ul>
                                <p className="text-xl font-semibold pb-6 pt-10">
                                    Escríbenos
                                </p>
                                <ul>
                                    <li className="text-lg font-light">
                                        atencion_denuncias@cvcenergia.com.pe
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </section>
        </div>
    );
};

export default Page;

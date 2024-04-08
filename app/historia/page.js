"use client";
import Hero from "@/components/Hero.jsx";
import StoryCardRight from "@/components/Historia/StoryCardRight.jsx";
import StoryCardLeft from "@/components/Historia/StoryCardLeft.jsx";
import StoryCardBottom from "@/components/Historia/StoryCardBottom.jsx";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
    return (
        <div className="w-full flex flex-col">
            <Hero
                alt="Generadores eléctricos a lo lejos con efecto de color pastel"
                src="/images/historia/historia.jpg"
                title="Conoce nuestra historia"
            />
            <section className="w-full flex lg:flex-row flex-col lg:h-[100vh]">
                <div className="px-12 lg:px-28 py-16 lg:py-40 bg-custom-sky flex flex-col w-full lg:w-1/2 gap-8 items-center relative">
                    <motion.p
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.6,
                                delay: 0.2,
                            },
                        }}
                        className="text-custom-cream font-light lg:font-thin leading-tight text-lg text-justify"
                    >
                        Somos CVC energía (antes Coelvisac), una empresa peruana
                        fundada en 1994 por el Ing. Percy Ortiz Espinoza, con el
                        propósito de brindar soluciones energéticas, innovadoras
                        y sostenibles de manera eficiente para contribuir con el
                        desarrollo de nuestros clientes y del país.
                    </motion.p>
                    <motion.p
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.6,
                                delay: 0.4,
                            },
                        }}
                        className="text-custom-cream font-light lg:font-thin leading-tight text-lg text-justify pb-20 lg:pb-0"
                    >
                        Estamos encaminados hacia el cambio de la matriz
                        energética, promoviendo activamente el uso de fuentes
                        renovables para impulsar la atención eléctrica en zonas
                        sin acceso. Comprometidos, además, con generar polos de
                        desarrollo que no solo prioricen el suministro de
                        energía, sino que también generen empleo y desarrollo en
                        las diversas regiones en las que operamos, beneficiando
                        así a la sociedad.
                    </motion.p>
                    <div className="absolute bottom-8 right-8 font-extralight text-xl lg:text-3xl text-right text-custom-cream">
                        <p>Ing. Percy</p>
                        <p>Ortiz Espinoza</p>
                    </div>
                </div>
                <div className="relative w-full h-[300px] lg:h-auto lg:w-1/2">
                    <Image
                        className="lg:object-cover lg:flex hidden"
                        fill
                        src="/images/historia/Percy Ortiz.jpg"
                        alt="Ingeniero Percy Ortiz Mendoza"
                    />
                    <Image
                        className="lg:object-cover lg:hidden flex"
                        fill
                        src="/images/historia/Percy Ortiz.png"
                        alt="Ingeniero Percy Ortiz Mendoza"
                    />
                </div>
            </section>
            <section className="w-full lg:flex flex-col bg-custom-cream py-32 relative hidden">
                <StoryCardRight
                    first={true}
                    text=""
                    date="1994"
                    title="Fundación"
                />
                <StoryCardLeft
                    text="Es la zona de concesión de distribución más desarrollada, dado que fue otorgada a CVC energía en el año 1995. En ese entonces, tan sólo existían 500 hectáreas cultivadas. Ahora, existen más de 40,000 hectáreas cultivadas que generan más de 200,000 puestos de trabajo, gracias al soporte energético que promovió CVC energía."
                    date="1995"
                    title="Concesión de Distribución - Villacurí"
                />
                <StoryCardRight
                    text="5 de agosto de 1995, se realizó la puesta en servicio de la primera subestación: Coelvisac 1."
                    date="1995"
                    title="SET Coelvisac 1"
                />
                <StoryCardLeft
                    text="Fue otorgada en el 2001. Cuenta con más de 22,000 hectáreas. Atiende suministros residenciales y operaciones productivas de agricultura."
                    date="2001"
                    title="Concesión de Distribución - Andahuasi"
                />
                <StoryCardRight
                    text="Concesión contractual en Motupe - Lambayeque hasta el año 2007."
                    date="2005"
                    title="Concesión de Distribución Motupe - Lambayeque"
                />
                <StoryCardLeft
                    text="Pusimos en servicio la línea de transmisión Independencia Coelvisac 1 de 60 MW entre la Subestación Independencia y la subestación COELVISAC I, en el departamento de Ica."
                    date="2010"
                    title="LT Independencia Coelvisac 1 "
                />
                <StoryCardRight
                    text="Operación y mantenimiento para Petrobras desde enero 2010 a julio 2017 en distrito de El Alto, provincia de Talara, departamento de Piura. "
                    date="2010"
                    title="Central Termoeléctrica El Alto"
                />
                <StoryCardLeft
                    text="Fue puesta en operación comercial en septiembre del 2013 en el Distrito de Huaura, provincia de Sayan, departamento de Lima."
                    date="2013"
                    title="Central Hidroeléctrica Coelvihidro I – Quipico"
                />
                <StoryCardRight
                    text="Fue otorgada en enero del 2014. Cuenta con un área de concesión de más de 150,000 héctareas y una capacidad actual de más de 30 MWA."
                    date="2014"
                    title="Concesión de Distribución Olmos - Lambayeque: "
                />
                <StoryCardLeft
                    text="El 30 de octubre del 2014, pusimos en servicio las SET Tierras Nuevas y SET Felam. Así como la línea de transmisión Felam Tierras Nuevas de 220 kV entre ambas subestaciones,  en el departamento de Lambayeque en la zona de Olmos."
                    date="2014"
                    title="Sistema de Transmisión FELAM y Tierras Nuevas"
                />
                <StoryCardRight
                    text="El 24 de febrero del 2019 pusimos en servicio la SE Huarango ubicada en Villacurí, Ica. Esta subestación cuenta con una capacidad actual de 50 MVA."
                    date="2019"
                    title="SE Huarango"
                />
                <StoryCardLeft
                    text="Fue puesta en operación comercial en  mayo del 2019, termoeléctrica de ciclo simple a gas natural con una capacidad Instalada: 9.99 MW en el distrito de Salas, provincia de Ica, departamento de Ica."
                    date="2019"
                    title="Central Termoeléctrica Villacurí"
                />
                <StoryCardRight
                    text="Pusimos en servicio la línea de transmisión de 60 kV entre la Subestación Tierras Nuevas y la Subestación Pampa Pañala, en el departamento de Lambayeque. Esto con el objetivo de reforzar el sistema del área demandada entre Pampa Pañala, Motupe y Chiclayo."
                    date="2020"
                    title="LT Tierras Nuevas - Pampa Pañala"
                />
                <StoryCardLeft
                    text="El 7 de febrero de 2021, pusimos en servicio la Subestación Eléctrica (SE) Lomas, situada en Villacurí, Ica. Cuenta con una capacidad de 50 MVA y representa la tercera subestación en esta zona de concesión, lo que contribuye significativamente al fortalecimiento del sistema eléctrico en Villacurí."
                    date="2021"
                    title="SE Lomas"
                />
                <StoryCardRight
                    text="En el proyecto Tacna se estima una inversión de 12 millones de dólares y se extiende sobre 74,000 hectáreas. Tenemos el objetivo de suministrar energía eléctrica para impulsar proyectos de agroexportación que generen un mayor desarrollo en las comunidades y comercios."
                    date="2021"
                    title="Concesión de Distribución - Tacna "
                />
                <StoryCardLeft
                    text="En junio del 2022, tras más de 20 años de operaciones, decidimos evolucionar y cambiar nuestro nombre comercial a CVC energía. Junto con ello, iniciamos la construcción de una imagen más moderna e innovadora, manteniendo nuestra esencia y el compromiso de potenciar el desarrollo de nuestro país."
                    date="2022"
                    title="Renovamos nuestra imagen"
                />
                <StoryCardRight
                    text="Fue puesta en operación comercial en  febrero del 2023, termoeléctrica de ciclo simple a gas natural con una capacidad Instalada: 9.95 MW en el distrito de Salas, provincia de Ica, departamento de Ica."
                    date="2023"
                    title="Central Termoeléctrica Salas"
                />
                <StoryCardLeft
                    text="En el año 2023, obtuvimos ambas concesiones de distribución.  En el proyecto Piura se estima una inversión de 13 millones de dólares y abarca 78,000 hectáreas, mientras que en el proyecto Moquegua se estima una inversión de 9 millones de dólares y se extiende sobre 215,000 hectáreas. Esta iniciativa nos permitirá suministrar electricidad a miles de hectáreas rurales que actualmente carecen de acceso a este servicio esencial."
                    date="2023"
                    title="Concesiones de Distribución - Piura y Moquegua "
                />
                <StoryCardRight
                    last={true}
                    text="Iniciamos el proyecto de la Central Solar Fotovoltáica, la cual estará ubicada en Villacurí - Ica y tendrá una capacidad de hasta 10 MW."
                    date="2024"
                    title="Inicio del Proyecto Solar – Primera Fase"
                />
            </section>
            <section className="w-full flex flex-col bg-custom-cream py-12 relative lg:hidden">
                <StoryCardBottom
                    first={true}
                    text=""
                    date="1994"
                    title="Fundación"
                />
                <StoryCardBottom
                    text="Es la zona de concesión de distribución más desarrollada, dado que fue otorgada a CVC energía en el año 1995. En ese entonces, tan sólo existían 500 hectáreas cultivadas. Ahora, existen más de 40,000 hectáreas cultivadas que generan más de 200,000 puestos de trabajo, gracias al soporte energético que promovió CVC energía."
                    date="1995"
                    title="Concesión de Distribución - Villacurí"
                />
                <StoryCardBottom
                    text="5 de agosto de 1995, se realizó la puesta en servicio de la primera subestación: Coelvisac 1."
                    date="1995"
                    title="SET Coelvisac 1"
                />
                <StoryCardBottom
                    text="Fue otorgada en el 2001. Cuenta con más de 22,000 hectáreas. Atiende suministros residenciales y operaciones productivas de agricultura."
                    date="2001"
                    title="Concesión de Distribución - Andahuasi"
                />
                <StoryCardBottom
                    text="Concesión en Motupe - Lambayeque hasta el año 2007."
                    date="2005"
                    title="Concesión de Distribución Motupe - Lambayeque"
                />
                <StoryCardBottom
                    text="Pusimos en servicio la línea de transmisión Independencia Coelvisac 1 de 60 MW entre la Subestación Independencia y la subestación COELVISAC I, en el departamento de Ica."
                    date="2010"
                    title="LT Independencia Coelvisac 1 "
                />
                <StoryCardBottom
                    text="Operación y mantenimiento para Petrobras desde enero 2010 a julio 2017 en distrito de El Alto, provincia de Talara, departamento de Piura. "
                    date="2010"
                    title="Central Termoeléctrica El Alto"
                />
                <StoryCardBottom
                    text="Fue puesta en operación comercial en septiembre del 2013 en el Distrito de Huaura, provincia de Sayan, departamento de Lima."
                    date="2013"
                    title="Central Hidroeléctrica Coelvihidro I – Quipico"
                />
                <StoryCardBottom
                    text="Fue otorgada en enero del 2014. Cuenta con un área de concesión de más de 150,000 héctareas y una capacidad actual de más de 30 MWA."
                    date="2014"
                    title="Concesión de Distribución Olmos - Lambayeque: "
                />
                <StoryCardBottom
                    text="El 30 de octubre del 2014, pusimos en servicio las SET Tierras Nuevas y SET Felam. Así como la línea de transmisión Felam Tierras Nuevas de 220 kV entre ambas subestaciones,  en el departamento de Lambayeque en la zona de Olmos."
                    date="2014"
                    title="Sistema de Transmisión FELAM y Tierras Nuevas"
                />
                <StoryCardBottom
                    text="El 24 de febrero del 2019 pusimos en servicio la SE Huarango ubicada en Villacurí, Ica. Esta subestación cuenta con una capacidad actual de 50 MVA."
                    date="2019"
                    title="SE Huarango"
                />
                <StoryCardBottom
                    text="Fue puesta en operación comercial en  mayo del 2019, termoeléctrica de ciclo simple a gas natural con una capacidad Instalada: 9.99 MW en el distrito de Salas, provincia de Ica, departamento de Ica."
                    date="2019"
                    title="Central Termoeléctrica Villacurí"
                />
                <StoryCardBottom
                    text="Pusimos en servicio la línea de transmisión de 60 kV entre la Subestación Tierras Nuevas y la Subestación Pampa Pañala, en el departamento de Lambayeque. Esto con el objetivo de reforzar el sistema del área demandada entre Pampa Pañala, Motupe y Chiclayo."
                    date="2020"
                    title="LT Tierras Nuevas - Pampa Pañala"
                />
                <StoryCardBottom
                    text="El 7 de febrero de 2021, pusimos en servicio la Subestación Eléctrica (SE) Lomas, situada en Villacurí, Ica. Cuenta con una capacidad de 50 MVA y representa la tercera subestación en esta zona de concesión, lo que contribuye significativamente al fortalecimiento del sistema eléctrico en Villacurí."
                    date="2021"
                    title="SE Lomas"
                />
                <StoryCardBottom
                    text="En el proyecto Tacna se estima una inversión de 12 millones de dólares y se extiende sobre 74,000 hectáreas. Tenemos el objetivo de suministrar energía eléctrica para impulsar proyectos de agroexportación que generen un mayor desarrollo en las comunidades y comercios."
                    date="2021"
                    title="Concesión de Distribución - Tacna "
                />
                <StoryCardBottom
                    text="En junio del 2022, tras más de 20 años de operaciones, decidimos evolucionar y cambiar nuestro nombre comercial a CVC energía. Junto con ello, iniciamos la construcción de una imagen más moderna e innovadora, manteniendo nuestra esencia y el compromiso de potenciar el desarrollo de nuestro país."
                    date="2022"
                    title="Renovamos nuestra imagen"
                />
                <StoryCardBottom
                    text="Fue puesta en operación comercial en  febrero del 2023, termoeléctrica de ciclo simple a gas natural con una capacidad Instalada: 9.95 MW en el distrito de Salas, provincia de Ica, departamento de Ica."
                    date="2023"
                    title="Central Termoeléctrica Salas"
                />
                <StoryCardBottom
                    text="En el año 2023, obtuvimos ambas concesiones de distribución.  En el proyecto Piura se estima una inversión de 13 millones de dólares y abarca 78,000 hectáreas, mientras que en el proyecto Moquegua se estima una inversión de 9 millones de dólares y se extiende sobre 215,000 hectáreas. Esta iniciativa nos permitirá suministrar electricidad a miles de hectáreas rurales que actualmente carecen de acceso a este servicio esencial."
                    date="2023"
                    title="Concesiones de Distribución - Piura y Moquegua "
                />
                <StoryCardBottom
                    last={true}
                    text="Iniciamos el proyecto de la Central Solar Fotovoltáica, la cual estará ubicada en Villacurí - Ica y tendrá una capacidad de hasta 10 MW."
                    date="2024"
                    title="Inicio del Proyecto Solar – Primera Fase"
                />
            </section>
        </div>
    );
};

export default page;

"use client";

import Image from "next/image";
import Link from "next/link";

const posts = [
    {
        date: "Noviembre 2023",
        title: "¡Recibimos la Visita de estudiantes de la UNI en nuestra sede Ica!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mollis felis, sit amet aliquam...",
        color: "bg-custom-blue",
        image: "/images/landing/blog1.jpg",
    },
    {
        date: "Octubre 2023",
        title: "Oficializamos Nuevas Concesiones en Piura y Lambayeque",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mollis felis, sit amet aliquam...",
        color: "bg-custom-green",
        image: "/images/landing/blog2.jpg",
    },
    {
        date: "Agosto 2023",
        title: "Nuestros compañeros nos representaron en la HackaCoes",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mollis felis, sit amet aliquam...",
        color: "bg-custom-yellow",
        image: "/images/landing/blog3.jpg",
    },
    {
        date: "Mayo 2023",
        title: "Coelvisac suministrará energía a San Gabán por cinco años",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mollis felis, sit amet aliquam...",
        color: "bg-custom-sky",
        image: "/images/noticias/cultura2.jpg",
    },
    {
        date: "Mayo 2023",
        title: "Coelvisac suministrará energía a San Gabán por cinco años",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mollis felis, sit amet aliquam...",
        color: "bg-custom-red",
        image: "/images/noticias/cultura3.jpg",
    },
];

const page = () => {
    return (
        <div className="flex flex-col w-full">
            <section className="h-[550px] bg-custom-cream relative">
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[10%] text-custom-grey font-medium text-[66px]">
                    Nuestras noticias
                </h1>
            </section>
            {posts.map((post, i) => (
                <div
                    className={`flex h-[425px] ${
                        post.color === "bg-custom-yellow"
                            ? `text-custom-grey ${post.color}`
                            : `text-custom-cream ${post.color}`
                    }`}
                    key={i}
                >
                    <div className="flex flex-col justify-end py-16 px-20 w-[66%] relative">
                        <div className="top-16 left-20 absolute font-light text-2xl">
                            {post.date}
                        </div>
                        <div className="flex flex-col gap-8">
                            <h2 className="font-medium text-4xl w-[70%] leading-tight">
                                {post.title}
                            </h2>
                            <p className="font-light text-2xl w-3/4">
                                {post.text}
                            </p>
                        </div>
                        <Image
                            className="absolute bottom-16 right-20 cursor-pointer hover:scale-125 hover:drop-shadow transition-all"
                            src="/images/guia-de-reclamos/plus.png"
                            width={50}
                            height={50}
                            alt="Explorar más entradas"
                        />
                    </div>
                    <div className="relative w-[34%]">
                        <Image src={post.image} fill alt={post.title} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default page;

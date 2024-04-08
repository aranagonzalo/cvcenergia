import Image from "next/image";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            {" "}
            {/*VERSION DESKTOP*/}
            <footer className="lg:flex justify-between h-[204px] w-full bg-custom-grey text-custom-cream py-10 px-20 gap-6 hidden">
                <div className="h-full flex flex-col items-center justify-start relative">
                    <Image
                        src="/images/logo/logo.png"
                        className="object-contain"
                        width={210}
                        height={210}
                        alt="Logo CVC"
                    />
                    <p className="absolute top-[48px] left-[70px] font-light text-[9px]">
                        Energía que potencia tu desarrollo.
                    </p>
                    <Image
                        src="/images/landing/mega_homologado.png"
                        width={110}
                        height={20}
                        className="absolute top-[88px] left-[60px]"
                        alt="Mega homologado"
                    />
                </div>
                <div className="flex flex-wrap items-center justify-start w-1/2 gap-6 self-center">
                    <Link href="/historia" className="h-fit text-sm font-light">
                        Historia
                    </Link>
                    <Link href="/cultura" className="h-fit text-sm font-light">
                        Cultura CVC
                    </Link>
                    <Link
                        href="/ahorra-energia"
                        className="h-fit text-sm font-light"
                    >
                        Ahorra Energía
                    </Link>
                    <Link
                        href="/guia-de-reclamos"
                        className="h-fit text-sm font-light"
                    >
                        Reclamos
                    </Link>
                    <Link href="/noticias" className="h-fit text-sm font-light">
                        Noticias
                    </Link>
                    <Link href="/" className="h-fit text-sm font-light">
                        Cláusula de uso de datos personales
                    </Link>
                    <Link href="/" className="h-fit text-sm font-light">
                        Términos y condiciones
                    </Link>
                    <Link
                        href="http://190.187.233.86:83/LINEA_ETICA_FORM"
                        target="_blank"
                        className="h-fit text-sm font-light"
                    >
                        Línea ética
                    </Link>
                    <Link
                        href="http://190.187.233.82/isosi/Login.aspx?ReturnUrl=%2fISOsi"
                        className="h-fit text-sm font-light"
                    >
                        Fiscalización
                    </Link>
                </div>
                <div className="flex flex-col  justify-between h-full">
                    <Image
                        src="/images/footer/instagram.svg"
                        alt="Instagram logo"
                        width={30}
                        height={30}
                    />
                    <Image
                        src="/images/footer/facebook.svg"
                        alt="Facebook logo"
                        width={30}
                        height={30}
                    />
                    <Image
                        src="/images/footer/linkedin.svg"
                        alt="Linkedin logo"
                        width={30}
                        height={30}
                    />
                </div>
            </footer>
            {/*VERSION MOBILE*/}
            <footer className="lg:hidden flex flex-col items-center w-full bg-custom-grey text-custom-cream py-10 px-6 gap-6 my-20 md:my-10">
                <div className="flex flex-col items-center justify-start">
                    <Image
                        src="/images/logo/logo.png"
                        className="object-contain"
                        width={150} // Adjusted width for smaller screens
                        height={150} // Adjusted height for smaller screens
                        alt="Logo CVC"
                    />
                </div>
                <div className="flex flex-col items-center justify-start mt-6 gap-2 w-[50%] text-center">
                    <Link href="/historia" className="text-sm font-light mb-2">
                        Historia
                    </Link>
                    <Link href="/cultura" className="text-sm font-light mb-2">
                        Cultura CVC
                    </Link>
                    <Link
                        href="/ahorra-energia"
                        className="text-sm font-light mb-2"
                    >
                        Ahorra Energía
                    </Link>
                    <Link
                        href="/guia-de-reclamos"
                        className="text-sm font-light mb-2"
                    >
                        Reclamos
                    </Link>
                    <Link href="/noticias" className="text-sm font-light mb-8">
                        Noticias
                    </Link>
                    <Link href="/" className="text-sm font-light my-2">
                        Cláusula de uso de datos personales
                    </Link>
                    <Link href="/" className="text-sm font-light mb-2">
                        Términos y condiciones
                    </Link>
                    <Link
                        href="http://190.187.233.86:83/LINEA_ETICA_FORM"
                        target="_blank"
                        className="text-sm font-light mb-2"
                    >
                        Línea ética
                    </Link>
                    <Link
                        href="http://190.187.233.82/isosi/Login.aspx?ReturnUrl=%2fISOsi"
                        className="text-sm font-light mb-2"
                    >
                        Fiscalización
                    </Link>
                </div>
                <div className="flex justify-center gap-4 mt-6">
                    <Image
                        src="/images/footer/instagram.svg"
                        alt="Instagram logo"
                        width={30}
                        height={30}
                    />
                    <Image
                        src="/images/footer/facebook.svg"
                        alt="Facebook logo"
                        width={30}
                        height={30}
                    />
                    <Image
                        src="/images/footer/linkedin.svg"
                        alt="Linkedin logo"
                        width={30}
                        height={30}
                    />
                </div>
                <Image
                    src="/images/landing/mega_homologado.png"
                    width={136} // Adjusted width for smaller screens
                    height={24} // Adjusted height for smaller screens
                    className="mt-2"
                    alt="Mega homologado"
                />
            </footer>
        </>
    );
};

export default Footer;

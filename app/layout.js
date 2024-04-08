import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideBar from "@/components/Landing/SideBar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
    title: "CVC Energía",
    description: "CVC Energía",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body
                suppressHydrationWarning={true}
                className={`${outfit.className} bg-custom-grey overflow-x-hidden`}
            >
                <Navbar />
                <SideBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

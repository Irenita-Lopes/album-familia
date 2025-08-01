import Image from "next/image";
import perfil from "@/assets/Irenita_Ferreira_lopes.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from "next/link";

const Blog = () => {
    return (
        <section
            className="min-h-screen px-4 py-10 md:py-20 md:px-16 flex flex-col md:flex-row items-center justify-center gap-10 bg-[#297DA6]"
            id="blog"
        >
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">Blog</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed drop-shadow-sm">
                Bem-vindo ao meu blog! Aqui você encontrará artigos sobre desenvolvimento web, dicas de programação e muito mais.
            </p>
        </section>
    );
};

export default Blog;

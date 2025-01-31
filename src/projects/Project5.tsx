import { ComponentProps } from "../types/types"
import Button from '@mui/material/Button'
import { Logo } from "../components/Logo"
import {AnimatePresence, motion} from "motion/react"
import React from "react"
import { Suspense } from "react";

const LazyProject = React.lazy(() => import('./LazyProject'));



export const Project5:React.FC<ComponentProps> = ({lenguaje}) => {
    return (
        <AnimatePresence mode="wait">
        <motion.section
        className="flex flex-col  xl:flex-row xl:max-h-[300px] mx-3 gap-16 lg:gap-32 justify-center items-center xl:items-start">
        <motion.div 
        whileHover={{ scale: 1.05}}
        className="hover:cursor-pointer md:min-w-[550px] xl:min-w-[700px] md:max-w-[700px] relative group transition-all duration-500 overflow-hidden p-14">
            <a href="https://next-js-eccomerce-nine.vercel.app/" target="_blank">
            <Suspense fallback={<div>Loading...</div>}>
            <LazyProject id="project5" src="/proyectos/eccomerce-next/home.png" src2="/proyectos/eccomerce-next/register.png" src3="/proyectos/eccomerce-next/dashboard.png" alt="proyecto Eccomerce" delay={.5}></LazyProject>
            </Suspense>
            </a>
        </motion.div>
        <motion.div
        key={lenguaje}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }} 
        className="flex flex-col gap-6 lg:gap-8 max-w-[600px] justify-center items-center xl:items-start pt-10">
            <p className="text-md lg:text-md">{lenguaje === "EN" ? "Ecommerce created with NextJS. Contains login and registration system with protected routes. Once logged in, the user has access to the /dashboard route where they can add products to favorites and/or to the shopping cart, also see their username and log out. In this project, a PostgreSQL database integration is carried out using Prisma to store users and their passwords to be able to authenticate them with NextAuth. Also encrypt passwords with BCrypt. Route navigation with NextJS File System Routing. The entire application is responsive, contains the best practices in terms of SEO and accessibility." : "E-Commerce creado con NextJS. Contiene sistema de log in y register con rutas protegidas. Una vez logeado el usuario tiene acceso a la ruta /dashboard donde puede agregar productos a favoritos y/o al carrito de compras, también ver su nombre de usuario y deslogearse. En este proyecto realice una integración de base de datos PostgreSQL mediante Prisma para almacenar los usuarios y sus contraseñas para poder autenticarlos con NextAuth. También encripte las contraseñas con BCrypt. Navegación de rutas con File System Routing de NextJS. Toda la aplicación es responsive, contiene las mejores practicas en cuanto a SEO y accesibilidad."}</p>
            <p className="text-md lg:text-md">{lenguaje === "EN" ? "Technologies used" : "Tecnologías usadas"}</p>
            <div className="flex gap-10">
            <Logo src="/logos/nextjs_icon_dark.svg" alt="logo Next" delay={0} y={8} x={5} link="https://nextjs.org/"></Logo>
            <Logo src="/logos/tailwindcss.svg" alt="logo Tailwind" delay={1} y={3} x={6} link="https://tailwindcss.com/"></Logo>
            <Logo src="/logos/postgresql.svg" alt="logo postgreSQL" delay={1.4} y={8} x={5} link="https://www.postgresql.org/"></Logo>
            <Logo src="/logos/prisma_dark.svg" alt="logo prisma" delay={1.4} y={8} x={5} link="https://www.prisma.io/"></Logo>
            </div>
            <a href="https://github.com/Ulises-Molina/NextJS-Eccomerce" target="_blank">
            <Button variant="outlined" color="inherit" className="scale-75 w-38 lg:w-48 hover:bg-slate-700">GitHub repo</Button>
            </a>
        </motion.div>
    </motion.section>
    </AnimatePresence>
    )
}
import { ComponentProps } from "../types/types"
import Button from '@mui/material/Button'
import { Logo } from "../components/Logo"
import {AnimatePresence, motion} from "motion/react"
import React from "react"
import { Suspense } from "react";

const LazyProject = React.lazy(() => import('./LazyProject'));



export const Project5:React.FC<ComponentProps> = ({lenguage}) => {
    return (
        <AnimatePresence mode="wait">
        <motion.section
        className="flex flex-col  xl:flex-row xl:max-h-[300px] gap-16 lg:gap-32 justify-center items-center xl:items-start">
        <motion.div 
        whileHover={{ scale: 1.05}}
        className="hover:cursor-pointer md:min-w-[550px] xl:min-w-[700px] md:max-w-[700px] relative group transition-all duration-500 overflow-hidden">
            <a href="https://next-js-eccomerce-nine.vercel.app/" target="_blank">
            <Suspense fallback={<div>Loading...</div>}>
            <LazyProject id="project5" src="/proyectos/eccomerce-next/home.png" src2="/proyectos/eccomerce-next/register.png" src3="/proyectos/eccomerce-next/dashboard.png" alt="proyecto Eccomerce"></LazyProject>
            </Suspense>
            </a>
        </motion.div>
        <motion.div
        key={lenguage}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }} 
        className="flex flex-col gap-6 lg:gap-8 max-w-[600px] justify-center items-center xl:items-start m-2">
            <p className="text-md lg:text-md">{lenguage === "EN" ? "''Eccomerce''- Eccommerce with registration and log in system with database. It has product searching and individual product pages, shopping cart and favorites." : "''Eccomerce'' - Eccomerce con sistema de register y log in con base de datos en PostgreSQL manejada con Prisma. Cuenta con searching de productos y paginas individuales de producto, carrito de compra y favoritos."}</p>
            <p className="text-md lg:text-md">Website : <a href="https://mercado-sur.vercel.app/" target="_blank" className="text-blue-600">https://next-js-eccomerce-nine.vercel.app/</a></p>
            <p className="text-md lg:text-md">{lenguage === "EN" ? "Technologies used" : "Tecnologias usadas"}</p>
            <div className="flex gap-10">
            <Logo src="/logos/nextjs_icon_dark.svg" alt="logo Next" delay={0} y={8} x={5} link="https://nextjs.org/"></Logo>
            <Logo src="/logos/tailwindcss.svg" alt="logo Tailwind" delay={1} y={3} x={6} link="https://tailwindcss.com/"></Logo>
            <Logo src="/logos/postgresql.svg" alt="logo postgreSQL" delay={1.4} y={8} x={5} link="https://www.postgresql.org/"></Logo>
            <Logo src="/logos/prisma_dark.svg" alt="logo prisma" delay={1.4} y={8} x={5} link="https://www.prisma.io/"></Logo>
            </div>
            <a href="https://github.com/Ulises-Molina/NextJS-Eccomerce" target="_blank">
            <Button variant="outlined" color="inherit" className="w-38 lg:w-48 scale-75 hover:bg-slate-700">GitHub repo</Button>
            </a>
        </motion.div>
    </motion.section>
    </AnimatePresence>
    )
}
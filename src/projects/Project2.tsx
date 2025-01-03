import { ComponentProps } from "../types/types"
import Button from '@mui/material/Button'
import { Logo } from "../components/Logo"
import {AnimatePresence, motion} from "motion/react"
import React, { Suspense } from "react";

const LazyProject = React.lazy(() => import('./LazyProject'));



export const Project2:React.FC<ComponentProps> = ({lenguage}) => {
    return (
        <AnimatePresence mode="wait">
        <motion.section
        className="flex flex-col xl:flex-row xl:max-h-[300px] gap-16 lg:gap-32 justify-center items-center xl:items-start">
        <motion.div 
        whileHover={{ scale: 1.05}}
        className="hover:cursor-pointer md:min-w-[600px] xl:min-w-[700px] md:max-w-[700px] relative group transition-all duration-500 overflow-hidden">
            <a href="https://aransol.vercel.app/" target="_blank">
            <Suspense fallback={<div>Loading...</div>}>
            <LazyProject id="project2" src="/proyectos/aransol/home.png" src2="/proyectos/aransol/2.png" src3="/proyectos/aransol/3.png" alt="gif proyecto Porfolio"></LazyProject>
            </Suspense>
            </a>
        </motion.div>
        <motion.div
        key={lenguage}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }} 
        className="flex flex-col gap-6 lg:gap-8 max-w-[600px] justify-center items-center xl:items-start m-2">
            <p className="text-md lg:text-md">{lenguage === "EN" ? "''Porfolio'' Discover the art of Marisol Arancibia in works and exhibitions. Personal portfolio designed and developed on request" : "''Porfolio'' - Descubre el arte de Marisol Arancibia en obras y exposiciones. Porfolio personal diseñado y desarrollado a pedido"}</p>
            <p className="text-md lg:text-md">Website : <a href="https://aransol.vercel.app/" target="_blank" className="text-blue-600">https://aransol.vercel.app</a></p>
            <p className="text-md lg:text-md">{lenguage === "EN" ? "Technologies used" : "Tecnologias usadas"}</p>
            <div className="flex gap-10">
                <Logo src="/logos/react.svg" alt="logo React" delay={0} y={8} x={5} link="https://es.react.dev/"></Logo>
                <Logo src="/logos/typescript.svg" alt="logo Typescript" delay={0.5} y={8} x={5} link="https://www.typescriptlang.org/"></Logo>
                <Logo src="/logos/tailwindcss.svg" alt="logo Tailwind" delay={1} y={3} x={10} link="https://tailwindcss.com/"></Logo>
            </div>
            <a href="https://github.com/Ulises-Molina/Porfolio-Aransol" target="_blank">
            <Button variant="outlined" color="inherit" className="w-38 lg:w-48 scale-75 hover:bg-slate-700">GitHub repo</Button>
            </a>
        </motion.div>
    </motion.section>
    </AnimatePresence>
    )
}

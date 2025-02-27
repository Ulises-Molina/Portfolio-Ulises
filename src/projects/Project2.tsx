import { ComponentProps } from "../types/types"
import Button from '@mui/material/Button'
import { Logo } from "../components/Logo"
import {AnimatePresence, motion} from "motion/react"
import React, { Suspense } from "react";

const LazyProject = React.lazy(() => import('./LazyProject'));



export const Project2:React.FC<ComponentProps> = ({lenguaje}) => {
    return (
        <AnimatePresence mode="wait">
        <motion.section
        className="flex flex-col xl:flex-row xl:max-h-[300px] gap-16 mx-3 lg:gap-32 justify-center items-center xl:items-start">
        <motion.div 
        whileHover={{ scale: 1.05}}
        className="hover:cursor-pointer md:min-w-[550px] xl:min-w-[700px]  md:max-w-[700px] relative group transition-all duration-500 overflow-hidden p-14">
            <a href="https://room-tan.vercel.app/" target="_blank">
            <Suspense fallback={<div>Loading...</div>}>
            <LazyProject id="project2" src="/proyectos/room/home.png" src2="/proyectos/room/home2.png" src3="/proyectos/room/home3.png" alt="gif proyecto Porfolio"></LazyProject>
            </Suspense>
            </a>
        </motion.div>
        <motion.div
        key={lenguaje}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0,scale:1 }}
        transition={{ duration: 1.7,
                ease: "easeInOut"}}
                viewport={{ once: true }}
        className="flex flex-col gap-6 lg:gap-8 max-w-[400px] xl:max-w-[600px] justify-center items-center xl:items-start mx-5 pt-10 lg:min-w-[600px]">
            <p className="text-md lg:text-md">{lenguaje === "EN" ? "SPA following a Frontend Mentor figma design with NextJS " : "SPA siguiendo un diseño en figma de Frontend Mentor. Hecho con NextJS"}</p>
            <p className="text-md lg:text-md">{lenguaje === "EN" ? "Technologies used" : "Tecnologías usadas"}</p>
            <div className="flex gap-10">
                <Logo src="/logos/nextjs_icon_dark.svg" alt="logo React" delay={0} y={8} x={5} link="https://nextjs.org/"></Logo>
                <Logo src="/logos/typescript.svg" alt="logo Typescript" delay={0.5} y={8} x={5} link="https://www.typescriptlang.org/"></Logo>
                <Logo src="/logos/tailwindcss.svg" alt="logo Tailwind" delay={1} y={3} x={10} link="https://tailwindcss.com/"></Logo>
                <Logo src="/logos/Motion_dark.svg" alt="logo Motion" delay={1.4} y={8} x={5} link="https://motion.dev/"></Logo>
            </div>
            <a href="https://github.com/Ulises-Molina/Room" target="_blank">
            <Button variant="outlined" color="inherit" className="scale-75 w-38 lg:w-48 hover:bg-slate-700">GitHub repo</Button>
            </a>
        </motion.div>
    </motion.section>
    </AnimatePresence>
    )
}

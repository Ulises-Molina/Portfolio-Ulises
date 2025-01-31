import { ComponentProps } from "../types/types"
import Button from '@mui/material/Button'
import { Logo } from "../components/Logo"
import {AnimatePresence, motion} from "motion/react"
import React from "react"
import { Suspense } from "react";

const LazyProject = React.lazy(() => import('./LazyProject'));



export const Project4:React.FC<ComponentProps> = ({lenguaje}) => {
    return (
        <AnimatePresence mode="wait">
        <motion.section
        className="flex flex-col xl:flex-row xl:max-h-[300px] mx-3 gap-16 xl:gap-32 justify-center items-center xl:items-start xl:mb-16">
        <motion.div 
        whileHover={{ scale: 1.05}}
        className="hover:cursor-pointer md:min-w-[550px] xl:min-w-[700px] md:max-w-[700px] relative group transition-all duration-500 overflow-hidden p-14">
            <a href="https://gallery-art-seven.vercel.app/" target="_blank">
            <Suspense fallback={<div>Loading...</div>} >
            <LazyProject id="project4" src="/proyectos/galleryart/home.png" src2="/proyectos/galleryart/work2.png" src3="/proyectos/galleryart/work.png" alt="gif proyecto Gallery Art" delay={2}></LazyProject>
            </Suspense>
            </a>
        </motion.div>
        <motion.div
        key={lenguaje}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}  
        className="flex flex-col gap-6 lg:gap-6 max-w-[600px] justify-center items-center xl:items-start m-2 pt-10">
            <p className="text-md lg:text-md">{lenguaje === "EN" ? "''Gallery Art''- Art gallery, with a list of works and artists created in JSON format and rendered on screen, individual routes for each work" : "''Gallery Art'' - Galeria de arte, con listado de obras y artistas creadas en formato JSON y renderizadas en pantalla, rutas individuales para cada obra"}</p>
            <p className="text-md lg:text-md">{lenguaje === "EN" ? "Technologies used" : "Tecnologías usadas"}</p>
            <div className="flex gap-10">
                <Logo src="/logos/react.svg" alt="logo React" delay={0} y={8} x={5} link="https://es.react.dev/"></Logo>
                <Logo src="/logos/tailwindcss.svg" alt="logo Tailwind" delay={1} y={3} x={10} link="https://tailwindcss.com/"></Logo>
                <Logo src="/logos/json.svg" alt="logo JSON" delay={1.4} y={8} x={5} link="https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON"></Logo>
                <Logo src="/logos/materialui.svg" alt="logo Material" delay={1.4} y={8} x={5} link="https://mui.com/"></Logo>
            </div>
            <a href="https://github.com/Ulises-Molina/GalleryArt" target="_blank">
            <Button variant="outlined" color="inherit" className="scale-75 w-38 lg:w-48 hover:bg-slate-700">GitHub repo</Button>
            </a>
        </motion.div>
    </motion.section>
    </AnimatePresence>
    )
}

import { ComponentProps } from "../types/types"
import Button from '@mui/material/Button'
import { Logo } from "../components/Logo"
import {AnimatePresence, motion} from "motion/react"
import { Suspense } from "react"
import React from "react"

const LazyProject = React.lazy(() => import('./LazyProject'));



export const Project1:React.FC<ComponentProps> = ({lenguaje}) => {
    return (
        <AnimatePresence mode="wait">
        <motion.section
        className="flex flex-col xl:flex-row xl:max-h-[300px] gap-16 mx-3 lg:gap-32 justify-center items-center xl:items-start">
        <motion.div 
        whileHover={{ scale: 1.05}}
        className="hover:cursor-pointer md:min-w-[550px] xl:min-w-[700px]  md:max-w-[700px] relative group transition-all duration-500 overflow-hidden p-14">
            <a href="https://organizarte.vercel.app/" target="_blank">
            <Suspense fallback={<div>Loading...</div>}>
            <LazyProject id="project1" src="/proyectos/organizarte/home.png" src2="/proyectos/organizarte/category.png" src3="/proyectos/organizarte/delcategory.png" alt="gif proyecto Organizarte" delay={2}></LazyProject>
            </Suspense>
            </a>
        </motion.div>
        <motion.div
        key={lenguaje}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col gap-6 lg:gap-8 max-w-[600px] justify-center items-center xl:items-start m-2">
            <p className="text-md lg:text-md">{lenguaje === "EN" ? "Task management system with filter by category, priority and search. Form to add or delete categories that are displayed in a sidebar to filter tasks. Use of LocalStorage to store tasks and be able to display them even when closing and opening the browser." : "Sistema de gestión de tareas con filtro por categorías, prioridad y búsqueda. Formulario para agregar o eliminar categorías que se muestran en una sidebar para filtrar las tareas. Uso de LocalStorage para almacenar las tareas y poder mostrarlas incluso cerrando y abriendo el navegador."}</p>
            <p className="text-md lg:text-md">{lenguaje === "EN" ? "Technologies used" : "Tecnologías usadas"}</p>
            <div className="flex gap-10">
                <Logo src="/logos/react.svg" alt="logo React" delay={0} y={8} x={5} link="https://es.react.dev/"></Logo>
                <Logo src="/logos/tailwindcss.svg" alt="logo Tailwind" delay={1} y={3} x={10} link="https://tailwindcss.com/"></Logo>
                <Logo src="/logos/firebase.svg" alt="logo Firebase" delay={0.5} y={6} x={6} link="https://firebase.google.com/?hl=es-419"></Logo>
                <Logo src="/logos/materialui.svg" alt="logo Material" delay={1.4} y={8} x={5} link="https://mui.com/"></Logo>
            </div>
            <a href="https://github.com/Ulises-Molina/Organizarte" target="_blank">
            <Button variant="outlined" color="inherit" className="scale-75 w-38 lg:w-48 lg:scale-75 hover:bg-slate-700">GitHub repo</Button>
            </a>
        </motion.div>
    </motion.section>
    </AnimatePresence>
    )
}

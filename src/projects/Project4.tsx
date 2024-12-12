import { ComponentProps } from "../types/types"
import Button from '@mui/material/Button'
import { Logo } from "../components/Logo"
import {AnimatePresence, motion} from "motion/react"



export const Project4:React.FC<ComponentProps> = ({lenguage}) => {
    return (
        <AnimatePresence mode="wait">
        <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}  
        className="flex flex-col lg:flex-row lg:max-h-[450px] gap-16 lg:gap-32">
        <motion.div 
        whileHover={{ scale: 1.05}}
        className="h-full hover:cursor-pointer  md:min-w-[700px] relative group transition-all duration-500 overflow-hidden">
            <a href="https://gallery-art-seven.vercel.app/" target="_blank">
            <motion.img 
            src="/public/proyectos/gallery-rec.gif" alt="gif proyecto Gallery" className="w-full lg:h-full object-contain rounded-md shadow-slate-500"></motion.img>
            <span
            className="absolute flex justify-center items-center bg-gray-700 bg-opacity-15 w-full bottom-0 h-0 group-hover:h-1/3 transition-all duration-500 ease-in-out">
                <p className="text-gray-900 z-30 text-2xl opacity-0 group-hover:opacity-80">{lenguage === "EN" ? "Go to the website" : "Ir al website"}</p>
            </span>
            </a>
        </motion.div>
        <motion.div
        key={lenguage}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}  
        className="flex flex-col gap-6 lg:gap-12 max-w-[800px] justify-center items-center lg:justify-normal lg:items-start m-2">
            <p className="text-md lg:text-2xl text-center lg:text-left">{lenguage === "EN" ? "''Gallery Art''- Art gallery, with a list of works and artists created in JSON format and rendered on screen, individual routes for each work. Minimalist website" : "''Gallery Art'' - Galeria de arte, con listado de obras y artistas creadas en formato JSON y renderizadas en pantalla, rutas individuales para cada obra. Pagina web minimalista"}</p>
            <p className="text-md lg:text-2xl">Website : <a href="https://gallery-art-seven.vercel.app/" target="_blank" className="text-blue-600">https://gallery-art-seven.vercel.app</a></p>
            <p className="text-md lg:text-2xl">{lenguage === "EN" ? "Technologies used" : "Tecnologias usadas"}</p>
            <div className="flex gap-10">
                <Logo src="/public/logos/react.svg" alt="logo React" delay={0} y={8} x={5} link="https://es.react.dev/"></Logo>
                <Logo src="/public/logos/tailwindcss.svg" alt="logo Tailwind" delay={1} y={3} x={10} link="https://tailwindcss.com/"></Logo>
                <Logo src="/public/logos/json.svg" alt="logo JSON" delay={1.4} y={8} x={5} link="https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON"></Logo>
                <Logo src="/public/logos/materialui.svg" alt="logo Material" delay={1.4} y={8} x={5} link="https://mui.com/"></Logo>
            </div>
            <a href="https://github.com/Ulises-Molina/GalleryArt" target="_blank">
            <Button variant="outlined" color="inherit" className="w-38 lg:w-48 scale-75 lg:scale-100 hover:bg-slate-700">GitHub repo</Button>
            </a>
        </motion.div>
    </motion.section>
    </AnimatePresence>
    )
}
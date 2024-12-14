import { AnimatePresence } from "motion/react"
import { ComponentProps } from "../types/types"
import {motion} from "motion/react"
import { Button } from "@mui/material"

export const About:React.FC<ComponentProps> = ({lenguage}) => {
    return (
        <AnimatePresence mode="wait">
    <motion.section
    id="about"
    key={lenguage}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }} 
    className="flex flex-col xl:h-[120vh] 2xl:min-h-[80vh] md:mt-72 lg:mt-20 gap-24 lg:gap-32 justify-center items-center">
        <h3 className="text-3xl lg:text-4xl font-medium">{lenguage === "EN" ? "About me" : "Sobre mi"}</h3>
        <div className="flex flex-col lg:w-1/3 border-gray-500 border-2 p-8 rounded-lg gap-20 shadow-lg">
            <p className="text:lg lg:text-md">Busco adentrarme en el mundo IT como desarrollador frontend, soy una persona motivada a crecer, aprender y
desarrollarme en distintas áreas. <br></br><br></br>Me considero
responsable, dinámico, creativo y confiable con
facilidad de adaptación y capacidad de trabajar en
equipo.<br></br><br></br>
Tengo experiencia en atención al cliente y en manejo de grupos de trabajo. 
Tengo 24 años y vivo en Tigre, Buenos Aires.</p>
        <a href="https://filetools13.pdf24.org/client.php?mode=inline&file=joinPdf_675b3b8b16774_1589679650179108536.pdf&action=getFile" target="_blank" className="self-center mb-8">
            <Button variant="outlined" color="inherit" size="medium" className="w-38 lg:w-48 scale-75 hover:bg-slate-700 self-center">Curriculum</Button>
            </a>
        </div>
    </motion.section>
    </AnimatePresence>
    )
}

import { AnimatePresence } from "motion/react"
import { ComponentProps } from "../types/types"
import {motion} from "motion/react"
import { Button } from "@mui/material"

export const About:React.FC<ComponentProps> = ({lenguaje,menu}) => {
    return (
        <>
        {menu ? null : <AnimatePresence mode="wait">
    <motion.section
    id="about"
    key={lenguaje}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }} 
    className="flex flex-col xl:h-[120vh] 2xl:min-h-[80vh] mt-16 md:mt-72 lg:mt-16 gap-24 lg:gap-32 justify-center items-center">
        <h3 className="text-3xl font-medium lg:text-4xl">{lenguaje === "EN" ? "About me" : "Sobre mi"}</h3>
        <motion.div initial={{ opacity: 0, x: 250 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration:3, ease: 'easeOut', delay: 0 }} className="flex flex-col gap-20 p-8 border-2 border-gray-500 rounded-lg shadow-lg lg:w-1/3">
            {lenguaje === "ES" ? <p className="text:lg lg:text-md">Busco adentrarme en el mundo IT como desarrollador frontend, soy una persona motivada a crecer, aprender y
desarrollarme en distintas áreas. <br></br><br></br>Me considero
responsable, dinámico, creativo y confiable con
facilidad de adaptación y capacidad de trabajar en
equipo.<br></br><br></br>
Tengo experiencia en atención al cliente y en manejo de grupos de trabajo. 
Tengo 24 años y vivo en Tigre, Buenos Aires.</p> :
                <p className="text:lg lg:text-md">I am looking to enter the IT world as a frontend developer, I am a person motivated to grow, learn and
Develop myself in different areas. <br></br><br></br>I consider myself
responsible, dynamic, creative and reliable with
ease of adaptation and ability to work in
team.<br></br><br></br>
I have experience in customer service and managing work groups. 
I am 24 years old and I live in Tigre, Buenos Aires.</p>}
        <a href="/Cv.Ulises.pdf" target="_blank" rel="noopener noreferrer" className="self-center mb-8">
            <Button variant="outlined" color="inherit" size="medium" className="self-center scale-75 w-38 lg:w-48 hover:bg-slate-700">Curriculum</Button>
            </a>
        </motion.div>
    </motion.section>
    </AnimatePresence>}
        </>
    )
}

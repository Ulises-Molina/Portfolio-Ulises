import { AnimatePresence } from "motion/react"
import { ComponentProps } from "../types/types"
import {motion} from "motion/react"
import { Button } from "@mui/material"

export const About:React.FC<ComponentProps> = ({lenguage,menu}) => {
    return (
        <>
        {menu ? null : <AnimatePresence mode="wait">
    <motion.section
    id="about"
    key={lenguage}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }} 
    className="flex flex-col xl:h-[120vh] 2xl:min-h-[80vh] mt-16 md:mt-72 lg:mt-16 gap-24 lg:gap-32 justify-center items-center">
        <h3 className="text-3xl lg:text-4xl font-medium">{lenguage === "EN" ? "About me" : "Sobre mi"}</h3>
        <div className="flex flex-col lg:w-1/3 border-gray-500 border-2 p-8 rounded-lg gap-20 shadow-lg">
            {lenguage === "ES" ? <p className="text:lg lg:text-md">Busco adentrarme en el mundo IT como desarrollador frontend, soy una persona motivada a crecer, aprender y
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
            <Button variant="outlined" color="inherit" size="medium" className="w-38 lg:w-48 scale-75 hover:bg-slate-700 self-center">Curriculum</Button>
            </a>
        </div>
    </motion.section>
    </AnimatePresence>}
        </>
    )
}

import { AnimatePresence } from "motion/react";
import { ComponentProps } from "../types/types";
import {motion} from "motion/react"


export const Contact:React.FC<ComponentProps> = ({lenguage,menu}) => {
    return (
    <>
    {menu ? null : <AnimatePresence mode="wait">
    <motion.section
    id="contact"
    key={lenguage}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }} 
    className="flex flex-col lg:min-h-[80vh] items-center mt-32 md:mt-72 lg:mt-72 xl:mt-32 gap-6 lg:gap-32 mb-20">
        <h2
        className="text-3xl lg:text-4xl font-medium">{lenguage === "EN" ? "Contact me" : "Contacto"}</h2>
        <div className="flex flex-col gap-28 mt-28">
            <h3 className="text-lg text-center">{lenguage === "EN" ? "You can contact me on" : "Contactame en "}</h3>
            <div className="flex flex-col lg:flex-row lg:gap-64 gap-28 justify-center items-center">
            <a href={"mailto:ulisesmolinadev@gmail.com"} target="_blank">
            <motion.img
                        animate={{
                            translateY: [0,-4 , 4 , 0],
                            translateX: [0, 5 , 0]
                        }}
                        transition={{
                            duration: 5,
                            ease: "linear",
                            repeatType: 'mirror',
                            repeat: Infinity,
                            delay: 0,
                        }}
                        src="/logos/gmail.svg" alt="gmail logo" className="lg:w-[65px] lg:min-w-10 rounded-xl hover:brightness-100 hover:cursor-pointer transition-all duration-150 brightness-[0.85] w-20 mt-3">
        </motion.img>
        </a>
        <a href={"https://www.linkedin.com/in/ulises-molina-b7ab4b274/"} target="_blank">
            <motion.img
                        animate={{
                            translateY: [0,-8 , 8 , 0],
                            translateX: [0, 5 , 0]
                        }}
                        transition={{
                            duration: 5,
                            ease: "linear",
                            repeatType: 'mirror',
                            repeat: Infinity,
                            delay: 0,
                        }}
                        src="/logos/linkedin.svg" alt="linkedin logo" className="lg:w-[65px] lg:min-w-10 rounded-xl hover:brightness-100 hover:cursor-pointer transition-all duration-150 brightness-[0.85] w-20">
        </motion.img>
        </a>
        <a href={"https://github.com/Ulises-Molina"} target="_blank">
            <motion.img
                        animate={{
                            translateY: [0,-8 , 8 , 0],
                            translateX: [0, 5 , 0]
                        }}
                        transition={{
                            duration: 5,
                            ease: "linear",
                            repeatType: 'mirror',
                            repeat: Infinity,
                            delay: 0,
                        }}
                        src="/logos/Github_dark.svg" alt="GitHub Logo" className="lg:w-[65px] lg:min-w-10 rounded-xl hover:brightness-100 hover:cursor-pointer transition-all duration-150 brightness-[0.85] w-20">
        </motion.img>
        </a>
        </div>
    </div>
    </motion.section>
    </AnimatePresence>}
    </>
    ) 
}

import { ComponentProps } from "../types/types"
import { Project1} from "../projects/Project1"
import { Project2} from "../projects/Project2"
import { Project3} from "../projects/Project3"
import { Project6} from "../projects/Project6"
import {AnimatePresence, motion} from "motion/react"
import { Project5 } from "../projects/Project5"

export const Projects:React.FC<ComponentProps> = ({lenguaje,menu}) => {
    return (
    <>
    {menu ? null : <AnimatePresence mode="wait">
        <article id="projects" className="flex flex-col items-center gap-24 pt-5 pb-20 mt-10 overflow-hidden lg:gap-56">
            <motion.h2
            key={lenguaje}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-3xl font-medium lg:text-4xl">{lenguaje === "EN" ? "Projects" : "Proyectos"}</motion.h2>
            <Project5 lenguaje={lenguaje} menu={menu}/>
            <Project6 lenguaje={lenguaje} menu={menu}/>
            <Project2 lenguaje={lenguaje} menu={menu}/>
            <Project1 lenguaje={lenguaje} menu={menu}/>
            <Project3 lenguaje={lenguaje} menu={menu}/>
        </article>
        </AnimatePresence>}
    </>
    )
}

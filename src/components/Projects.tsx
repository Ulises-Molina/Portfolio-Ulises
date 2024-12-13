import { ComponentProps } from "../types/types"
import { Project1} from "../projects/Project1"
import { Project2} from "../projects/Project2"
import { Project3} from "../projects/Project3"
import { Project4} from "../projects/Project4"
import {AnimatePresence, motion} from "motion/react"

export const Projects:React.FC<ComponentProps> = ({lenguage}) => {
    return (
    <><AnimatePresence mode="wait">
        <article id="projects" className="flex flex-col overflow-hidden items-center mt-32 gap-24 lg:gap-64">
            <motion.h2
            key={lenguage}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-3xl lg:text-4xl font-medium">{lenguage === "EN" ? "Projects" : "Proyectos"}</motion.h2>
            <Project3 lenguage={lenguage}/>
            <Project1 lenguage={lenguage}/>
            <Project2 lenguage={lenguage}/>
            <Project4 lenguage={lenguage}/>
        </article>
        </AnimatePresence>
    </>
    )
}

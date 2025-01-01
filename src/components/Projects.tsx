import { ComponentProps } from "../types/types"
import { Project1} from "../projects/Project1"
import { Project2} from "../projects/Project2"
import { Project3} from "../projects/Project3"
import { Project4} from "../projects/Project4"
import {AnimatePresence, motion} from "motion/react"
import { Project5 } from "../projects/Project5"

export const Projects:React.FC<ComponentProps> = ({lenguage,menu}) => {
    return (
    <>
    {menu ? null : <AnimatePresence mode="wait">
        <article id="projects" className="flex flex-col overflow-hidden items-center mt-32 gap-24 lg:gap-64">
            <motion.h2
            key={lenguage}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-3xl lg:text-4xl font-medium">{lenguage === "EN" ? "Projects" : "Proyectos"}</motion.h2>
            <Project5 lenguage={lenguage} menu={menu}/>
            <Project1 lenguage={lenguage} menu={menu}/>
            <Project3 lenguage={lenguage} menu={menu}/>
            <Project2 lenguage={lenguage} menu={menu}/>
            <Project4 lenguage={lenguage} menu={menu}/>
        </article>
        </AnimatePresence>}
    </>
    )
}

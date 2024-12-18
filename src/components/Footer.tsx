import { ComponentProps } from "../types/types"
import { KeyboardArrowUp } from "@mui/icons-material"
import { motion } from "motion/react"

export const Footer:React.FC<ComponentProps> = ({lenguage,menu}) => {
    return (
        <>
        {menu ? null : <footer className="flex flex-row items-center gap-4 lg:py-5 py-5 border-t border-gray-600 justify-center relative">
            <motion.div 
        whileHover={{ scale: 1.1, backgroundColor: '#3d3d3d' }}
        whileTap={{ scale: 0.6 }}
        className="bottom-6 -left-52 lg:left-16 absolute lg:h-12 lg:w-12 justify-center items-center text-white cursor-pointer border rounded-full hidden sm:flex"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <KeyboardArrowUp fontSize="large"></KeyboardArrowUp>
            </motion.div>
            <div className="flex flex-col gap-4 text-center">
                <p className="lg:text-sm">{lenguage === "EN" ? "© Ulises Molina 2024" : "© Ulises Molina 2024"}</p>
            <a href="mailto:ulisesmolinadev@gmail.com" className="lg:text-sm">ulisesmolinadev@gmail.com</a></div>
        </footer>}
        </>
    )
}

import { ComponentProps } from "../types/types"
import { KeyboardArrowUp } from "@mui/icons-material"
import { motion } from "motion/react"

export const Footer:React.FC<ComponentProps> = ({lenguage}) => {
    return (
        <footer className="flex flex-row items-center gap-4 lg:py-12 py-5 border-t border-gray-600 justify-center relative">
            <motion.div 
        whileHover={{ scale: 1.1, backgroundColor: '#3d3d3d' }}
        whileTap={{ scale: 0.6 }}
        className="bottom-8 -left-52 lg:left-16 absolute lg:h-24 lg:w-24 justify-center items-center text-white cursor-pointer border rounded-full hidden sm:flex"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <KeyboardArrowUp fontSize="large"></KeyboardArrowUp>
            </motion.div>
            <div className="flex flex-col gap-4 text-center">
                <p className="lg:text-xl">{lenguage === "EN" ? "© Ulises Molina 2024" : "© Ulises Molina 2024"}</p>
            <p className="lg:text-xl">ulisesmolinadev@gmail.com</p></div>
        </footer>
    )
}
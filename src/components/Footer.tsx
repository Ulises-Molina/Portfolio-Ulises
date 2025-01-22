import { ComponentProps } from "../types/types"
import { KeyboardArrowUp } from "@mui/icons-material"
import { motion } from "motion/react"

export const Footer:React.FC<ComponentProps> = ({lenguaje,menu}) => {
    return (
        <>
        {menu ? null : <footer className="relative flex flex-row items-center justify-center gap-4 py-5 border-t border-gray-600">
            <motion.div 
        whileHover={{ scale: 1.1, backgroundColor: '#3d3d3d' }}
        whileTap={{ scale: 0.6 }}
        className="absolute items-center justify-center hidden text-white border rounded-full cursor-pointer bottom-6 -left-52 lg:left-16 lg:h-12 lg:w-12 sm:flex"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <KeyboardArrowUp fontSize="large"></KeyboardArrowUp>
            </motion.div>
            <div className="flex flex-col gap-4 text-center">
                <p className="lg:text-sm">{lenguaje === "EN" ? "© Ulises Molina 2025" : "© Ulises Molina 2025"}</p>
            </div>
        </footer>}
        </>
    )
}

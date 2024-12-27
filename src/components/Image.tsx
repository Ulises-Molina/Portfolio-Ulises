import { motion } from "motion/react"


const Image:React.FC = () => {
    return (
        <motion.img
        initial ={{ opacity: 0,translateX: -50, rotate: -5 }}
        animate ={{ opacity: 1,translateX: 0, rotate: 0 }}
        transition={{ duration: 1.5 }}
        className="filter brightness-115 contrast-115 saturate-110 w-2/5 rounded-2xl min-h-56 min-w-56 lg:min-h-0 lg:min-w-0 center object-contain" src="/foto.webp" alt="foto de Ulises Molina"></motion.img>
    )
}

export default Image;

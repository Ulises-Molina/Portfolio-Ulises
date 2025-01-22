import { motion } from "motion/react"


const Image: React.FC = () => {
    return (
        <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="object-contain w-2/5 filter rounded-2xl min-h-56 min-w-56 lg:min-h-0 lg:min-w-0 center drop-shadow-lg"
            style={{
                filter: 'brightness(0.8) contrast(1.1) saturate(1.1) sepia(0.2)',
            }}
            src="/foto.webp"
            alt="foto de Ulises Molina"
        />
    );

}

export default Image;

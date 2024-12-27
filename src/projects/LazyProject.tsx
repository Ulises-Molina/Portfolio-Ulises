import {motion} from "motion/react"

const LazyProject = ({src, alt}: {src: string, alt: string}) => {
    return (
        <motion.img 
            src={src} loading="lazy" alt={alt} className="w-full lg:h-full object-contain rounded-md shadow-slate-500"></motion.img>
    )
}

export default LazyProject
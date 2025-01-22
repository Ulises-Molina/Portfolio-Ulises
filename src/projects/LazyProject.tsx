import { motion } from "framer-motion";

const LazyProject = ({ id, src, src2, src3, alt,delay }: { id: string; src: string; src2: string; src3: string; alt: string;delay : number }) => {
    return (
        <motion.div
            id={id}
            className="carousel slide"
            style={{
                perspective: "1000px", // Efecto 3D realista
            }}
            animate={{
                scale: [1, 0.70, 0.70, 1], 
                rotateX: [0, 40, -40, 0], 
                rotateY: [0, 180, 360], 
            }}
            transition={{
                duration: 4,
                delay: delay, // Tiempo total de la animación
                repeat: Infinity, // Repetición infinita
                repeatDelay: 5, // Pausa entre repeticiones
                ease: "easeInOut", // Movimiento suave
            }}
        >
            <div
                className="carousel-inner"
                style={{
                    transformStyle: "preserve-3d", // Preserva el efecto 3D
                }}
            >
                <div className="carousel-item active">
                    <img src={src} className="d-block w-100" alt={alt} />
                </div>
                <div className="carousel-item">
                    <img src={src2} className="d-block w-100" alt={alt} />
                </div>
                <div className="carousel-item">
                    <img src={src3} className="d-block w-100" alt={alt} />
                </div>
            </div>
            <div className="carousel-indicators carousel-indicators2">
                <button type="button" data-bs-target={`#${id}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target={`#${id}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target={`#${id}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </motion.div>
    );
};

export default LazyProject;



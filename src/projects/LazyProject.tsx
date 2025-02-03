import { motion } from "framer-motion";

const LazyProject = ({ id, src, src2, src3, alt }: { id: string; src: string; src2: string; src3: string; alt: string }) => {
    return (
        <motion.div
            id={id}
            className="carousel slide"
            initial={{
                opacity: 0, 
                x: -300,
                scale: 0.3
            }}
            whileInView={{
                opacity: 1, 
                x: 0, 
                scale: 1
            }}
            transition={{
                duration: 3,
                delay: 0.3,
                ease: "easeInOut",
            }}
            viewport={{ once: true }}
        >
            <div
                className="carousel-inner"
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


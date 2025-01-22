import { motion } from "framer-motion";

export const Logo = ({
  src,
  alt,
  delay,
  y,
  x,
  link
}: {
  src: string;
  alt: string;
  delay: number;
  y: number;
  x: number;
  link: string;
}): JSX.Element => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        id="logo-wrapper"
        style={{ display: "inline-block", willChange: "transform" }}
        className="hover:brightness-100 hover:cursor-pointer transition-all duration-150 brightness-[0.95] min-w-8 max-w-8 filter drop-shadow-lg"
        whileHover={{
          rotateX: [0, 40, -40, 0], 
          rotateY: [0, 180, 360],
          transition: { delay: 0, duration: 3, ease: "easeInOut" }
        }}
        animate={{
          translateY: [0, -y, y, 0],
          translateX: [0, x, 0]
        }}
        transition={{
          duration: 4, 
          ease: "easeInOut",
          repeatType: "mirror",
          repeat: Infinity,
          delay: delay
        }}>
        <img
          src={src}
          alt={alt}
          className="lg:w-[45px] lg:min-w-10 lg:max-w-10 rounded-xl hover:brightness-100 hover:cursor-pointer transition-all duration-150 brightness-[0.85] min-w-8 max-w-8 filter drop-shadow-lg"
        />
      </motion.div>
    </a>
  );
};


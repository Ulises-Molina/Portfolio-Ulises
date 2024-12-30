import { motion } from "motion/react"

export const Logo = ({src,alt,delay,y,x,link}:{src:string,alt:string,delay:number,y:number,x:number,link?:string}):JSX.Element => {

    return (
        <a href={link} target="_blank">
            <motion.img id="logo"
                        animate={{
                            translateY: [0,-y , y , 0],
                            translateX: [0, x , 0]
                        }}
                        transition={{
                            duration: 5,
                            ease: "linear",
                            repeatType: 'mirror',
                            repeat: Infinity,
                            delay: delay,
                        }}
                        src={src} alt={alt} className="lg:w-[45px] lg:min-w-10 rounded-xl hover:brightness-100 hover:cursor-pointer transition-all duration-150 brightness-[0.85] w-10">
        </motion.img>
        </a>
    )
}

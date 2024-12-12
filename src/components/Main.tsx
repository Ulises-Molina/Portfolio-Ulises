import {AnimatePresence, motion} from "motion/react"
import { Logo } from "./Logo.tsx"
import { ComponentProps } from "../types/types";

export const Main: React.FC<ComponentProps> = ({lenguage}) => {
    return (
        <>
        <main id="home" className="w-screen flex flex-col lg:flex-row lg:h-[90vh] lg:overflow-hidden lg:justify-normal gap-10 lg:gap-0 justify-center items-center">
            <div className="w-1/2 flex justify-center items-center">
                <motion.img
                initial ={{ opacity: 0 }}
                animate ={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="filter brightness-115 contrast-115 saturate-110 w-2/5 rounded-2xl min-h-56 min-w-56 lg:min-h-0 lg:min-w-0 center" src="/public/foto.png"></motion.img>
            </div>
            <AnimatePresence mode="wait">
            <motion.div 
            key={lenguage}
            initial ={{ opacity: 0,translateY: 50 }}
            animate ={{ opacity: 1,translateY: 0 }}
            transition={{ duration: 2.5 }}
            className="lg:w-2/5 flex flex-col justify-center gap-3 lg:gap-7 xl:gap-10 self-start ml-7 lg:self-center">
                <h1 className="text-2xl lg:text-2xl xl:text-6xl font-medium">{lenguage === "EN" ? "Hi, I'm Ulises Molina" : "Hola, soy Ulises Molina"}</h1>
                <h2 className="lg:text-xl xl:text-4xl font-normal">{lenguage === "EN" ? "I'm a Frontend developer from Buenos Aires, Argentina" : "Desarrollador frontend de Buenos Aires, Argentina"}</h2>
                <p className="lg:text-xl xl:text-2xl">{lenguage === "EN" ? "I like to be in constant growth with the ability to learn new technologies and adapt easily to new work teams. Passionate about challenges and even more so  if they enrich my knowledge. Completely self-taught." : "Me gusta estar en constante crecimiento con capacidad de aprender nuevas tecnologías y adaptarme fácilmente a nuevos equipos de trabajo. Apasionado por los retos y más si enriquecen mis conocimientos. Completamente autodidacta."}</p>
                <div className="flex flex-col gap-10 mt-10 ">
                    <p className="lg:text-3xl">{lenguage === "EN" ? "Principal technologies" : "Tecnologías principales"}</p>
                    <div className="flex gap-5 lg:gap-20">
                        <Logo src="/public/logos/javascript.svg" alt="logo Javascript" delay={0} y={10} x={18} link="https://developer.mozilla.org/es/docs/Web/JavaScript"></Logo>
                        <Logo src="/public/logos/typescript.svg" alt="logo Typescript" delay={1} y={13} x={2} link="https://www.typescriptlang.org/"></Logo>
                        <Logo src="/public/logos/html5.svg" alt="logo HTML" delay={0} y={5} x={10} link="https://developer.mozilla.org/es/docs/Web/HTML"></Logo>
                        <Logo src="/public/logos/css.svg" alt="logo CSS" delay={1.5} y={7} x={10} link="https://developer.mozilla.org/es/docs/Web/CSS"></Logo>
                        <Logo src="/public/logos/react.svg" alt="logo React" delay={0} y={8} x={5} link="https://es.react.dev/"></Logo>
                        <Logo src="/public/logos/nextjs_icon_dark.svg" alt="logo Next JS" delay={1.4} y={14} x={14} link="https://nextjs.org/"></Logo>
                    </div>
                </div>
                <div className="flex flex-col gap-10 mt-10 ">
                    <p className="lg:text-3xl">{lenguage === "EN" ? "Tools and others" : "Herramientas y otros"}</p>
                    <div className="flex gap-5 lg:gap-20">
                    <Logo src="/public/logos/tailwindcss.svg" alt="logo Tailwind" delay={1} y={12} x={10} link="https://tailwindcss.com/"></Logo>
                        <Logo src="/public/logos/git.svg" alt="logo Git" delay={0} y={5} x={5} link="https://github.com/Ulises-Molina"></Logo>
                        <Logo src="/public/logos/Github_light.svg" alt="logo Github" delay={1.2} y={10} x={5} link="https://github.com/Ulises-Molina"></Logo>
                        <Logo src="/public/logos/firebase.svg" alt="logo Firebase" delay={0.5} y={7} x={12} link="https://firebase.google.com/?hl=es-419"></Logo>
                        <Logo src="/public/logos/postman.svg" alt="logo Postman" delay={0.9} y={13} x={9} link="https://www.postman.com/"></Logo>
                        <Logo src="/public/logos/materialui.svg" alt="logo Material" delay={1.4} y={8} x={5} link="https://mui.com/"></Logo>
                    </div>
                </div>
            </motion.div>
            </AnimatePresence>
        </main>
        </>
    )
}
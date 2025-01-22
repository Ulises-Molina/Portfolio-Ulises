import {AnimatePresence, motion} from "motion/react"
import { Logo } from "./Logo.tsx"
import { ComponentProps } from "../types/types";
import { Suspense } from "react";
import React from "react";
import { ProgressSpinner } from 'primereact/progressspinner';


const LazyImage: React.FC = React.lazy(() => import('./Image.tsx'));

export const Main: React.FC<ComponentProps> = ({lenguaje,menu}) => {
    return (
        <>
        {menu ? null : <main id="home" className=" flex flex-col lg:flex-row sm:min-h-[90vh] lg:overflow-hidden lg:justify-normal gap-10 lg:gap-0 justify-center items-center mt-14 lg:mt-0">
            <div className="items-center justify-center hidden w-1/2 md:flex">
            <Suspense fallback={<ProgressSpinner/>}>    
                <LazyImage/>
            </Suspense>
            </div>
            <AnimatePresence mode="wait">
            <motion.div 
            key={lenguaje}
            initial ={{ opacity: 0,translateY: 50 }}
            animate ={{ opacity: 1,translateY: 0 }}
            transition={{ duration: 2.5 }}
            className="flex flex-col self-start justify-center gap-3 mx-8 lg:w-1/3 lg:gap-7 lg:self-center">
                <h1 className="text-2xl font-black 2xl:text-4xl">{lenguaje === "EN" ? "Hi, I'm Ulises Molina" : "Hola, soy Ulises Molina"}</h1>
                <h2 className="text-lg font-black 2xl:text-xl">{lenguaje === "EN" ? "I'm a Frontend developer from Buenos Aires, Argentina" : "Desarrollador frontend de Buenos Aires, Argentina"}</h2>
                <p className="font-light 2xl:text-lg text-md">{lenguaje === "EN" ? "I like to be in constant growth with the ability to learn new technologies and adapt easily to new work teams. Passionate about challenges and even more so  if they enrich my knowledge. Completely self-taught." : "Me gusta estar en constante crecimiento con capacidad de aprender nuevas tecnologías y adaptarme fácilmente a nuevos equipos de trabajo. Apasionado por los retos y más si enriquecen mis conocimientos. Completamente autodidacta."}</p>
                <div className="flex flex-col gap-10 mt-10 ">
                    <p className="2xl:text-xl text-md">{lenguaje === "EN" ? "Principal technologies" : "Tecnologías principales"}</p>
                    <div className="flex gap-7 lg:gap-16">
                        <Logo src="/logos/javascript.svg" alt="logo Javascript" delay={0} y={10} x={18} link="https://developer.mozilla.org/es/docs/Web/JavaScript"></Logo>
                        <Logo src="/logos/typescript.svg" alt="logo Typescript" delay={1} y={13} x={2} link="https://www.typescriptlang.org/"></Logo>
                        <Logo src="/logos/html5.svg" alt="logo HTML" delay={0} y={5} x={10} link="https://developer.mozilla.org/es/docs/Web/HTML"></Logo>
                        <Logo src="/logos/css.svg" alt="logo CSS" delay={1.5} y={7} x={10} link="https://developer.mozilla.org/es/docs/Web/CSS"></Logo>
                        <Logo src="/logos/react.svg" alt="logo React" delay={0} y={8} x={5} link="https://es.react.dev/"></Logo>
                        <Logo src="/logos/nextjs_icon_dark.svg" alt="logo Next JS" delay={1.4} y={14} x={14} link="https://nextjs.org/"></Logo>
                    </div>
                </div>
                <div className="flex flex-col gap-10 mt-10 ">
                    <p className="2xl:text-xl text-md">{lenguaje === "EN" ? "Tools and others" : "Herramientas y otros"}</p>
                    <div className="flex gap-7 lg:gap-16">
                    <Logo src="/logos/tailwindcss.svg" alt="logo Tailwind" delay={1} y={12} x={10} link="https://tailwindcss.com/"></Logo>
                        <Logo src="/logos/git.svg" alt="logo Git" delay={0} y={5} x={5} link="https://github.com/Ulises-Molina"></Logo>
                        <Logo src="/logos/Github_dark.svg" alt="logo Github" delay={1.2} y={10} x={5} link="https://github.com/Ulises-Molina"></Logo>
                        <Logo src="/logos/firebase.svg" alt="logo Firebase" delay={0.5} y={7} x={12} link="https://firebase.google.com/?hl=es-419"></Logo>
                        <Logo src="/logos/postgresql.svg" alt="logo PostgreSQL" delay={1.4} y={8} x={5} link="https://www.postgresql.org/"></Logo>
                        <Logo src="/logos/postman.svg" alt="logo Postman" delay={0.9} y={13} x={9} link="https://www.postman.com/"></Logo>
                    </div>
                </div>
            </motion.div>
            </AnimatePresence>
        </main>}
        </>
    )
}

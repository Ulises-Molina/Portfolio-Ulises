import { ComponentProps } from "../types/types"
import Button from '@mui/material/Button'
import { Logo } from "../components/Logo"
import {AnimatePresence, motion} from "motion/react"
import React from "react"
import { Suspense } from "react";

const LazyProject = React.lazy(() => import('./LazyProject'));



export const Project6:React.FC<ComponentProps> = ({lenguaje}) => {
    return (
        <AnimatePresence mode="wait">
        <motion.section
        className="flex flex-col  xl:flex-row xl:max-h-[300px] mx-3 gap-16 lg:gap-32 justify-center items-center xl:items-start">
        <motion.div 
        whileHover={{ scale: 1.05}}
        className="hover:cursor-pointer md:min-w-[550px] xl:min-w-[700px] md:max-w-[700px] relative group transition-all duration-500 overflow-hidden p-14">
            <a href="https://marketcrypto-psi.vercel.app/" target="_blank">
            <Suspense fallback={<div>Loading...</div>}>
            <LazyProject id="project6" src="/proyectos/marketcrypto/screen.png" src2="/proyectos/marketcrypto/market.png" src3="/proyectos/marketcrypto/features.png" alt="proyecto MarketCrypto"></LazyProject>
            </Suspense>
            </a>
        </motion.div>
        <motion.div
        key={lenguaje}
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 4,
                delay: 0.5,
                ease: "easeInOut"}}
        className="flex flex-col gap-6 lg:gap-8 max-w-[600px] justify-center items-center xl:items-start xl:pt-10">
            <p className="text-md lg:text-md">{lenguaje === "EN" ? "SPA - Users can view the price of various cryptocurrencies in real time and stay up to date with the latest news in the crypto world. Displays an interactive chart for the selected currency over a given time period. The data is updated every 24 hours by the API. It is a page that respects web accessibility and is completely Responsive, adapting to any device. The application has the best practices in SEO" : "SPA - Usuarios pueden visualizar el precio de diversas criptomonedas en tiempo real y mantenerse al tanto de las últimas noticias del mundo cripto. Muestra un gráfico interactivo para la moneda seleccionada en un periodo de tiempo determinado. Los datos se actualizan cada 24hs por la API de CoinGecko, una API de criptomonedas muy utilizada. Es una pagina que respeta la accesibilidad web y es completamente Responsive, se adapta a cualquier dispositivo. La aplicación cuenta con las mejores prácticas en SEO"}</p>
            <p className="text-md lg:text-md">{lenguaje === "EN" ? "Technologies used" : "Tecnologías usadas"}</p>
            <div className="flex gap-10">
            <Logo src="/logos/react.svg" alt="logo React" delay={0} y={8} x={5} link="https://es.react.dev/"></Logo>
            <Logo src="/logos/typescript.svg" alt="logo Typescript" delay={1.4} y={8} x={5} link="https://www.typescriptlang.org/"></Logo>
            <Logo src="/logos/tailwindcss.svg" alt="logo Tailwind" delay={1} y={3} x={6} link="https://tailwindcss.com/"></Logo>
            <Logo src="/logos/Motion_dark.svg" alt="logo Motion" delay={1.4} y={8} x={5} link="https://motion.dev/"></Logo>
            </div>
            <a href="https://github.com/Ulises-Molina/NextJS-Eccomerce" target="_blank">
            <Button variant="outlined" color="inherit" className="scale-75 w-38 lg:w-48 hover:bg-slate-700">GitHub repo</Button>
            </a>
        </motion.div>
    </motion.section>
    </AnimatePresence>
    )
}

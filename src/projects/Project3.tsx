import { ComponentProps } from "../types/types"
import Button from '@mui/material/Button'
import { Logo } from "../components/Logo"
import {AnimatePresence, motion} from "motion/react"
import React from "react"
import { Suspense } from "react";

const LazyProject = React.lazy(() => import('./LazyProject'));



export const Project3:React.FC<ComponentProps> = ({lenguaje}) => {
    return (
        <AnimatePresence mode="wait">
        <motion.section
        className="flex flex-col  xl:flex-row xl:max-h-[300px] mx-3 gap-16 lg:gap-32 justify-center items-center xl:items-start">
        <motion.div 
        whileHover={{ scale: 1.05}}
        className="hover:cursor-pointer md:min-w-[550px] xl:min-w-[700px] md:max-w-[700px] relative group transition-all duration-500 overflow-hidden p-14">
            <a href="https://mercado-sur.vercel.app/" target="_blank">
            <Suspense fallback={<div>Loading...</div>}>
            <LazyProject id="project3" src="/proyectos/mercadosur/home.png" src2="/proyectos/mercadosur/product.png" src3="/proyectos/mercadosur/buy.png"alt="gif proyecto MercadoSur"></LazyProject>
            </Suspense>
            </a>
        </motion.div>
        <motion.div
        key={lenguaje}
        initial={{ opacity: 0,x: window.innerWidth < 600 ? 0 : 300,scale:0.3 }}
        whileInView={{ opacity: 1, x: 0,scale:1 }}
        transition={{ duration: 3,
                ease: "easeInOut"}}
                viewport={{ once: true }}
        className="flex flex-col gap-6 lg:gap-8 max-w-[400px] xl:max-w-[600px] justify-center items-center xl:items-start m-2 pt-10">
            <p className="text-md lg:text-md">{lenguaje === "EN" ? "''MercadoSur''- E-Commerce website. It has functionalities such as search by category, filters by name and price, individual pages by product, shopping cart and payment. Uses API call. It has dark and light mode" : "''MercadoSur'' - Sitio web E-Commerce. Cuenta con funcionalidades como búsqueda por categoría, filtros por nombre y precio, paginas individuales por producto, carrito de compra y pago. Utiliza llamado a API. Cuenta con modo oscuro y claro"}</p>
            <p className="text-md lg:text-md">{lenguaje === "EN" ? "Technologies used" : "Tecnologías usadas"}</p>
            <div className="flex gap-10">
            <Logo src="/logos/react.svg" alt="logo React" delay={0} y={8} x={5} link="https://es.react.dev/"></Logo>
                <Logo src="/logos/css.svg" alt="logo Tailwind" delay={1} y={3} x={6} link="https://developer.mozilla.org/es/docs/Web/CSS"></Logo>
                <Logo src="/logos/materialui.svg" alt="logo Material" delay={1.4} y={8} x={5} link="https://mui.com/"></Logo>
                <Logo src="/logos/reactrouter.svg" alt="logo Router" delay={1.4} y={8} x={5} link="https://reactrouter.com/"></Logo>
            </div>
            <a href="https://github.com/Ulises-Molina/MercadoSur-Web-Eccomerce" target="_blank">
            <Button variant="outlined" color="inherit" className="scale-75 w-38 lg:w-48 hover:bg-slate-700">GitHub repo</Button>
            </a>
        </motion.div>
    </motion.section>
    </AnimatePresence>
    )
}

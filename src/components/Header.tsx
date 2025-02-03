import { LightMode } from "@mui/icons-material"
import { KeyboardArrowDown,DarkMode,Close,Menu } from "@mui/icons-material"
import { useState} from "react";
import { motion, AnimatePresence } from "motion/react";
import { ComponentProps } from "../types/types";

const body = document.getElementById('body');

export const Header: React.FC<ComponentProps> = ({lenguaje, setLenguaje,menu,setMenu}) => {

    const [darkMode, setDarkMode] = useState<boolean>(true)
    const [open, setOpen] = useState<boolean>(false)

    const changeMode = ():void => {
        if(darkMode){
            setDarkMode(false);
            body?.classList.remove('dark-mode');
            body?.classList.add('light-mode');
        }else if(!darkMode){
            setDarkMode(true);
            body?.classList.remove('light-mode');
            body?.classList.add('dark-mode');
        }
    }

    const openDiv = ():void => {
        if(open){
            setOpen(false);
        }else if(!open){
            setOpen(true);
        }
    }

    const openMenu = ():void => {
        if(menu && setMenu){
            setMenu(false);
        }else if(!menu && setMenu){
            setMenu(true);
        }
    }
    
    const changeToSpanish = ():void => {
        if (setLenguaje) {
            setLenguaje("ES");
        }
        setOpen(false);
    }

    const changeToEnglish = ():void => {
        if (setLenguaje) {
            setLenguaje("EN");
        }
        setOpen(false);
    }

    return (
<>
    <header id="header" className="sticky top-0 z-20 items-center justify-center hidden h-24 px-32 gap-[650px] lg:flex">
    <AnimatePresence mode="wait">
        <motion.ul
        className="flex gap-20 text-sm xl:text-lg">
            <motion.li  initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.9 }}><a
            href="#home" className="relative transition-all duration-500 group hover:opacity-70">
                    {lenguaje === "EN" ? "Home" : "Inicio"}
                    <span className={`absolute left-0 -bottom-1 w-0 min-h-[1px] transition-all duration-500 group-hover:w-full ${darkMode ? 'bg-slate-300' : 'bg-slate-600'}`}></span>
            </a>
            </motion.li>
            <motion.li  initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 }}><a
            href="#projects" className="relative transition-all duration-500 group hover:opacity-70">
                    {lenguaje === "EN" ? "Projects" : "Proyectos"}
                    <span className={`absolute left-0 -bottom-1 w-0 min-h-[1px] transition-all duration-500 group-hover:w-full ${darkMode ? 'bg-slate-300' : 'bg-slate-600'}`}></span>
            </a>
            </motion.li>
            <motion.li  initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}><a
            href="#about" className="relative transition-all duration-500 group hover:opacity-70">
                    {lenguaje === "EN" ? "About me" : "Sobre mi"}
                    <span className={`absolute left-0 -bottom-1 w-0 min-h-[1px] transition-all duration-500 group-hover:w-full ${darkMode ? 'bg-slate-300' : 'bg-slate-600'}`}></span>
            </a>
            </motion.li>
            <motion.li  initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0 }}>
                <a 
            href="#contact" className="relative transition-all duration-500 group hover:opacity-70">
                    {lenguaje === "EN" ? "Contact" : "Contacto"}
                    <span className={`absolute left-0 -bottom-1 w-0 min-h-[1px] transition-all duration-500 group-hover:w-full ${darkMode ? 'bg-slate-300' : 'bg-slate-600'}`}></span>
            </a>
            </motion.li>
        </motion.ul>
    </AnimatePresence>
        <motion.div
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        className="flex items-center justify-center gap-20">
            <div className="relative flex items-center justify-center">
            <AnimatePresence mode="wait">
            {open && (
                <motion.div
                key="menu"
                initial={{ opacity: 0, translateY: -50 }}
                animate={{ opacity: 1, translateY: 0, transition: { duration: .6 } }}
                exit={{ opacity: 0, translateY: -50, transition: { duration: .6 } }}
                className="absolute right-0 z-10 flex h-24 bg-gray-600 rounded-lg w-36 top-14"
                >
                <ul className="flex flex-col w-full h-full">
                    <li className="flex items-center justify-center w-full h-full gap-4 text-lg rounded-t-lg hover:cursor-pointer hover:bg-slate-500" onClick={changeToEnglish}>
                    <img className="w-7 h-7" src="/logos/estados-unidos-48.png" alt="logo ingles" />
                    <p>English</p>
                    </li>
                    <li className="flex items-center justify-center w-full h-full gap-4 text-lg border-t rounded-b-lg hover:cursor-pointer hover:bg-slate-500 border-slate-500" onClick={changeToSpanish}>
                    <img className="w-7 h-7" src="/logos/españa-48.png" alt="logo espanol" />
                    <p>Español</p>
                    </li>
                </ul>
                </motion.div>
            )}
            </AnimatePresence>
                {open ? <Close onClick={openDiv} className="cursor-pointer hover:opacity-60" fontSize="small"/> : <KeyboardArrowDown onClick={openDiv} className="cursor-pointer hover:opacity-60" fontSize="small"/>}
            <img src="/logos/icons8-48.png" alt="logo idioma" className="w-9 h-9"></img>
            </div>
            {darkMode ? <LightMode className="cursor-pointer hover:opacity-60" fontSize="medium" onClick={changeMode}/> : <DarkMode className="cursor-pointer hover:opacity-60" fontSize="medium" onClick={changeMode}/>}
        </motion.div>
    </header>


    {/* MOBILE */}

    <div className="sticky flex justify-between m-3 bg-transparent top-3 lg:hidden">
    {menu ? <Close onClick={openMenu} className="cursor-pointer hover:opacity-60" fontSize="large"/> : <Menu onClick={openMenu} className="cursor-pointer hover:opacity-60" fontSize="large"/>}
    <AnimatePresence mode="wait">
    {menu ? <motion.div 
    key="menu"
    initial={{ opacity: 0, translateY: -350}}
    animate={{ opacity: 1, translateY: 0, transition: { duration: 1 } }}
    exit={{ opacity: 0, translateY: -350, transition: { duration: 1 } }}
    className="flex flex-col items-center justify-center w-screen h-screen gap-32">
        <ul className="flex flex-col gap-20 text-2xl">
            <li>
                <motion.a onClick={openMenu}
            href="#home" className="relative transition-all duration-500 group hover:opacity-70">
                    {lenguaje === "EN" ? "Home" : "Inicio"}
                    <span className="absolute left-0 -bottom-1 w-0 min-h-[1px] bg-slate-300 transition-all duration-500 group-hover:w-full"></span>
            </motion.a></li>
            <li>
                <a href="#projects" onClick={openMenu} className="relative transition-all duration-500 group hover:opacity-70">
                    {lenguaje === "EN" ? "Projects" : "Proyectos"}
                    <span className="absolute left-0 -bottom-1 w-0 min-h-[1px] bg-slate-300 transition-all duration-500 group-hover:w-full"></span>
            </a>
            </li>
            <li>
                <a href="#about" onClick={openMenu} className="relative transition-all duration-500 group hover:opacity-70">
                    {lenguaje === "EN" ? "About me" : "Sobre mi"}
                    <span className="absolute left-0 -bottom-1 w-0 min-h-[1px] bg-slate-300 transition-all duration-500 group-hover:w-full"></span>
            </a>
            </li>
            <li>
                <a href="#contact" onClick={openMenu} className="relative transition-all duration-500 group hover:opacity-70">
                    {lenguaje === "EN" ? "Contact" : "Contacto"}
                    <span className="absolute left-0 -bottom-1 w-0 min-h-[1px] bg-slate-300 transition-all duration-500 group-hover:w-full"></span>
            </a>
            </li>
        </ul>
        <div className="flex flex-row items-center justify-center gap-32">
        {darkMode ? <LightMode className="cursor-pointer hover:opacity-60" fontSize="large" onClick={changeMode}/> : <DarkMode className="cursor-pointer hover:opacity-60" fontSize="large" onClick={changeMode}/>
        }
        <div className="relative flex items-center justify-center">
            <AnimatePresence mode="wait">
            {open && (
                <motion.div
                key="menu"
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0, transition: { duration: 1 } }}
                exit={{ opacity: 0, translateY: 50, transition: { duration: 1 } }}
                className="absolute right-0 z-10 flex w-48 bg-gray-400 rounded-lg h-36 -top-40"
                >
                <ul className="flex flex-col w-full h-full">
                    <li className="flex items-center justify-center w-full h-full gap-4 text-2xl rounded-t-lg hover:cursor-pointer hover:bg-slate-500" onClick={changeToEnglish}>
                    <img className="w-9 h-9" src="/logos/estados-unidos-48.png" />
                    <p>English</p>
                    </li>
                    <li className="flex items-center justify-center w-full h-full gap-4 text-2xl border-t rounded-b-lg hover:cursor-pointer hover:bg-slate-500 border-slate-500" onClick={changeToSpanish}>
                    <img className="w-9 h-9" src="/logos/españa-48.png" />
                    <p>Español</p>
                    </li>
                </ul>
                </motion.div>
            )}
            </AnimatePresence>
                {open ? <Close onClick={openDiv} className="cursor-pointer hover:opacity-60" fontSize="large"/> : <KeyboardArrowDown onClick={openDiv} className="cursor-pointer hover:opacity-60" fontSize="large"/>}
            <img src="/logos/icons8-48.png"></img>
            </div>
        </div>
    </motion.div>: null}
    </AnimatePresence>
    </div>
</>
    )
}

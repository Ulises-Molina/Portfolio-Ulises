import { LightMode } from "@mui/icons-material"
import { KeyboardArrowDown,DarkMode,Close,Menu } from "@mui/icons-material"
import { useState} from "react";
import { motion, AnimatePresence } from "motion/react";
import { ComponentProps } from "../types/types";

const body = document.getElementById('body');

export const Header: React.FC<ComponentProps> = ({lenguage, setLenguage,menu,setMenu}) => {

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
        if (setLenguage) {
            setLenguage("ES");
        }
        setOpen(false);
    }

    const changeToEnglish = ():void => {
        if (setLenguage) {
            setLenguage("EN");
        }
        setOpen(false);
    }

    return (
<>
    <header className="hidden sticky top-0 h-24 lg:flex justify-between items-center px-32">
    <AnimatePresence mode="wait">
        <motion.ul
        key={lenguage}
        className="flex gap-20 text-sm xl:text-lg">
            <li><motion.a
            initial={{ opacity: 0,translateY: -80 }}
            animate={{ opacity: 1, translateY : 0 }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0 }}
            href="#home" className="relative group transition-all duration-500 hover:opacity-70">
                    {lenguage === "EN" ? "Home" : "Inicio"}
                    <span className={`absolute left-0 -bottom-1 w-0 min-h-[1px] transition-all duration-500 group-hover:w-full ${darkMode ? 'bg-slate-300' : 'bg-slate-600'}`}></span>
            </motion.a>
            </li>
            <li><motion.a
            initial={{ opacity: 0,translateY: -80 }}
            animate={{ opacity: 1, translateY : 0 }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0 }} 
            href="#projects" className="relative group transition-all duration-500 hover:opacity-70">
                    {lenguage === "EN" ? "Projects" : "Proyectos"}
                    <span className={`absolute left-0 -bottom-1 w-0 min-h-[1px] transition-all duration-500 group-hover:w-full ${darkMode ? 'bg-slate-300' : 'bg-slate-600'}`}></span>
            </motion.a>
            </li>
            <li><motion.a
            initial={{ opacity: 0,translateY: -80 }}
            animate={{ opacity: 1 , translateY : 0}}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0 }} 
            href="#about" className="relative group transition-all duration-500 hover:opacity-70">
                    {lenguage === "EN" ? "About me" : "Sobre mi"}
                    <span className={`absolute left-0 -bottom-1 w-0 min-h-[1px] transition-all duration-500 group-hover:w-full ${darkMode ? 'bg-slate-300' : 'bg-slate-600'}`}></span>
            </motion.a>
            </li>
            <li>
                <motion.a 
            initial={{ opacity: 0,translateY: -80 }}
            animate={{ opacity: 1, translateY : 0 }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0 }}
            href="#contact" className="relative group transition-all duration-500 hover:opacity-70">
                    {lenguage === "EN" ? "Contact" : "Contacto"}
                    <span className={`absolute left-0 -bottom-1 w-0 min-h-[1px] transition-all duration-500 group-hover:w-full ${darkMode ? 'bg-slate-300' : 'bg-slate-600'}`}></span>
            </motion.a>
            </li>
        </motion.ul>
    </AnimatePresence>
        <div className="flex justify-center items-center gap-20">
            <div className="flex items-center justify-center relative">
            <AnimatePresence mode="wait">
            {open && (
                <motion.div
                key="menu"
                initial={{ opacity: 0, translateY: -50 }}
                animate={{ opacity: 1, translateY: 0, transition: { duration: .6 } }}
                exit={{ opacity: 0, translateY: -50, transition: { duration: .6 } }}
                className="absolute w-36 h-24 bg-gray-400 rounded-lg top-14 right-0 z-10 flex"
                >
                <ul className="flex flex-col w-full h-full">
                    <li className="text-lg rounded-t-lg flex justify-center items-center gap-4 w-full h-full hover:cursor-pointer hover:bg-slate-500" onClick={changeToEnglish}>
                    <img className="w-7 h-7" src="/logos/estados-unidos-48.png" alt="logo ingles" />
                    <p>English</p>
                    </li>
                    <li className="text-lg flex rounded-b-lg justify-center items-center w-full h-full gap-4 hover:cursor-pointer hover:bg-slate-500 border-slate-500 border-t" onClick={changeToSpanish}>
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
        </div>
    </header>


    {/* MOBILE */}

    <div className="flex sticky top-3 bg-transparent lg:hidden m-3 justify-between">
    {menu ? <Close onClick={openMenu} className="cursor-pointer hover:opacity-60" fontSize="large"/> : <Menu onClick={openMenu} className="cursor-pointer hover:opacity-60" fontSize="large"/>}
    <AnimatePresence mode="wait">
    {menu ? <motion.div 
    key="menu"
    initial={{ opacity: 0, translateY: -350}}
    animate={{ opacity: 1, translateY: 0, transition: { duration: 1 } }}
    exit={{ opacity: 0, translateY: -350, transition: { duration: 1 } }}
    className="flex w-screen justify-center items-center flex-col gap-32 h-screen">
        <ul className="flex flex-col gap-20 text-2xl">
            <li>
                <motion.a onClick={openMenu}
            href="#home" className="relative group transition-all duration-500 hover:opacity-70">
                    {lenguage === "EN" ? "Home" : "Inicio"}
                    <span className="absolute left-0 -bottom-1 w-0 min-h-[1px] bg-slate-300 transition-all duration-500 group-hover:w-full"></span>
            </motion.a></li>
            <li>
                <a href="#projects" onClick={openMenu} className="relative group transition-all duration-500 hover:opacity-70">
                    {lenguage === "EN" ? "Projects" : "Proyectos"}
                    <span className="absolute left-0 -bottom-1 w-0 min-h-[1px] bg-slate-300 transition-all duration-500 group-hover:w-full"></span>
            </a>
            </li>
            <li>
                <a href="#about" onClick={openMenu} className="relative group transition-all duration-500 hover:opacity-70">
                    {lenguage === "EN" ? "About me" : "Sobre mi"}
                    <span className="absolute left-0 -bottom-1 w-0 min-h-[1px] bg-slate-300 transition-all duration-500 group-hover:w-full"></span>
            </a>
            </li>
            <li>
                <a href="#contact" onClick={openMenu} className="relative group transition-all duration-500 hover:opacity-70">
                    {lenguage === "EN" ? "Contact" : "Contacto"}
                    <span className="absolute left-0 -bottom-1 w-0 min-h-[1px] bg-slate-300 transition-all duration-500 group-hover:w-full"></span>
            </a>
            </li>
        </ul>
        <div className="flex flex-row justify-center items-center gap-32">
        {darkMode ? <LightMode className="cursor-pointer hover:opacity-60" fontSize="large" onClick={changeMode}/> : <DarkMode className="cursor-pointer hover:opacity-60" fontSize="large" onClick={changeMode}/>
        }
        <div className="flex items-center justify-center relative">
            <AnimatePresence mode="wait">
            {open && (
                <motion.div
                key="menu"
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0, transition: { duration: 1 } }}
                exit={{ opacity: 0, translateY: 50, transition: { duration: 1 } }}
                className="absolute w-48 h-36 bg-gray-400 rounded-lg -top-40 right-0 z-10 flex"
                >
                <ul className="flex flex-col w-full h-full">
                    <li className="text-2xl rounded-t-lg flex justify-center items-center gap-4 w-full h-full hover:cursor-pointer hover:bg-slate-500" onClick={changeToEnglish}>
                    <img className="w-9 h-9" src="/logos/estados-unidos-48.png" />
                    <p>English</p>
                    </li>
                    <li className="text-2xl flex rounded-b-lg justify-center items-center w-full h-full gap-4 hover:cursor-pointer hover:bg-slate-500 border-slate-500 border-t" onClick={changeToSpanish}>
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

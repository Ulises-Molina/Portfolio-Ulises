import {Header} from "./components/Header.tsx"
import { Main } from "./components/Main.tsx"
import { useState } from "react"
import { Projects } from "./components/Projects.tsx"
import { Contact } from "./components/Contact.tsx"
import { About } from "./components/About.tsx"
import { Footer } from "./components/Footer.tsx"


export const App: React.FC = () => {

  const [lenguaje, setLenguaje] = useState<"EN" | "ES">("EN");
  const [menu, setMenu] = useState<boolean>(false)

  return (
    <>
    <Header lenguaje={lenguaje} setLenguaje={setLenguaje} menu={menu} setMenu={setMenu}/>
    <Main lenguaje={lenguaje} menu={menu}/>
    <Projects lenguaje={lenguaje} menu={menu}/>
    <About lenguaje={lenguaje} menu={menu}/>
    <Contact lenguaje={lenguaje} menu={menu}/>
    <Footer lenguaje={lenguaje} menu={menu}/>
    </>
  )
}

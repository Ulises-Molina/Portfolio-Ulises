import {Header} from "./components/Header.tsx"
import { Main } from "./components/Main.tsx"
import { useState } from "react"
import { Projects } from "./components/Projects.tsx"
import { Contact } from "./components/Contact.tsx"
import { About } from "./components/About.tsx"
import { Footer } from "./components/Footer.tsx"


export const App: React.FC = () => {

  const [lenguage, setLenguage] = useState<"EN" | "ES">("EN");
  const [menu, setMenu] = useState<boolean>(false)

  return (
    <>
    <Header lenguage={lenguage} setLenguage={setLenguage} menu={menu} setMenu={setMenu}/>
    <Main lenguage={lenguage} menu={menu}/>
    <Projects lenguage={lenguage} menu={menu}/>
    <About lenguage={lenguage} menu={menu}/>
    <Contact lenguage={lenguage} menu={menu}/>
    <Footer lenguage={lenguage} menu={menu}/>
    </>
  )
}

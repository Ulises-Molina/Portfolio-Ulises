import {Header} from "./components/Header.tsx"
import { Main } from "./components/Main.tsx"
import { useState } from "react"
import { Projects } from "./components/Projects.tsx"
import { Contact } from "./components/Contact.tsx"
import { About } from "./components/About.tsx"
import { Footer } from "./components/Footer.tsx"


export const App: React.FC = () => {

  const [lenguage, setLenguage] = useState<"EN" | "ES">("ES");

  return (
    <>
    <Header lenguage={lenguage} setLenguage={setLenguage}/>
    <Main lenguage={lenguage}/>
    <Projects lenguage={lenguage}/>
    <About lenguage={lenguage}/>
    <Contact lenguage={lenguage}/>
    <Footer lenguage={lenguage}/>
    </>
  )
}

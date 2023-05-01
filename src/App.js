import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useEffect } from "react";

//TODO: MVP 1
//TODO: Replace email link with iCloud link, modify text
//TODO: Remove extra line from about section
//TODO: Secure website

//TODO: MVP 2
//TODO: Add Google analytics to website
//TODO: Give projects a link icon
//TODO: Fix spacing on top of navbar
//TODO: Create logo
//TODO: Unify spacing of projects boxes


function App() {
    useEffect(() => {
        document.title = "Yezen Armout | Software Engineer";
    }, []);

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
        <section id="home">
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </section>
    </main>
  );
}

export default App;

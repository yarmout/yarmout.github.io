import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

//TODO: MVP 1
//TODO: Create logo
//TODO: Fill in details to project and skills
//TODO: Give projects a link icon
//TODO: Add links to projects
//TODO: Fill in text or remove text under skills section
//TODO: Fix contact me styling (arrow is not centered)
//TODO: Fix spacing on top of navbar (mobile)

//TODO: MVP 2
//TODO: Add Google analytics to website

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </main>
  );
}

export default App;

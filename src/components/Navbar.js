import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a>
                    <Link
                        to="about"
                        smooth={true}
                        className="ml-3 text-xl hover:text-white">
                        Yezen Armout
                    </Link>
                </a>
                <nav className="md:mr-auto md:ml-4">
                    <Link
                        to="projects"
                        smooth={true}
                        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white">
                        Past Work
                    </Link>
                    <Link
                        to="skills"
                        smooth={true}
                        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white">
                        Skills
                    </Link>
                </nav>
                <Link
                    to="contact"
                    smooth={true}
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white">
                    Contact Me
                    <ArrowRightIcon className="w-4 h-4 ml-1"/>
                </Link>
            </div>
        </header>
    );
}
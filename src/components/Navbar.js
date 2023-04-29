import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

export default function Navbar() {
    return (
        <header className="md:sticky bg-gray-900 top-0 z-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-row shadow-xl">
                <nav>
                    <Link
                        to="about"
                        className="title-font font-medium text-white mb-0 ml-3 text-xl"
                        smooth={true}>
                        Yezen Armout
                    </Link>
                    <Link
                        to="projects"
                        smooth={true}
                        className="mr-auto ml-4 py-1 pl-4 border-l border-gray-700 hover:text-white"
                        offset={-70}>
                        Past Work
                    </Link>
                    <Link
                        to="skills"
                        smooth={true}
                        className="inline-flex items-center border-0 py-1 px-3 focus:outline-none text-base mt-4 mt-0 hover:text-white"
                        offset={-70}>
                        Skills
                    </Link>
                    <Link
                        to="contact"
                        className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 mt-0"
                        smooth={true}>
                        Contact Me
                        <ArrowRightIcon className="w-4 h-4 ml-1"/>
                    </Link>
                </nav>

            </div>
        </header>
    );
}
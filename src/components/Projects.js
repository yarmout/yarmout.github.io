import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeBracketIcon className="mx-auto inline-block w-10 mb-4"></CodeBracketIcon>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
                        Apps I've Built
                    </h1>
                </div>

                <div className="flex flex-wrap -m-4">
                    {projects.map(project => (
                        <a
                            href={project.link}
                            target="_blank"
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 hover:border-indigo-500 hover:ring-2 hover:ring-indigo-900 transistion-colors duration-300 ease-in-out">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
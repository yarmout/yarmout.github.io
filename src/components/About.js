export default function About() {
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Yezen.
                        <br className="hidden lg:inline-block" /> I love to build amazing apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                        laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                        Laborum, voluptas natus?
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#projects"
                            className="inline-flex text-white bg-green-500 border-0 px-6 py-2 focus:outline-none hover:bg-green-600 rounded text-lg">
                            See my past work
                        </a>
                        <a href="#contact"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 px-6 py-2 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Work with me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
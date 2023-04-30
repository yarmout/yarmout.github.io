import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Contract() {
    return(
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <EnvelopeIcon className="w-10 inline-block mb-4"></EnvelopeIcon>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Contact Me
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-8">
                        If you have any questions or opportunities you'd like to discuss, feel free to reach out to me. I'm always open to new connections and collaborations.
                    </p>
                    <div>
                        <a
                            className="text-white bg-indigo-500 border-0 py-3 px-9 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center"
                            href="mailto:yarmout@gmail.com">
                            Get in touch!
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
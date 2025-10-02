import experienceData from './data/experience.json';
import projectsData from './data/projects.json';

export default function Page() {
    return (
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {/* Home */}
            <section id="hero" className="bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-cyan-400/20 hover:from-blue-500/30 hover:via-blue-400/20 hover:to-cyan-400/30 active:from-blue-500/40 active:via-blue-400/30 active:to-cyan-400/40 rounded-2xl p-6 sm:p-8 md:p-10 border border-blue-500/20 hover:border-blue-400/40 active:border-blue-400/60 transition-all duration-500 ease-out hover:shadow-lg hover:shadow-blue-500/10 active:shadow-xl active:shadow-blue-500/20 hover:scale-[1.01] active:scale-[0.99] cursor-pointer">
                {/* Mobile: Name and Profile Picture on same row */}
                <div className="flex items-center justify-between sm:hidden">
                    <h1 className="text-h1 font-semibold tracking-tight">Kenny Chen</h1>
                    <div className="w-16 h-16 rounded-full border-2 border-blue-300/50 overflow-hidden">
                        <img src="/me.jpg" alt="Kenny Chen" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Desktop: Name on left, Profile Picture on right */}
                <div className="hidden sm:flex sm:items-center sm:justify-between sm:gap-8">
                    <div className="flex-1">
                        <h1 className="text-h1 sm:text-display font-semibold tracking-tight">Kenny Chen</h1>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 border-blue-300/50 overflow-hidden">
                            <img src="/me.jpg" alt="Kenny Chen" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8">
                    <div className="space-y-4 sm:space-y-6">
                        <div className="space-y-4 sm:space-y-6">
                            <p className="text-body-lg text-[--color-text-secondary] max-w-4xl">
                                👋 Hi! I&apos;m a passionate software engineer with a strong foundation in computer science and a love for building scalable backend systems, web applications, and occasionally, games. I enjoy tackling complex problems and creating efficient solutions that make a real impact.
                            </p>
                            <div className="flex flex-wrap gap-3 sm:gap-4">
                                <a
                                    href="mailto:kennygchen@yahoo.com"
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[--color-secondary] text-[--color-white] hover:opacity-90 flex items-center justify-center transition-opacity"
                                    aria-label="Send email"
                                >
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kennygchen"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-600 text-gray-200 hover:bg-gray-800 hover:border-gray-500 flex items-center justify-center transition-all"
                                    aria-label="LinkedIn profile"
                                >
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com/kennygchen"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-600 text-gray-200 hover:bg-gray-800 hover:border-gray-500 flex items-center justify-center transition-all"
                                    aria-label="GitHub profile"
                                >
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section id="experience" className="space-y-4 sm:space-y-6">
                <h2 className="text-h2 font-semibold">Experience</h2>
                <div className="space-y-4">
                    {experienceData.map((experience, index) => (
                        <div key={index} className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-4 sm:p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                            <p className="font-semibold text-body">{experience.company} — {experience.position}</p>
                            <p className="text-body-sm text-[--color-text-muted]">{experience.location} • {experience.duration}</p>
                            <p className="text-[--color-text-secondary] mt-2 text-body">{experience.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2 text-caption text-[--color-text-muted]">
                                {experience.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="rounded-full border border-gray-700 px-2.5 py-1">{tech}</span>
                                ))}
                            </div>
                            {experience.sourceLink && (
                                <div className="mt-4 flex">
                                    <a href={experience.sourceLink} target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 min-w-[96px] text-center rounded-md bg-[--color-secondary] text-[--color-white] hover:opacity-90 text-body-sm">Source</a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="space-y-4 sm:space-y-6">
                <h2 className="text-h2 font-semibold">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {projectsData.map((project, index) => (
                        <article key={index} className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-4 sm:p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                            <h3 className="text-h3 font-semibold">{project.title}</h3>
                            <p className="mt-2 text-[--color-text-secondary] text-body">{project.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2 text-caption text-[--color-text-muted]">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="rounded-full border border-gray-700 px-2.5 py-1">{tech}</span>
                                ))}
                            </div>
                            {project.sourceLink && (
                                <div className="mt-4 flex">
                                    <a href={project.sourceLink} target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 min-w-[96px] text-center rounded-md bg-[--color-secondary] text-[--color-white] hover:opacity-90 text-body-sm">Source</a>
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section id="education" className="space-y-4 sm:space-y-6">
                <h2 className="text-h2 font-semibold">Education</h2>
                <div className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-4 sm:p-6 space-y-1 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                    <p className="font-semibold text-body">University of California, Irvine</p>
                    <p className="font-semibold text-body">Master of Software Engineering</p>
                    <p className="text-[--color-text-secondary] text-body-sm">Expected December 2025 • GPA 4.00</p>
                </div>
                <div className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-4 sm:p-6 space-y-1 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                    <p className="font-semibold text-body">University of California, Riverside</p>
                    <p className="font-semibold text-body">B.S. Computer Science (Cum Laude)</p>
                    <p className="text-[--color-text-secondary] text-body-sm">June 2023 • GPA 3.74</p>
                </div>
            </section>
        </div>
    );
}
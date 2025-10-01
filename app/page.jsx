import experienceData from './data/experience.json';
import projectsData from './data/projects.json';

export default function Page() {
    return (
        <div className="space-y-20">
            {/* Hero */}
            <section className="flex flex-col gap-6">
                <div className="flex-1 flex flex-col gap-6">
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Kenny Chen</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                        👋 Hi, I'm Kenny <br />
                        I enjoy building scalable backend systems, web applications, and occasionally, games.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="mailto:kennygchen@yahoo.com"
                            className="px-4 py-2 rounded-md bg-[--color-secondary] text-[--color-white] hover:opacity-90"
                        >
                            Email Me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kennygchen"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="px-4 py-2 rounded-md border border-gray-600 text-gray-200 hover:bg-gray-800"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/kennygchen"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="px-4 py-2 rounded-md border border-gray-600 text-gray-200 hover:bg-gray-800"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
                <div className="space-y-4">
                    {experienceData.map((experience, index) => (
                        <div key={index} className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                            <p className="font-semibold">{experience.company} — {experience.position}</p>
                            <p className="text-sm text-gray-400">{experience.location} • {experience.duration}</p>
                            <p className="text-gray-300 mt-2">{experience.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-400">
                                {experience.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="rounded-md border border-gray-700 px-2 py-1">{tech}</span>
                                ))}
                            </div>
                            {experience.sourceLink && (
                                <div className="mt-4 flex">
                                    <a href={experience.sourceLink} target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 min-w-[96px] text-center rounded-md bg-[--color-secondary] text-[--color-white] hover:opacity-90">Source</a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectsData.map((project, index) => (
                        <article key={index} className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="mt-2 text-gray-300">{project.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-400">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="rounded-md border border-gray-700 px-2 py-1">{tech}</span>
                                ))}
                            </div>
                            {project.sourceLink && (
                                <div className="mt-4 flex">
                                    <a href={project.sourceLink} target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 min-w-[96px] text-center rounded-md bg-[--color-secondary] text-[--color-white] hover:opacity-90">Source</a>
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
                <div className="flex flex-wrap gap-2 text-sm text-gray-200">
                    {[
                        'Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'C#', 'SQL',
                        'React', 'Next.js', 'Vue.js', 'Node.js', 'JUnit', 'Docker', 'AWS', 'Git'
                    ].map((skill) => (
                        <span key={skill} className="rounded-md border border-gray-700 bg-[#1b1b1b] px-3 py-1">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold">Education</h2>
                <div className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-6 space-y-1 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                    <p className="font-semibold">University of California, Irvine</p>
                    <p className="font-semibold">Master of Software Engineering</p>
                    <p className="text-gray-300">Expected December 2025 • GPA 4.00</p>
                </div>
                <div className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-6 space-y-1 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                    <p className="font-semibold">University of California, Riverside</p>
                    <p className="font-semibold">B.S. Computer Science (Cum Laude)</p>
                    <p className="text-gray-300">June 2023 • GPA 3.74</p>
                </div>
            </section>
        </div>
    );
}
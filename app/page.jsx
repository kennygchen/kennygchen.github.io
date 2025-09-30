export default function Page() {
    return (
        <div className="space-y-20">
            {/* Hero */}
            <section className="flex flex-col gap-6">
                <div className="flex-1 flex flex-col gap-6">
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Kenny Chen</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                        👋 Hi, I’m Kenny <br />
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
                    <div className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                        <p className="font-semibold">Amazon Web Services — SDE Intern</p>
                        <p className="text-sm text-gray-400">Seattle, WA • Jun 2025 – Sep 2025</p>
                        <p className="text-gray-300 mt-2">Designed a new benchmarking system for AWS ELB Runtime Service by containerizing the framework with AWS CDK, ECS Fargate, and Lambda, enabling flexible test configurations through JSON. Reduced processing time by 92% through parallel execution, built CloudWatch dashboards for real-time observability, and automated performance analysis with Python notebooks, Lambda, and S3.</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-400">
                            <span className="rounded-md border border-gray-700 px-2 py-1">AWS</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">AWS CDK</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Python</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">ECS Fargate</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Lambda</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">CloudWatch</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">EventBridge</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">S3</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Docker</span>
                        </div>
                    </div>
                    <div className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                        <p className="font-semibold">c:geo (Open Source) — Contributor</p>
                        <p className="text-sm text-gray-400">Remote • May 2025 – Jun 2025</p>
                        <p className="text-gray-300 mt-2">Contributed to an open-source Android geocaching app with 5 pull requests, adding new features, fixes, and tests. Built a dynamic compass for the cache detail screen, improved log sharing with a Snackbar option, and collaborated with maintainers through code reviews and issue tracking.</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-400">
                            <span className="rounded-md border border-gray-700 px-2 py-1">Java</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Android</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">UI</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">JUnit</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Open Source</span>
                        </div>
                        <div className="mt-4 flex">
                            <a href="https://github.com/cgeo/cgeo/commits/master/?author=kennygchen" target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 min-w-[96px] text-center rounded-md bg-[--color-secondary] text-[--color-white] hover:opacity-90">Source</a>
                        </div>
                    </div>
                    <div className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                        <p className="font-semibold">UCR Bit Securer Lab — Research Intern</p>
                        <p className="text-sm text-gray-400">Riverside, CA • Apr 2023 – Jun 2024</p>
                        <p className="text-gray-300 mt-2">Developed a force-directed graph visualization feature in JavaScript for an online disassembler, supporting 1,000+ nodes with built-in search. Refactored an automated binary analysis pipeline from shell to Python for better cross-platform support, and built TypeScript API routes integrated with Ghidra to serve JSON data to a Vue.js front end for interactive graph analysis.</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-400">
                            <span className="rounded-md border border-gray-700 px-2 py-1">JavaScript</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Python</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">TypeScript</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Vue.js</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Ghidra</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">JSON</span>
                        </div>
                        <div className="mt-4 flex">
                            <a href="https://github.com/kennygchen/deepdiweb/tree/force-graph" target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 min-w-[96px] text-center rounded-md bg-[--color-secondary] text-[--color-white] hover:opacity-90">Source</a>
                        </div>
                    </div>
                    <div className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                        <p className="font-semibold">Revature — Backend Developer Training</p>
                        <p className="text-sm text-gray-400">Remote • Aug 2023 – Nov 2023</p>
                        <p className="text-gray-300 mt-2">Built a Java-based backend with RESTful APIs to support user registration, login, and message CRUD operations. Implemented JDBC with DAO layers for efficient database access, and applied TDD with JUnit to ensure reliability and full coverage of core functionalities.</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-400">
                            <span className="rounded-md border border-gray-700 px-2 py-1">Java</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Spring Boot</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">JDBC</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">DAO</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">JUnit</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <article className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                        <h3 className="text-xl font-semibold">Mail Sync</h3>
                        <p className="mt-2 text-gray-300">A full-stack email client-server application with Node.js, Express.js, and TypeScript, supporting IMAP/SMTP for email management and contact handling. Built a responsive React interface with Material UI and global state management, and deployed the system to AWS EC2 using Docker Compose for streamlined multi-container orchestration.</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-400">
                            <span className="rounded-md border border-gray-700 px-2 py-1">Node.js</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">React</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Express.js</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">TypeScript</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Material UI</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Docker</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">AWS</span>
                        </div>
                        <div className="mt-4 flex">
                            <a href="https://github.com/kennygchen/mailbag-server-client-docker-compose" target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 min-w-[96px] text-center rounded-md bg-[--color-secondary] text-[--color-white] hover:opacity-90">Source</a>
                        </div>
                    </article>
                    <article className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                        <h3 className="text-xl font-semibold">OpReady — Preop Education App</h3>
                        <p className="mt-2 text-gray-300">A preoperative education app that helps patients prepare for surgery. I built the front end with Next.js and Tailwind CSS, and integrated it with Strapi and backend APIs to deliver dynamic content. <br /> Awarded 3rd Place at the MedTech Innovation Hackathon.</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-400">
                            <span className="rounded-md border border-gray-700 px-2 py-1">Next.js</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">JavaScript</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Tailwind CSS</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Strapi</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Figma</span>
                        </div>
                    </article>
                    <article className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                        <h3 className="text-xl font-semibold">SuperDry — 3D Third‑Person Shooter</h3>
                        <p className="mt-2 text-gray-300">Collaborated with a team to create a 3D third-person shooter game in Unity. I built modular C# scripts for core systems including player movement, responsive aiming, enemy AI, and wave-based battles. The game supported up to 100 simultaneous enemies per wave using optimized object pooling for smooth performance.</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-400">
                            <span className="rounded-md border border-gray-700 px-2 py-1">Unity</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">C#</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Game Dev</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">State Machine</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Rigid Body</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Ray Casting</span>
                        </div>
                        <div className="mt-4 flex">
                            <a href="https://github.com/Super-Dry/Super-Dry" target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 min-w-[96px] text-center rounded-md bg-[--color-secondary] text-[--color-white] hover:opacity-90">Source</a>
                        </div>
                    </article>
                    <article className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                        <h3 className="text-xl font-semibold">8-puzzle Solver</h3>
                        <p className="mt-2 text-gray-300">Developed in Python, applying data structures and algorithms to efficiently represent and manipulate puzzle states.</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-400">
                            <span className="rounded-md border border-gray-700 px-2 py-1">Python</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">A* Algorithm</span>
                        </div>
                        <div className="mt-4 flex">
                            <a href="https://github.com/kennygchen/8-puzzle-solver" target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 min-w-[96px] text-center rounded-md bg-[--color-secondary] text-[--color-white] hover:opacity-90">Source</a>
                        </div>
                    </article>
                    <article className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                        <h3 className="text-xl font-semibold">Arduino Object Following Robot</h3>
                        <p className="mt-2 text-gray-300">Built an object-following robot with Arduino and C++, using ultrasonic and infrared sensors for real-time tracking. Programmed autonomous behaviors through embedded systems development, showcasing proficiency in hardware-software integration.</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-400">
                            <span className="rounded-md border border-gray-700 px-2 py-1">C++</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Arduino</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Ultrasonic Sensor</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Infrared Sensor</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">3D Printing</span>
                        </div>
                        <div className="mt-4 flex">
                            <a href="https://github.com/kennygchen/Arduino-Object-Following-Robot" target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 min-w-[96px] text-center rounded-md bg-[--color-secondary] text-[--color-white] hover:opacity-90">Source</a>
                        </div>
                    </article>
                    <article className="rounded-lg border border-gray-700 bg-[#1b1b1b] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[--color-secondary]">
                        <h3 className="text-xl font-semibold">Real Time Cryptocurrency Quotes Discord Chatbot</h3>
                        <p className="mt-2 text-gray-300">Developed a Discord Chatbot in Python that leveraged the CoinMarketCap API to provides real-time cryptocurrency quotes and market data to users within a Discord server</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-400">
                            <span className="rounded-md border border-gray-700 px-2 py-1">Python</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">API</span>
                            <span className="rounded-md border border-gray-700 px-2 py-1">Chatbot</span>
                        </div>
                        <div className="mt-4 flex">
                            <a href="https://github.com/kennygchen/stonk_bot" target="_blank" rel="noreferrer noopener" className="px-3 py-1.5 min-w-[96px] text-center rounded-md bg-[--color-secondary] text-[--color-white] hover:opacity-90">Source</a>
                        </div>
                    </article>
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
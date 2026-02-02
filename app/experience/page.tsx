export default function AcademicJourney() {
    return (
        <div className="max-w-2xl space-y-12">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-tight">Education</h2>
                <p className="text-zinc-500">
                    A timeline of my academic background and foundational learning.
                </p>
            </div>

            <div className="relative border-l border-border ml-3 space-y-12">
                
                <div className="relative pl-8 md:pl-12">
                   
                    <div className="absolute -left-1.25 top-2 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-background" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-medium text-foreground">
                            Bachelor in Technology (B.Tech)
                        </h3>
                        <span className="text-xs font-mono text-zinc-500 mt-1 sm:mt-0">
                            2023 — Present
                        </span>
                    </div>
                    <div className="text-sm text-zinc-500 font-medium mb-4">
                        Narula Institute of Technology (NiT Kolkata)
                    </div>

                    <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <p>
                            Developing a solid foundation in computational theory and software
                            engineering with a focus on emerging technologies like{" "}
                            <span className="text-foreground font-medium">
                                Artificial Intelligence
                            </span>{" "}
                            and <span className="text-foreground font-medium">Machine Learning</span>.
                        </p>
                        <p>
                            Leveraging modern lab infrastructures and a project-based learning
                            approach to solve complex engineering problems.
                        </p>
                    </div>
                </div>

                
                <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-1.25 top-2 h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-background" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-medium text-foreground">
                            Diploma in Computer Science
                        </h3>
                        <span className="text-xs font-mono text-zinc-500 mt-1 sm:mt-0">
                            2020 — 2023
                        </span>
                    </div>
                    <div className="text-sm text-zinc-500 font-medium mb-4">
                        BPC Institute of Technology (BPCIT)
                    </div>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        Mastered the building blocks of software engineering and network
                        management. Focused on core programming, hardware fundamentals, and
                        practical implementation of computing systems.
                    </p>
                </div>

               
                <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-1.25 top-2 h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-background" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-medium text-foreground">
                            Secondary & Higher Secondary
                        </h3>
                        <span className="text-xs font-mono text-zinc-500 mt-1 sm:mt-0">
                            2013 — 2021
                        </span>
                    </div>
                    <div className="text-sm text-zinc-500 font-medium mb-4">
                        Chakdaha Ramlal Academy
                    </div>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        Completed Higher Secondary education. Built the
                        analytical and mathematical foundation necessary for the transition into
                        Higher Technical Education and Computer Science.
                    </p>
                </div>
            </div>
        </div>
    );
}
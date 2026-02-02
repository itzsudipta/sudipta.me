export default function AcademicJourney() {
    return (
        <div className="max-w-2xl space-y-12">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground">Education</h2>
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

                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-6 gap-y-1 mb-4">
                        <div className="text-sm text-zinc-500 font-medium whitespace-nowrap">
                            Narula Institute of Technology (NiT Kolkata)
                        </div>
                        <div className="text-[13px] font-mono text-foreground tracking-tight">
                            CGPA 8.45 
                        </div>
                    </div>

                    <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <p>
                            Currently, I am studying Bachelor in Technology in 
                            Computer Science  at Narula Institute of Technology,
                             and I am in my Final Year.{" "}
                            
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

                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-6 gap-y-1 mb-4">
                        <div className="text-sm text-zinc-500 font-medium whitespace-nowrap">
                            BPC Institute of Technology (BPCIT)
                        </div>
                        <div className="text-[13px] font-mono text-foreground tracking-tight">
                            CGPA 8.2 
                        </div>
                    </div>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        My Diploma in engineering degree in Computer Science was completed from 
                        BPC Institute of Technology , Krishnagar.
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

                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-6 gap-y-1 mb-4">
                        <div className="text-sm text-zinc-500 font-medium whitespace-nowrap">
                            Chakdaha Ramlal Academy
                        </div>
                        <div className="flex gap-x-4 text-[13px] font-mono text-foreground tracking-tight uppercase">
                            <span>HS 67.2%</span>
                            <span>SEC 67.14%</span>
                        </div>
                    </div>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        I am an alumnus of Chakdaha Ramlal Academy, having successfully completed Secondary Examination followed by Higher Secondary Examination from this institution.
                    </p>
                </div>
            </div>
        </div>
    );
}
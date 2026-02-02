export default function AboutPage() {
    return (
        <section className="max-w-2xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">

            
            <div className="space-y-4 mb-16">
                <h1 className="text-4xl font-semibold tracking-tight text-foreground leading-[1.1]">
                    I don&apos;t just write code; I architect digital ecosystems where <span className="text-zinc-400">logic meets intelligence.</span>
                </h1>
            </div>
          
            <div className="space-y-12">
                <section className="space-y-4 text-foreground/90">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-8 text-foreground" />
                        <span className="text-sm font-bold uppercase tracking-widest text-foreground">The Brief</span>
                    </div>

                    <p className="text-lg leading-relaxed">
                        Currently based in Kolkata, I specialize in the intersection of <strong className="text-foreground font-bold">Engineering and Intelligence</strong>.
                        I bridge the gap between visual intent and technical architecture, ensuring that every line of code—from a PostgreSQL schema to a fine-tuned ML model—serves a specific user purpose.
                    </p>

                    <p className="leading-relaxed opacity-80 text-foreground">
                        My background—spanning from a foundation in software and core programming at
                        <strong className="text-foreground font-bold underline decoration-zinc-300"> BPC Institute of Technology</strong> to advanced computational theory and Machine Learning at
                        <strong className="text-foreground font-bold underline decoration-zinc-300"> Narula Institute of Technology</strong>—has shaped my belief that software should be as
                        reliable as it is beautiful.
                    </p>
                </section>

                
                <section className="py-2">
                    <blockquote className="border-l-4 border-foreground pl-6 space-y-4">
                        <p className="text-foreground text-xl leading-snug italic font-medium">
                            “I believe the best technical architectures are invisible.
                            They empower developers to move fast while ensuring the user
                            never has to think about the complexity.”
                        </p>
                    </blockquote>
                </section>

                
                <section className="space-y-4 pt-4 text-foreground/90">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-8 bg-blue-600" />
                        <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">Acknowledgement</span>
                    </div>
                    <p className="text-lg leading-relaxed italic">
                        Beyond the technical milestones and academic pursuits, my journey is a reflection of my roots. I am profoundly <strong className="text-foreground font-bold">honoured to be their son</strong>.
                    </p>
                    <p className="leading-relaxed opacity-80">
                        Any impact I make through my work is a tribute to my parents, whose unwavering belief and silent sacrifices provided the foundation upon which my career is built. Their values are the silent logic behind every system I architect.
                    </p>
                </section>
            </div>

          
            <footer className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs font-mono text-zinc-500 uppercase">Always betting on the web.</p>
                <a
                    href="mailto:info.sudipta.nit@gmail.com"
                    className="text-sm font-bold text-foreground hover:text-blue-600 transition-colors"
                >
                    Get in touch →
                </a>
            </footer>
        </section>
    );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Sudipta",
    description: "Software Architect specializing in Engineering and Intelligence.",
};

export default function AboutPage() {
    return (
        <section className="max-w-2xl mx-auto py-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">

            {/* 1. Impactful Header */}
            <div className="space-y-4 mb-16">
                <h1 className="text-4xl font-semibold tracking-tight text-foreground leading-[1.1]">
                    I don&apos;t just write code; I architect digital ecosystems where <span className="text-zinc-400">logic meets intelligence.</span>
                </h1>
            </div>

            {/* 2. Narrative Content */}
            <div className="space-y-12 text-zinc-600 dark:text-zinc-400">

                {/* The Brief */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3 text-foreground mb-6">
                        <span className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
                        <span className="text-sm font-medium uppercase tracking-widest">The Brief</span>
                    </div>
                    <p className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
                        Currently based in Kolkata, I specialize in the intersection of <strong>Engineering and Intelligence</strong>.
                        I bridge the gap between visual intent and technical architecture, ensuring that every line of code—from a
                        PostgreSQL schema to a fine-tuned ML model—serves a specific user purpose.
                    </p>
                    <p className="leading-relaxed">
                        My background—spanning from a foundation in software and core programming at
                        <strong> BPC Institute of Technology</strong> to advanced computational theory and Machine Learning at
                        <strong> Narula Institute of Technology</strong>—has shaped my belief that software should be as
                        reliable as it is beautiful.
                    </p>
                </section>

                {/* Invisible Architecture Quote */}
                <section className="py-2">
                    <blockquote className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 space-y-4 font-light">
                        <p className="text-foreground/80 text-xl leading-snug italic">
                            “I believe the best technical architectures are invisible.
                            They empower developers to move fast while ensuring the user
                            never has to think about the complexity.”
                        </p>
                    </blockquote>
                </section>

                {/* Acknowledgment Section (Replaces Philosophy) */}
                <section className="space-y-4 pt-4">
                    <div className="flex items-center gap-3 text-foreground mb-6">
                        <span className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
                        <span className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">Acknowledgement</span>
                    </div>
                    <p className="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 italic">
                        Beyond the technical milestones and academic pursuits, my journey is a reflection of my roots. I am profoundly <strong>honoured to be their son</strong>.
                    </p>
                    <p className="leading-relaxed">
                        Any impact I make through my work is a tribute to my parents, whose unwavering belief and silent sacrifices provided the foundation upon which my career is built. Their values are the silent logic behind every system I architect.
                    </p>
                </section>
            </div>

            {/* 3. Footer / Signature */}
            <footer className="mt-20 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-zinc-400">
                    <span className="h-px w-6 bg-zinc-300 dark:bg-zinc-700" />
                    <span className="text-xs font-mono italic tracking-tighter">Always betting on the web.</span>
                </div>

                <a
                    href="mailto:your-email@example.com"
                    className="text-sm font-medium text-foreground hover:text-zinc-400 transition-colors flex items-center gap-2"
                >
                    Get in touch <span>→</span>
                </a>
            </footer>

        </section>
    );
}
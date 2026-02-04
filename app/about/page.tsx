export default function AboutPage() {
    return (
        <section className="max-w-2xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">

            {/* Header: Terminal Path Style */}
            <div className="space-y-4 mb-16">
                <h1 className="text-3xl md:text-4xl font-mono font-bold tracking-tight text-foreground">
                    ~/sudipta-sarkar/about
                </h1>
            </div>

            <div className="space-y-12">
                {/* Main Content / The Brief */}
                <section className="space-y-4 text-foreground/90">
                    <div className="flex items-center gap-3 mb-6">
                        {/* Line */}
                        <span className="h-px w-8 bg-foreground" />
                        {/* Dots + Label */}
                        <span className="text-sm font-bold uppercase tracking-widest text-foreground">
                            ... The Brief
                        </span>
                    </div>

                    <p className="text-lg leading-relaxed">
                        Currently finishing my B.Tech in Computer Science, I spend my time at the intersection of data and the web. I enjoy turning complex ideas into functional, user-friendly applications like <strong className="text-foreground font-bold">Fabricanova</strong>.
                    </p>

                    <p className="leading-relaxed opacity-80 text-foreground">
                        My journey started with a Diploma at <strong className="text-foreground font-bold underline decoration-zinc-300">BPCIT</strong> and continues today with a focus on WebML and Python Backend.
                    </p>

                    <p className="leading-relaxed opacity-80 text-foreground">
                        Right now, I am spending my time mastering the depths of <span className="text-foreground font-medium">Python backend </span> and the intricate details of <span className="text-foreground font-medium">Machine Learning models</span>.
                    </p>
                </section>

                {/* Quote / Philosophy */}
                <section className="py-2">
                    <blockquote className="border-l-4 border-foreground pl-6 space-y-4">
                        <p className="text-foreground text-xl leading-snug italic font-medium">
                            “For me, coding is about more than just logic; it&apos;s about building something that makes an impact.”
                        </p>
                    </blockquote>
                </section>

                {/* Acknowledgement */}
                <section className="space-y-4 pt-4 text-foreground/90">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-8 bg-blue-600" />
                        <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">Acknowledgement</span>
                    </div>
                    <p className="text-lg leading-relaxed italic">
                        Beyond the technical milestones and academic pursuits, I pursue this path to honor the unwavering support of my parents, <strong className="text-foreground font-bold">Mrinal Kr. Sarkar</strong> and <strong className="text-foreground font-bold">Soma Sarkar</strong>.
                    </p>
                </section>
            </div>

            {/* Footer */}
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
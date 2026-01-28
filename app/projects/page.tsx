import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Fabricanova : Reinventing Style with AI",
        description: "A AI-powered platform for fashion designers, blending generative AI, technical sketching, and collaborative tools.",
        stack: ["Stable Diffusion", "React", "SupaBase"],
        link: "https://fabricanova.vercel.app/"
        
    },
    {
        title: "FileStacker - A Modern SaaS WebApplication",
        description: "A SaaS-based intelligent file management system , with python backend and React.",
        stack: ["Python", "FastApi", "PostGresSQL", "React"],
        repo: "A SaaS-based intelligent file management system , with python backend and React."
    },
    {
        title: "PixelCraft - Image Editor",
        description: "PixelCraft is a powerful, web-based image editor built with Flask and Tailwind CSS.",
        stack: ["Python", "HTML", "Tailwind CSS"],
        link: "https://pixelcraft-uou2.onrender.com/",
        repo: "https://github.com/itzsudipta/PixelCraft", 
    }
];

export default function Projects() {
    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
                <p className="text-zinc-500">Selected works demonstrating architectural complexity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="group flex flex-col justify-between border border-border bg-card p-6 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                    >
                        <div>
                            <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                                {project.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="inline-flex items-center rounded-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300 font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Updated Link Logic */}
                        <div className="mt-8 flex items-center gap-4">
                            {/* Logic: Show Live Demo ONLY if project.link exists */}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-zinc-500 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </a>
                            )}

                            {/* Logic: Show Source ONLY if project.repo exists */}
                            {project.repo && (
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-zinc-500 transition-colors"
                                >
                                    <Github className="w-4 h-4" /> Source
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
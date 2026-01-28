import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <div className="max-w-xl space-y-12">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
                <p className="text-zinc-500">Let's discuss systems, design, and architecture.</p>
            </div>

            <div className="grid gap-4">
                <a
                    href="mailto:email@example.com"
                    className="flex items-center justify-between p-4 border border-border rounded-lg bg-card hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-zinc-500" />
                        <span className="font-medium text-foreground">Email Me</span>
                    </div>
                    <span className="text-sm text-zinc-500">info.sudipta.nit@gmail.com</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/infosudipta/"
                    className="flex items-center justify-between p-4 border border-border rounded-lg bg-card hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <Linkedin className="w-5 h-5 text-zinc-500" />
                        <span className="font-medium text-foreground">LinkedIn</span>
                    </div>
                    <span className="text-sm text-zinc-500">Connect</span>
                </a>

                <a
                    href="https://github.com/itzsudipta"
                    className="flex items-center justify-between p-4 border border-border rounded-lg bg-card hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <Github className="w-5 h-5 text-zinc-500" />
                        <span className="font-medium text-foreground">GitHub</span>
                    </div>
                    <span className="text-sm text-zinc-500">Follow</span>
                </a>
            </div>
        </div>
    );
}
const skillCategories = [
    {
        category: "Frontend Architecture",
        items: ["HTML" , "CSS" ,"JS"]
    },
    {
        category: "Backend & Database",
        items: ["FastAPI", "PostgreSQL","MySQL"]
    },
    {
        category: "Cloud & Tools",
        items: ["AWS", "VS Code", "Sublime", "PostMan","Google Colab","Vercel"]
    }
];

export default function Skills() {
    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-tight">Technical Stack</h2>
                <p className="text-zinc-500">Tools and technologies I use to build production systems.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {skillCategories.map((section) => (
                    <div key={section.category} className="space-y-4">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500">{section.category}</h3>
                        <ul className="space-y-3">
                            {section.items.map((item) => (
                                <li key={item} className="flex items-center text-foreground border-b border-border pb-3 last:border-0">
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
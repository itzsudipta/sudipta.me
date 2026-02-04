import {
    SiHtml5, SiCss3, SiJavascript, SiFastapi, SiPostgresql,
    SiMysql, SiAmazonwebservices, SiVsco as SiVisualstudiocode,
    SiSublimetext, SiPostman, SiGooglecolab, SiVercel
} from "react-icons/si";

const getIcon = (item: string) => {
    switch (item) {
        case "HTML": return <SiHtml5 className="text-[#E34F26]" />;
        case "CSS": return <SiCss3 className="text-[#1572B6]" />;
        case "JS": return <SiJavascript className="text-[#F7DF1E]" />;
        case "FastAPI": return <SiFastapi className="text-[#05998B]" />;
        case "PostgreSQL": return <SiPostgresql className="text-[#4169E1]" />;
        case "MySQL": return <SiMysql className="text-[#4479A1]" />;
        case "AWS": return <SiAmazonwebservices className="text-[#FF9900]" />;
        case "VS Code": return <SiVisualstudiocode className="text-[#007ACC]" />;
        case "Sublime": return <SiSublimetext className="text-[#FF9800]" />;
        case "PostMan": return <SiPostman className="text-[#FF6C37]" />;
        case "Google Colab": return <SiGooglecolab className="text-[#F9AB00]" />;
        case "Vercel": return <SiVercel className="text-current" />;
        default: return null;
    }
};

const skillCategories = [
    {
        category: "Frontend Architecture",
        items: ["HTML", "CSS", "JS"]
    },
    {
        category: "Backend & Database",
        items: ["FastAPI", "PostgreSQL", "MySQL"]
    },
    {
        category: "Cloud & Tools",
        items: ["AWS", "VS Code", "Sublime", "PostMan", "Google Colab", "Vercel"]
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
                                    {/* Added only this span for the icon */}
                                    <span className="mr-3 text-lg">
                                        {getIcon(item)}
                                    </span>
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
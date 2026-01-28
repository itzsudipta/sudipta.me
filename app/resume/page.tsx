import { Download } from "lucide-react";

export default function Resume() {
    const resumePath = "/MyData/SudiptaSarkarResumeCS.pdf";

    return (
        <div className="space-y-12">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-semibold tracking-tight">Resume</h2>
                <a
                    href={resumePath}
                    download="Sudipta_Sarkar_Resume.pdf"
                    className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-all"
                >
                    <Download className="w-4 h-4" /> Download PDF
                </a>
            </div>

            {/* High-End PDF Viewer */}
            <div className="w-full h-200 border border-border rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-900 shadow-inner relative">
                <iframe
                    src={`${resumePath}#view=FitH`}
                    className="w-full h-full border-none"
                    title="Sudipta Sarkar Resume"
                >
                    {/* Fallback if the browser cannot render the iframe */}
                    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                        <p className="text-zinc-500 mb-4">Your browser does not support inline PDFs.</p>
                        <a href={resumePath} className="text-blue-500 underline">
                            Click here to view the PDF directly.
                        </a>
                    </div>
                </iframe>
            </div>
        </div>
    );
}
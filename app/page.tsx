import Link from "next/link";
import Image from "next/image"; 
import { ArrowRight, FileText } from "lucide-react";

export default function Home() {
  return (
    <section className="flex items-center justify-center min-h-[80vh] animate-in fade-in zoom-in-95 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        
        <div className="space-y-8 order-2 md:order-1">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300 tracking-wide uppercase">
              Available for hire
            </span>
          </div>

          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground leading-[1.1]">
            Engineering logic, <br />
            <span className="text-muted-foreground">not just syntax.</span>
          </h1>

          
          <p className="text-lg text-foreground/90 max-w-lg leading-relaxed">
            I am <strong className="text-foreground font-semibold">Sudipta Sarkar</strong>,
            a Lead Web & ML Developer. I architect high-performance systems that merge
            <span className="text-foreground font-medium"> computational depth</span> with
            <span className="text-foreground font-medium"> visual clarity.</span>
          </p>

          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition-all"
            >
              View Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium text-foreground hover:text-blue-600 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Resume
            </Link>
          </div>

          <div className="pt-6">
            <p className="text-xs text-zinc-400 font-mono tracking-wide">
              STACK: Python · PostgresSQL · ML
            </p>
          </div>
        </div>

       
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm">

           
            <Image
              src="/MyData/Sudipta.jpg"
              alt="Sudipta Sarkar"
              fill
              priority
              className="object-cover"
            />

          </div>
        </div>

      </div>
    </section>
  );
}
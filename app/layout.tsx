import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme-provider"; // 👈 Import this

export const metadata: Metadata = {
  title: "Sudipta Sarkar | ML Dev",
  description: "Student at NiT Kolkata",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 👇 Ensure suppressHydrationWarning is here
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen bg-background text-foreground flex flex-col`}>
        {/* 👇 Wrap everything inside ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 md:px-8 md:py-20">
            {children}
          </main>
          <footer className="w-full border-t border-border py-4 text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} Sudipta Sarkar. Built with simplicity.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
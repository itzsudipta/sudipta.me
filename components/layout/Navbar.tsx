"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Academic", path: "/experience" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        // Sticky container
        <nav className="sticky top-0 z-100 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-8">

                {/* Logo - Fixed width container to prevent shift */}
                <div className="flex-1 md:flex-none">
                    <Link href="/" className="font-bold tracking-tight text-foreground text-lg">
                        Sudipta.
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-foreground",
                                pathname === item.path ? "text-foreground" : "text-zinc-500"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* Theme Toggle Wrapper (Prevents jumping on load) */}
                    <div className="w-9 h-9 flex items-center justify-center">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 text-zinc-500 hover:text-foreground transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-2 md:hidden">
                    <div className="w-9 h-9 flex items-center justify-center">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="text-zinc-500"
                            >
                                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                        )}
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-foreground"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown - RESTORED STYLE + FIXED LOGO SHIFT */}
            {isOpen && (
                <div className="absolute top-16 left-0 right-0 z-50 w-full border-b border-t border-border bg-zinc-50 dark:bg-zinc-900 px-6 py-8 space-y-5 md:hidden animate-in slide-in-from-top-2 shadow-2xl">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "block text-base font-medium transition-colors",
                                pathname === item.path
                                    ? "text-blue-600 dark:text-blue-400" // Active color
                                    : "text-zinc-600 dark:text-zinc-400" // Inactive color
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
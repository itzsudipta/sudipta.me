import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names safely.
 * 
 * Usage:
 * cn("bg-black text-white", condition && "bg-red-500", className)
 * 
 * This ensures that if 'bg-red-500' is applied, it overrides 'bg-black'
 * instead of causing a CSS conflict.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
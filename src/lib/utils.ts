import { type ClassValue, clsx } from "clsx";

// Lightweight cn utility without tailwind-merge for zero extra dependencies
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}
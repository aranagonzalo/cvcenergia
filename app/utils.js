import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export function cn(inputs) {
    twMerge(clsx(inputs));
}

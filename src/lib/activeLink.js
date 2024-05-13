"use client"

import { usePathname } from "next/navigation"

export function activelink(path) {
    const pathname = usePathname();
    if (pathname === path) {
        return 'active'
    } else {
        return ''
    }
}
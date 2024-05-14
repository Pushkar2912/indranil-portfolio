export function activelink(pathname, path) {
    if (pathname === path) {
        return 'active'
    } else {
        return ''
    }
}
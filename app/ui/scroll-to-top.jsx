'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Only scroll to top if navigating to a new page without hash
        // Don't scroll to top if there's a hash in the URL (section navigation)
        // Don't scroll if we're doing custom section navigation
        if (!window.location.hash && !window.__skipScrollRestore) {
            // Add a small delay to ensure any custom scrolling has completed
            setTimeout(() => {
                if (!window.__skipScrollRestore) {
                    window.scrollTo(0, 0);
                }
            }, 50);
        }
    }, [pathname]);

    return null;
}

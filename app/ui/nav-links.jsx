'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

const homeSections = [
  { name: 'Home', href: '#hero', isHome: true },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Resume', href: '/resume', isLink: true },
];

export default function NavLinks() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = homeSections
        .filter(section => section.href.startsWith('#'))
        .map(section => {
          const element = document.querySelector(section.href);
          if (element) {
            const rect = element.getBoundingClientRect();
            return {
              id: element.id,
              top: rect.top,
              bottom: rect.bottom,
              height: rect.height
            };
          }
          return null;
        })
        .filter(Boolean);

      // Find the section that's most visible in the viewport
      const viewportHeight = window.innerHeight;
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      const viewportCenter = (viewportHeight / 2) + headerHeight;

      let activeId = 'hero'; // Default to hero

      for (const section of sections) {
        const sectionCenter = section.top + (section.height / 2);
        const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);

        // If this section is in the viewport and closer to center
        if (section.top <= viewportCenter && section.bottom >= viewportCenter) {
          activeId = section.id;
          break;
        }
        // If this section is above the center, it might be the active one
        else if (section.bottom > 0 && section.top < viewportCenter) {
          activeId = section.id;
        }
      }

      setActiveSection(activeId);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      if (href === '#hero') {
        // Home button scrolls to top of page
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }

      const element = document.querySelector(href);
      if (element) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        const extraOffset = 20; // Additional spacing
        const elementPosition = element.offsetTop - headerHeight - extraOffset;

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleNavClick = (href) => {
    // Close mobile menu when clicking on a link
    setIsMobileMenuOpen(false);

    if (isHomePage) {
      scrollToSection(href);
    } else {
      // Set a flag to prevent scroll restoration from interfering
      window.__skipScrollRestore = true;

      // Navigate to home page without hash
      router.push('/');

      // Wait for navigation to complete, then scroll to section
      const scrollToSectionWithOffset = () => {
        if (href === '#hero') {
          // Home button scrolls to exact top without any offset
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });

          // Clear the flag after successful scroll
          setTimeout(() => {
            window.__skipScrollRestore = false;
          }, 1000);
        } else {
          // Other sections get proper offset
          const element = document.querySelector(href);
          if (element) {
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 80;
            const extraOffset = 20;
            const elementPosition = element.offsetTop - headerHeight - extraOffset;

            // Scroll directly to the correct position
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });

            // Clear the flag after successful scroll
            setTimeout(() => {
              window.__skipScrollRestore = false;
            }, 1000);
          } else {
            // Retry if element not found
            setTimeout(scrollToSectionWithOffset, 100);
          }
        }
      };

      // Start scrolling after navigation completes
      setTimeout(scrollToSectionWithOffset, 400);
    }
  };

  return (
    <>
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden order-first">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md text-gray-400 hover:text-gray-300 hover:bg-gray-800 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className={`fixed top-0 left-0 h-full w-64 bg-[--color-black] border-r border-gray-700 shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="px-8 py-6">
              <div className="flex justify-start items-center mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col space-y-4">
                {homeSections.map((section) => {
                  if (section.isLink) {
                    return (
                      <Link
                        key={section.name}
                        href={section.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={clsx(
                          'py-3 px-4 rounded-md text-base font-medium transition-colors',
                          {
                            'text-[--color-secondary] bg-gray-800': pathname === section.href,
                            'text-gray-300 hover:text-white hover:bg-gray-800': pathname !== section.href,
                          }
                        )}
                      >
                        {section.name}
                      </Link>
                    );
                  }

                  // Show section navigation on all pages, but only make them functional on home page
                  const isActive = isHomePage && (section.isHome ? activeSection === 'hero' || activeSection === '' : activeSection === section.href.substring(1));

                  return (
                    <button
                      key={section.name}
                      onClick={() => handleNavClick(section.href)}
                      className={clsx(
                        'py-3 px-4 rounded-md text-base font-medium text-left transition-colors',
                        {
                          'text-[--color-secondary] bg-gray-800': isActive,
                          'text-gray-300 hover:text-white hover:bg-gray-800': !isActive,
                        }
                      )}
                    >
                      {section.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-4 lg:gap-6 text-base lg:text-lg font-medium">
        {homeSections.map((section) => {
          if (section.isLink) {
            return (
              <Link
                key={section.name}
                href={section.href}
                className={clsx(
                  'hover:text-gray-300',
                  {
                    'text-[--color-secondary] border-b-2 border-[--color-secondary]': pathname === section.href,
                    'text-gray-400': pathname !== section.href,
                  }
                )}
              >
                {section.name}
              </Link>
            );
          }

          // Show section navigation on all pages, but only make them functional on home page
          const isActive = isHomePage && (section.isHome ? activeSection === 'hero' || activeSection === '' : activeSection === section.href.substring(1));

          return (
            <button
              key={section.name}
              onClick={() => handleNavClick(section.href)}
              className={clsx(
                'transition-colors',
                {
                  'text-[--color-secondary] border-b-2 border-[--color-secondary]': isActive,
                  'text-gray-400 hover:text-gray-300': !isActive,
                }
              )}
            >
              {section.name}
            </button>
          );
        })}
      </nav>
    </>
  );
}

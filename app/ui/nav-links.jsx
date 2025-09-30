'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Resume', href: '/resume' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-6 text-lg font-medium">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'hover:text-gray-300',
            {
              'text-[--color-secondary] border-b-2 border-[--color-secondary]': pathname === link.href,
              'text-gray-400': pathname !== link.href,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

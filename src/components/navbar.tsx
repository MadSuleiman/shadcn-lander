'use client';

import { useEffect, useState } from 'react';

import { Menu } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60'
          : 'bg-transparent'
      }`}
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 justify-between'>
          <div className='flex'>
            <div className='flex flex-shrink-0 items-center'>
              <span className='text-2xl font-bold text-primary'>PPE</span>
            </div>
          </div>
          <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground transition-colors hover:text-primary'
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='-mr-2 flex items-center sm:hidden'>
            <Button
              variant='ghost'
              className='inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className='h-6 w-6' aria-hidden='true' />
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='sm:hidden'>
          <div className='space-y-1 pb-3 pt-2'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='block py-2 pl-3 pr-4 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary'
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

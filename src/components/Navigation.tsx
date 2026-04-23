'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Egg } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Sobre el Proyecto' },
  { href: '/impacto', label: 'Avances' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-lp-yellow text-lp-black rounded-lg p-1.5 group-hover:bg-lp-yellowLight transition-colors">
              <Egg size={20} />
            </div>
            <span className="text-lg font-bold text-lp-black">LibreIncu</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === item.href
                  ? 'bg-lp-gray text-lp-black'
                  : 'text-lp-grayDark hover:text-lp-black hover:bg-lp-white'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-lp-grayDark hover:text-lp-black hover:bg-lp-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div id="mobile-navigation" className="lg:hidden bg-white border-t border-lp-gray py-2">
          <div className="max-w-7xl mx-auto px-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === item.href
                  ? 'bg-lp-gray text-lp-black'
                  : 'text-lp-grayDark hover:text-lp-black hover:bg-lp-white'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-walnut/95 backdrop-blur-md shadow-lg shadow-walnut/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container-narrow">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-display text-3xl lg:text-4xl font-bold text-gold tracking-tight">
                NN
              </span>
              <div className="hidden sm:block">
                <span className="block text-xs font-heading font-semibold tracking-[0.2em] uppercase text-ivory/90">
                  Signs & Graphics
                </span>
                <span className="block text-[10px] font-heading tracking-[0.15em] uppercase text-champagne/60">
                  Phoenix, Arizona
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-heading font-medium tracking-wide transition-colors duration-300 ${
                      active
                        ? 'text-gold'
                        : 'text-ivory/80 hover:text-gold'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+16027148350"
                className="flex items-center gap-2 text-sm text-champagne/80 hover:text-gold transition-colors font-heading"
              >
                <Phone className="w-4 h-4" />
                (602) 714-8350
              </a>
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-gold text-walnut text-sm font-heading font-semibold rounded tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-ivory/90 hover:text-gold transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-walnut lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {links.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobile}
                      className={`text-2xl font-heading font-medium tracking-wide transition-colors ${
                        active ? 'text-gold' : 'text-ivory/80 hover:text-gold'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 flex flex-col items-center gap-4"
              >
                <a
                  href="tel:+16027148350"
                  className="flex items-center gap-2 text-champagne/80 font-heading"
                >
                  <Phone className="w-5 h-5" />
                  (602) 714-8350
                </a>
                <Link
                  href="/contact"
                  onClick={closeMobile}
                  className="px-8 py-3 bg-gold text-walnut font-heading font-semibold rounded tracking-wide"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

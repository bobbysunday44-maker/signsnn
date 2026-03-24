import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Channel Letter Signs',
  'Vehicle Wraps',
  'LED & Digital Signs',
  'Banners & Displays',
  'Window Graphics',
  'Monument Signs',
  'ADA & Wayfinding',
  'Large Format Printing',
];

export default function Footer() {
  return (
    <footer className="bg-walnut text-ivory/80">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-bark via-gold to-bark" />

      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-4xl font-bold text-gold">NN</span>
              <span className="block text-xs font-heading tracking-[0.2em] uppercase text-champagne/60 mt-1">
                Signs & Graphics
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-ivory/60 mb-6 max-w-xs">
              Crafting premium signage solutions for Phoenix businesses since 2014.
              From concept to installation, we bring your brand to life.
            </p>
            <div className="flex items-center gap-1 text-xs text-champagne/40 font-heading tracking-wider uppercase">
              <span className="w-8 h-px bg-gold/30" />
              Est. 2014
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm tracking-[0.15em] uppercase text-gold mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-sm tracking-[0.15em] uppercase text-gold mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm tracking-[0.15em] uppercase text-gold mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=4827+E+McDowell+Rd+Suite+104+Phoenix+AZ+85008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-ivory/60 hover:text-gold transition-colors group"
                >
                  <MapPin className="w-4 h-4 mt-0.5 text-gold/60 group-hover:text-gold shrink-0" />
                  <span>4827 E McDowell Rd<br />Suite 104<br />Phoenix, AZ 85008</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:6027148350"
                  className="flex items-center gap-3 text-sm text-ivory/60 hover:text-gold transition-colors group"
                >
                  <Phone className="w-4 h-4 text-gold/60 group-hover:text-gold shrink-0" />
                  (602) 714-8350
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@signsnn.com"
                  className="flex items-center gap-3 text-sm text-ivory/60 hover:text-gold transition-colors group"
                >
                  <Mail className="w-4 h-4 text-gold/60 group-hover:text-gold shrink-0" />
                  info@signsnn.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ivory/60">
                <Clock className="w-4 h-4 mt-0.5 text-gold/60 shrink-0" />
                <div>
                  <p>Mon - Fri: 7:00 AM - 5:00 PM</p>
                  <p>Sat: 9:00 AM - 1:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="container-narrow py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40 font-heading">
            &copy; {new Date().getFullYear()} NN Signs & Graphics. All rights reserved.
          </p>
          <p className="text-xs text-ivory/30 font-heading">
            Designed with pride in Phoenix, AZ
          </p>
        </div>
      </div>
    </footer>
  );
}

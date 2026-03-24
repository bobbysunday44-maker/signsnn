'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import {
  ArrowRight,
  Award,
  Layers,
  MapPin,
  Grid3X3,
  Quote,

  Ruler,
  Zap,
  CalendarClock,
} from 'lucide-react';

/* ─── Data ─── */

const portfolioStats = [
  { value: '200+', label: 'Projects Completed', icon: Layers },
  { value: '8', label: 'Specializations', icon: Grid3X3 },
  { value: '50+', label: 'Cities Served', icon: MapPin },
  { value: '12', label: 'Years Experience', icon: Award },
];

const categories = [
  'All',
  'Channel Letters',
  'Vehicle Wraps',
  'LED Signs',
  'Monument Signs',
  'Banners',
  'Window Graphics',
] as const;

type Category = (typeof categories)[number];

interface Project {
  src: string;
  title: string;
  category: Exclude<Category, 'All'>;
  description: string;
}

const projects: Project[] = [
  {
    src: '/images/projects/channel-letters-1.png',
    title: 'Sunrise Bistro Storefront',
    category: 'Channel Letters',
    description: 'Halo-lit channel letters with brushed aluminum returns, creating an inviting warm glow for this popular breakfast spot.',
  },
  {
    src: '/images/projects/vehicle-wrap-1.png',
    title: 'Valley Plumbing Fleet',
    category: 'Vehicle Wraps',
    description: 'Full fleet wrap for 12 service vans featuring bold branding and contact information visible from 100+ feet.',
  },
  {
    src: '/images/projects/led-sign-1.png',
    title: 'Mesa Auto Gallery',
    category: 'LED Signs',
    description: 'High-resolution full-color LED display with remote content management for daily promotions and inventory highlights.',
  },
  {
    src: '/images/projects/pylon-sign-1.png',
    title: 'Chandler Business Center',
    category: 'Monument Signs',
    description: 'Multi-tenant pylon sign with individually illuminated panels and a commanding 18-foot height for freeway visibility.',
  },
  {
    src: '/images/projects/monument-sign-1.png',
    title: 'Scottsdale Medical Plaza',
    category: 'Monument Signs',
    description: 'Stone-clad monument sign with integrated LED backlit lettering and ADA-compliant wayfinding directionals.',
  },
  {
    src: '/images/projects/banner-1.png',
    title: 'Phoenix Food Festival',
    category: 'Banners',
    description: 'Large-format mesh banners and pole banners spanning three city blocks for the annual downtown food festival.',
  },
  {
    src: '/images/projects/window-graphics-1.png',
    title: 'Tempe Yoga Studio',
    category: 'Window Graphics',
    description: 'Frosted vinyl window graphics providing privacy while showcasing the brand with elegant die-cut logo elements.',
  },
  {
    src: '/images/projects/ada-wayfinding-1.png',
    title: 'Desert Ridge Hospital',
    category: 'Window Graphics',
    description: 'Comprehensive window and interior graphics system with privacy film and branded wayfinding elements throughout.',
  },
  {
    src: '/images/projects/channel-letters-1.png',
    title: 'Gilbert Shopping Center',
    category: 'Channel Letters',
    description: 'Front-lit channel letters with LED illumination for a multi-tenant retail center anchoring a busy intersection.',
  },
  {
    src: '/images/projects/vehicle-wrap-1.png',
    title: 'Arizona Solar Solutions',
    category: 'Vehicle Wraps',
    description: 'Eye-catching partial wraps featuring solar panel imagery and a clean modern design across a fleet of trucks.',
  },
  {
    src: '/images/projects/led-sign-1.png',
    title: 'Glendale Entertainment District',
    category: 'LED Signs',
    description: 'Dual-sided programmable LED sign with vibrant full-color display for event promotions and tenant advertising.',
  },
  {
    src: '/images/projects/monument-sign-1.png',
    title: 'Paradise Valley Resort',
    category: 'Monument Signs',
    description: 'Luxury resort entry monument with natural stone base, bronze lettering, and landscape-integrated lighting.',
  },
];

const caseStudyStats = [
  { icon: Ruler, label: '12ft Height' },
  { icon: Zap, label: 'LED Illuminated' },
  { icon: CalendarClock, label: '3 Week Install' },
];

const beforeAfterProjects = [
  {
    title: 'Channel Letters Transformation',
    subtitle: 'Sunrise Bistro, Phoenix AZ',
    src: '/images/projects/channel-letters-1.png',
    description: 'Replaced outdated flat signage with custom halo-lit channel letters, dramatically improving nighttime visibility and brand presence.',
  },
  {
    title: 'Vehicle Wrap Transformation',
    subtitle: 'Valley Plumbing, Mesa AZ',
    src: '/images/projects/vehicle-wrap-1.png',
    description: 'Transformed a plain white service van into a mobile billboard with a full vinyl wrap that generates leads on every route.',
  },
];

/* ─── Page ─── */

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-walnut">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(201,169,110,0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-walnut via-espresso/40 to-walnut" />

        <div className="relative z-10 container-narrow w-full pt-32 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-gold/40" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-gold/70">
                Featured Work
              </span>
              <span className="w-8 h-px bg-gold/40" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight text-ivory mb-8"
            >
              Our <span className="text-gold italic">Portfolio</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg md:text-xl text-ivory/60 leading-relaxed max-w-2xl mx-auto font-body"
            >
              A showcase of craftsmanship, precision, and creative vision.
              Every project tells a story of a brand transformed through
              exceptional signage.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════ PORTFOLIO STATS ══════ */}
      <section className="bg-ivory relative overflow-hidden">
        <div className="container-narrow py-14 md:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {portfolioStats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
                <stat.icon className="w-6 h-6 text-gold mx-auto mb-3" />
                <div className="font-display text-3xl md:text-4xl font-bold text-gold tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-heading tracking-[0.15em] uppercase text-charcoal/60 mt-2">
                  {stat.label}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FILTER + PROJECT GRID ══════ */}
      <section className="section-padding bg-linen">
        <div className="container-narrow">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="gold-line" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                Browse Projects
              </span>
              <span className="gold-line" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4">
              Our <span className="text-gold italic">Work</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio by category. Each project represents our
              commitment to quality materials, expert installation, and designs
              that drive real business results.
            </p>
          </ScrollReveal>

          {/* Filter Tabs */}
          <ScrollReveal className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded text-sm font-heading font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    activeFilter === cat
                      ? 'bg-gold text-walnut shadow-lg shadow-gold/25'
                      : 'bg-ivory text-brown-text border border-nude/60 hover:border-gold/40 hover:text-bark'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Project Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="group bg-ivory rounded-lg overflow-hidden border border-nude/60 hover:border-gold/40 hover:shadow-xl hover:shadow-bark/10 transition-all duration-500">
                    {/* Image */}
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image
                        src={project.src}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-walnut/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-walnut/80 backdrop-blur-sm text-[10px] font-heading font-semibold tracking-[0.15em] uppercase text-gold rounded">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-heading font-semibold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ══════ FEATURED CASE STUDY ══════ */}
      <section className="section-padding bg-ivory">
        <div className="container-narrow">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="gold-line" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                Case Study
              </span>
              <span className="gold-line" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              Featured <span className="text-gold italic">Project</span>
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl shadow-bark/20">
                  <Image
                    src="/images/projects/monument-sign-1.png"
                    alt="Desert Ridge Business Park monument sign by NN Signs"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Accent Frame */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-lg -z-10" />
              </div>
            </ScrollReveal>

            {/* Right: Content */}
            <ScrollReveal direction="right">
              <span className="inline-block px-3 py-1 bg-gold/10 text-xs font-heading font-semibold tracking-[0.15em] uppercase text-gold rounded mb-4">
                Monument Signs
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal leading-tight mb-6">
                Desert Ridge Business Park
              </h3>

              <div className="space-y-5 mb-8">
                <div>
                  <h4 className="font-heading font-semibold text-bark text-sm uppercase tracking-wider mb-1">
                    Challenge
                  </h4>
                  <p className="text-brown-text leading-relaxed">
                    The property management group needed commanding entry signage
                    that would be clearly visible from the adjacent freeway while
                    maintaining the upscale aesthetic of the business park.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-bark text-sm uppercase tracking-wider mb-1">
                    Solution
                  </h4>
                  <p className="text-brown-text leading-relaxed">
                    We designed and fabricated a 12-foot illuminated monument sign
                    featuring LED backlit channel letters on a natural stone-clad
                    base, complemented by landscape-integrated accent lighting.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-bark text-sm uppercase tracking-wider mb-1">
                    Result
                  </h4>
                  <p className="text-brown-text leading-relaxed">
                    The sign became a recognized Valley landmark, delivering a
                    35% increase in visitor wayfinding success and establishing
                    the business park&apos;s premium brand identity.
                  </p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-4">
                {caseStudyStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3 px-5 py-3 rounded border-2 border-gold/30 bg-gold/5"
                  >
                    <stat.icon className="w-5 h-5 text-gold" />
                    <span className="text-sm font-heading font-semibold text-charcoal">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ BEFORE & AFTER ══════ */}
      <section className="section-padding bg-linen">
        <div className="container-narrow">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="gold-line" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                Transformations
              </span>
              <span className="gold-line" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4">
              The NN Signs <span className="text-gold italic">Transformation</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              See the dramatic difference professional signage makes. Every
              project starts with a vision and ends with a brand elevated.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10">
            {beforeAfterProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.15}>
                <div className="bg-ivory rounded-lg overflow-hidden border border-nude/60 shadow-sm">
                  {/* Before / After Images */}
                  <div className="grid grid-cols-2">
                    {/* Before */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.src}
                        alt={`${project.title} - Before`}
                        fill
                        className="object-cover"
                        style={{ filter: 'grayscale(100%) brightness(0.7)' }}
                      />
                      <div className="absolute inset-0 bg-walnut/20" />
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-block px-3 py-1 bg-walnut/80 backdrop-blur-sm text-[10px] font-heading font-semibold tracking-[0.15em] uppercase text-ivory/80 rounded">
                          Before
                        </span>
                      </div>
                    </div>
                    {/* After */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.src}
                        alt={`${project.title} - After`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-block px-3 py-1 bg-gold/90 backdrop-blur-sm text-[10px] font-heading font-semibold tracking-[0.15em] uppercase text-walnut rounded">
                          After
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-charcoal mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-heading tracking-wider uppercase text-caramel mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIAL ══════ */}
      <section className="section-padding bg-walnut relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(201,169,110,0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container-narrow relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              {/* Gold Quote Mark */}
              <Quote className="w-14 h-14 text-gold/30 mx-auto mb-8" />

              <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-ivory leading-relaxed italic mb-10">
                &ldquo;The monument sign NN Signs built for our business park has
                become a Valley landmark. Their attention to detail and project
                management was impeccable from start to finish.&rdquo;
              </blockquote>

              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="w-8 h-px bg-gold/40" />
                <span className="font-heading font-semibold text-gold text-sm tracking-wide">
                  James Thornton
                </span>
                <span className="w-8 h-px bg-gold/40" />
              </div>
              <p className="text-ivory/50 text-sm font-heading">
                Property Manager, Desert Ridge Business Park
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="section-padding bg-espresso relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-walnut via-espresso to-walnut" />
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="container-narrow relative z-10 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold/40" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-gold/70">
                Start Your Project
              </span>
              <span className="w-8 h-px bg-gold/40" />
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-tight mb-6">
              Have a Project
              <br />
              in <span className="text-gold italic">Mind</span>?
            </h2>
            <p className="text-ivory/50 max-w-xl mx-auto leading-relaxed mb-10 text-lg">
              Let&apos;s bring your vision to life. From initial concept to final
              installation, our team delivers signage that exceeds expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold text-walnut font-heading font-semibold rounded tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/25 animate-pulse-gold group"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-ivory/20 text-ivory font-heading font-medium rounded tracking-wide hover:border-gold hover:text-gold transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

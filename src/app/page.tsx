'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import {
  ArrowRight,
  ChevronDown,
  Layers,
  Truck,
  Lightbulb,
  Flag,
  PanelTop,
  Landmark,
  Accessibility,
  Printer,
  Shield,
  Clock,
  Award,
  Users,
  Star,
  Quote,
} from 'lucide-react';

/* ─── Data ─── */

const stats = [
  { value: '12+', label: 'Years of Excellence', icon: Award },
  { value: '8,000+', label: 'Signs Installed', icon: Layers },
  { value: '1,500+', label: 'Happy Clients', icon: Users },
  { value: '98%', label: 'Client Satisfaction', icon: Star },
];

const services = [
  { icon: Layers, title: 'Channel Letters', desc: 'Illuminated dimensional lettering that makes your storefront unmissable day and night.' },
  { icon: Truck, title: 'Vehicle Wraps', desc: 'Turn your fleet into mobile billboards with full and partial vehicle wraps.' },
  { icon: Lightbulb, title: 'LED & Digital', desc: 'Dynamic electronic message centers and energy-efficient LED displays.' },
  { icon: Flag, title: 'Banners & Displays', desc: 'Event banners, retractable displays, and temporary promotional signage.' },
  { icon: PanelTop, title: 'Window Graphics', desc: 'Frosted vinyl, perforated film, and full-color window displays.' },
  { icon: Landmark, title: 'Monument Signs', desc: 'Commanding ground-level signs that establish your presence with permanence.' },
  { icon: Accessibility, title: 'ADA & Wayfinding', desc: 'Code-compliant ADA signage and intuitive wayfinding systems.' },
  { icon: Printer, title: 'Large Format', desc: 'Wall murals, trade show graphics, and oversized prints that captivate.' },
];

const projects = [
  { src: '/images/projects/channel-letters-1.png', title: 'Downtown Phoenix Retail', category: 'Channel Letters' },
  { src: '/images/projects/vehicle-wrap-1.png', title: 'Southwest Electric Fleet', category: 'Vehicle Wraps' },
  { src: '/images/projects/led-sign-1.png', title: 'Scottsdale Auto Dealership', category: 'LED Signs' },
  { src: '/images/projects/monument-sign-1.png', title: 'Desert Ridge Business Park', category: 'Monument Signs' },
];

const values = [
  { icon: Layers, title: 'Custom Design', desc: 'Every sign is tailored to your brand identity, location, and goals. No cookie-cutter templates.' },
  { icon: Shield, title: 'Expert Installation', desc: 'Licensed, insured crews with 12+ years of field experience. Guaranteed quality.' },
  { icon: Award, title: 'Premium Materials', desc: 'Industry-leading substrates, inks, and LED modules for signs built to last the Arizona sun.' },
  { icon: Clock, title: 'Fast Turnaround', desc: 'Rush options available. We meet your deadlines without compromising craftsmanship.' },
];

const clients = [
  'Home Depot', 'Chick-fil-A', 'RE/MAX', 'Marriott',
  'Circle K', 'AutoZone', 'Panda Express', 'Firehouse Subs',
];

const testimonials = [
  {
    quote: 'NN Signs transformed our storefront completely. The channel letters they designed are stunning at night, and we saw a 40% increase in foot traffic within the first month.',
    name: 'Marcus Delgado',
    title: 'Owner, Delgado Family Restaurant',
  },
  {
    quote: 'Their vehicle wraps are incredible. Our entire fleet looks professional and consistent. The quality has held up perfectly through two Arizona summers.',
    name: 'Rachel Simmons',
    title: 'Marketing Director, Valley HVAC Pros',
  },
  {
    quote: 'From design to installation, the team was professional, communicative, and delivered ahead of schedule. They\'re our go-to for all signage needs.',
    name: 'David Kowalski',
    title: 'Facilities Manager, Desert Ridge Plaza',
  },
];

/* ─── Page ─── */

export default function HomePage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/heroes/hero-storefront.png"
            alt="Phoenix storefronts illuminated with custom channel letter signs at twilight"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-walnut/95 via-walnut/80 to-walnut/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-walnut/60 via-transparent to-walnut/30" />
        </div>

        <div className="relative z-10 container-narrow w-full pt-32 pb-24">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-gold" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-gold">
                Phoenix&apos;s Premier Sign Company &mdash; Est. 2014
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-ivory mb-8"
            >
              Crafting Signs
              <br />
              That <span className="text-gold italic">Command</span>
              <br />
              Attention
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg md:text-xl text-ivory/70 leading-relaxed max-w-xl mb-10 font-body"
            >
              Custom signage solutions that elevate your brand visibility and drive
              foot traffic for businesses across the Phoenix Valley.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-walnut font-heading font-semibold rounded tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/25 group"
              >
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ivory/30 text-ivory font-heading font-medium rounded tracking-wide hover:border-gold hover:text-gold transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-heading tracking-[0.2em] uppercase text-ivory/40">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-gold/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════ STATS BAR ══════ */}
      <section className="bg-espresso relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-walnut/30 via-transparent to-walnut/30" />
        <div className="container-narrow relative z-10 py-14 md:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
                <stat.icon className="w-6 h-6 text-gold/70 mx-auto mb-3" />
                <div className="font-display text-3xl md:text-4xl font-bold text-gold tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-heading tracking-[0.15em] uppercase text-ivory/50 mt-2">
                  {stat.label}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ ABOUT PREVIEW ══════ */}
      <section className="section-padding bg-ivory">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl shadow-bark/20">
                  <Image
                    src="/images/heroes/hero-workshop.png"
                    alt="NN Signs production workshop in Phoenix"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                {/* Accent Frame */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-lg -z-10" />
                {/* Experience Badge */}
                <div className="absolute -bottom-6 -left-4 md:left-6 bg-walnut text-ivory px-6 py-4 rounded shadow-xl">
                  <div className="font-display text-3xl font-bold text-gold">12+</div>
                  <div className="text-xs font-heading tracking-wider uppercase text-ivory/60">
                    Years of<br />Excellence
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="gold-line" />
                <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                  About Our Company
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                Phoenix&apos;s Trusted Sign
                <br />
                Partner Since <span className="text-gold">2014</span>
              </h2>
              <p className="text-brown-text leading-relaxed mb-6">
                Founded by Darren Shaughnessy, NN Signs & Graphics has grown from a
                one-man operation into Phoenix&apos;s most trusted full-service sign shop.
                We combine old-school craftsmanship with cutting-edge technology to
                deliver signage that doesn&apos;t just meet expectations &mdash; it exceeds them.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                From channel letters and vehicle wraps to monument signs and ADA
                wayfinding, every project gets the same meticulous attention to detail
                that has earned us 1,500+ loyal clients across the Valley.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-bark hover:text-gold transition-colors group"
              >
                Learn Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ SERVICES GRID ══════ */}
      <section className="section-padding bg-linen">
        <div className="container-narrow">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="gold-line" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                What We Do
              </span>
              <span className="gold-line" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4">
              Our <span className="text-gold italic">Expertise</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              Comprehensive signage solutions for every business need. From concept
              to installation, we handle it all in-house.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <Link
                  href="/services"
                  className="group block bg-ivory rounded-lg p-6 border border-nude/60 hover:border-gold/40 hover:shadow-xl hover:shadow-bark/10 transition-all duration-500 h-full cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-cream flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-bark group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-semibold text-charcoal mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.desc}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-bark text-bark font-heading font-semibold rounded hover:bg-bark hover:text-ivory transition-all duration-300 group"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ FEATURED PROJECTS ══════ */}
      <section className="section-padding bg-ivory">
        <div className="container-narrow">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="gold-line" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                Our Work
              </span>
              <span className="gold-line" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4">
              Featured <span className="text-gold italic">Projects</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              A glimpse into the quality and craftsmanship that defines every
              NN Signs project.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <Link
                  href="/portfolio"
                  className="group block relative aspect-[16/10] rounded-lg overflow-hidden cursor-pointer"
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-walnut/90 via-walnut/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs font-heading tracking-[0.15em] uppercase text-gold mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-heading font-semibold text-lg text-ivory group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-bark text-ivory font-heading font-semibold rounded hover:bg-walnut transition-all duration-300 group"
            >
              View Full Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ WHY CHOOSE US ══════ */}
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
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="w-8 h-px bg-gold/40" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-gold/70">
                The NN Difference
              </span>
              <span className="w-8 h-px bg-gold/40" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory leading-tight mb-4">
              Why Businesses <span className="text-gold italic">Choose Us</span>
            </h2>
            <p className="text-ivory/50 max-w-2xl mx-auto leading-relaxed">
              We don&apos;t just make signs &mdash; we build brand experiences that drive real results.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto rounded-full bg-ivory/5 border border-ivory/10 flex items-center justify-center mb-6 group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-500">
                    <value.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-ivory mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-ivory/50 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CLIENT LOGOS ══════ */}
      <section className="py-16 bg-cream overflow-hidden">
        <div className="container-narrow mb-10">
          <ScrollReveal className="text-center">
            <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
              Trusted by Leading Brands
            </span>
          </ScrollReveal>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10" />
          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex-shrink-0 mx-10 flex items-center"
              >
                <span className="text-xl md:text-2xl font-heading font-bold text-bark/30 whitespace-nowrap tracking-wide">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="section-padding bg-linen">
        <div className="container-narrow">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 justify-center">
              <span className="gold-line" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                Client Stories
              </span>
              <span className="gold-line" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              What Our Clients <span className="text-gold italic">Say</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.12}>
                <div className="bg-ivory rounded-lg p-8 border border-nude/60 h-full flex flex-col shadow-sm">
                  <Quote className="w-8 h-8 text-gold/40 mb-4 shrink-0" />
                  <p className="text-brown-text leading-relaxed mb-6 flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-nude/60 pt-5">
                    <div className="font-heading font-semibold text-charcoal text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted mt-0.5">{t.title}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="section-padding bg-espresso relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-walnut via-espresso to-walnut" />
        {/* Gold accent lines */}
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
              Ready to Make
              <br />
              Your <span className="text-gold italic">Mark</span>?
            </h2>
            <p className="text-ivory/50 max-w-xl mx-auto leading-relaxed mb-10 text-lg">
              Get a free consultation and quote for your next signage project.
              From design to installation, we make it effortless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold text-walnut font-heading font-semibold rounded tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/25 animate-pulse-gold group"
              >
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:6027148350"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-ivory/20 text-ivory font-heading font-medium rounded tracking-wide hover:border-gold hover:text-gold transition-all duration-300"
              >
                Call (602) 714-8350
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

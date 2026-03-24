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
  Phone,
  MessageSquare,
  Pencil,
  Factory,
  Wrench,
  CheckCircle2,
} from 'lucide-react';

/* ─── Data ─── */

const serviceCards = [
  {
    icon: Layers,
    title: 'Channel Letters',
    desc: 'Illuminated dimensional lettering for storefronts and buildings.',
    anchor: '#channel-letters',
  },
  {
    icon: Truck,
    title: 'Vehicle Wraps',
    desc: 'Full and partial wraps that turn vehicles into mobile billboards.',
    anchor: '#vehicle-wraps',
  },
  {
    icon: Lightbulb,
    title: 'LED & Digital Signs',
    desc: 'Dynamic electronic displays and energy-efficient LED signage.',
    anchor: '#led-signs',
  },
  {
    icon: Flag,
    title: 'Banners & Displays',
    desc: 'Retractable banners, mesh banners, and promotional displays.',
    anchor: '#banners-more',
  },
  {
    icon: PanelTop,
    title: 'Window Graphics',
    desc: 'Frosted vinyl, perforated film, and full-color window wraps.',
    anchor: '#banners-more',
  },
  {
    icon: Landmark,
    title: 'Monument Signs',
    desc: 'Commanding ground-level signs that anchor your brand presence.',
    anchor: '#monument-signs',
  },
  {
    icon: Accessibility,
    title: 'ADA & Wayfinding',
    desc: 'Code-compliant ADA signage and interior wayfinding systems.',
    anchor: '#monument-signs',
  },
  {
    icon: Printer,
    title: 'Large Format Print',
    desc: 'Wall murals, trade show graphics, and oversized prints.',
    anchor: '#banners-more',
  },
];

const channelLetterBullets = [
  'Front-lit channel letters with LED illumination',
  'Back-lit (halo) letters for elegant, ambient glow',
  'Open-face neon channel letters for retro appeal',
  'Reverse channel letters with sophisticated silhouette lighting',
];

const vehicleWrapBullets = [
  'Full vehicle wraps for maximum brand coverage',
  'Partial wraps for targeted, cost-effective branding',
  'Fleet graphics with consistent brand identity across vehicles',
  'Color change wraps for a fresh look without repainting',
];

const ledSignBullets = [
  'Electronic message centers with programmable content',
  'LED channel letters for energy-efficient illumination',
  'Digital menu boards for restaurants and quick-service',
  'Cabinet signs with internal LED for bright, even lighting',
];

const bannerBullets = [
  'Retractable banners for trade shows and events',
  'Mesh banners for outdoor, wind-resistant displays',
  'Frosted vinyl for privacy with natural light',
  'Full-color window wraps for maximum storefront impact',
];

const monumentBullets = [
  'Illuminated monument signs with LED or halo lighting',
  'Pylon and pole signs for highway and road visibility',
  'ADA-compliant signage meeting all federal and local codes',
  'Interior wayfinding systems for offices, hospitals, and campuses',
];

const processSteps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consult',
    desc: 'We start with a free consultation to understand your brand, goals, location, and budget. Every great sign begins with a great conversation.',
  },
  {
    number: '02',
    icon: Pencil,
    title: 'Design',
    desc: 'Our design team creates detailed mockups and renderings so you can see exactly how your sign will look before production begins.',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Produce',
    desc: 'Your sign is fabricated in our Phoenix workshop using premium materials, industry-leading LED modules, and meticulous quality control.',
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Install',
    desc: 'Our licensed, insured installation crews handle everything from permits to final placement. We leave your site clean and your sign perfect.',
  },
];

/* ─── Page ─── */

export default function ServicesPage() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* BG Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/heroes/hero-workshop.png"
            alt="NN Signs workshop with channel letters and fabrication equipment"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/80 to-espresso/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-espresso/40" />
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
                Our Services
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-ivory mb-8"
            >
              Complete Signage
              <br />
              <span className="text-gold italic">Solutions</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg md:text-xl text-ivory/70 leading-relaxed max-w-xl mb-10 font-body"
            >
              From channel letters and vehicle wraps to monument signs and LED
              displays &mdash; we&apos;re a full-service sign shop that handles
              everything from concept to installation, all under one roof.
            </motion.p>

            {/* CTA */}
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
              <a
                href="tel:6027148350"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ivory/30 text-ivory font-heading font-medium rounded tracking-wide hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call (602) 714-8350
              </a>
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
            Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-gold/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════ SERVICES OVERVIEW ══════ */}
      <section className="section-padding bg-ivory">
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
              Full-Service <span className="text-gold italic">Signage</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              NN Signs &amp; Graphics offers comprehensive signage solutions for
              businesses across the Phoenix Valley. Every project is designed,
              fabricated, and installed by our in-house team &mdash; giving you a
              single point of contact from start to finish.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <a
                  href={service.anchor}
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
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CHANNEL LETTER SIGNS ══════ */}
      <section id="channel-letters" className="section-padding bg-linen scroll-mt-24">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl shadow-bark/20">
                  <Image
                    src="/images/projects/channel-letters-1.png"
                    alt="Custom illuminated channel letter signs installed on a Phoenix storefront"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-lg -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="gold-line" />
                <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                  Channel Letters
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                Dimensional Lettering That
                <br />
                <span className="text-gold italic">Demands Attention</span>
              </h2>
              <p className="text-brown-text leading-relaxed mb-4">
                Channel letters are the gold standard for business signage.
                These individually fabricated, three-dimensional letters are
                mounted directly to your building facade or raceway, creating a
                bold, professional presence that&apos;s visible from the street
                day and night.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                We offer multiple illumination styles to match your brand
                aesthetic and local signage codes. Every set of channel letters
                is custom-designed using your exact brand fonts, colors, and
                proportions &mdash; then fabricated with aircraft-grade aluminum
                and energy-efficient LEDs built to last 100,000+ hours.
              </p>
              <ul className="space-y-3 mb-8">
                {channelLetterBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-brown-text text-sm leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-bark hover:text-gold transition-colors group"
              >
                Get a Channel Letter Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ VEHICLE WRAPS ══════ */}
      <section id="vehicle-wraps" className="section-padding bg-ivory scroll-mt-24">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="gold-line" />
                <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                  Vehicle Wraps
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                Mobile Advertising That
                <br />
                <span className="text-gold italic">Works 24/7</span>
              </h2>
              <p className="text-brown-text leading-relaxed mb-4">
                A single vehicle wrap generates between 30,000 and 70,000
                impressions per day, making it one of the most cost-effective
                advertising investments a business can make. Our wraps are
                printed on premium 3M and Avery cast vinyl with a protective
                laminate that resists the brutal Arizona sun.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Whether you need a single service van or an entire fleet wrapped
                with consistent branding, our design and installation teams
                ensure a flawless result every time. We handle everything from
                measurements and design to print and install &mdash; and every
                wrap comes with our craftsmanship guarantee.
              </p>
              <ul className="space-y-3 mb-8">
                {vehicleWrapBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-brown-text text-sm leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-bark hover:text-gold transition-colors group"
              >
                Get a Vehicle Wrap Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl shadow-bark/20">
                  <Image
                    src="/images/projects/vehicle-wrap-1.png"
                    alt="Professional full vehicle wrap on a commercial fleet van"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-gold/30 rounded-lg -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ LED & DIGITAL SIGNS ══════ */}
      <section id="led-signs" className="section-padding bg-linen scroll-mt-24">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl shadow-bark/20">
                  <Image
                    src="/images/projects/led-sign-1.png"
                    alt="LED electronic message center sign displaying dynamic content"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-lg -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="gold-line" />
                <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                  LED &amp; Digital Signs
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                Dynamic Displays for a
                <br />
                <span className="text-gold italic">Digital World</span>
              </h2>
              <p className="text-brown-text leading-relaxed mb-4">
                LED and digital signage gives you the power to update your
                messaging in real time &mdash; promoting daily specials,
                upcoming events, or time-sensitive offers without printing a
                single new sign. These high-brightness displays are designed to
                be readable in direct Arizona sunlight.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                We supply and install electronic message centers from leading
                manufacturers like Watchfire and Daktronics, paired with
                intuitive cloud-based software that lets you manage content from
                your phone. We also handle all permitting and electrical
                coordination, so you don&apos;t have to.
              </p>
              <ul className="space-y-3 mb-8">
                {ledSignBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-brown-text text-sm leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-bark hover:text-gold transition-colors group"
              >
                Get an LED Sign Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ BANNERS, WINDOW GRAPHICS & MORE ══════ */}
      <section id="banners-more" className="section-padding bg-ivory scroll-mt-24">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="gold-line" />
                <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                  Banners, Window Graphics &amp; More
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                Versatile Graphics for
                <br />
                <span className="text-gold italic">Every Surface</span>
              </h2>
              <p className="text-brown-text leading-relaxed mb-4">
                Not every sign needs to be permanent. Our banners, window
                graphics, and display solutions give you flexible branding
                options for storefronts, events, trade shows, and seasonal
                promotions. We print on a wide variety of substrates including
                vinyl, mesh, fabric, and perforated film.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Window graphics are one of the most underutilized advertising
                surfaces in retail. We create everything from subtle frosted
                privacy film to eye-catching full-color window wraps that
                transform your storefront into a billboard &mdash; all while
                maintaining visibility and natural light from the inside.
              </p>
              <ul className="space-y-3 mb-8">
                {bannerBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-brown-text text-sm leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-bark hover:text-gold transition-colors group"
              >
                Get a Banner or Graphics Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl shadow-bark/20">
                  <Image
                    src="/images/projects/banner-1.png"
                    alt="Large format vinyl banner and window graphics installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-gold/30 rounded-lg -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ MONUMENT & SPECIALTY SIGNS ══════ */}
      <section id="monument-signs" className="section-padding bg-linen scroll-mt-24">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl shadow-bark/20">
                  <Image
                    src="/images/projects/monument-sign-1.png"
                    alt="Illuminated monument sign at a Phoenix business park entrance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-lg -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="gold-line" />
                <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-caramel">
                  Monument &amp; Specialty Signs
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                Permanent Landmarks for
                <br />
                <span className="text-gold italic">Your Brand</span>
              </h2>
              <p className="text-brown-text leading-relaxed mb-4">
                Monument signs are the cornerstone of commercial identity. These
                ground-level structures create a commanding first impression at
                building entrances, office parks, and retail centers. We design
                and build monument signs from stone, brick, stucco, aluminum,
                and composite materials to complement your architecture.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Beyond monuments, we specialize in pylon and pole signs for
                highway visibility, ADA-compliant signage that meets all federal
                and local codes, and comprehensive wayfinding systems that guide
                visitors through your facility. Every project includes full
                permitting, engineering stamps, and professional installation.
              </p>
              <ul className="space-y-3 mb-8">
                {monumentBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-brown-text text-sm leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-bark hover:text-gold transition-colors group"
              >
                Get a Monument Sign Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ OUR PROCESS ══════ */}
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
                How We Work
              </span>
              <span className="w-8 h-px bg-gold/40" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory leading-tight mb-4">
              Our <span className="text-gold italic">Process</span>
            </h2>
            <p className="text-ivory/50 max-w-2xl mx-auto leading-relaxed">
              Every sign project follows a proven four-step process designed
              to deliver exceptional results on time and on budget.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20" />

            {processSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.12}>
                <div className="text-center group relative">
                  {/* Number circle */}
                  <div className="relative mx-auto mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-ivory/5 border-2 border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all duration-500">
                      <span className="font-display text-2xl font-bold text-gold">
                        {step.number}
                      </span>
                    </div>
                    {/* Icon badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-walnut border-2 border-gold/40 flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-gold" />
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-ivory mb-3 mt-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ivory/50 leading-relaxed">
                    {step.desc}
                  </p>
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
              Let&apos;s Build Something
              <br />
              <span className="text-gold italic">Remarkable</span>
            </h2>
            <p className="text-ivory/50 max-w-xl mx-auto leading-relaxed mb-10 text-lg">
              Whether you need a single storefront sign or a complete fleet
              wrap, our team is ready to bring your vision to life. Get a free
              consultation and quote today.
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

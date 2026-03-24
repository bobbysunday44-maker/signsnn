import type { Metadata } from 'next';
import { Playfair_Display, Outfit, DM_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'NN Signs & Graphics | Premium Custom Signage in Phoenix, AZ',
    template: '%s | NN Signs & Graphics',
  },
  description:
    'Phoenix\'s premier custom sign company since 2014. Channel letters, vehicle wraps, LED signs, monument signs, banners & more. Free estimates. Call (602) 714-8350.',
  keywords: [
    'custom signs Phoenix',
    'sign company Phoenix AZ',
    'channel letter signs',
    'vehicle wraps Phoenix',
    'LED signs',
    'monument signs',
    'business signage',
    'NN Signs',
  ],
  openGraph: {
    title: 'NN Signs & Graphics | Premium Custom Signage in Phoenix, AZ',
    description:
      'Crafting premium signage solutions for Phoenix businesses since 2014.',
    url: 'https://signsnn.com',
    siteName: 'NN Signs & Graphics',
    locale: 'en_US',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://signsnn.com',
  name: 'NN Signs & Graphics',
  description:
    'Premium custom signage company in Phoenix, AZ. Channel letters, vehicle wraps, LED signs, monument signs, banners & more since 2014.',
  url: 'https://signsnn.com',
  telephone: '+16027148350',
  email: 'info@signsnn.com',
  foundingDate: '2014',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4827 E McDowell Rd, Suite 104',
    addressLocality: 'Phoenix',
    addressRegion: 'AZ',
    postalCode: '85008',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.4656,
    longitude: -111.9686,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  priceRange: '$$',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 33.4484, longitude: -112.074 },
    geoRadius: '80000',
  },
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sign Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Channel Letter Signs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vehicle Wraps' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LED & Digital Signs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monument Signs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Banners & Displays' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Window Graphics' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ADA & Wayfinding Signs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Large Format Printing' } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} ${dmSans.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

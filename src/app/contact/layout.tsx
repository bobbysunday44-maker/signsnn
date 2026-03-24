import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get a free quote for custom signage in Phoenix, AZ. Call (602) 714-8350 or visit us at 4827 E McDowell Rd, Suite 104. Mon-Fri 7AM-5PM, Sat 9AM-1PM.',
  openGraph: {
    title: 'Contact Us | NN Signs & Graphics',
    description:
      'Get a free quote for custom signage in Phoenix. Call (602) 714-8350 or request a quote online.',
    url: 'https://signsnn.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

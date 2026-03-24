import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Sign Services',
  description:
    'Full-service custom signage in Phoenix, AZ. Channel letters, vehicle wraps, LED signs, banners, monument signs, window graphics, ADA wayfinding & large format printing. Free estimates.',
  openGraph: {
    title: 'Custom Sign Services | NN Signs & Graphics',
    description:
      'Full-service custom signage in Phoenix. Channel letters, vehicle wraps, LED signs, monument signs & more.',
    url: 'https://signsnn.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

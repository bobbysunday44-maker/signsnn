import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Browse 200+ completed sign projects across Phoenix. Channel letters, vehicle wraps, LED signs, monument signs & more. See the quality that defines NN Signs & Graphics.',
  openGraph: {
    title: 'Portfolio | NN Signs & Graphics',
    description:
      'Browse 200+ completed sign projects across Phoenix. See the quality that defines NN Signs.',
    url: 'https://signsnn.com/portfolio',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

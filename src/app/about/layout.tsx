import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'NN Signs & Graphics — Phoenix\'s trusted sign company since 2014. Founded by Darren Shaughnessy. Meet our team, see our story, and learn why 1,500+ clients trust us.',
  openGraph: {
    title: 'About Us | NN Signs & Graphics',
    description:
      'Phoenix\'s trusted sign company since 2014. Meet our team and learn why 1,500+ clients trust us.',
    url: 'https://signsnn.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

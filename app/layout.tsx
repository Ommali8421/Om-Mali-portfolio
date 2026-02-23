import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Om Babaso Mali | Portfolio',
    template: 'Om Babaso Mali | %s',
  },
  description:
    'Om Babaso Mali is a Computer Science undergraduate and aspiring developer building practical systems and web applications.',
  keywords: [
    'om babaso mali',
    'om mali',
    'computer science student',
    'web developer portfolio',
    'walchand college of engineering',
    'cs undergraduate portfolio',
    'vscode-portfolio',
  ],
  openGraph: {
    title: "Om Babaso Mali's Portfolio",
    description:
      'Computer Science undergraduate building practical systems and web applications.',
    images: ['https://imgur.com/4zi5KkQ.png'],
    url: 'https://vscode-portfolio.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

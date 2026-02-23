export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Stocks Trading System',
    description:
      'A C++ trading system using inheritance, polymorphism, and encapsulation to manage accounts, portfolios, and stock transactions securely.',
    logo: '/logos/css_icon.svg',
    link: 'https://github.com/Ommali8421',
    slug: 'stocks-trading-system',
  },
  {
    title: 'Battery Swap System',
    description:
      'A full-stack web application for EV battery swap appointments with role-based secure login, station management, and a MySQL backend.',
    logo: '/logos/html_icon.svg',
    link: 'https://github.com/Ommali8421',
    slug: 'battery-swap-system',
  },
  {
    title: 'Anomalyse',
    description:
      'A fraud detection platform with a FastAPI backend and MySQL schema for real-time transaction logging and anomaly tracking.',
    logo: '/logos/js_icon.svg',
    link: 'https://github.com/Ommali8421',
    slug: 'anomalyse',
  },
];

import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Samuel Hinteregger 🦅",
  description: "Medizinstudent · Entrepreneur · Athlete",
  keywords: "Samuel Hinteregger, Medizinstudent, Entrepreneur, Athlete, HYROX, Wasserski, Wien",
  authors: [{ name: "Samuel Hinteregger" }],
  creator: "Samuel Hinteregger",
  publisher: "Samuel Hinteregger",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Samuel Hinteregger",
    description: "Medizinstudent · Entrepreneur · Athlete",
    url: "https://samassistent.github.io/samuel-hinteregger",
    siteName: "Samuel Hinteregger",
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Hinteregger",
    description: "Medizinstudent · Entrepreneur · Athlete",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const displayFont = localFont({
  src: "./fonts/cormorant-garamond-latin.woff2",
  variable: "--font-display",
  weight: "400 700",
  display: "swap",
});

const bodyFont = localFont({
  src: "./fonts/plus-jakarta-sans-latin.woff2",
  variable: "--font-body",
  weight: "300 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grazielle Berizonzi Advocacia | Muriaé, MG",
  description:
    "Grazielle Berizonzi Advocacia em Muriaé, MG. Orientação jurídica individualizada em Direito de Família, Civil, Consumidor, Penal, Trabalho e correspondência jurídica.",
  keywords: [
    "Grazielle Berizonzi Advocacia",
    "Grazielle Gonçalves Berizonzi",
    "advogada em Muriaé",
    "advocacia em Muriaé MG",
    "direito de família",
    "direito civil e contratos",
    "direito do consumidor",
    "direito penal",
    "direito do trabalho",
    "correspondência jurídica em Muriaé",
  ],
  openGraph: {
    title: "Grazielle Berizonzi Advocacia | Muriaé, MG",
    description:
      "Atuação jurídica individualizada em Muriaé e região, com orientação clara e acompanhamento próximo.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={
        bodyFont.variable + " " + displayFont.variable + " scroll-smooth"
      }
    >
      <body className="min-h-screen overflow-x-clip bg-paper font-sans text-ink antialiased selection:bg-accent-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}

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
  title: "Gabriela Santana | Advocacia Previdenciária em Itajubá",
  description:
    "Advocacia previdenciária em Itajubá, MG, com atenção especial à aposentadoria das professoras, planejamento previdenciário e benefícios.",
  keywords: [
    "Gabriela Santana",
    "advocacia previdenciária em Itajubá",
    "advogada previdenciária",
    "aposentadoria de professora",
    "planejamento previdenciário",
    "pensão por morte",
    "benefícios previdenciários",
    "advogada em Itajubá",
  ],
  openGraph: {
    title: "Gabriela Santana | Advocacia Previdenciária",
    description:
      "Orientação previdenciária em Itajubá, com atenção à trajetória de trabalho de cada pessoa.",
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
      <body className="min-h-screen overflow-x-clip bg-paper font-sans text-ink antialiased selection:bg-gold-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}

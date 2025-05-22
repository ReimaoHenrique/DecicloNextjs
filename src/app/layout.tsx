import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://deciclo.vercel.app"), // Substitua pela URL real do seu site
  title: {
    default: "Deciclo - Inteligência Ambiental para um Futuro Sustentável",
    template: "%s | Deciclo",
  },
  description:
    "Simplificando, facilitando e otimizando processos de reciclagem para um mundo mais sustentável.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://deciclo.vercel.app", // Substitua pela URL real do seu site
    siteName: "Deciclo",
    images: [
      {
        url: "/Deciclo_verde.png",
        width: 1200,
        height: 630,
        alt: "Deciclo Inteligência Ambiental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@deciclo", // Substitua pelo seu handle do Twitter, se tiver
    creator: "@deciclo", // Substitua pelo seu handle do Twitter, se tiver
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

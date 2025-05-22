import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bio Composto - Acelerador de Compostagem | Deciclo",
  description:
    "BIO COMPOSTO: produto biológico formulado com microrganismos eficientes e nutrientes naturais para otimizar e acelerar o processo de compostagem.",
  openGraph: {
    title: "Bio Composto - Acelerador de Compostagem | Deciclo",
    description:
      "BIO COMPOSTO: produto biológico formulado com microrganismos eficientes e nutrientes naturais para otimizar e acelerar o processo de compostagem.",
    images: [
      {
        url: "/Bio_composto.jpeg",
        width: 1200,
        height: 630,
        alt: "Bio Composto - Deciclo Inteligência Ambiental",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bio Composto - Acelerador de Compostagem | Deciclo",
    description:
      "BIO COMPOSTO: produto biológico formulado com microrganismos eficientes para otimizar a compostagem.",
    images: ["/Bio_composto.jpeg"],
  },
};

export default function BioCompostoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

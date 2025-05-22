import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Bio Controle - Aumento da Produtividade no Plantio e no Solo | Deciclo",
  description:
    "BIOCONTROLE: solução biotecnológica avançada para aumentar a produtividade agrícola de forma sustentável, promovendo o equilíbrio e a vitalidade do solo.",
  openGraph: {
    title:
      "Bio Controle - Aumento da Produtividade no Plantio e no Solo | Deciclo",
    description:
      "BIOCONTROLE: solução biotecnológica avançada para aumentar a produtividade agrícola de forma sustentável, promovendo o equilíbrio e a vitalidade do solo.",
    images: [
      {
        url: "/Bio_controle.jpeg",
        width: 1200,
        height: 630,
        alt: "Bio Controle - Deciclo Inteligência Ambiental",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bio Controle - Aumento da Produtividade no Plantio e no Solo | Deciclo",
    description:
      "BIOCONTROLE: solução biotecnológica avançada para aumentar a produtividade agrícola de forma sustentável.",
    images: ["/Bio_controle.jpeg"],
  },
};

export default function BioControleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

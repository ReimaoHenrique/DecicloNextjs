import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://deciclo.vercel.app"),
  title: {
    default: "Deciclo - Soluções Sustentáveis em Gestão de Resíduos",
    template: "%s | Deciclo",
  },
  description:
    "A Deciclo oferece soluções sustentáveis em gestão de resíduos, transformando resíduos orgânicos em produtos de valor agregado através de tecnologias inovadoras.",
  keywords: [
    "gestão de resíduos",
    "sustentabilidade",
    "compostagem",
    "biogás",
    "energia renovável",
    "economia circular",
  ],
  authors: [{ name: "Henrique Reimão" }],
  creator: "Henrique Reimão",
  publisher: "Deciclo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://deciclo.vercel.app",
    siteName: "Deciclo",
    title: "Deciclo - Soluções Sustentáveis em Gestão de Resíduos",
    description:
      "Transformando resíduos em soluções sustentáveis através de tecnologias inovadoras.",
    images: [
      {
        url: "/Deciclo_verde.png",
        width: 1200,
        height: 630,
        alt: "Deciclo - Soluções Sustentáveis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deciclo - Soluções Sustentáveis em Gestão de Resíduos",
    description:
      "Transformando resíduos em soluções sustentáveis através de tecnologias inovadoras.",
    images: ["/Deciclo_verde.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Adicione aqui as verificações do Google Search Console e outros serviços
    // google: 'seu-código-de-verificação',
  },
};

"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function ProjetosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Produtos
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça alguns dos nossos casos de sucesso em sustentabilidade e
            gestão ambiental
          </p>
        </div>
      </section>

      {/* Projetos Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bio Controle */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Link href="/produtos/bio-controle">
                <div className="h-56 relative">
                  <img
                    src="/Bio_controle.jpeg"
                    alt="Bio Controle"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Bio Controle
                </h3>
                <p className="text-gray-600 mb-4">
                  Soluções naturais e sustentáveis para controle de pragas e
                  doenças em cultivos, utilizando agentes biológicos que
                  preservam o meio ambiente e garantem alimentos mais saudáveis.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Agricultura
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Sustentável
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    Controle Natural
                  </span>
                </div>
                <Link
                  href="/produtos/bio-controle"
                  className="text-blue-600 hover:underline"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>

            {/* Bio Composto */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Link href="/produtos/bio-composto">
                <div className="h-56 relative overflow-hidden">
                  <img
                    src="/Bio_composto.jpeg"
                    alt="Bio Composto"
                    className="absolute top-0 left-0 -translate-y-[26%]"
                  />
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Bio Composto
                </h3>
                <p className="text-gray-600 mb-4">
                  Produção de compostos orgânicos de alta qualidade a partir de
                  resíduos agrícolas e urbanos, transformando matéria orgânica
                  em fertilizante natural rico em nutrientes.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                    Compostagem
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Fertilizante Natural
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Reciclagem
                  </span>
                </div>
                <Link
                  href="/produtos/bio-composto"
                  className="text-blue-600 hover:underline"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Tem interesse em um dos nossos produtos?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Nossa equipe está à disposição para tirar dúvidas e oferecer as
            melhores soluções para atender às necessidades da sua empresa. Entre
            em contato conosco!
          </p>
          <Link
            href="/contato"
            className="inline-block bg-gradient-to-r from-green-600 to-blue-500 text-white font-medium py-3 px-8 rounded-md hover:opacity-90 transition-opacity"
          >
            Entre em Contato
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-500 text-white py-20 relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Inteligência Ambiental para um Futuro Sustentável
              </h1>
              <p className="text-xl mb-8">
                Simplificando, facilitando e otimizando processos de reciclagem
                para um mundo mais sustentável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/servicos"
                  className="bg-white text-green-600 font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-opacity text-center"
                >
                  Nossos Serviços
                </Link>
                <Link
                  href="/contato"
                  className="border-2 border-white text-white font-medium py-3 px-6 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors text-center"
                >
                  Entre em Contato
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md h-80 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl font-bold mb-2">Deciclo</div>
                  <div className="text-xl">Inteligência Ambiental</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nossos Serviços
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Serviço 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-40 bg-green-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Gestão de Resíduos
                </h3>
                <p className="text-gray-600">
                  Soluções completas para gestão de resíduos sólidos urbanos e
                  industriais, com foco em sustentabilidade e economia circular.
                </p>
                <Link
                  href="/servicos"
                  className="mt-4 inline-block text-green-600 hover:underline"
                >
                  Saiba mais
                </Link>
              </div>
            </div>

            {/* Serviço 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-40 bg-blue-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Consultoria Ambiental
                </h3>
                <p className="text-gray-600">
                  Assessoria especializada em conformidade ambiental,
                  licenciamento e desenvolvimento de projetos sustentáveis.
                </p>
                <Link
                  href="/servicos"
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  Saiba mais
                </Link>
              </div>
            </div>

            {/* Serviço 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-40 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Produtos Ecológicos
                </h3>
                <p className="text-gray-600">
                  Linha de produtos de limpeza e higiene produzidos com
                  processos sustentáveis e embalagens recicláveis.
                </p>
                <Link
                  href="/produtos"
                  className="mt-4 inline-block text-indigo-600 hover:underline"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Sobre a Deciclo
              </h2>
              <p className="text-gray-600 mb-6">
                A Deciclo Inteligência Ambiental nasceu da visão de transformar
                a gestão de resíduos em uma oportunidade para criar um futuro
                mais sustentável. Nossa missão é simplificar, facilitar e
                otimizar processos de reciclagem, gerando mais qualidade de
                vida, oportunidades de emprego e negócios bem-sucedidos.
              </p>
              <p className="text-gray-600 mb-6">
                Com uma equipe multidisciplinar de especialistas em meio
                ambiente, engenharia e gestão, oferecemos soluções completas que
                unem eficiência econômica e responsabilidade ambiental.
              </p>
              <Link
                href="/sobre"
                className="inline-block bg-gradient-to-r from-green-600 to-blue-500 text-white font-medium py-3 px-6 rounded-md hover:opacity-90 transition-opacity"
              >
                Conheça Nossa História
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-3xl font-bold mb-2 text-gray-800">
                    Nossa Visão
                  </div>
                  <div className="text-gray-600">
                    Ser referência em soluções ambientais inovadoras,
                    contribuindo para um mundo mais sustentável e consciente.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para transformar sua gestão ambiental?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar
            sua empresa a ser mais sustentável e economicamente eficiente.
          </p>
          <Link
            href="/contato"
            className="inline-block bg-white text-green-600 font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-opacity"
          >
            Fale Conosco
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

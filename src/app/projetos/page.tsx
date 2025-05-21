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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Projetos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça alguns dos nossos casos de sucesso em sustentabilidade e gestão ambiental
          </p>
        </div>
      </section>
      
      {/* Projetos Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projeto 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-56 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Gestão de Resíduos Industriais</h3>
                <p className="text-gray-600 mb-4">
                  Implementação de um sistema completo de gestão de resíduos para uma indústria de manufatura, reduzindo o descarte em aterros em 85% e gerando economia de custos.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Indústria</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Reciclagem</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Economia Circular</span>
                </div>
                <Link href="#" className="text-blue-600 hover:underline">
                  Ver detalhes
                </Link>
              </div>
            </div>
            
            {/* Projeto 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-56 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Programa de Energia Renovável</h3>
                <p className="text-gray-600 mb-4">
                  Desenvolvimento e implementação de um programa de energia solar para uma rede de supermercados, reduzindo a pegada de carbono e os custos operacionais.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Energia Solar</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Varejo</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Eficiência Energética</span>
                </div>
                <Link href="#" className="text-blue-600 hover:underline">
                  Ver detalhes
                </Link>
              </div>
            </div>
            
            {/* Projeto 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-56 bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Recuperação de Área Degradada</h3>
                <p className="text-gray-600 mb-4">
                  Projeto de recuperação ambiental de uma área degradada por atividades de mineração, com reflorestamento e reintrodução de espécies nativas.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Reflorestamento</span>
                  <span className="bg-brown-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Mineração</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Biodiversidade</span>
                </div>
                <Link href="#" className="text-blue-600 hover:underline">
                  Ver detalhes
                </Link>
              </div>
            </div>
            
            {/* Projeto 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-56 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Programa de Educação Ambiental</h3>
                <p className="text-gray-600 mb-4">
                  Desenvolvimento e implementação de um programa de educação ambiental para escolas públicas, alcançando mais de 5.000 alunos e promovendo a conscientização sobre reciclagem.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Educação</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Conscientização</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Comunidade</span>
                </div>
                <Link href="#" className="text-blue-600 hover:underline">
                  Ver detalhes
                </Link>
              </div>
            </div>
            
            {/* Projeto 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-56 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Eficiência Hídrica Industrial</h3>
                <p className="text-gray-600 mb-4">
                  Implementação de um sistema de reúso de água em uma indústria têxtil, reduzindo o consumo de água em 60% e os custos operacionais em 40%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Recursos Hídricos</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Indústria Têxtil</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Eficiência</span>
                </div>
                <Link href="#" className="text-blue-600 hover:underline">
                  Ver detalhes
                </Link>
              </div>
            </div>
            
            {/* Projeto 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-56 bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Certificação Ambiental</h3>
                <p className="text-gray-600 mb-4">
                  Consultoria para obtenção de certificação ISO 14001 para uma rede de hotéis, implementando práticas sustentáveis em todas as unidades.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Certificação</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Hotelaria</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Gestão Ambiental</span>
                </div>
                <Link href="#" className="text-blue-600 hover:underline">
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
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Quer desenvolver um projeto sustentável?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Nossa equipe está pronta para ajudar sua empresa a implementar soluções ambientais inovadoras e eficientes.
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

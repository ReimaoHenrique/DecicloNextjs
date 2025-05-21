"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nós</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça a história, missão e valores da Deciclo Inteligência Ambiental
          </p>
        </div>
      </section>
      
      {/* Nossa História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Nossa História</h2>
            <p className="text-gray-600 mb-6">
              A Deciclo Inteligência Ambiental nasceu da visão de transformar a gestão de resíduos em uma oportunidade para criar um futuro mais sustentável. Fundada por especialistas em meio ambiente e engenharia, nossa empresa surgiu da necessidade de oferecer soluções integradas que unem eficiência econômica e responsabilidade ambiental.
            </p>
            <p className="text-gray-600 mb-6">
              Desde o início, nosso foco tem sido simplificar, facilitar e otimizar processos de reciclagem, contribuindo para a preservação do meio ambiente e para a geração de valor econômico a partir de materiais que seriam descartados.
            </p>
            <p className="text-gray-600 mb-6">
              Ao longo dos anos, expandimos nossa atuação para incluir consultoria ambiental, desenvolvimento de produtos ecológicos e implementação de programas de educação ambiental, sempre com o compromisso de promover a sustentabilidade em todas as suas dimensões.
            </p>
          </div>
        </div>
      </section>
      
      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Missão, Visão e Valores</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Missão */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Missão</h3>
                <p className="text-gray-600 text-center">
                  Simplificar, facilitar e otimizar processos de reciclagem, gerando mais qualidade de vida, oportunidades de emprego e negócios bem-sucedidos, através da preservação do meio ambiente.
                </p>
              </div>
              
              {/* Visão */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Visão</h3>
                <p className="text-gray-600 text-center">
                  Ser referência em soluções ambientais inovadoras, contribuindo para um mundo mais sustentável e consciente, onde os resíduos são vistos como recursos valiosos.
                </p>
              </div>
              
              {/* Valores */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Valores</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Sustentabilidade em todas as ações
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Inovação e melhoria contínua
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Transparência e ética
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Responsabilidade social
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Compromisso com resultados
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nossa Equipe */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Nossa Equipe</h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-600 text-center mb-12">
              Contamos com uma equipe multidisciplinar de especialistas em meio ambiente, engenharia, gestão e educação, unidos pelo propósito de transformar a relação da sociedade com os resíduos e promover um futuro mais sustentável.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Membro 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Diretor de Sustentabilidade</h3>
                  <p className="text-gray-600">
                    Especialista em gestão ambiental com mais de 15 anos de experiência em projetos de economia circular e reciclagem.
                  </p>
                </div>
              </div>
              
              {/* Membro 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Coordenador de Projetos</h3>
                  <p className="text-gray-600">
                    Engenheiro ambiental com foco em desenvolvimento de soluções inovadoras para gestão de resíduos industriais.
                  </p>
                </div>
              </div>
              
              {/* Membro 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Especialista em Educação Ambiental</h3>
                  <p className="text-gray-600">
                    Educador com experiência em desenvolvimento de programas de conscientização e treinamento em sustentabilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

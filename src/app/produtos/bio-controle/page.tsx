import { Lens } from "../../../components/magicui/lens";
import Link from "next/link";
import Image from "next/image";
import { WhatsappButton } from "../../../components/WhatsappButton/WhatsappButton";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function ProdutosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bio Controle</h1>
          <p className="text-xl md:text-2xl mb-6">
            AUMENTO DA PRODUTIVIDADE NO PLANTIO E NO SOLO
          </p>
        </div>
      </section>

      <main className="bg-white flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="w-full md:w-1/2 max-w-md">
              {" "}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gradient-to-r from-green-600 to-blue-500">
                {" "}
                <Lens lensSize={200} zoomFactor={1.5}>
                  <div className="relative w-full h-[400px] bg-white">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-8">
                      <Image
                        src="/Bio_controle.jpeg"
                        alt="Bio Controle - Aumento da Produtividade no Plantio e no Solo | Deciclo"
                        width={400}
                        height={400}
                        className="object-contain select-none pointer-events-none"
                        priority
                        draggable="false"
                        unoptimized
                      />
                    </div>
                  </div>
                </Lens>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-700">
                  Descrição
                </h3>
                <p className="text-gray-600 mb-4">
                  O <strong>BIOCONTROLE</strong> é uma solução biotecnológica
                  avançada, desenvolvida para aumentar a produtividade agrícola
                  de forma sustentável, promovendo o equilíbrio e a vitalidade
                  do solo. Sua formulação exclusiva combina Trichoderma
                  amyloliquefaciens, Bacillus cereus e fungos do gênero Cereus,
                  micro-organismos naturais que atuam sinergicamente na
                  revitalização da microbiota do solo e no fortalecimento das
                  plantas. Ao utilizar agentes biológicos ao invés de químicos
                  agressivos, o BIOCONTROLE respeita os ciclos naturais e
                  contribui para a saúde do ecossistema agrícola. Sua aplicação
                  reduz a dependência de fertilizantes e defensivos sintéticos,
                  favorecendo uma produção mais limpa, regenerativa e
                  ambientalmente responsável.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>
                    <strong>Conteúdo:</strong> 20 litro
                  </li>
                  <li>
                    <strong>Composição:</strong> Trichoderma amyloliquefaciens,
                    Bacillus cereus e fungos Cereus.
                  </li>
                  <li>
                    <strong>Produzido com processos sustentáveis</strong>
                  </li>
                </ul>
                <div className="bg-gradient-to-r from-green-600/10 to-blue-500/10 text-green-800 px-3 py-1 rounded-full inline-block mb-4">
                  Em estoque
                </div>
                <p className="text-2xl font-bold mb-4 text-gray-900">
                  R$ 999,99
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">
                  Equipe de vendas
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contato"
                    className="bg-gradient-to-r from-green-600 to-blue-500 text-white font-medium py-3 px-6 rounded-md hover:opacity-90 transition-opacity text-center"
                  >
                    Saber Mais
                  </Link>
                  <WhatsappButton
                    phone="554491518915"
                    message="Olá! Gostaria de mais informações sobre o Bio Controle."
                  />
                </div>
              </div>

              <div className="mt-8 text-sm text-gray-500 bg-gradient-to-r from-green-600/5 to-blue-500/5 p-4 rounded-lg">
                <p>
                  <span className="font-semibold">
                    Dica de sustentabilidade:
                  </span>{" "}
                  Evite o uso de agrotóxicos que agridem o solo. Sempre que
                  possível, opte por alternativas biodegradáveis, contribuindo
                  para a preservação do meio ambiente e a saúde do ecossistema.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/" className="text-blue-600 hover:underline">
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

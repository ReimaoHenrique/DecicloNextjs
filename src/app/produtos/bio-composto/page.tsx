"use client";

import { Lens } from "../../../components/magicui/lens";
import Link from "next/link";
import Image from "next/image";
import { WhatsappButton } from "../../../components/WhatsappButton/WhatsappButton";

export default function ProdutosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
          Bio Composto
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="w-full md:w-1/2 max-w-md">
            {" "}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {" "}
              <Lens lensSize={200} zoomFactor={1.5}>
                <div className="relative w-full h-[400px] bg-white">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-8">
                    <Image
                      src="/Bio_composto.jpeg"
                      alt="Bio Composto Deciclo"
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
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Água Sanitária
            </h2>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block mb-4">
              Em estoque
            </div>
            <p className="text-2xl font-bold mb-4 text-gray-900">R$ 5,99</p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                Descrição
              </h3>
              <p className="text-gray-600 mb-4">
                Nossa água sanitária é produzida com os mais altos padrões de
                qualidade, garantindo eficiência na limpeza e desinfecção de
                ambientes. Produto biodegradável e ecologicamente responsável,
                alinhado com nossa missão de preservação ambiental.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Conteúdo: 1 litro</li>
                <li>Composição: Hipoclorito de sódio e água</li>
                <li>Teor de cloro ativo: 2,0% a 2,5% p/p</li>
                <li>Embalagem reciclável</li>
                <li>Produzido com processos sustentáveis</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-green-600 to-blue-500 text-white font-medium py-3 px-6 rounded-md hover:opacity-90 transition-opacity">
                Adicionar ao carrinho
              </button>
              <button className="border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-md hover:bg-gray-50 transition-colors">
                Mais informações
              </button>
            </div>

            <div className="mt-4">
              <WhatsappButton
                phone="5544999999999"
                message="Olá! Gostaria de mais informações sobre o Bio Composto."
              />
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <p>
                <span className="font-semibold">Dica de sustentabilidade:</span>{" "}
                Após o uso, lave a embalagem e destine-a para reciclagem,
                contribuindo para a redução de resíduos plásticos no meio
                ambiente.
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
  );
}

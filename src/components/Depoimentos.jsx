import React from 'react'

const Depoimentos = () => {
  const depoimentos = [
    {
      texto: "Entrega no prazo e peças impecáveis, virou parte da minha rotina.",
      autor: "Cliente Satisfeita"
    },
    {
      texto: "O cheirinho é perfeito e as camisas vêm passadinhas, sem vincos.",
      autor: "Cliente Satisfeito"
    },
    {
      texto: "Agendamento fácil pelo WhatsApp, recomendo!",
      autor: "Cliente Satisfeita"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que nossos <span className="text-primary-600">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de quem confia no nosso serviço
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="flex text-primary-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{depoimento.texto}"
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-600 font-semibold">
                  — {depoimento.autor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Depoimentos


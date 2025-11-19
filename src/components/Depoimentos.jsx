import React from 'react'

const Depoimentos = () => {
  const depoimentos = [
    {
      texto: "Entrega no prazo e peças impecáveis, virou parte da minha rotina.",
      autor: "Maria Silva"
    },
    {
      texto: "O cheirinho é perfeito e as camisas vêm passadinhas, sem vincos.",
      autor: "Carlos Santos"
    },
    {
      texto: "Agendamento fácil pelo WhatsApp, recomendo!",
      autor: "Ana Costa"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
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
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="flex text-primary-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
                  "{depoimento.texto}"
                </p>
              </div>
              <div className="border-t pt-4 mt-6 md:mt-8">
                <p className="text-gray-600 font-semibold text-sm md:text-base">
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


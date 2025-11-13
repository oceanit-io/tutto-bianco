import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      pergunta: "Quais peças vocês atendem?",
      resposta: "Roupas do dia a dia, sociais, cama/mesa/banho e peças volumosas. Itens especiais (como tênis/botas) sob avaliação."
    },
    {
      pergunta: "Tem coleta & entrega em toda João Pessoa?",
      resposta: "Atendemos principalmente regiões próximas às lojas (Manaíra e Tambaú). Consulte seu endereço no WhatsApp."
    },
    {
      pergunta: "Usam lavagem a seco?",
      resposta: "Sim, quando indicada para o tecido/peça. A avaliação técnica define o processo mais seguro."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas <span className="text-primary-600">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-primary-100 rounded-xl mb-4 overflow-hidden hover:border-primary-300 transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.pergunta}
                </span>
                <svg 
                  className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.resposta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ


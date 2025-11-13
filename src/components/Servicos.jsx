import React from 'react'

const Servicos = () => {
  const servicos = [
    {
      title: "Lavagem & Higienização",
      items: [
        "Lavagem a água e a seco (quando indicado pelo tecido)",
        "Remoção de manchas e odores",
        "Higienização de edredons, cobertores, cortinas e peças volumosas",
        "Passadoria profissional",
        "Higienização de calçados (tênis/botas) e itens especiais"
      ]
    }
  ]

  return (
    <section id="servicos" className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-primary-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cuidado profissional para cada tipo de peça
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {servicos.map((servico, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8"
            >
              <h3 className="text-3xl font-bold text-primary-600 mb-6">
                {servico.title}
              </h3>
              <ul className="space-y-4">
                {servico.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicos


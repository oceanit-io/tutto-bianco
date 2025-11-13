import React from 'react'

const PropostaValor = () => {
  const pilares = [
    {
      icon: "⏰",
      title: "Tempo para você",
      description: "A gente busca, lava, passa e devolve do jeitinho que você gosta."
    },
    {
      icon: "✨",
      title: "Cuidado peça a peça",
      description: "Tratamento adequado para cada tecido e nível de sujidade."
    },
    {
      icon: "📱",
      title: "Conveniência total",
      description: "Agendamento por WhatsApp e duas unidades para facilitar sua rotina."
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cuidado que você vê,{' '}
            <span className="text-primary-600">praticidade que você sente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Do tecido à passadoria, cada detalhe importa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pilares.map((pilar, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100"
            >
              <div className="text-5xl mb-4">{pilar.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {pilar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pilar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PropostaValor


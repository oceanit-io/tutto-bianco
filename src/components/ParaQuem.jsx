import React from 'react'

const ParaQuem = () => {
  const categorias = [
    {
      icon: "🏠",
      titulo: "Residencial",
      descricao: "Rotina corrida, família grande, viagem marcada."
    },
    {
      icon: "🏢",
      titulo: "Comercial",
      descricao: "Pousadas, clínicas, consultórios, estética (sob consulta)."
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Para <span className="text-primary-600">Quem É</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções de lavanderia para todos os perfis
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {categorias.map((categoria, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-6 text-center">{categoria.icon}</div>
              <h3 className="text-3xl font-bold text-primary-600 mb-4 text-center">
                {categoria.titulo}
              </h3>
              <p className="text-gray-600 text-lg text-center leading-relaxed">
                {categoria.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ParaQuem


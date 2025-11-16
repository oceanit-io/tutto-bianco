import React from 'react'

const ParaQuem = () => {
  const categorias = [
    {
      icon: (
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      titulo: "Residencial",
      descricao: "Rotina corrida, família grande, viagem marcada."
    },
    {
      icon: (
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
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
              <div className="text-primary-600 mb-6 flex justify-center">{categoria.icon}</div>
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


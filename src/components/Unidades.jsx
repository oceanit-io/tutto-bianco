import React from 'react'

const Unidades = () => {
  const unidades = [
    {
      nome: "Manaíra",
      endereco: "Av. Gen. Edson Ramalho, 1037 — Manaíra",
      telefone: "(83) 3268-0277",
      tipo: "Loja"
    },
    {
      nome: "Tambaú",
      endereco: "Av. Infante Dom Henrique, 777 — Tambaú",
      telefone: "(83) 3247-4743",
      tipo: "Loja"
    }
  ]

  const horario = {
    semana: "Seg–Sex: 08h–18h",
    sabado: "Sáb: 08h–14h",
    domingo: "Dom: fechado"
  }

  const whatsappLink = "https://wa.me/558332680277?text=Olá!%20Gostaria%20de%20agendar%20uma%20coleta."

  return (
    <section id="unidades" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossas <span className="text-primary-600">Unidades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Coleta & entrega em Manaíra e Tambaú
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {unidades.map((unidade, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary-600">
                    {unidade.nome}
                  </h3>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {unidade.tipo}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-700">{unidade.endereco}</p>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${unidade.telefone.replace(/\s/g, '')}`} className="text-primary-600 hover:text-primary-700 font-semibold">
                      {unidade.telefone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-600 rounded-2xl shadow-xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Horário de Funcionamento</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-semibold text-lg">{horario.semana}</p>
              </div>
              <div>
                <p className="font-semibold text-lg">{horario.sabado}</p>
              </div>
              <div>
                <p className="font-semibold text-lg">{horario.domingo}</p>
              </div>
            </div>
            <p className="text-center mt-4 text-primary-100 text-sm">
              (Confirme em feriados/datas especiais)
            </p>
          </div>

          <div className="text-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              📱 Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Unidades


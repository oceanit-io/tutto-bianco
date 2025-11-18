import React, { useState } from 'react'

const Servicos = () => {
  const servicos = [
    {
      title: "Lavagem & Higienização",
      items: [
        "Lavagem a água e a seco (quando indicado pelo tecido)",
        "Remoção de manchas e odores",
        "Higienização de edredons, cobertores, cortinas e peças volumosas",
        "Passadoria profissional",
      ]
    },
    {
      title: "Roupas Especiais",
      items: [
        "Ternos e vestidos de festa",
        "Roupas sociais e formais",
        "Peças delicadas e de alta qualidade",
        "Tratamento especializado para cada tipo de tecido"
      ]
    },
    {
      title: "Cama, Mesa e Banho",
      items: [
        "Roupas de cama, mesa e banho",
        "Edredons e cobertores",
        "Toalhas e lençóis",
        "Higienização completa e passadoria"
      ]
    },
    {
      title: "Decoração e Têxteis",
      items: [
        "Cortinas e tapetes",
        "Peças volumosas",
        "Limpeza especializada",
        "Preservação de cores e fibras"
      ]
    },
    {
      title: "Itens Especiais",
      items: [
        "Roupas e enxoval de bebê",
        "Bichos de pelúcia",
        "Higienização delicada e segura",
        "Produtos hipoalergênicos"
      ]
    },
    {
      title: "Calçados e Acessórios",
      items: [
        "Sapatos, tênis e bolsas",
        "Limpeza e higienização",
        "Tratamento especializado",
        "Preservação do material original"
      ]
    },
    {
      title: "Materiais Nobres",
      items: [
        "Couro, camurça, pele e nobuck",
        "Tratamento diferenciado por material",
        "Restauração e preservação",
        "Técnicas profissionais especializadas"
      ]
    },
    {
      title: "Tingimento",
      items: [
        "Tingimento profissional",
        "Restauração de cores",
        "Uniformização de tons",
        "Técnicas modernas e seguras"
      ]
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + servicos.length) % servicos.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % servicos.length)
  }

  const getVisibleCards = () => {
    const cards = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + servicos.length) % servicos.length
      cards.push({ index, offset: i })
    }
    return cards
  }

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

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Cards Container */}
            <div className="relative flex items-center justify-center gap-0 overflow-visible py-8" style={{ height: 'auto' }}>
              {getVisibleCards().map(({ index, offset }) => {
                const servico = servicos[index]
                const isCenter = offset === 0
                const scale = isCenter ? 1 : 0.75
                const opacity = isCenter ? 1 : 0.5
                const zIndex = isCenter ? 10 : 5 - Math.abs(offset)

                return (
                  <div
                    key={`${index}-${currentIndex}`}
                    className={`flex-shrink-0 transition-all duration-700 ease-in-out cursor-pointer ${
                      isCenter ? 'w-full max-w-[600px]' : 'w-[180px] md:w-[220px]'
                    }`}
                    style={{
                      transform: `scale(${scale})`,
                      opacity: opacity,
                      zIndex: zIndex,
                      order: offset === -1 ? 1 : offset === 1 ? 3 : 2
                    }}
                    onClick={() => !isCenter && goToSlide(index)}
                  >
                    <div className={`bg-white rounded-2xl shadow-xl ${isCenter ? 'p-6 md:p-8 lg:p-12' : 'p-4 md:p-5'}`}>
                      <h3 className={`font-bold text-primary-600 mb-3 md:mb-4 ${isCenter ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
                        {servico.title}
                      </h3>
                      <ul className="space-y-2 md:space-y-3">
                        {servico.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <svg className={`text-primary-600 mr-2 mt-1 flex-shrink-0 ${isCenter ? 'w-5 h-5 md:w-6 md:h-6' : 'w-4 h-4 md:w-5 md:h-5'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className={`text-gray-700 ${isCenter ? 'text-sm md:text-base' : 'text-xs md:text-sm line-clamp-2'}`}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Navegação - Setas */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
              aria-label="Serviço anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
              aria-label="Próximo serviço"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-8">
              {servicos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-primary-600'
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para serviço ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicos


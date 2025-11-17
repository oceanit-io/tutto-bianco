import React, { useState, useRef } from 'react'

const QuemSomos = () => {
  const videos = [
    {
      src: '/apresentacao-principal.mp4',
      title: 'Apresentação Principal',
      description: 'Conheça a Tutto Bianco'
    },
    {
      src: '/apresentacao-principal-2.mp4',
      title: 'Nossa História',
      description: 'Tradição e excelência'
    },
    {
      src: '/apresentacao-3.mp4',
      title: 'Nossos Valores',
      description: 'Qualidade em cada detalhe'
    },
    {
      src: '/video-vou-usar.mp4',
      title: 'Nossos Serviços',
      description: 'Cuidado profissional'
    }
  ]

  const [hoveredVideo, setHoveredVideo] = useState(null)
  const videoRefs = useRef({})

  const handleMouseEnter = (index) => {
    setHoveredVideo(index)
    const video = videoRefs.current[index]
    if (video) {
      video.play().catch(err => console.log('Erro ao reproduzir vídeo:', err))
    }
  }

  const handleMouseLeave = (index) => {
    setHoveredVideo(null)
    const video = videoRefs.current[index]
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  return (
    <section className="section-padding bg-gradient-to-b from-white via-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quem <span className="text-primary-600">Somos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça a Tutto Bianco: tradição italiana, tecnologia moderna e cuidado especial com cada peça. 
            Nossa paixão é transformar o cuidado com suas roupas em uma experiência única.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl bg-gray-900 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Container do Vídeo */}
                <div className="relative w-full aspect-video">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                  
                  {/* Overlay com gradiente */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                    hoveredVideo === index ? 'opacity-60' : 'opacity-80'
                  }`} />
                  
                  {/* Ícone de Play quando não está em hover */}
                  {hoveredVideo !== index && (
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 transform transition-all duration-300 group-hover:scale-110">
                        <svg 
                          className="w-16 h-16 text-white" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Texto sobreposto */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {video.title}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {video.description}
                    </p>
                  </div>

                  {/* Indicador de hover */}
                  <div className={`absolute top-4 right-4 bg-primary-600/90 backdrop-blur-sm rounded-full px-4 py-2 transition-all duration-300 ${
                    hoveredVideo === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-2'
                  }`}>
                    <p className="text-white text-sm font-semibold flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      Reproduzindo
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Texto adicional */}
          <div className="mt-16 text-center">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-1 bg-primary-600 rounded-full"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Excelência em Cada Detalhe
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Na Tutto Bianco, combinamos a tradição italiana de cuidado têxtil com tecnologia de ponta 
                  e processos sustentáveis. Cada peça recebe atenção individualizada, garantindo resultados 
                  impecáveis que preservam a qualidade e durabilidade dos seus tecidos favoritos.
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Nossa missão é simplificar sua vida, oferecendo praticidade sem abrir mão da qualidade. 
                  Com coleta e entrega em domicílio, você economiza tempo enquanto nós cuidamos do que 
                  realmente importa: suas roupas limpas, macias e cheirosas.
                </p>
              </div>
            </div>
          </div>

          {/* Seção Antes e Depois */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Antes e <span className="text-primary-600">Depois</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Veja a transformação que fazemos em cada peça com nosso cuidado profissional
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {[
                {
                  video: '/tapete.mp4',
                  title: 'Tapete',
                  description: 'Nossos tapetes recebem tratamento especializado que remove manchas profundas, odores e sujeiras acumuladas. Utilizamos técnicas profissionais de limpeza a seco e lavagem que preservam as fibras e cores originais, devolvendo a maciez e o brilho que seu tapete merece.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )
                },
                {
                  video: '/calca.mp4',
                  title: 'Calça',
                  description: 'Calças de todos os tipos recebem atenção especial na Tutto Bianco. Removemos manchas difíceis, restaurando a cor e o caimento original. Nossa passadoria profissional garante vincos perfeitos e acabamento impecável, deixando suas calças como novas.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )
                },
                {
                  video: '/camisa.mp4',
                  title: 'Camisa',
                  description: 'Camisas sociais e casuais são tratadas com o máximo cuidado. Removemos manchas de suor, comida e outras marcas, preservando o tecido e as cores. Nossa passadoria especializada garante golas e punhos impecáveis, deixando sua camisa pronta para qualquer ocasião.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                },
                {
                  video: '/jaqueta.mp4',
                  title: 'Jaqueta',
                  description: 'Jaquetas e casacos recebem tratamento diferenciado conforme o material. Seja couro, jeans, algodão ou tecidos sintéticos, utilizamos produtos e técnicas específicas para cada tipo. Removemos manchas, restauramos a cor e garantimos que sua jaqueta fique limpa, macia e com cheiro fresco.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="grid md:grid-cols-2 gap-0 md:items-stretch">
                    {/* Vídeo à Esquerda */}
                    <div className="relative w-full aspect-video md:aspect-auto  md:h-[500px] min-h-[200px] bg-gray-900 flex items-center justify-center">
                      <video
                        src={item.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-contain"
                        preload="auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Conteúdo à Direita */}
                    <div className="flex flex-col p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white">
                      <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                        <div className="bg-primary-100 text-primary-600 rounded-xl p-2 flex-shrink-0">
                          {item.icon}
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed flex-grow">
                        {item.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-200 flex-shrink-0">
                        <div className="flex items-center gap-2 text-primary-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span className="font-semibold">Resultado garantido</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuemSomos


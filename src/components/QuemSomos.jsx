import React, { useState, useRef, useEffect } from 'react'

const QuemSomos = () => {
  const videos = [
    {
      src: '/apresentacao-principal.mp4',
      title: 'Apresentação Principal',
      description: 'Conheça a Tutto Bianco: tradição italiana, tecnologia moderna e cuidado especial com cada peça. Nossa paixão é transformar o cuidado com suas roupas em uma experiência única.'
    },
    {
      src: '/apresentacao-principal-2.mp4',
      title: 'Cuidado e Conforto',
      description: 'A Tutto Bianco une a tradição italiana de excelência em cuidados têxteis com tecnologia de ponta e processos sustentáveis. Cada peça recebe atenção individualizada.'
    },
    {
      src: '/apresentacao-3.mp4',
      title: 'Nossos Serviços',
      description: 'Oferecemos serviços completos de lavagem, higienização e passadoria profissional. Cuidado especializado para cada tipo de peça, desde roupas do dia a dia até itens especiais.'
    },
    {
      src: '/video-vou-usar.mp4',
      title: 'Cada Detalhe Importa',
      description: 'Contamos com os melhores equipamentos e produtos para garantir resultados impecáveis. Qualidade em cada detalhe, preservando a durabilidade e o aspecto original dos seus tecidos favoritos.'
    }
  ]

  const [currentVideo, setCurrentVideo] = useState(0)
  const videoRefs = useRef({})

  useEffect(() => {
    // Pausar todos os vídeos exceto o atual
    videos.forEach((_, index) => {
      const video = videoRefs.current[index]
      if (video) {
        if (index === currentVideo) {
          video.play().catch(err => console.log('Erro ao reproduzir vídeo:', err))
        } else {
          video.pause()
          video.currentTime = 0
        }
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVideo])

  const goToVideo = (index) => {
    setCurrentVideo(index)
  }

  const goToPrevious = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const goToNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length)
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
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentVideo * 100}%)`
              }}
            >
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="min-w-full w-full flex-shrink-0"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Vídeo à Esquerda */}
                    <div className="relative w-full aspect-video md:aspect-auto md:h-[500px] bg-gray-900">
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={video.src}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        preload="auto"
                        autoPlay={index === currentVideo}
                      />
                    </div>

                    {/* Texto à Direita */}
                    <div className="flex flex-col justify-center p-8 md:p-12 bg-gradient-to-br from-gray-50 to-white md:h-[500px]">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {video.title}
                          </h3>
                          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            {video.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navegação - Setas */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
              aria-label="Vídeo anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
              aria-label="Próximo vídeo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToVideo(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentVideo
                      ? 'w-8 bg-primary-600'
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para vídeo ${index + 1}`}
                />
              ))}
            </div>
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  video: '/tapete.mp4',
                  title: 'Tapete',
                  description: 'Nossos tapetes recebem tratamento especializado que remove manchas profundas, odores e sujeiras acumuladas. Utilizamos técnicas profissionais de limpeza a seco e lavagem que preservam as fibras e cores originais, devolvendo a maciez e o brilho que seu tapete merece.'
                },
                {
                  video: '/calca.mp4',
                  title: 'Calça',
                  description: 'Calças de todos os tipos recebem atenção especial na Tutto Bianco. Removemos manchas difíceis, restaurando a cor e o caimento original. Nossa passadoria profissional garante vincos perfeitos e acabamento impecável, deixando suas calças como novas.'
                },
                {
                  video: '/camisa.mp4',
                  title: 'Camisa',
                  description: 'Camisas sociais e casuais são tratadas com o máximo cuidado. Removemos manchas de suor, comida e outras marcas, preservando o tecido e as cores. Nossa passadoria especializada garante golas e punhos impecáveis, deixando sua camisa pronta para qualquer ocasião.'
                },
                {
                  video: '/jaqueta.mp4',
                  title: 'Jaqueta',
                  description: 'Jaquetas e casacos recebem tratamento diferenciado conforme o material. Seja couro, jeans, algodão ou tecidos sintéticos, utilizamos produtos e técnicas específicas para cada tipo. Removemos manchas, restauramos a cor e garantimos que sua jaqueta fique limpa, macia e com cheiro fresco.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-xl bg-gray-900 cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  {/* Vídeo */}
                  <div className="relative w-full aspect-[9/16] min-h-[400px] md:min-h-[500px]">
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      preload="auto"
                    />
                    
                    {/* Overlay com gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/70 group-hover:to-black/40" />
                    
                    {/* Título sempre visível */}
                    <div className="absolute top-4 left-4 right-4 z-10">
                      <h4 className="text-xl md:text-2xl font-bold text-white">
                        {item.title}
                      </h4>
                    </div>

                    {/* Descrição no hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 z-10">
                      <p className="text-sm md:text-base text-white leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-primary-400">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className="font-semibold text-xs md:text-sm">Resultado garantido</span>
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


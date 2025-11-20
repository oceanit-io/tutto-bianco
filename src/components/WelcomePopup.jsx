import React, { useState, useEffect } from 'react'

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostra o popup após um pequeno delay para melhor UX
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isVisible) {
      // Fecha automaticamente após 10 segundos
      const autoCloseTimer = setTimeout(() => {
        handleClose()
      }, 10000)

      return () => clearTimeout(autoCloseTimer)
    }
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleConhecerMais = () => {
    handleClose()
    // Scroll suave para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) {
    return null
  }






  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden animate-slideUp">
        {/* Imagem de fundo */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src="/mãe-3.png"
            alt="Tutto Bianco - Lavanderia"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-800/60 to-transparent" />
          
          {/* Logo/Título sobre a imagem */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Bem-vindo à <span className="text-primary-300">Tutto Bianco</span>
            </h2>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-6 md:p-8">
          <div className="space-y-4 mb-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Somos uma lavanderia situada em <strong className="text-primary-600">João Pessoa</strong>, 
              especializada em cuidados profissionais com suas roupas e peças especiais.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Com tradição italiana, tecnologia moderna e muito carinho, transformamos o cuidado 
              com suas peças em uma experiência única. Desde roupas do dia a dia até itens 
              especiais, cada peça recebe atenção individualizada.
            </p>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleConhecerMais}
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Conhecer mais
            </button>
            <button
              onClick={handleClose}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              Fechar
            </button>
          </div>

          {/* Indicador de fechamento automático */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              Este popup fecha automaticamente em alguns segundos
            </p>
          </div>
        </div>

        {/* Botão de fechar no canto superior direito */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-20"
          aria-label="Fechar popup"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default WelcomePopup


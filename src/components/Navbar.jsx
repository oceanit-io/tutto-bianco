import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappLink = "https://wa.me/558332680277?text=Olá!%20Gostaria%20de%20agendar%20uma%20coleta."

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo-orange.jpg" 
              alt="Tutto Bianco" 
              className="h-10 w-auto"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            <span className="text-xl font-bold text-primary-600">Tutto Bianco</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#servicos" className="text-gray-700 hover:text-primary-600 transition">Serviços</a>
            <a href="#como-funciona" className="text-gray-700 hover:text-primary-600 transition">Como Funciona</a>
            <a href="#unidades" className="text-gray-700 hover:text-primary-600 transition">Unidades</a>
            <a href="#faq" className="text-gray-700 hover:text-primary-600 transition">FAQ</a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Pedir Coleta
            </a>
          </div>

          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


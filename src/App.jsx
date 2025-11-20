import React, { useEffect } from 'react'
import AOS from 'aos'
import Hero from './components/Hero'
import PropostaValor from './components/PropostaValor'
import Servicos from './components/Servicos'
import ComoFunciona from './components/ComoFunciona'
import QuemSomos from './components/QuemSomos'
import Unidades from './components/Unidades'
import Depoimentos from './components/Depoimentos'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import WhatsappFloat from './components/WhatsappFloat'
import WelcomePopup from './components/WelcomePopup'

function App() {
  useEffect(() => {
    // Atualizar AOS quando os componentes renderizarem
    AOS.refresh()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <WelcomePopup />
      <Navbar />
      <Hero />
      <PropostaValor />
      <Servicos />
      <ComoFunciona />
      <QuemSomos />
      <Unidades />
      <Depoimentos />
      <FAQ />
      <Footer />
      <WhatsappFloat />
    </div>
  )
}

export default App


import React from 'react'
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

function App() {
  return (
    <div className="min-h-screen bg-white">
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


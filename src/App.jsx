import React from 'react'
import Hero from './components/Hero'
import PropostaValor from './components/PropostaValor'
import Servicos from './components/Servicos'
import ComoFunciona from './components/ComoFunciona'
import ParaQuem from './components/ParaQuem'
import Unidades from './components/Unidades'
import Depoimentos from './components/Depoimentos'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PropostaValor />
      <Servicos />
      <ComoFunciona />
      <ParaQuem />
      <Unidades />
      <Depoimentos />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App


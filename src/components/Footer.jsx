import React from 'react'

const Footer = () => {
  const whatsappLink = "https://wa.me/558332680277?text=Olá!%20Gostaria%20de%20agendar%20uma%20coleta."

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo-white.jpg" 
                alt="Tutto Bianco" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              <span className="text-xl font-bold">Tutto Bianco</span>
            </div>
            <p className="text-gray-400">
              Lavanderia com coleta e entrega em João Pessoa. 
              Suas roupas limpas, macias e cheirosas sem você sair de casa.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-400 hover:text-white transition">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#unidades" className="text-gray-400 hover:text-white transition">
                  Unidades
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Manaíra: (83) 3268-0277</li>
              <li>Tambaú: (83) 3247-4743</li>
            </ul>
            <div className="mt-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                📱 WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tutto Bianco Lavanderias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


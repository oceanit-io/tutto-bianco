import React from 'react'

const ComoFunciona = () => {
  const passos = [
    {
      numero: "1",
      titulo: "Você agenda no WhatsApp",
      descricao: "Informe endereço e melhor horário para a coleta."
    },
    {
      numero: "2",
      titulo: "Coleta em domicílio",
      descricao: "Nossa equipe busca suas roupas no conforto da sua casa."
    },
    {
      numero: "3",
      titulo: "Lavagem e passadoria",
      descricao: "Tratamento profissional conforme o tipo de tecido/peça."
    },
    {
      numero: "4",
      titulo: "Entrega no prazo",
      descricao: "Tudo embalado, cheiroso e pronto para uso."
    }
  ]

  const whatsappLink = "https://wa.me/558332680277?text=Olá!%20Gostaria%20de%20agendar%20uma%20coleta."

  return (
    <section id="como-funciona" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Como <span className="text-primary-600">Funciona</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Do agendamento à entrega: praticidade que economiza seu tempo
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {passos.map((passo, index) => (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {passo.numero}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
                  {passo.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {passo.descricao}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 rounded-2xl p-6 text-center">
            <p className="text-gray-700 mb-4">
              <strong>Nota:</strong> Prazos podem variar conforme volume e tipo de peça (ex.: edredom/tapete). 
              Consulte na hora do agendamento.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Agendar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona

